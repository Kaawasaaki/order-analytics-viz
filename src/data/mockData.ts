// Mock data for sales dashboard
export const salesOverTime = [
  { month: 'Jan', sales: 42000, orders: 234 },
  { month: 'Feb', sales: 38000, orders: 198 },
  { month: 'Mar', sales: 52000, orders: 289 },
  { month: 'Apr', sales: 46000, orders: 256 },
  { month: 'May', sales: 58000, orders: 312 },
  { month: 'Jun', sales: 62000, orders: 334 },
  { month: 'Jul', sales: 71000, orders: 398 },
  { month: 'Aug', sales: 68000, orders: 376 },
  { month: 'Sep', sales: 59000, orders: 324 },
  { month: 'Oct', sales: 64000, orders: 356 },
  { month: 'Nov', sales: 78000, orders: 432 },
  { month: 'Dec', sales: 85000, orders: 467 }
];

export const productLineData = [
  { name: 'Classic Cars', value: 35, sales: 234500, color: '#3B82F6' },
  { name: 'Motorcycles', value: 22, sales: 147800, color: '#10B981' },
  { name: 'Planes', value: 18, sales: 120900, color: '#F59E0B' },
  { name: 'Ships', value: 12, sales: 80600, color: '#EF4444' },
  { name: 'Trains', value: 8, sales: 53700, color: '#8B5CF6' },
  { name: 'Trucks and Buses', value: 5, sales: 33600, color: '#EC4899' }
];

export const countryData = [
  { country: 'USA', sales: 185400, orders: 523 },
  { country: 'Spain', sales: 142800, orders: 402 },
  { country: 'France', sales: 126700, orders: 356 },
  { country: 'Australia', sales: 98500, orders: 278 },
  { country: 'Norway', sales: 87300, orders: 245 },
  { country: 'Germany', sales: 76200, orders: 214 },
  { country: 'UK', sales: 69800, orders: 196 },
  { country: 'Italy', sales: 58600, orders: 164 }
];

export const orderStatusData = [
  { name: 'Shipped', value: 45, count: 1234, color: '#10B981' },
  { name: 'Processing', value: 25, count: 687, color: '#F59E0B' },
  { name: 'Delivered', value: 20, count: 549, color: '#3B82F6' },
  { name: 'Cancelled', value: 7, count: 192, color: '#EF4444' },
  { name: 'Pending', value: 3, count: 82, color: '#6B7280' }
];

export const topCustomers = [
  { name: 'Euro Shopping Channel', totalOrders: 26, totalSales: 259680.00, country: 'Spain' },
  { name: 'Mini Gifts Distributors Ltd.', totalOrders: 17, totalSales: 188560.00, country: 'USA' },
  { name: 'Australian Collectables, Ltd', totalOrders: 15, totalSales: 142890.00, country: 'Australia' },
  { name: 'Muscle Machine Inc', totalOrders: 12, totalSales: 138480.00, country: 'USA' },
  { name: 'Dragon Souvenirs Ltd.', totalOrders: 11, totalSales: 104590.00, country: 'Singapore' },
  { name: 'Land of Toys Inc.', totalOrders: 9, totalSales: 96450.00, country: 'USA' },
  { name: 'The Sharp Gifts Warehouse', totalOrders: 8, totalSales: 88200.00, country: 'Canada' },
  { name: 'Handji Gifts& Co', totalOrders: 7, totalSales: 75670.00, country: 'Singapore' }
];

export const kpiData = {
  totalSales: 683700,
  totalOrders: 2744,
  totalCustomers: 92,
  averageOrderValue: 249.23,
  salesGrowth: 12.5,
  orderGrowth: 8.3
};