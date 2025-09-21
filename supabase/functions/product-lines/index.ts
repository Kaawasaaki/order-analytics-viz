import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']

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
      .select('product_line, sales')

    if (error) throw error

    // Group by product line and calculate totals
    const productData = data.reduce((acc: any, row: any) => {
      if (!acc[row.product_line]) {
        acc[row.product_line] = { name: row.product_line, sales: 0 }
      }
      
      acc[row.product_line].sales += parseFloat(row.sales)
      
      return acc
    }, {})

    const totalSales = Object.values(productData)
      .reduce((sum: number, item: any) => sum + item.sales, 0)

    const result = Object.values(productData)
      .map((item: any, index: number) => ({
        ...item,
        value: Math.round((item.sales / totalSales) * 100),
        color: colors[index % colors.length]
      }))
      .sort((a: any, b: any) => b.sales - a.sales)

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