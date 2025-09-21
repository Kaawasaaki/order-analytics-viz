import { KPICard } from "@/components/KPICard";
import { SalesChart } from "@/components/SalesChart";
import { ProductChart } from "@/components/ProductChart";
import { CountryChart } from "@/components/CountryChart";
import { OrderStatusChart } from "@/components/OrderStatusChart";
import { TopCustomersTable } from "@/components/TopCustomersTable";
import { kpiData } from "@/data/mockData";
import { DollarSign, ShoppingCart, Users, TrendingUp, Package, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Sales Data Dashboard</h1>
          <p className="text-muted-foreground">Track your sales performance and key metrics</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <KPICard
            title="Total Sales"
            value={`₹${(kpiData.totalSales / 100000).toFixed(1)}L`}
            change={`+${kpiData.salesGrowth}%`}
            trend="up"
            icon={DollarSign}
            gradient="bg-gradient-primary"
          />
          <KPICard
            title="Total Orders"
            value={kpiData.totalOrders.toLocaleString()}
            change={`+${kpiData.orderGrowth}%`}
            trend="up"
            icon={ShoppingCart}
            gradient="bg-gradient-success"
          />
          <KPICard
            title="Customers"
            value={kpiData.totalCustomers.toString()}
            icon={Users}
            gradient="bg-gradient-warning"
          />
          <KPICard
            title="Avg Order Value"
            value={`₹${(kpiData.averageOrderValue / 1000).toFixed(1)}k`}
            change="+2.1%"
            trend="up"
            icon={TrendingUp}
          />
          <KPICard
            title="Product Lines"
            value="6"
            icon={Package}
          />
          <KPICard
            title="Active Countries"
            value="8"
            icon={BarChart3}
          />
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesChart />
          <ProductChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CountryChart />
          <OrderStatusChart />
        </div>

        {/* Top Customers Table */}
        <TopCustomersTable />
      </div>
    </div>
  );
};

export default Index;
