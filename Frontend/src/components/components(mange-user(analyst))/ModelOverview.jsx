import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Brain, Activity, Zap, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export const ModelOverview = () => {
  const performanceData = [
    { time: '00:00', accuracy: 94.2, precision: 91.8, recall: 96.5 },
    { time: '04:00', accuracy: 94.7, precision: 92.1, recall: 96.8 },
    { time: '08:00', accuracy: 95.1, precision: 92.5, recall: 97.2 },
    { time: '12:00', accuracy: 94.9, precision: 92.3, recall: 97.0 },
    { time: '16:00', accuracy: 95.3, precision: 92.8, recall: 97.4 },
    { time: '20:00', accuracy: 94.6, precision: 92.0, recall: 96.7 },
  ];

  const featureImportance = [
    { feature: 'Transaction Amount', importance: 0.23 },
    { feature: 'Merchant Category', importance: 0.18 },
    { feature: 'Time of Day', importance: 0.15 },
    { feature: 'Location Risk', importance: 0.14 },
    { feature: 'User Behavior', importance: 0.12 },
    { feature: 'Device Fingerprint', importance: 0.10 },
    { feature: 'Payment Method', importance: 0.08 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Model Performance</h2>
          <p className="text-slate-400">Real-time ML model monitoring and insights</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <Activity className="w-3 h-3 mr-1" />
            Active
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            v2.1.3
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="performance" className="data-[state=active]:bg-slate-700">
            <Brain className="w-4 h-4 mr-2" />
            Performance
          </TabsTrigger>
          <TabsTrigger value="features" className="data-[state=active]:bg-slate-700">
            <Target className="w-4 h-4 mr-2" />
            Feature Analysis
          </TabsTrigger>
          <TabsTrigger value="config" className="data-[state=active]:bg-slate-700">
            <Zap className="w-4 h-4 mr-2" />
            Configuration
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Model Metrics Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" domain={[90, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="accuracy" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="precision" stroke="#34D399" strokeWidth={2} />
                  <Line type="monotone" dataKey="recall" stroke="#F59E0B" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Feature Importance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={featureImportance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" stroke="#9CA3AF" />
                  <YAxis dataKey="feature" type="category" stroke="#9CA3AF" width={120} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="importance" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="config" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Model Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Algorithm</span>
                  <span className="text-white">Random Forest</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Training Data</span>
                  <span className="text-white">2.3M samples</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Features</span>
                  <span className="text-white">47 variables</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Last Updated</span>
                  <span className="text-white">2 hours ago</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Thresholds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">High Risk</span>
                  <span className="text-red-400">≥ 0.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Medium Risk</span>
                  <span className="text-yellow-400">0.5 - 0.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Low Risk</span>
                  <span className="text-green-400">0.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Auto-block</span>
                  <span className="text-white">≥ 0.95</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
