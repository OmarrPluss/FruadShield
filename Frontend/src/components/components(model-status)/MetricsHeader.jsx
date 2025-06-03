import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export const MetricsHeader = () => {
  const metrics = [
    {
      title: "Fraud Detection Rate",
      value: "94.7%",
      change: "+2.1%",
      trend: "up",
      status: "success"
    },
    {
      title: "False Positives",
      value: "3.2%",
      change: "-0.8%",
      trend: "down",
      status: "success"
    },
    {
      title: "Processing Time",
      value: "23ms",
      change: "+5ms",
      trend: "up",
      status: "warning"
    },
    {
      title: "Daily Volume",
      value: "47.3K",
      change: "+12.4%",
      trend: "up",
      status: "success"
    }
  ];

  const getTrendIcon = (trend) => {
    return trend === "up" ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "success": return "text-green-400";
      case "warning": return "text-yellow-400";
      case "error": return "text-red-400";
      default: return "text-slate-400";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "success": return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "warning": return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case "error": return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/60 transition-colors duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">
              {metric.title}
            </CardTitle>
            <div className="p-1.5 rounded-lg bg-slate-700/50">
              {getStatusIcon(metric.status)}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-1">
              {metric.value}
            </div>
            <div className="flex items-center space-x-1">
              <div className={`flex items-center space-x-1 ${getStatusColor(metric.status)}`}>
                {getTrendIcon(metric.trend)}
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
              <span className="text-xs text-slate-400">vs last period</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
