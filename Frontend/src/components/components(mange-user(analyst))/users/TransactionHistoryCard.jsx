import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal, Search, Flag, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export const TransactionHistoryCard = ({ transactions }) => {
  const getTransactionStatusColor = (status) => {
    switch(status) {
      case "approved": return "bg-green-500/20 text-green-400";
      case "flagged": return "bg-red-500/20 text-red-400";
      case "pending": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-slate-500/20 text-slate-400";
    }
  };

  const getTransactionStatusIcon = (status) => {
    switch(status) {
      case "approved": return <CheckCircle className="w-3 h-3" />;
      case "flagged": return <Flag className="w-3 h-3" />;
      case "pending": return <Clock className="w-3 h-3" />;
      default: return <AlertTriangle className="w-3 h-3" />;
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          Transaction History
          <MoreHorizontal className="w-5 h-5 text-slate-400" />
        </CardTitle>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-slate-700/50">
            <TabsTrigger value="all" className="data-[state=active]:bg-slate-600">All Transactions</TabsTrigger>
            <TabsTrigger value="flagged" className="data-[state=active]:bg-slate-600">Flagged (3)</TabsTrigger>
            <TabsTrigger value="recent" className="data-[state=active]:bg-slate-600">Recent (30 days)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-slate-400 font-medium py-3">Date</th>
                    <th className="text-left text-slate-400 font-medium py-3">Amount</th>
                    <th className="text-left text-slate-400 font-medium py-3">Merchant</th>
                    <th className="text-left text-slate-400 font-medium py-3">Location</th>
                    <th className="text-left text-slate-400 font-medium py-3">Status</th>
                    <th className="text-left text-slate-400 font-medium py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                      <td className="py-3 text-white">{transaction.date}</td>
                      <td className="py-3 text-white font-medium">{transaction.amount}</td>
                      <td className="py-3 text-white">{transaction.merchant}</td>
                      <td className="py-3 text-slate-300">{transaction.location}</td>
                      <td className="py-3">
                        <Badge className={`${getTransactionStatusColor(transaction.status)} border-0 flex items-center gap-1 w-fit`}>
                          {getTransactionStatusIcon(transaction.status)}
                          {transaction.status}
                        </Badge>
                      </td>
                      <td className="py-3">
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Search className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="flagged" className="mt-4">
            <div className="text-center py-8 text-slate-400">
              <Flag className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Flagged transactions will appear here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="mt-4">
            <div className="text-center py-8 text-slate-400">
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Recent transactions from the last 30 days</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
}; 