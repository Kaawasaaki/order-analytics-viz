import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
  gradient?: string;
}

export const KPICard = ({ 
  title, 
  value, 
  change, 
  trend = "neutral", 
  icon: Icon,
  gradient = "bg-gradient-card"
}: KPICardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-dashboard-success";
      case "down": return "text-dashboard-error";
      default: return "text-dashboard-neutral";
    }
  };

  const getTrendSymbol = () => {
    switch (trend) {
      case "up": return "↗";
      case "down": return "↘";
      default: return "→";
    }
  };

  return (
    <Card className={`${gradient} shadow-card hover:shadow-hover transition-all duration-300 border-0`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {change && (
              <p className={`text-sm ${getTrendColor()} flex items-center gap-1`}>
                <span>{getTrendSymbol()}</span>
                {change}
              </p>
            )}
          </div>
          <div className="bg-primary/10 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};