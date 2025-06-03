import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Server, AlertTriangle, Info, Activity, Cpu, Bell } from "lucide-react";

export const OperationalMetrics = () => {
  return (
    <div className="w-full space-y-6">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-white mb-1">Operational Metrics</h2>
        <p className="text-slate-400">Monitoring the health and status of deployed models and systems.</p>
      </div>
      <Tabs defaultValue="model1" className="w-full">
        <TabsList className="bg-slate-800/50 border-slate-700/50 p-1 rounded-lg gap-x-2 flex mb-4">
          <TabsTrigger value="model1" className="data-[state=active]:bg-slate-700/50 rounded-md px-4 py-2">Model 1 Ops</TabsTrigger>
          <TabsTrigger value="model2" className="data-[state=active]:bg-slate-700/50 rounded-md px-4 py-2">Model 2 Ops</TabsTrigger>
          <TabsTrigger value="model3" className="data-[state=active]:bg-slate-700/50 rounded-md px-4 py-2">Model 3 Ops</TabsTrigger>
          <TabsTrigger value="model4" className="data-[state=active]:bg-slate-700/50 rounded-md px-4 py-2">Model 4 Ops</TabsTrigger>
          <TabsTrigger value="rca" className="data-[state=active]:bg-slate-700/50 rounded-md px-4 py-2">RCA Ops</TabsTrigger>
          <TabsTrigger value="retrainer" className="data-[state=active]:bg-slate-700/50 rounded-md px-4 py-2">Retainer Ops</TabsTrigger>
        </TabsList>
        <TabsContent value="model1">
          <div className="text-slate-300 mb-4 text-sm font-medium">
            Operational Status: Model 1 (SentinelGuard Alpha)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Deployment Status Card */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-200 text-base">
                  <Activity className="w-5 h-5 text-green-400" /> Deployment Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  <span className="text-green-400 font-medium">Status:</span>
                  <span className="text-white">Active & Healthy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Endpoint URL:</span>
                  <span className="text-white">/api/v1/predict/sentinelguard</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Version Deployed:</span>
                  <span className="text-white">1.2.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Last Update:</span>
                  <span className="text-white">2025-05-10 14:30 UTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Uptime (24h):</span>
                  <span className="text-white">99.98%</span>
                </div>
              </CardContent>
            </Card>
            {/* Resource Utilization Card */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-200 text-base">
                  <Cpu className="w-5 h-5 text-blue-400" /> Resource Utilization
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-full text-slate-400">
                {/* Placeholder for resource utilization chart or data */}
                <span className="text-slate-500">--</span>
              </CardContent>
            </Card>
            {/* Active Alerts Card */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-200 text-base">
                  <Bell className="w-5 h-5 text-blue-400" /> Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>10:15 AM</span>
                  <span className="text-yellow-400 font-semibold">WARN</span>
                  <span className="text-slate-300">Prediction latency &gt; 150ms for 5% of requests.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>08:30 AM</span>
                  <span className="text-blue-400 font-semibold">INFO</span>
                  <span className="text-slate-300">Scaled to 3 instances.</span>
                </div>
                <div className="mt-4 text-center text-slate-500 text-xs">No critical alerts.</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        {/* You can add more TabsContent for other models as needed */}
      </Tabs>
    </div>
  );
}; 