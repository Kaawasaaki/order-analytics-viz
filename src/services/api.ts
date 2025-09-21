const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url';

export const apiService = {
  async getSalesOverTime() {
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/sales-over-time`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching sales over time:', error);
      // Fallback to mock data
      return [
        { month: 'Jan', sales: 3486000, orders: 234 },
        { month: 'Feb', sales: 3154000, orders: 198 },
        { month: 'Mar', sales: 4316000, orders: 289 },
        { month: 'Apr', sales: 3818000, orders: 256 },
        { month: 'May', sales: 4814000, orders: 312 },
        { month: 'Jun', sales: 5146000, orders: 334 }
      ];
    }
  },

  async getSalesByCountry() {
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/sales-by-country`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching sales by country:', error);
      // Fallback to mock data
      return [
        { country: 'USA', sales: 15388200, orders: 523 },
        { country: 'Spain', sales: 11852400, orders: 402 },
        { country: 'France', sales: 10516100, orders: 356 },
        { country: 'Australia', sales: 8175500, orders: 278 }
      ];
    }
  },

  async getProductLines() {
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/product-lines`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching product lines:', error);
      // Fallback to mock data
      return [
        { name: 'Classic Cars', value: 35, sales: 19463500, color: '#3B82F6' },
        { name: 'Motorcycles', value: 22, sales: 12267400, color: '#10B981' },
        { name: 'Planes', value: 18, sales: 10034700, color: '#F59E0B' }
      ];
    }
  },

  async getTopCustomers() {
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/top-customers`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching top customers:', error);
      // Fallback to mock data
      return [
        { name: 'Euro Shopping Channel', totalOrders: 26, totalSales: 21553440.00, country: 'Spain' },
        { name: 'Mini Gifts Distributors Ltd.', totalOrders: 17, totalSales: 15650480.00, country: 'USA' }
      ];
    }
  },

  async getKPIData() {
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/kpi-data`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching KPI data:', error);
      // Fallback to mock data
      return {
        totalSales: 56747100,
        totalOrders: 2744,
        totalCustomers: 92,
        averageOrderValue: 20686.09,
        salesGrowth: 12.5,
        orderGrowth: 8.3
      };
    }
  },

  async getOrderStatus() {
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/order-status`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching order status:', error);
      // Fallback to mock data
      return [
        { name: 'Shipped', value: 45, count: 1234, color: '#10B981' },
        { name: 'Processing', value: 25, count: 687, color: '#F59E0B' },
        { name: 'Delivered', value: 20, count: 549, color: '#3B82F6' }
      ];
    }
  }
};