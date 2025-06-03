import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal, MapPin } from "lucide-react";

export const LocationInsightsCard = ({ locationInsights }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Location Insights</CardTitle>
        <MoreHorizontal className="w-5 h-5 text-slate-400" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <span className="text-slate-400 text-sm">Primary Location</span>
          <div className="text-white">{locationInsights.primaryLocation}</div>
        </div>
        <div>
          <span className="text-slate-400 text-sm">Most Transactions From</span>
          <div className="text-white">{locationInsights.mostTransactionsFrom}</div>
        </div>
        
        {/* Map placeholder */}
        <div className="mt-4 bg-slate-700/30 rounded-lg h-32 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20"></div>
          <div className="relative z-10 flex items-center gap-2 text-slate-300">
            <MapPin className="w-5 h-5" />
            <span>Primary Location: {locationInsights.primaryLocation.split(',')[0]}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 