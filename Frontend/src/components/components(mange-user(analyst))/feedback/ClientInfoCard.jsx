import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ClientInfoCard = () => (
  <Card className="bg-slate-800/80 border-slate-700">
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-white">Client Info</CardTitle>
      <Badge variant="success">open</Badge>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-slate-300">
        <div className="flex justify-between"><span>UserID</span><span className="text-blue-200">876509</span></div>
        <div className="flex justify-between"><span>Name</span><span className="text-blue-200">salima ahmed</span></div>
        <div className="flex justify-between"><span>Account Created</span><span className="text-blue-200">april.20,2025</span></div>
      </div>
    </CardContent>
  </Card>
); 