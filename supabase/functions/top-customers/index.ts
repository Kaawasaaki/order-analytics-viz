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
      .select('customer_name, country, sales')

    if (error) throw error

    // Group by customer and calculate totals
    const customerData = data.reduce((acc: any, row: any) => {
      const key = `${row.customer_name}-${row.country}`
      
      if (!acc[key]) {
        acc[key] = { 
          name: row.customer_name, 
          country: row.country, 
          totalSales: 0, 
          totalOrders: 0 
        }
      }
      
      acc[key].totalSales += parseFloat(row.sales)
      acc[key].totalOrders += 1
      
      return acc
    }, {})

    const result = Object.values(customerData)
      .sort((a: any, b: any) => b.totalSales - a.totalSales)
      .slice(0, 8)

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