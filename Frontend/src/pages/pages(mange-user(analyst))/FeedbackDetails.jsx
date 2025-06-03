import { Navbar } from "@/components/Navbar";
import { FeedbackDetailsCard } from "@/components/feedback/FeedbackDetailsCard";
import { ClientFeedbackCard } from "@/components/feedback/ClientFeedbackCard";
import { TransactionInfoCard } from "@/components/feedback/TransactionInfoCard";
import { ClientInfoCard } from "@/components/feedback/ClientInfoCard";

const FeedbackDetails = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen pt-8 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-2">
          <FeedbackDetailsCard />
          <ClientFeedbackCard />
          <TransactionInfoCard />
          <ClientInfoCard />
        </div>
      </main>
    </div>
  );
};

export default FeedbackDetails; 