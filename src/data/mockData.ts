// Mock data for sales dashboard (converted to INR at 1 USD = 83 INR)
export const salesOverTime = [
  { month: 'Jan', sales: 3486000, orders: 234 },
  { month: 'Feb', sales: 3154000, orders: 198 },
  { month: 'Mar', sales: 4316000, orders: 289 },
  { month: 'Apr', sales: 3818000, orders: 256 },
  { month: 'May', sales: 4814000, orders: 312 },
  { month: 'Jun', sales: 5146000, orders: 334 },
  { month: 'Jul', sales: 5893000, orders: 398 },
  { month: 'Aug', sales: 5644000, orders: 376 },
  { month: 'Sep', sales: 4897000, orders: 324 },
  { month: 'Oct', sales: 5312000, orders: 356 },
  { month: 'Nov', sales: 6474000, orders: 432 },
  { month: 'Dec', sales: 7055000, orders: 467 }
];

export const productLineData = [
  { name: 'Classic Cars', value: 35, sales: 19463500, color: '#3B82F6' },
  { name: 'Motorcycles', value: 22, sales: 12267400, color: '#10B981' },
  { name: 'Planes', value: 18, sales: 10034700, color: '#F59E0B' },
  { name: 'Ships', value: 12, sales: 6689800, color: '#EF4444' },
  { name: 'Trains', value: 8, sales: 4457100, color: '#8B5CF6' },
  { name: 'Trucks and Buses', value: 5, sales: 2788800, color: '#EC4899' }
];

export const countryData = [
  { country: 'USA', sales: 15388200, orders: 523 },
  { country: 'Spain', sales: 11852400, orders: 402 },
  { country: 'France', sales: 10516100, orders: 356 },
  { country: 'Australia', sales: 8175500, orders: 278 },
  { country: 'Norway', sales: 7245900, orders: 245 },
  { country: 'Germany', sales: 6324600, orders: 214 },
  { country: 'UK', sales: 5793400, orders: 196 },
  { country: 'Italy', sales: 4863800, orders: 164 }
];

export const orderStatusData = [
  { name: 'Shipped', value: 45, count: 1234, color: '#10B981' },
  { name: 'Processing', value: 25, count: 687, color: '#F59E0B' },
  { name: 'Delivered', value: 20, count: 549, color: '#3B82F6' },
  { name: 'Cancelled', value: 7, count: 192, color: '#EF4444' },
  { name: 'Pending', value: 3, count: 82, color: '#6B7280' }
];

export const topCustomers = [
  { name: 'Euro Shopping Channel', totalOrders: 26, totalSales: 21553440.00, country: 'Spain' },
  { name: 'Mini Gifts Distributors Ltd.', totalOrders: 17, totalSales: 15650480.00, country: 'USA' },
  { name: 'Australian Collectables, Ltd', totalOrders: 15, totalSales: 11859870.00, country: 'Australia' },
  { name: 'Muscle Machine Inc', totalOrders: 12, totalSales: 11493840.00, country: 'USA' },
  { name: 'Dragon Souvenirs Ltd.', totalOrders: 11, totalSales: 8680970.00, country: 'Singapore' },
  { name: 'Land of Toys Inc.', totalOrders: 9, totalSales: 8005350.00, country: 'USA' },
  { name: 'The Sharp Gifts Warehouse', totalOrders: 8, totalSales: 7320600.00, country: 'Canada' },
  { name: 'Handji Gifts& Co', totalOrders: 7, totalSales: 6280610.00, country: 'Singapore' }
];

export const kpiData = {
  totalSales: 56747100,
  totalOrders: 2744,
  totalCustomers: 92,
  averageOrderValue: 20686.09,
  salesGrowth: 12.5,
  orderGrowth: 8.3
};