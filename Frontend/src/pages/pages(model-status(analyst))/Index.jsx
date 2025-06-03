import { Navbar } from "@/components/Navbar";
import { MetricsHeader } from "@/components/MetricsHeader";
import { ModelOverview } from "@/components/ModelOverview";
import { XAIInsights } from "@/components/XAIInsights";
import { OperationalMetrics } from "@/components/OperationalMetrics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <Navbar />
      <main className="container mx-auto px-6 py-8 relative">
        <MetricsHeader />
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-1 rounded-lg">
            <TabsTrigger value="overview" className="data-[state=active]:bg-slate-700/50 rounded-md">
              Overview
            </TabsTrigger>
            <TabsTrigger value="xai" className="data-[state=active]:bg-slate-700/50 rounded-md">
              XAI Insights
            </TabsTrigger>
            <TabsTrigger value="operational" className="data-[state=active]:bg-slate-700/50 rounded-md">
              Operational Metrics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <ModelOverview />
          </TabsContent>

          <TabsContent value="xai">
            <XAIInsights />
          </TabsContent>

          <TabsContent value="operational">
            <OperationalMetrics />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
