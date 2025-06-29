import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GlobalCard from '../components/ui/GlobalCard';

const LogDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const { logId } = useParams();

  // Log data
  const logData = {
    id: logId || 'LF-2025-0514-8472',
    timestamp: '2025-05-14 10:02:45 UTC',
    severity: 'Critical',
    source: 'Transaction Model Monitor',
    component: 'Transaction Model v2.3.5',
    environment: 'Production',
    eventType: 'Model Performance Alert',
    description: 'Model confidence dropped below 60% threshold for 5 consecutive predictions',
    impact: 'High - Potential fraud cases may be missed',
    triggeredBy: 'Automated Monitoring System',
    relatedTransaction: 'TXN-847295-2025 (Amount: $1,245.00)',
    confidenceScore: '58.3% (Threshold: 60%)',
    modelVersion: '2.3.5',
    apiEndpoint: '/api/v2/models/transaction/predict',
    requestId: 'REQ-847295-2025',
    host: 'ml-worker-03.prod.fraudwatch',
    traceId: 'trace-id:847295:20250514100245',
    previousOccurrences: '2 in last 24 hours',
    status: 'Unresolved',
    assignedTo: 'Unassigned',
    investigationNotes: 'No notes added'
  };

  const rawJsonData = `{
  "log_id": "${logData.id}",
  "timestamp": "2025-05-14T10:02:45Z",
  "severity": "CRITICAL",
  "source": "model_monitor",
  "component": "transaction_model",
  "event": {
    "type": "confidence_threshold_breach",
    "description": "Model confidence below threshold",
    "details": {
      "model_version": "2.3.5",
      "confidence_score": 0.583,
      "threshold": 0.6,
      "duration": "5 consecutive predictions",
      "transaction_id": "TXN-847295-2025",
      "features": {
        "amount": 1245.0,
        "merchant_category": "electronics",
        "geo_distance": 125.3
      }
    }
  },
  "metadata": {
    "environment": "production",
    "host": "ml-worker-03.prod.fraudwatch",
    "trace_id": "trace-id:847295:20250514100245"
  }
}`;

  const tabList = [
    { id: 'overview', label: 'Overview', icon: 'eye' },
    { id: 'details', label: 'Technical Details', icon: 'cog' },
    { id: 'raw', label: 'Raw Data', icon: 'code' },
    { id: 'actions', label: 'Actions', icon: 'tools' }
  ];

  const handleBackToLogs = () => {
    navigate('/model-managment');
  };

  const handleActionClick = (action) => {
    console.log(`Action clicked: ${action}`);
    alert(`Action: ${action}`);
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'text-red-400';
      case 'high':
        return 'text-orange-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-green-400';
      default:
        return 'text-[#A0A0C0]';
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-[#F0F0FF] font-inter">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <button 
                onClick={handleBackToLogs}
                className="text-[#5D8EFF] hover:text-[#4D7EFF] flex items-center gap-2"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Logs
              </button>
            </div>
            <h1 className="text-3xl font-bold mb-1">Log Details - {logData.id}</h1>
            <p className="text-base text-[#A0A0C0]">{logData.eventType} | {logData.timestamp}</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleActionClick('Export Log')}
              className="flex items-center space-x-2 bg-[#5D8EFF] hover:bg-[#4D7EFF] text-white px-4 py-2 rounded-lg transition-colors"
            >
              <i className="fas fa-download"></i>
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlobalCard>
            <div>
              <p className="text-[#A0A0C0] text-sm">Severity</p>
              <h3 className={`text-lg font-bold ${getSeverityColor(logData.severity)}`}>{logData.severity}</h3>
              <p className="text-sm text-[#A0A0C0]">{logData.source}</p>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div>
              <p className="text-[#A0A0C0] text-sm">Component</p>
              <h3 className="text-lg font-bold">{logData.component}</h3>
              <p className="text-sm text-[#A0A0C0]">{logData.environment}</p>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div>
              <p className="text-[#A0A0C0] text-sm">Status</p>
              <h3 className="text-lg font-bold text-red-400">{logData.status}</h3>
              <p className="text-sm text-[#A0A0C0]">{logData.assignedTo}</p>
            </div>
          </GlobalCard>
          <GlobalCard>
            <div>
              <p className="text-[#A0A0C0] text-sm">Occurrences</p>
              <h3 className="text-lg font-bold">{logData.previousOccurrences}</h3>
              <p className="text-sm text-[#A0A0C0]">Recent frequency</p>
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
              <h3 className="text-xl font-bold mb-4">Event Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Event Type:</span>
                  <span className="font-medium">{logData.eventType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Description:</span>
                  <span className="font-medium text-right max-w-xs">{logData.description}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Impact:</span>
                  <span className="font-medium text-right max-w-xs text-red-400">{logData.impact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Triggered By:</span>
                  <span className="font-medium">{logData.triggeredBy}</span>
                </div>
              </div>
            </GlobalCard>

            <GlobalCard>
              <h3 className="text-xl font-bold mb-4">Model Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Model Version:</span>
                  <span className="font-medium">{logData.modelVersion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Confidence Score:</span>
                  <span className="font-medium text-red-400">{logData.confidenceScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">Related Transaction:</span>
                  <span className="font-medium">{logData.relatedTransaction}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0C0]">API Endpoint:</span>
                  <span className="font-medium text-right max-w-xs">{logData.apiEndpoint}</span>
                </div>
              </div>
            </GlobalCard>
          </div>
        )}

        {activeTab === 'details' && (
          <GlobalCard>
            <h3 className="text-xl font-bold mb-6">Technical Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">System Information</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#A0A0C0]">Host:</span>
                      <span className="font-medium">{logData.host}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A0A0C0]">Request ID:</span>
                      <span className="font-medium">{logData.requestId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A0A0C0]">Trace ID:</span>
                      <span className="font-medium text-right max-w-xs">{logData.traceId}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Investigation</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#A0A0C0]">Status:</span>
                      <span className="font-medium text-red-400">{logData.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A0A0C0]">Assigned To:</span>
                      <span className="font-medium">{logData.assignedTo}</span>
                    </div>
                    <div>
                      <span className="text-[#A0A0C0]">Notes:</span>
                      <p className="font-medium mt-1">{logData.investigationNotes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlobalCard>
        )}

        {activeTab === 'raw' && (
          <GlobalCard>
            <h3 className="text-xl font-bold mb-6">Raw JSON Data</h3>
            <div className="bg-black/20 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-[#F0F0FF] whitespace-pre-wrap">
                {rawJsonData}
              </pre>
            </div>
          </GlobalCard>
        )}

        {activeTab === 'actions' && (
          <GlobalCard>
            <h3 className="text-xl font-bold mb-6">Available Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button 
                onClick={() => handleActionClick('Assign to Analyst')}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
              >
                <div className="flex items-center mb-2">
                  <i className="fas fa-user-plus text-[#5D8EFF] mr-3"></i>
                  <h4 className="font-bold">Assign to Analyst</h4>
                </div>
                <p className="text-sm text-[#A0A0C0]">Assign this log to a specific analyst for investigation</p>
              </button>
              
              <button 
                onClick={() => handleActionClick('Mark as Resolved')}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
              >
                <div className="flex items-center mb-2">
                  <i className="fas fa-check-circle text-green-400 mr-3"></i>
                  <h4 className="font-bold">Mark as Resolved</h4>
                </div>
                <p className="text-sm text-[#A0A0C0]">Mark this issue as resolved and close the investigation</p>
              </button>
              
              <button 
                onClick={() => handleActionClick('Create Alert')}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
              >
                <div className="flex items-center mb-2">
                  <i className="fas fa-bell text-yellow-400 mr-3"></i>
                  <h4 className="font-bold">Create Alert</h4>
                </div>
                <p className="text-sm text-[#A0A0C0]">Create a monitoring alert for similar events</p>
              </button>
              
              <button 
                onClick={() => handleActionClick('View Related Logs')}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
              >
                <div className="flex items-center mb-2">
                  <i className="fas fa-list text-blue-400 mr-3"></i>
                  <h4 className="font-bold">View Related Logs</h4>
                </div>
                <p className="text-sm text-[#A0A0C0]">View all logs related to this component (12 found)</p>
              </button>
              
              <button 
                onClick={() => handleActionClick('Add Investigation Note')}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
              >
                <div className="flex items-center mb-2">
                  <i className="fas fa-sticky-note text-purple-400 mr-3"></i>
                  <h4 className="font-bold">Add Investigation Note</h4>
                </div>
                <p className="text-sm text-[#A0A0C0]">Add notes about your investigation findings</p>
              </button>
              
              <button 
                onClick={() => handleActionClick('Escalate Issue')}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
              >
                <div className="flex items-center mb-2">
                  <i className="fas fa-exclamation-triangle text-red-400 mr-3"></i>
                  <h4 className="font-bold">Escalate Issue</h4>
                </div>
                <p className="text-sm text-[#A0A0C0]">Escalate this issue to senior team members</p>
              </button>
            </div>
          </GlobalCard>
        )}
      </div>
    </div>
  );
};

export default LogDetails;

