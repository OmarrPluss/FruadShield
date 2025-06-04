// src/components/TransactionHistory.jsx
import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <section className="col-span-3 bg-gray-800 p-5 rounded">
      <h3 className="text-lg mb-4">Transaction History</h3>
      <div className="flex gap-4 mb-4">
        <span className="border-b-2 border-blue-600 pb-1 cursor-pointer">All Transactions</span>
        <span className="cursor-pointer">Flagged (3)</span>
        <span className="cursor-pointer">Recent (30 days)</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs text-gray-400">
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Merchant</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-3">{transaction.date}</td>
                <td className="p-3">{transaction.amount}</td>
                <td className="p-3">{transaction.merchant}</td>
                <td className="p-3">{transaction.location}</td>
                <td className={`p-3 ${transaction.status === 'Approved' ? 'text-green-500' : transaction.status === 'Flagged' ? 'text-red-500' : 'text-orange-500'}`}>
                  {transaction.status}
                </td>
                <td className="p-3">
                  <button className="text-gray-400 hover:text-gray-200">🔍</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionHistory;