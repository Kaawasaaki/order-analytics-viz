import { useState, useEffect } from 'react';
import { apiService } from '@/services/api';

interface KPIData {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  averageOrderValue: number;
  salesGrowth: number;
  orderGrowth: number;
}

interface DashboardData {
  salesOverTime: any[];
  countryData: any[];
  productLineData: any[];
  topCustomers: any[];
  kpiData: KPIData;
  orderStatusData: any[];
  loading: boolean;
  error: string | null;
}

export const useDashboardData = (): DashboardData => {
  const [data, setData] = useState<DashboardData>({
    salesOverTime: [],
    countryData: [],
    productLineData: [],
    topCustomers: [],  
    kpiData: {
      totalSales: 0,
      totalOrders: 0,
      totalCustomers: 0,
      averageOrderValue: 0,
      salesGrowth: 0,
      orderGrowth: 0
    },
    orderStatusData: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setData(prev => ({ ...prev, loading: true }));
        
        const [
          salesOverTime,
          countryData,
          productLineData,
          topCustomers,
          kpiData,
          orderStatusData
        ] = await Promise.all([
          apiService.getSalesOverTime(),
          apiService.getSalesByCountry(), 
          apiService.getProductLines(),
          apiService.getTopCustomers(),
          apiService.getKPIData(),
          apiService.getOrderStatus()
        ]);

        setData({
          salesOverTime,
          countryData,
          productLineData,
          topCustomers,
          kpiData,
          orderStatusData,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setData(prev => ({ 
          ...prev, 
          loading: false, 
          error: 'Failed to load dashboard data' 
        }));
      }
    };

    fetchAllData();
  }, []);

  return data;
};