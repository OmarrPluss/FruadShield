import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalCard from '../components/ui/GlobalCard';

const ClientHistoryAnalyst = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#F0F0FF] font-inter">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1 text-black dark:text-white">Client History</h1>
            <p className="text-base text-[#A0A0C0]">Client ID: #FW-GLENT-78845 | Last updated: May 14, 2025 at 10:15 AM</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Client Profile */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Client Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border-r border-[#3A3D5A] pr-4">
                  <p className="text-sm text-[#A0A0C0]">Account Status</p>
                  <p className="font-medium">Active</p>
                  <p className="text-sm text-[#A0A0C0] mt-1">No change</p>
                </div>
                <div className="border-r border-[#3A3D5A] pr-4">
                  <p className="text-sm text-[#A0A0C0]">Risk Score</p>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">72/100</span>
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">Medium</span>
                  </div>
                  <p className="text-sm text-[#A0A0C0] mt-1">Twitter</p>
                </div>
                <div className="border-r border-[#3A3D5A] pr-4">
                  <p className="text-sm text-[#A0A0C0]">Monitored Status</p>
                  <p className="font-medium">Since Jan 2022</p>
                  <p className="text-sm text-[#A0A0C0] mt-1">2.5 years</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Flags</p>
                  <p className="font-medium">3</p>
                  <p className="text-sm text-[#A0A0C0] mt-1">4 from 6 last month</p>
                </div>
              </div>
            </GlobalCard>

            {/* Activity Overview */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Activity Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border-r border-[#3A3D5A] pr-4">
                  <p className="text-sm text-[#A0A0C0]">Monthly Transactions</p>
                  <p className="font-medium">47</p>
                  <p className="text-sm text-[#A0A0C0] mt-1">$125 increase</p>
                </div>
                <div className="border-r border-[#3A3D5A] pr-4">
                  <p className="text-sm text-[#A0A0C0]">Avg. Amount</p>
                  <p className="font-medium">$245.67</p>
                  <p className="text-sm text-[#A0A0C0] mt-1">$25 decrease</p>
                </div>
                <div className="border-r border-[#3A3D5A] pr-4">
                  <p className="text-sm text-[#A0A0C0]">Countries</p>
                  <p className="font-medium">3</p>
                  <p className="text-sm text-[#A0A0C0] mt-1">No change</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Last Activity</p>
                  <p className="font-medium">2h ago</p>
                  <p className="text-sm text-[#A0A0C0] mt-1">Next Treasury</p>
                </div>
              </div>
            </GlobalCard>

            {/* Risk Indicators */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Risk Indicators</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-[#A0A0C0]">Location Change</p>
                  <p className="font-medium text-yellow-600 dark:text-yellow-400">Yes</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Payment (pattern)</p>
                  <p className="font-medium text-yellow-600 dark:text-yellow-400">Irregular</p>
                </div>
                <div>
                  <p className="text-sm text-[#A0A0C0]">Device (behavior)</p>
                  <p className="font-medium text-green-600 dark:text-green-400">Basic</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#A0A0C0]">Major Risk Country</p>
                <p className="font-medium text-red-600 dark:text-red-400">Yes</p>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20 rounded-lg">
                <p className="text-sm italic text-[#A0A0C0]">"Client shows moderate risk due to recent international transactions and device changes. Recommend enhanced verification for next high-value transactions."</p>
              </div>
            </GlobalCard>

            {/* Transaction Search */}
            <GlobalCard>
              <h2 className="text-xl font-bold mb-4">Search Transactions</h2>
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-[#A0A0C0]"></i>
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-10 pr-3 py-2 border border-[#3A3D5A] rounded-lg bg-white/5 placeholder-[#A0A0C0] text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]" 
                    placeholder="Search by Transaction ID, merchant, or amount..."
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-[#A0A0C0] mb-1">Status:</label>
                  <select className="block w-full px-3 py-2 border border-[#3A3D5A] rounded-lg bg-white/5 text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]">
                    <option>All Statuses</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Failed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#A0A0C0] mb-1">Type:</label>
                  <select className="block w-full px-3 py-2 border border-[#3A3D5A] rounded-lg bg-white/5 text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]">
                    <option>All Types</option>
                    <option>Transfer</option>
                    <option>Purchase</option>
                    <option>Payment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#A0A0C0] mb-1">Amount:</label>
                  <select className="block w-full px-3 py-2 border border-[#3A3D5A] rounded-lg bg-white/5 text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]">
                    <option>Any Amount</option>
                    <option>Under $100</option>
                    <option>$100-$500</option>
                    <option>Over $500</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#A0A0C0] mb-1">Risk Level:</label>
                  <select className="block w-full px-3 py-2 border border-[#3A3D5A] rounded-lg bg-white/5 text-[#F0F0FF] focus:outline-none focus:ring-2 focus:ring-[#5D8EFF]">
                    <option>All Levels</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
            </GlobalCard>

            {/* Transaction History */}
            <GlobalCard>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-4">Transaction History</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[#3A3D5A]">
                  <thead className="bg-white/5">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Transaction ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Description</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Risk Level</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-transparent divide-y divide-[#3A3D5A]">
                    <tr className="hover:bg-[#23234a]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">2025-05-14</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">#FW-TXR-78845</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">International Wire Transfer</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">$1,250.00</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Critical</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button 
                          onClick={() => navigate('/transaction-details')}
                          className="text-[#5D8EFF] hover:text-[#4D7EFF] hover:underline"
                        >
                          Transactions History
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#23234a]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">2025-05-13</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">#FW-TXR-67834</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Electronics Purchase</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$588.99</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Medium</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button 
                          onClick={() => navigate('/transaction-details')}
                          className="text-[#5D8EFF] hover:text-[#4D7EFF] hover:underline"
                        >
                          Transactions History
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#23234a]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">2025-05-12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">#FW-TXR-50723</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Grocery Store</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">$45.87</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Completed</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Low</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button 
                          onClick={() => navigate('/transaction-details')}
                          className="text-[#5D8EFF] hover:text-[#4D7EFF] hover:underline"
                        >
                          Transactions History
                        </button>
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
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center">
                    <i className="fas fa-flag text-red-400 mr-3"></i>
                    <div>
                      <p className="font-medium">Flag Account</p>
                      <p className="text-sm text-[#A0A0C0]">Mark for review</p>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center">
                    <i className="fas fa-lock text-yellow-400 mr-3"></i>
                    <div>
                      <p className="font-medium">Freeze Account</p>
                      <p className="text-sm text-[#A0A0C0]">Temporary suspension</p>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-blue-400 mr-3"></i>
                    <div>
                      <p className="font-medium">Contact Client</p>
                      <p className="text-sm text-[#A0A0C0]">Verification call</p>
                    </div>
                  </div>
                </button>
              </div>
            </GlobalCard>

            {/* Recent Alerts */}
            <GlobalCard>
              <h3 className="text-lg font-bold mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900 dark:bg-opacity-20 border border-red-200 dark:border-red-800">
                  <div className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-red-500 mr-3 mt-1"></i>
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-200">High-Risk Transaction</p>
                      <p className="text-sm text-red-600 dark:text-red-300">$1,250 international transfer</p>
                      <p className="text-xs text-red-500 dark:text-red-400 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-yellow-500 mr-3 mt-1"></i>
                    <div>
                      <p className="font-medium text-yellow-800 dark:text-yellow-200">Location Change</p>
                      <p className="text-sm text-yellow-600 dark:text-yellow-300">New login from Miami, FL</p>
                      <p className="text-xs text-yellow-500 dark:text-yellow-400 mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlobalCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHistoryAnalyst;

