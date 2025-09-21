import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { topCustomers } from "@/data/mockData";

export const TopCustomersTable = () => {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Top Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground">Customer Name</TableHead>
              <TableHead className="text-muted-foreground">Country</TableHead>
              <TableHead className="text-muted-foreground text-right">Orders</TableHead>
              <TableHead className="text-muted-foreground text-right">Total Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topCustomers.map((customer, index) => (
              <TableRow key={index} className="border-border hover:bg-muted/50">
                <TableCell className="font-medium text-foreground">{customer.name}</TableCell>
                <TableCell className="text-muted-foreground">{customer.country}</TableCell>
                <TableCell className="text-right text-foreground">{customer.totalOrders}</TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  ₹{(customer.totalSales / 100000).toFixed(1)}L
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};