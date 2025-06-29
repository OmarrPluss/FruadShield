import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalCard from '../components/ui/GlobalCard';

const CaseReview = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const caseData = {
    id: "FD-2023-00428",
    type: "Credit Card Fraud",
    priority: "High",
    status: "Resolved",
    client: {
      name: "Sarah Johnson",
      id: "#FW-GLENT-78845",
      type: "Premium Client",
      rating: 5.0
    },
    assignedTo: "You",
    createdDate: "10 Nov 2023",
    resolvedDate: "15 Nov 2023",
    description: "Client reported unauthorized transactions on their credit card. Multiple high-value purchases were made in different geographical locations within a short time frame.",
    timeline: [
      {
        date: "10 Nov 2023 09:15",
        action: "Case Created",
        description: "Initial fraud report received from client",
        user: "System"
      },
      {
        date: "10 Nov 2023 10:30",
        action: "Investigation Started",
        description: "Assigned to analyst for detailed review",
        user: "John Doe"
      },
      {
        date: "12 Nov 2023 14:20",
        action: "Evidence Collected",
        description: "Transaction patterns analyzed, merchant verification completed",
        user: "You"
      },
      {
        date: "15 Nov 2023 16:45",
        action: "Case Resolved",
        description: "Fraudulent transactions confirmed and reversed. Client notified.",
        user: "You"
      }
    ],
    transactions: [
      {
        id: "#FW-TXR-78845",
        date: "09 Nov 2023",
        amount: "$1,250.00",
        merchant: "Electronics Store NYC",
        status: "Reversed",
        risk: "High"
      },
      {
        id: "#FW-TXR-78846",
        date: "09 Nov 2023",
        amount: "$890.50",
        merchant: "Luxury Goods Miami",
        status: "Reversed",
        risk: "High"
      }
    ],
    feedback: {
      rating: 5.0,
      comment: "The analyst was extremely thorough in investigating my case. They provided clear explanations and followed up promptly with updates. Very satisfied with the resolution.",
      date: "16 Nov 2023"
    }
  };

  const tabList = [
    { id: 'overview', label: 'Overview', icon: 'eye' },
    { id: 'timeline', label: 'Timeline', icon: 'clock' },
    { id: 'transactions', label: 'Transactions', icon: 'credit-card' },
    { id: 'feedback', label: 'Client Feedback', icon: 'comment' }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-transparent text-[#F0F0FF] font-inter">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <button 
                onClick={() => navigate('/case-feedback')}
                className="text-[#5D8EFF] hover:text-[#4D7EFF] flex items-center gap-2"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Case Feedback
              </button>
            </div>
            <h1 className="text-3xl font-bold mb-1">Case Review - {caseData.id}</h1>
            <p className="text-base text-[#A0A0C0]">{caseData.type} | {caseData.priority} Priority | {caseData.status}</p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-[#5D8EFF] hover:bg-[#4D7EFF] text-white px-4 py-2 rounded-lg transition-colors">
              <i className="fas fa-download"></i>
              <span>Export Case</span>
            </button>
          </div>
        </div>

        {/* Case Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlobalCard>
            <div>
              <p className="text-[#A0A0C0] text-sm">Client</p>
              <h3 className="text-lg font-bold">{caseData.client.name}</h3>
              <p className="text-sm text-[#A0A0C0]">{caseData.client.type}</p>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div>
              <p className="text-[#A0A0C0] text-sm">Assigned To</p>
              <h3 className="text-lg font-bold">{caseData.assignedTo}</h3>
              <p className="text-sm text-[#A0A0C0]">Primary Analyst</p>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div>
              <p className="text-[#A0A0C0] text-sm">Created</p>
              <h3 className="text-lg font-bold">{caseData.createdDate}</h3>
              <p className="text-sm text-[#A0A0C0]">Initial Report</p>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div>
              <p className="text-[#A0A0C0] text-sm">Resolved</p>
              <h3 className="text-lg font-bold">{caseData.resolvedDate}</h3>
              <p className="text-sm text-[#A0A0C0]">5 days duration</p>
            </div>
          </GlobalCard>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#3A3D5A] mb-6">
          {tabList.map((tab) => (
            <button
              key={tab.id}
              className={`tab px-5 py-3 font-medium flex items-center gap-2 focus:outline-none transition text-base relative ${
                activeTab === tab.id
                  ? 'text-[#5D8EFF] active'
                  : 'text-[#A0A0C0]'
              } ${
                activeTab === tab.id
                  ? 'border-b-2 border-[#5D8EFF]'
                  : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fas fa-${tab.icon}`}></i> {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlobalCard>
              <h3 className="text-xl font-bold mb-4">Case Description</h3>
              <p className="text-[#A0A0C0] mb-4">{caseData.description}</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Case Type:</span>
                  <span className="font-medium">{caseData.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Priority Level:</span>
                  <span className="font-medium text-red-400">{caseData.priority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Current Status:</span>
                  <span className="font-medium text-green-400">{caseData.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Client ID:</span>
                  <span className="font-medium">{caseData.client.id}</span>
                </div>
              </div>
            </GlobalCard>

            <GlobalCard>
              <h3 className="text-xl font-bold mb-4">Client Information</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mr-4">
                  <i className="fas fa-user text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold">{caseData.client.name}</h4>
                  <p className="text-[#A0A0C0]">{caseData.client.type}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Client Rating:</span>
                  <div className="flex items-center">
                    {renderStars(caseData.client.rating)}
                    <span className="ml-2 text-[#A0A0C0]">{caseData.client.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Account Type:</span>
                  <span className="font-medium">{caseData.client.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Client Since:</span>
                  <span className="font-medium">Jan 2020</span>
                </div>
              </div>
            </GlobalCard>
          </div>
        )}

        {activeTab === 'timeline' && (
          <GlobalCard>
            <h3 className="text-xl font-bold mb-6">Case Timeline</h3>
            <div className="space-y-6">
              {caseData.timeline.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-[#5D8EFF] rounded-full mt-2 mr-4"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{event.action}</h4>
                      <span className="text-sm text-[#A0A0C0]">{event.date}</span>
                    </div>
                    <p className="text-[#A0A0C0] mb-1">{event.description}</p>
                    <p className="text-sm text-[#5D8EFF]">by {event.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlobalCard>
        )}

        {activeTab === 'transactions' && (
          <GlobalCard>
            <h3 className="text-xl font-bold mb-6">Related Transactions</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#3A3D5A]">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Merchant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#A0A0C0] uppercase tracking-wider">Risk Level</th>
                  </tr>
                </thead>
                <tbody className="bg-transparent divide-y divide-[#3A3D5A]">
                  {caseData.transactions.map((txn, index) => (
                    <tr key={index} className="hover:bg-[#23234a]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{txn.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{txn.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400">{txn.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{txn.merchant}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">{txn.status}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">{txn.risk}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlobalCard>
        )}

        {activeTab === 'feedback' && (
          <GlobalCard>
            <h3 className="text-xl font-bold mb-6">Client Feedback</h3>
            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mr-4">
                    <i className="fas fa-user text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">{caseData.client.name}</h4>
                    <p className="text-[#A0A0C0]">{caseData.client.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-400 mb-1">
                    {renderStars(caseData.feedback.rating)}
                    <span className="ml-2 text-[#A0A0C0]">{caseData.feedback.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-sm text-[#A0A0C0]">{caseData.feedback.date}</p>
                </div>
              </div>
              <blockquote className="text-lg italic border-l-4 border-[#5D8EFF] pl-4">
                "{caseData.feedback.comment}"
              </blockquote>
            </div>
          </GlobalCard>
        )}
      </div>
    </div>
  );
};

export default CaseReview;

