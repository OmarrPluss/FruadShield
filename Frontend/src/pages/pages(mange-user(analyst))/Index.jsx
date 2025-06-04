import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  Activity,
  BarChart3,
  Settings,
  User,
  Bell,
  ChevronDown
} from "lucide-react";
import { ModelOverview } from "@/components/ModelOverview";
import { XAIInsights } from "@/components/XAIInsights";
import { OperationalMetrics } from "@/components/OperationalMetrics";
import { Navbar } from "@/components/Navbar";
import { MetricsHeader } from "@/components/MetricsHeader";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <MetricsHeader />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border border-slate-700">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Activity className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="xai"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              XAI
            </TabsTrigger>
            <TabsTrigger 
              value="operational"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Settings className="w-4 h-4 mr-2" />
              Operational
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <ModelOverview />
          </TabsContent>

          <TabsContent value="xai" className="mt-6">
            <XAIInsights />
          </TabsContent>

          <TabsContent value="operational" className="mt-6">
            <OperationalMetrics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;