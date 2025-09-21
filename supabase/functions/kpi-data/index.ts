import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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
      .select('*')

    if (error) throw error

    const totalSales = data.reduce((sum, row) => sum + parseFloat(row.sales), 0)
    const totalOrders = data.length
    const uniqueCustomers = new Set(data.map(row => row.customer_name)).size
    const averageOrderValue = totalSales / totalOrders

    const result = {
      totalSales: Math.round(totalSales),
      totalOrders,
      totalCustomers: uniqueCustomers,
      averageOrderValue: Math.round(averageOrderValue * 100) / 100,
      salesGrowth: 12.5, // Mock growth percentage
      orderGrowth: 8.3   // Mock growth percentage
    }

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