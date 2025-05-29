import React from "react";
import Alerts from "./Alerts";
import OverviewChart from "./OverviewChart";
import DailyActivityChart from "./DailyActivityChart";
import TransactionSummary from "./TransactionSummary";
import ClientFeedback from "./ClientFeedback";

function Dashboard() {
  return (
    <div>
      <Alerts />
      <OverviewChart />
      <DailyActivityChart />
      <TransactionSummary />
      <ClientFeedback />
    </div>
  );
}

export default Dashboard;
