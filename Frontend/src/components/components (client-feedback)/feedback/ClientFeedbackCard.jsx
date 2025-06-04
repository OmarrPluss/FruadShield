import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StarRating = ({ value = 4 }) => (
  <div className="flex items-center space-x-1">
    {[1,2,3,4,5].map((i) => (
      <span key={i} className={i <= value ? "text-yellow-400" : "text-slate-400"}>★</span>
    ))}
  </div>
);

export const ClientFeedbackCard = ({ analystDecision, clientComment, satisfactionRating }) => (
  <Card className="bg-slate-800/80 border-slate-700">
    <CardHeader>
      <CardTitle className="text-white">Client Feedback</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4 text-slate-300">
        <div className="flex justify-between"><span>Analyst Decision</span><span className="text-blue-400">{analystDecision}</span></div>
        <div className="flex justify-between"><span>Client Comment</span><span>{clientComment}</span></div>
        <div className="flex justify-between items-center">
          <span>Satisfaction Rating</span>
          <StarRating value={satisfactionRating} />
        </div>
      </div>
    </CardContent>
  </Card>
);

export const TransactionInfoCard = ({ amount, date, merchant, status }) => (
  <Card className="bg-slate-800/80 border-slate-700">
    <CardHeader>
      <CardTitle className="text-white">Transaction Info</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-slate-300">
        <div className="flex justify-between"><span>Amount</span><span className="text-blue-200">{amount}</span></div>
        <div className="flex justify-between"><span>Date</span><span className="text-blue-200">{date}</span></div>
        <div className="flex justify-between"><span>Merchant</span><span className="text-blue-200">{merchant}</span></div>
        <div className="flex justify-between items-center"><span>Status</span><Badge variant={status === 'Flagged' ? 'destructive' : 'success'}>{status}</Badge></div>
      </div>
    </CardContent>
  </Card>
);

export const ClientInfoCard = ({ userId, name, accountCreated, status }) => (
  <Card className="bg-slate-800/80 border-slate-700">
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-white">Client Info</CardTitle>
      <Badge variant={status === 'open' ? 'success' : 'destructive'}>{status}</Badge>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-slate-300">
        <div className="flex justify-between"><span>UserID</span><span className="text-blue-200">{userId}</span></div>
        <div className="flex justify-between"><span>Name</span><span className="text-blue-200">{name}</span></div>
        <div className="flex justify-between"><span>Account Created</span><span className="text-blue-200">{accountCreated}</span></div>
      </div>
    </CardContent>
  </Card>
); 