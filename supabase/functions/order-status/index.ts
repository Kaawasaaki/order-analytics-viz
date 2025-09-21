import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const statusColors = {
  'Shipped': '#10B981',
  'Processing': '#F59E0B', 
  'Delivered': '#3B82F6',
  'Cancelled': '#EF4444',
  'Pending': '#6B7280'
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { data, error } = await supabase
      .from('sales_data')
      .select('status')

    if (error) throw error

    // Group by status and calculate counts
    const statusData = data.reduce((acc: any, row: any) => {
      if (!acc[row.status]) {
        acc[row.status] = { name: row.status, count: 0 }
      }
      
      acc[row.status].count += 1
      
      return acc
    }, {})

    const totalOrders = data.length

    const result = Object.values(statusData)
      .map((item: any) => ({
        ...item,
        value: Math.round((item.count / totalOrders) * 100),
        color: statusColors[item.name as keyof typeof statusColors] || '#6B7280'
      }))
      .sort((a: any, b: any) => b.count - a.count)

    return new Response(
      JSON.stringify(result),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        }, 
        status: 400 
      },
    )
  }
})