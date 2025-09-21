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

    // Group by month and calculate totals
    const monthlyData = data.reduce((acc: any, row: any) => {
      const date = new Date(row.order_date)
      const month = date.toLocaleDateString('en-US', { month: 'short' })
      
      if (!acc[month]) {
        acc[month] = { month, sales: 0, orders: 0 }
      }
      
      acc[month].sales += parseFloat(row.sales)
      acc[month].orders += 1
      
      return acc
    }, {})

    const result = Object.values(monthlyData)

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