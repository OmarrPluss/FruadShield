import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Clock, Database, Cpu, HardDrive, Wifi, AlertCircle, CheckCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export const OperationalMetrics = () => {
  const systemMetrics = [
    { time: '00:00', cpu: 45, memory: 62, disk: 78, network: 34 },
    { time: '04:00', cpu: 52, memory: 58, disk: 79, network: 41 },
    { time: '08:00', cpu: 68, memory: 71, disk: 80, network: 67 },
    { time: '12:00', cpu: 72, memory: 69, disk: 81, network: 73 },
    { time: '16:00', cpu: 65, memory: 64, disk: 82, network: 58 },
    { time: '20:00', cpu: 48, memory: 61, disk: 83, network: 39 },
  ];

  const services = [
    { name: "Fraud Detection API", status: "online", uptime: "99.9%", responseTime: "23ms" },
    { name: "Data Pipeline", status: "online", uptime: "99.8%", responseTime: "156ms" },
    { name: "ML Model Service", status: "online", uptime: "99.7%", responseTime: "45ms" },
    { name: "Analytics Engine", status: "warning", uptime: "98.2%", responseTime: "289ms" },
    { name: "Notification Service", status: "online", uptime: "99.9%", responseTime: "12ms" },
    { name: "Database Cluster", status: "online", uptime: "99.95%", responseTime: "8ms" }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case "online": return <CheckCircle className="w-4 h-4 text-green-400" />;
      case "warning": return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case "error": return <AlertCircle className="w-4 h-4 text-red-400" />;
      default: return <AlertCircle className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "online": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "warning": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "error": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Operational Metrics</h2>
          <p className="text-slate-400">System performance and service health monitoring</p>
        </div>
        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
          <Server className="w-3 h-3 mr-1" />
          All Systems Operational
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">CPU Usage</CardTitle>
            <Cpu className="w-4 h-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">68%</div>
            <p className="text-xs text-slate-400">+5% from last hour</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">Memory Usage</CardTitle>
            <Database className="w-4 h-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">71%</div>
            <p className="text-xs text-slate-400">-2% from last hour</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">Disk Usage</CardTitle>
            <HardDrive className="w-4 h-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">82%</div>
            <p className="text-xs text-slate-400">+1% from last hour</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">Network I/O</CardTitle>
            <Wifi className="w-4 h-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">58%</div>
            <p className="text-xs text-slate-400">-15% from last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">System Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={systemMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Area type="monotone" dataKey="cpu" stackId="1" stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.3} />
                <Area type="monotone" dataKey="memory" stackId="1" stroke="#34D399" fill="#34D399" fillOpacity={0.3} />
                <Area type="monotone" dataKey="disk" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                <Area type="monotone" dataKey="network" stackId="1" stroke="#A78BFA" fill="#A78BFA" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Service Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(service.status)}
                    <div>
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-slate-400 text-sm">Uptime: {service.uptime}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getStatusColor(service.status)} border text-xs`}>
                      {service.status.toUpperCase()}
                    </Badge>
                    <div className="text-slate-400 text-sm mt-1">{service.responseTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Throughput</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">47.3K</div>
              <div className="text-slate-400">Transactions/hour</div>
              <div className="text-green-400 text-sm mt-1">+12.4% vs last hour</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">0.02%</div>
              <div className="text-slate-400">Error percentage</div>
              <div className="text-green-400 text-sm mt-1">-0.01% vs last hour</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">23ms</div>
              <div className="text-slate-400">Response time</div>
              <div className="text-red-400 text-sm mt-1">+5ms vs last hour</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};