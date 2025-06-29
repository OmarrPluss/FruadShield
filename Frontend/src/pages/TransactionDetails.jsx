import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalCard from '../components/ui/GlobalCard';

const TransactionDetails = () => {
  const navigate = useNavigate();

  // Handle action buttons
  const handleAction = (action) => {
    alert(`${action} action would be implemented here`);
  };

  const handleBackToHistory = () => {
    navigate('/client-history-analyst');
  };

  return (
    <div className="min-h-screen bg-transparent text-[#F0F0FF] font-inter">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <button 
                onClick={handleBackToHistory}
                className="text-[#5D8EFF] hover:text-[#4D7EFF] flex items-center gap-2"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Client History
              </button>
            </div>
            <h1 className="text-3xl font-bold mb-1">Transaction Details</h1>
            <p className="text-base text-[#A0A0C0]">Detailed view of transaction TXN7890123</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Transaction Information */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Transaction Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-[#A0A0C0]">Transaction ID</p>
                  <p className="font-mono">TXN7890123</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Full Timestamp</p>
                  <p>2025-05-13 14:35:10 UTC</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Amount</p>
                  <p>$125.50</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Currency</p>
                  <p>USD</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Status</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">Approved</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Risk Level</p>
                  <p className="text-green-600 dark:text-green-400">Low</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-[#A0A0C0]">Description</p>
                  <p>Online Purchase - Headphones</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Payment Method</p>
                  <p>Visa ending in 4521</p>
                </div>
              </div>
            </GlobalCard>

            {/* Merchant & Store Details */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Merchant & Store Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-[#A0A0C0]">Merchant Name</p>
                  <p>Global Electronics Inc.</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Store Name</p>
                  <p>Tech Galaxy</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Category</p>
                  <p>Electronics</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Merchant ID</p>
                  <p>MID-789456123</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Store Location</p>
                  <p>New York, NY</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Merchant Location</p>
                  <p>Wilmington, DE</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm text-[#A0A0C0]">Merchant Address</p>
                  <p>1234 Commerce Street, Wilmington, DE 19801</p>
                </div>
              </div>
            </GlobalCard>

            {/* Customer Information */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-[#A0A0C0]">Customer ID</p>
                  <p>CUST-456789</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Account Type</p>
                  <p>Premium</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Customer Since</p>
                  <p>January 2020</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Location</p>
                  <p>New York, NY</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">IP Address</p>
                  <p>192.168.1.100</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Device</p>
                  <p>iPhone 14 Pro</p>
                </div>
              </div>
            </GlobalCard>

            {/* Risk Analysis */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Risk Analysis</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#A0A0C0]">Overall Risk Score</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                      <span className="text-green-600 dark:text-green-400 font-medium">25/100 (Low)</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#A0A0C0]">Confidence Level</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">92%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Risk Factors</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900 dark:bg-opacity-20 rounded">
                      <span>✅ Known device and location</span>
                      <span className="text-green-600 dark:text-green-400 text-sm">-10 points</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900 dark:bg-opacity-20 rounded">
                      <span>✅ Normal spending pattern</span>
                      <span className="text-green-600 dark:text-green-400 text-sm">-15 points</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900 dark:bg-opacity-20 rounded">
                      <span>✅ Trusted merchant</span>
                      <span className="text-green-600 dark:text-green-400 text-sm">-5 points</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20 rounded">
                      <span>⚠️ Weekend transaction</span>
                      <span className="text-yellow-600 dark:text-yellow-400 text-sm">+5 points</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlobalCard>

            {/* Transaction History */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Related Transactions</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[#3A3D5A]">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Merchant</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-transparent divide-y divide-[#3A3D5A]">
                    <tr className="hover:bg-[#23234a]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">2025-05-12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$89.99</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Tech Galaxy</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Approved</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#23234a]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">2025-05-10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$45.50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Coffee Shop NYC</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Approved</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#23234a]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">2025-05-08</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$156.75</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Online Retailer</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Approved</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </GlobalCard>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <GlobalCard>
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => handleAction('Flag Transaction')}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center">
                    <i className="fas fa-flag text-red-400 mr-3"></i>
                    <div>
                      <p className="font-medium">Flag Transaction</p>
                      <p className="text-sm text-[#A0A0C0]">Mark as suspicious</p>
                    </div>
                  </div>
                </button>
                <button 
                  onClick={() => handleAction('Approve Transaction')}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-3"></i>
                    <div>
                      <p className="font-medium">Approve Transaction</p>
                      <p className="text-sm text-[#A0A0C0]">Confirm as legitimate</p>
                    </div>
                  </div>
                </button>
                <button 
                  onClick={() => handleAction('Block Transaction')}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center">
                    <i className="fas fa-ban text-red-400 mr-3"></i>
                    <div>
                      <p className="font-medium">Block Transaction</p>
                      <p className="text-sm text-[#A0A0C0]">Prevent processing</p>
                    </div>
                  </div>
                </button>
                <button 
                  onClick={() => handleAction('View History')}
                  className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center">
                    <i className="fas fa-history text-blue-400 mr-3"></i>
                    <div>
                      <p className="font-medium">View Full History</p>
                      <p className="text-sm text-[#A0A0C0]">See all transactions</p>
                    </div>
                  </div>
                </button>
              </div>
            </GlobalCard>

            {/* Transaction Timeline */}
            <GlobalCard>
              <h3 className="text-lg font-bold mb-4">Transaction Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Transaction Approved</p>
                    <p className="text-sm text-[#A0A0C0]">14:35:10 UTC</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Risk Analysis Complete</p>
                    <p className="text-sm text-[#A0A0C0]">14:35:08 UTC</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Transaction Initiated</p>
                    <p className="text-sm text-[#A0A0C0]">14:35:05 UTC</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-gray-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Payment Method Verified</p>
                    <p className="text-sm text-[#A0A0C0]">14:35:02 UTC</p>
                  </div>
                </div>
              </div>
            </GlobalCard>

            {/* Additional Information */}
            <GlobalCard>
              <h3 className="text-lg font-bold mb-4">Additional Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-[#A0A0C0]">Processing Time</p>
                  <p className="font-medium">3.2 seconds</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Network</p>
                  <p className="font-medium">Visa</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Authorization Code</p>
                  <p className="font-medium">AUTH-789456</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Reference Number</p>
                  <p className="font-medium">REF-123456789</p>
                </div>
              </div>
            </GlobalCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;

