import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TransactionInfoCard = () => (
  <Card className="bg-slate-800/80 border-slate-700">
    <CardHeader>
      <CardTitle className="text-white">Transaction Info</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-slate-300">
        <div className="flex justify-between"><span>Amount</span><span className="text-blue-200">876509</span></div>
        <div className="flex justify-between"><span>Date</span><span className="text-blue-200">april.20,2025</span></div>
        <div className="flex justify-between"><span>Merchant</span><span className="text-blue-200">game store</span></div>
        <div className="flex justify-between items-center"><span>Status</span><Badge variant="destructive">Flagged</Badge></div>
      </div>
    </CardContent>
  </Card>
); 