import React from 'react';
import GlobalCard from '../components/ui/GlobalCard';

const fraudAlertsData = [
  { id: "FRD-2025-001", date: "May 09, 2025", amount: "$150.00", status: "High Risk" },
  { id: "FRD-2025-002", date: "May 08, 2025", amount: "$75.50", status: "Suspicious" },
  { id: "FRD-2025-003", date: "May 07, 2025", amount: "$220.10", status: "High Risk" },
];

const recentTransactionsData = [
  { date: "May 09, 2025", description: "Online Purchase - TechStore", amount: "$49.99", status: "Completed" },
  { date: "May 08, 2025", description: "Grocery Store", amount: "$85.20", status: "Completed" },
  { date: "May 08, 2025", description: "Subscription Service", amount: "$12.99", status: "Pending" },
  { date: "May 07, 2025", description: "Restaurant Bill", amount: "$62.00", status: "Completed" },
];

const accountSecurityData = {
  activeAlerts: 3,
  lastLogin: "May 09, 2025, 10:15 AM"
};

const ClientDashboard = () => {
  return (
    <div className="min-h-screen grbg-ay-50 text-black dark:text-white font-sans antialiased">
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 dashboard-container">
        {/* Recent Fraud Alerts */}
        <GlobalCard title="Recent Fraud Alerts" span={2} className="rounded-xl shadow-md">
          <ul className="alert-list divide-y divide-gray-200 dark:divide-gray-700">
            {fraudAlertsData.map((alert, idx) => (
              <li key={alert.id} className="flex justify-between items-center py-2">
                <div>
                  <div><strong>{alert.id}</strong> - {alert.amount}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-300">{alert.date}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`alert-status px-2 py-1 rounded text-xs font-bold ${alert.status === 'High Risk' ? 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-white' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-white'}`}>{alert.status}</span>
                  <button className="action-button bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs">Review</button>
                </div>
              </li>
            ))}
          </ul>
        </GlobalCard>
        {/* My Recent Transactions */}
        <GlobalCard title="My Recent Transactions" span={2} className="rounded-xl shadow-md">
          <ul className="transaction-list divide-y divide-gray-200 dark:divide-gray-700">
            {recentTransactionsData.map((tx, idx) => (
              <li key={idx} className="flex justify-between items-center py-2">
                <div>
                  <div><strong>{tx.description}</strong> - {tx.amount}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-300">{tx.date}</div>
                </div>
                <div className={`font-bold text-xs ${tx.status === 'Completed' ? 'text-green-600 dark:text-green-300' : 'text-yellow-600 dark:text-yellow-300'}`}>{tx.status}</div>
              </li>
            ))}
          </ul>
        </GlobalCard>
        {/* Quick Actions */}
        <GlobalCard title="Quick Actions" span={2} className="rounded-xl shadow-md">
          <div className="quick-links flex flex-col">
            <a href="#" className="text-blue-600 dark:text-blue-400 py-2 border-b border-gray-200 dark:border-gray-700 hover:underline">Dispute a Transaction</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 py-2 border-b border-gray-200 dark:border-gray-700 hover:underline">View Full Transaction History</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 py-2 border-b border-gray-200 dark:border-gray-700 hover:underline">Contact Support (Email/Phone)</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 py-2 hover:underline">Update Security Settings</a>
          </div>
        </GlobalCard>
        {/* Account Security */}
        <GlobalCard title="Account Security" span={2} className="rounded-xl shadow-md">
          <div>
            <p><span className="kpi-value text-2xl font-bold text-gray-800 dark:text-white">{accountSecurityData.activeAlerts}</span> <span className="kpi-label text-gray-500 dark:text-gray-300">Alerts Require Your Attention</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-300">Last login: {accountSecurityData.lastLogin}</p>
          </div>
        </GlobalCard>
      </main>
    </div>
  );
};

export default ClientDashboard;