import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const FeedbackDetailsCard = () => (
  <Card className="bg-slate-800/80 border-slate-700">
    <CardHeader>
      <CardTitle className="text-white">Feedback Details</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-slate-300">
        <div className="flex justify-between"><span>Feedback ID</span><span className="text-blue-400">xfgtr67</span></div>
        <div className="flex justify-between"><span>Client</span><span className="text-blue-200">$250</span></div>
        <div className="flex justify-between"><span>Date/Time</span><span className="text-blue-200">January 22,2024</span></div>
        <div className="flex justify-between"><span>Transaction ID</span><span className="text-blue-200">ashjb347</span></div>
      </div>
    </CardContent>
  </Card>
); 