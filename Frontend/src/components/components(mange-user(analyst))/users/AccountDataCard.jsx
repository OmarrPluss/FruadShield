import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

export const AccountDataCard = ({ accountData }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Account Data</CardTitle>
        <MoreHorizontal className="w-5 h-5 text-slate-400" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <span className="text-slate-400 text-sm">Account Balance</span>
          <div className="text-white text-xl font-bold">{accountData.balance}</div>
        </div>
        <div>
          <span className="text-slate-400 text-sm">Credit Card</span>
          <div className="text-white">{accountData.creditCard}</div>
        </div>
        <div>
          <span className="text-slate-400 text-sm">Login ID</span>
          <div className="text-white">{accountData.loginId}</div>
        </div>
        <div>
          <span className="text-slate-400 text-sm">Last Login</span>
          <div className="text-white">{accountData.lastLogin}</div>
        </div>
        <div>
          <span className="text-slate-400 text-sm">Account Status</span>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-white">{accountData.status}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 