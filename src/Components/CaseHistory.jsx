import React, { useState } from 'react';

const caseData = [
  {
    caseId: `CASE${Math.floor(1000000 + Math.random() * 9000000)}`,
    amount: '$850',
    reason: 'Unauthorized transaction',
    actionTaken: 'Account temporarily frozen',
    dateOpened: 'May 10, 2025',
    dateSolved: 'May 15, 2025',
    status: 'Resolved',
    type: 'Fraud Investigation',
    analyst: 'John Doe',
    transactionId: 'TXN7890123',
    fullTimestamp: '2025-05-10 14:35:10 UTC',
    currency: 'USD',
    riskLevel: 'Low',
    description: 'Online Purchase - Headphones',
    paymentMethod: 'Visa ending in 4521',
    merchantName: 'Global Electronics Inc.',
    storeName: 'Tech Galaxy',
    category: 'Electronics',
    transactionLocation: 'New York, NY (Online)',
    merchantLocation: 'Wilmington, DE',
    deviceInfo: 'IP: 192.168.1.10, Device ID: XYZ789',
    modelUsed: 'Behavioral v2.1, Velocity Check v1.5',
    notes: 'Standard low-risk transaction',
    complaintDescription: 'Customer reported an unauthorized charge for headphones they did not purchase. Customer claims card was in their possession at all times and they did not share card details with anyone.',
    resolutionSummary: 'Investigation confirmed unauthorized transaction. Merchant provided evidence of shipment to different address. Full refund issued and new card sent to customer. Customer educated on security measures.',
    attachments: [
      { name: 'Transaction Receipt.pdf', date: 'May 10, 2025', type: 'Document' },
      { name: 'Fraud Report.docx', date: 'May 11, 2025', type: 'Report' },
      { name: 'Customer Statement.mp3', date: 'May 12, 2025', type: 'Recording' }
    ],
    investigationTimeline: [
      { date: 'May 10, 2025', action: 'Case opened', analyst: 'John Doe' },
      { date: 'May 11, 2025', action: 'Merchant contacted', analyst: 'John Doe' },
      { date: 'May 12, 2025', action: 'Customer interview conducted', analyst: 'Alice Smith' },
      { date: 'May 13, 2025', action: 'Fraud confirmed', analyst: 'John Doe' },
      { date: 'May 14, 2025', action: 'Refund processed', analyst: 'Michael Brown' },
      { date: 'May 15, 2025', action: 'Case closed', analyst: 'John Doe' }
    ]
  },
  {
    caseId: `CASE${Math.floor(1000000 + Math.random() * 9000000)}`,
    amount: '$1200',
    reason: 'Card not received',
    actionTaken: 'Card reissued',
    dateOpened: 'May 18, 2025',
    dateSolved: 'May 21, 2025',
    status: 'Resolved',
    type: 'Card Replacement',
    analyst: 'Alice Smith',
    transactionId: 'TXN1234567',
    fullTimestamp: '2025-05-18 09:22:45 UTC',
    currency: 'USD',
    riskLevel: 'Medium',
    description: 'Card delivery issue',
    paymentMethod: 'N/A',
    merchantName: 'Bank Services',
    storeName: 'Main Branch',
    category: 'Banking',
    transactionLocation: 'Boston, MA',
    merchantLocation: 'Boston, MA',
    deviceInfo: 'N/A',
    modelUsed: 'N/A',
    notes: 'Customer reported delay in receiving card',
    complaintDescription: 'Customer reported not receiving their new credit card 14 days after it was reportedly shipped. Customer checked with building management and neighbors but card was not found.',
    resolutionSummary: 'Card confirmed lost in transit. New card issued with expedited shipping. Customer received card within 2 business days. Temporary credit issued for any urgent transactions.',
    attachments: [
      { name: 'Shipping Confirmation.pdf', date: 'May 18, 2025', type: 'Document' },
      { name: 'Customer Call Log.docx', date: 'May 19, 2025', type: 'Report' }
    ],
    investigationTimeline: [
      { date: 'May 18, 2025', action: 'Case opened', analyst: 'Alice Smith' },
      { date: 'May 19, 2025', action: 'Shipping verification', analyst: 'Alice Smith' },
      { date: 'May 20, 2025', action: 'Card cancellation', analyst: 'John Doe' },
      { date: 'May 21, 2025', action: 'New card issued', analyst: 'Alice Smith' }
    ]
  },
  {
    caseId: `CASE${Math.floor(1000000 + Math.random() * 9000000)}`,
    amount: '$320',
    reason: 'Duplicate charge',
    actionTaken: 'Refund issued',
    dateOpened: 'May 20, 2025',
    dateSolved: 'May 22, 2025',
    status: 'Resolved',
    type: 'Billing Dispute',
    analyst: 'Mark Johnson',
    transactionId: 'TXN6543210',
    fullTimestamp: '2025-05-20 16:10:05 UTC',
    currency: 'USD',
    riskLevel: 'Low',
    description: 'Restaurant payment',
    paymentMethod: 'Mastercard ending in 6789',
    merchantName: 'Fine Dine Restaurant',
    storeName: 'Downtown',
    category: 'Dining',
    transactionLocation: 'Chicago, IL',
    merchantLocation: 'Chicago, IL',
    deviceInfo: 'IP: 172.16.0.5, Device ID: ABC123',
    modelUsed: 'Behavioral v2.1',
    notes: 'Customer disputed double charge, refund approved',
    complaintDescription: 'Customer was charged twice for the same restaurant meal on the same day. Customer provided receipt showing only one transaction was authorized. Second charge appeared 2 hours after initial payment.',
    resolutionSummary: 'Merchant confirmed processing error. Second charge was voided and refund processed. Customer received confirmation of refund within 3 business days.',
    attachments: [
      { name: 'Restaurant Receipt.jpg', date: 'May 20, 2025', type: 'Document' },
      { name: 'Refund Confirmation.pdf', date: 'May 22, 2025', type: 'Document' }
    ],
    investigationTimeline: [
      { date: 'May 20, 2025', action: 'Case opened', analyst: 'Mark Johnson' },
      { date: 'May 21, 2025', action: 'Merchant contacted', analyst: 'Mark Johnson' },
      { date: 'May 22, 2025', action: 'Refund processed', analyst: 'Mark Johnson' }
    ]
  },
  {
    caseId: `CASE${Math.floor(1000000 + Math.random() * 9000000)}`,
    amount: '$45',
    reason: 'Suspicious login detected',
    actionTaken: 'Password reset, account monitored',
    dateOpened: 'May 22, 2025',
    dateSolved: 'Pending',
    status: 'Under Investigation',
    type: 'Security Alert',
    analyst: 'Linda Green',
    transactionId: 'TXN9876543',
    fullTimestamp: '2025-05-22 12:45:30 UTC',
    currency: 'USD',
    riskLevel: 'High',
    description: 'Login attempt from new device',
    paymentMethod: 'N/A',
    merchantName: 'N/A',
    storeName: 'N/A',
    category: 'Security',
    transactionLocation: 'San Francisco, CA',
    merchantLocation: 'N/A',
    deviceInfo: 'IP: 203.0.113.5, Device ID: DEF456',
    modelUsed: 'Behavioral v3.0, Geo-Check v2.0',
    notes: 'Account locked pending further review',
    complaintDescription: 'System flagged login attempt from unrecognized device in different state. Customer confirmed they were not attempting to access account from this location. Potential credential stuffing attack detected.',
    resolutionSummary: '',
    attachments: [
      { name: 'Security Alert Report.pdf', date: 'May 22, 2025', type: 'Report' },
      { name: 'IP Trace Results.docx', date: 'May 23, 2025', type: 'Report' }
    ],
    investigationTimeline: [
      { date: 'May 22, 2025', action: 'Security alert triggered', analyst: 'System' },
      { date: 'May 22, 2025', action: 'Account locked', analyst: 'Linda Green' },
      { date: 'May 23, 2025', action: 'Customer notified', analyst: 'Linda Green' },
      { date: 'May 23, 2025', action: 'IP investigation started', analyst: 'Security Team' }
    ]
  },
  {
    caseId: `CASE${Math.floor(1000000 + Math.random() * 9000000)}`,
    amount: '$2000',
    reason: 'Large transaction flagged',
    actionTaken: 'Manual review initiated',
    dateOpened: 'May 23, 2025',
    dateSolved: 'Pending',
    status: 'Pending',
    type: 'Transaction Review',
    analyst: 'Michael Brown',
    transactionId: 'TXN2468101',
    fullTimestamp: '2025-05-23 08:15:00 UTC',
    currency: 'USD',
    riskLevel: 'High',
    description: 'Electronics purchase',
    paymentMethod: 'Amex ending in 4321',
    merchantName: 'Mega Store',
    storeName: 'Mall Outlet',
    category: 'Retail',
    transactionLocation: 'Houston, TX',
    merchantLocation: 'Houston, TX',
    deviceInfo: 'IP: 198.51.100.25, Device ID: GHI789',
    modelUsed: 'Velocity Check v2.0',
    notes: 'Transaction requires approval before processing',
    complaintDescription: 'Customer attempted large electronics purchase that was flagged by fraud detection system. Customer claims purchase is legitimate for home office setup. Verification call placed to customer but no answer.',
    resolutionSummary: '',
    attachments: [
      { name: 'Transaction Details.pdf', date: 'May 23, 2025', type: 'Document' },
      { name: 'Customer Verification Attempt.log', date: 'May 23, 2025', type: 'Report' }
    ],
    investigationTimeline: [
      { date: 'May 23, 2025', action: 'Transaction flagged', analyst: 'System' },
      { date: 'May 23, 2025', action: 'Manual review started', analyst: 'Michael Brown' },
      { date: 'May 23, 2025', action: 'Customer contact attempt', analyst: 'Michael Brown' }
    ]
  }
];

const CaseHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);

  const filteredCases = caseData.filter(c =>
    c.caseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.analyst.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'status-resolved';
      case 'under investigation':
        return 'status-investigation';
      case 'pending':
        return 'status-pending';
      default:
        return 'status-open';
    }
  };

  const handlePrint = () => {
    if (!selectedCase) return;
    const printContent = document.getElementById('printable-case-details').innerHTML;
    const newWin = window.open('', '_blank', 'width=800,height=600');
    newWin.document.write(`
      <html>
      <head><title>Print Case Details</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { color: #1e3a8a; }
        .card { border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 15px; }
        .card-header { font-weight: bold; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 10px; }
        .detail-item { margin-bottom: 8px; }
        .detail-label { font-weight: bold; color: #555; }
        .timeline-item { margin-bottom: 15px; }
        .timeline-date { font-weight: bold; }
        .attachment-item { display: flex; justify-content: space-between; margin-bottom: 8px; }
      </style>
      </head>
      <body>
        <h1>Case Details: ${selectedCase.caseId}</h1>
        ${printContent}
      </body>
      </html>
    `);
    newWin.document.close();
    newWin.focus();
    newWin.print();
    newWin.close();
  };

  const handleExport = () => {
    if (!selectedCase) return;
    const caseObj = selectedCase;
    const csvRows = [];
    csvRows.push(['Field', 'Value']);
    for (const key in caseObj) {
      if (Object.hasOwnProperty.call(caseObj, key)) {
        if (Array.isArray(caseObj[key])) {
          csvRows.push([key, `"${caseObj[key].map(item => JSON.stringify(item)).join('; ')}"`]);
        } else {
          csvRows.push([key, `"${caseObj[key]}"`]);
        }
      }
    }
    const csvContent = csvRows.map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${caseObj.caseId}_details.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="dashboard-container">
      <style>{`
        /* Very Dark Navy Blue with Grey Theme */
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #0a1128;
          color: #e6f1ff;
        }
        .dashboard-container {
          max-width: 1900px;
          margin: 0 auto;
          padding: 30px 20px;
          background: #0f1a3a;
          min-height: 100vh;
        }
        .dashboard-title {
          text-align: center;
          margin-bottom: 30px;
          color: #a1c4ff;
          font-size: 28px;
          font-weight: 600;
        }
        
        /* Search Bar */
        .search-container {
          display: flex;
          gap: 12px;
          margin-bottom: 0;
          max-width: 100%;
          background: #172a45;
          padding: 15px;
          border-radius: 10px 10px 0 0;
          border-bottom: 1px solid #1e3a8a;
        }
        .search-bar {
          flex: 1;
          padding: 12px 18px;
          font-size: 1rem;
          border: 1px solid #1e2a47;
          border-radius: 8px;
          background: #172a45;
          color: #e6f1ff;
          transition: all 0.3s ease;
        }
        .search-bar:focus {
          outline: none;
          border-color: #3a6bde;
          box-shadow: 0 0 0 2px rgba(58, 107, 222, 0.3);
        }
        .search-bar::placeholder {
          color: #6d7fa3;
        }
        .search-button {
          background: #1e3a8a;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .search-button:hover {
          background: #2547b3;
        }
        
        /* Table Container */
        .table-container {
          max-height: 70vh;
          overflow-y: auto;
          border-radius: 0 0 10px 10px;
          margin-bottom: 20px;
        }
        
        /* Case Table */
        .case-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: transparent;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        .case-table thead {
          background: linear-gradient(135deg, #1a3a8a 0%, #0f2a6b 100%);
          position: sticky;
          top: 0;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        .case-table th {
          padding: 16px;
          text-align: left;
          color: #ffffff;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #2547b3;
        }
        .case-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #1e2a47;
          color: #cbd7f0;
          transition: all 0.2s ease;
        }
        .case-table tr {
          transition: background-color 0.2s ease;
          background: #172a45;
        }
        .case-table tr:nth-child(even) {
          background: #1a2a4a;
        }
        .case-table tr:hover {
          background: #1e3a8a;
          cursor: pointer;
        }
        .case-table tr:last-child td {
          border-bottom: none;
        }
        
        /* Status Badges */
        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .status-resolved {
          background-color: #28a745;
          color: white;
        }
        .status-pending {
          background-color: #17a2b8;
          color: white;
        }
        .status-investigation {
          background-color: #fd7e14;
          color: white;
        }
        .status-open {
          background-color: #6c757d;
          color: white;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 17, 40, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-content {
          background: #172a45;
          border-radius: 12px;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 1px solid #1e3a8a;
          color: #e6f1ff;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #1e3a8a;
        }
        .modal-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #a1c4ff;
          margin: 0;
        }
        .modal-close {
          background: none;
          border: none;
          color: #a1c4ff;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 5px;
          line-height: 1;
        }
        
        /* Case Detail Cards */
        .case-detail-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }
        .detail-card {
          background: #1e2a47;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border-left: 4px solid #1e3a8a;
        }
        .card-header {
          font-size: 1.1rem;
          font-weight: 600;
          color: #a1c4ff;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 1px solid #1e3a8a;
        }
        .detail-item {
          margin-bottom: 12px;
        }
        .detail-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #8da2d5;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .detail-value {
          color: #e6f1ff;
          font-size: 0.95rem;
          word-break: break-word;
        }
        
        /* Complaint Description Card */
        .complaint-card {
          grid-column: span 2;
          background: #1e2a47;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border-left: 4px solid #1e3a8a;
        }
        .complaint-text {
          color: #e6f1ff;
          font-size: 0.95rem;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        
        /* Resolution Summary Card */
        .resolution-card {
          grid-column: span 2;
          background: #1e2a47;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border-left: 4px solid #28a745;
        }
        
        /* Attachments Card */
        .attachments-card {
          background: #1e2a47;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border-left: 4px solid #6f42c1;
        }
        .attachment-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #1e3a8a;
        }
        .attachment-info {
          display: flex;
          align-items: center;
        }
        .attachment-icon {
          margin-right: 10px;
          color: #a1c4ff;
        }
        .attachment-name {
          font-weight: 500;
        }
        .attachment-date {
          font-size: 0.8rem;
          color: #8da2d5;
        }
        .attachment-type {
          background: #6f42c1;
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.7rem;
        }
        .view-attachment {
          color: #a1c4ff;
          text-decoration: none;
          font-size: 0.8rem;
          cursor: pointer;
        }
        
        /* Investigation Timeline */
        .timeline-card {
          grid-column: span 2;
          background: #1e2a47;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border-left: 4px solid #fd7e14;
        }
        .timeline-item {
          position: relative;
          padding-left: 30px;
          margin-bottom: 20px;
          border-left: 2px solid #fd7e14;
        }
        .timeline-date {
          font-weight: 600;
          color: #a1c4ff;
          margin-bottom: 5px;
        }
        .timeline-action {
          color: #e6f1ff;
          margin-bottom: 5px;
        }
        .timeline-analyst {
          font-size: 0.8rem;
          color: #8da2d5;
        }
        .timeline-item:before {
          content: '';
          position: absolute;
          left: -9px;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fd7e14;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
          border-left: 2px solid transparent;
        }
        
        /* Action Buttons */
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 15px;
          margin-top: 30px;
        }
        .action-button {
          background: #1e3a8a;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .action-button:hover {
          background: #2547b3;
        }

        /* View Button Styles */
        .view-button {
          background: #1e3a8a;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          color: white;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .view-button:hover {
          background: #2547b3;
        }
        .actions-cell {
          text-align: right;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .dashboard-container {
            padding: 20px 15px;
          }
          .search-container {
            flex-direction: column;
          }
          .case-table thead {
            display: none;
          }
          .case-table tr {
            display: block;
            margin-bottom: 15px;
            border-radius: 8px;
            overflow: hidden;
          }
          .case-table td {
            display: block;
            text-align: right;
            padding: 10px 15px;
            border-bottom: 1px solid #1e2a47;
          }
          .case-table td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            color: #a1c4ff;
          }
          .actions-cell {
            text-align: center;
          }
          .view-button {
            width: 100%;
            padding: 8px;
          }
          .case-detail-cards {
            grid-template-columns: 1fr;
          }
          .complaint-card,
          .resolution-card,
          .timeline-card {
            grid-column: span 1;
          }
          .modal-content {
            padding: 20px;
          }
        }
      `}</style>

      <h1 className="dashboard-title">Case History</h1>
      
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by case ID, reason, type or analyst..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ marginRight: '8px' }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Search
        </button>
      </div>

      <div className="table-container">
        <table className="case-table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Date Opened</th>
              <th>Analyst</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                  No cases found matching your search
                </td>
              </tr>
            ) : (
              filteredCases.map((c) => (
                <tr key={c.caseId} onClick={() => setSelectedCase(c)}>
                  <td data-label="Case ID">{c.caseId}</td>
                  <td data-label="Amount">{c.amount}</td>
                  <td data-label="Reason">{c.reason}</td>
                  <td data-label="Status">
                    <span className={`status-badge ${getStatusClass(c.status)}`}>
                      {c.status}
                    </span>
                  </td>
                  <td data-label="Date Opened">{c.dateOpened}</td>
                  <td data-label="Analyst">{c.analyst}</td>
                  <td className="actions-cell" data-label="Actions">
                    <button 
                      className="view-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCase(c);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedCase && (
        <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                Case Details: {selectedCase.caseId}
                <span className={`status-badge ${getStatusClass(selectedCase.status)}`}>
                  {selectedCase.status}
                </span>
              </h2>
              <button className="modal-close" onClick={() => setSelectedCase(null)}>
                &times;
              </button>
            </div>

            <div id="printable-case-details">
              <div className="case-detail-cards">
                <div className="detail-card">
                  <div className="card-header">Case Overview</div>
                  <div className="detail-item">
                    <div className="detail-label">Case ID</div>
                    <div className="detail-value">{selectedCase.caseId}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Type</div>
                    <div className="detail-value">{selectedCase.type}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Reason</div>
                    <div className="detail-value">{selectedCase.reason}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Amount</div>
                    <div className="detail-value">{selectedCase.amount}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Analyst</div>
                    <div className="detail-value">{selectedCase.analyst}</div>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="card-header">Timeline</div>
                  <div className="detail-item">
                    <div className="detail-label">Date Opened</div>
                    <div className="detail-value">{selectedCase.dateOpened}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Date Solved</div>
                    <div className="detail-value">{selectedCase.dateSolved || 'Pending'}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Full Timestamp</div>
                    <div className="detail-value">{selectedCase.fullTimestamp}</div>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="card-header">Transaction Details</div>
                  <div className="detail-item">
                    <div className="detail-label">Transaction ID</div>
                    <div className="detail-value">{selectedCase.transactionId}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Description</div>
                    <div className="detail-value">{selectedCase.description}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Payment Method</div>
                    <div className="detail-value">{selectedCase.paymentMethod}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Risk Level</div>
                    <div className="detail-value">{selectedCase.riskLevel}</div>
                  </div>
                </div>

                <div className="complaint-card">
                  <div className="card-header">Complaint Description</div>
                  <div className="complaint-text">
                    {selectedCase.complaintDescription}
                  </div>
                </div>

                {selectedCase.resolutionSummary && (
                  <div className="resolution-card">
                    <div className="card-header">Resolution Summary</div>
                    <div className="complaint-text">
                      {selectedCase.resolutionSummary}
                    </div>
                  </div>
                )}

                {selectedCase.attachments && selectedCase.attachments.length > 0 && (
                  <div className="attachments-card">
                    <div className="card-header">Attachments</div>
                    {selectedCase.attachments.map((attachment, index) => (
                      <div key={index} className="attachment-item">
                        <div className="attachment-info">
                          <div className="attachment-icon">
                            {attachment.type === 'Document' ? '📄' : 
                             attachment.type === 'Recording' ? '🎤' : '📊'}
                          </div>
                          <div>
                            <div className="attachment-name">{attachment.name}</div>
                            <div className="attachment-date">{attachment.date}</div>
                          </div>
                        </div>
                        <div className="attachment-type">{attachment.type}</div>
                        <a className="view-attachment">View</a>
                      </div>
                    ))}
                  </div>
                )}

                {selectedCase.investigationTimeline && selectedCase.investigationTimeline.length > 0 && (
                  <div className="timeline-card">
                    <div className="card-header">Investigation Timeline</div>
                    {selectedCase.investigationTimeline.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-date">{item.date}</div>
                        <div className="timeline-action">{item.action}</div>
                        <div className="timeline-analyst">By: {item.analyst}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="detail-card">
                  <div className="card-header">Analyst Notes</div>
                  <div className="detail-value" style={{ whiteSpace: 'pre-wrap' }}>
                    {selectedCase.notes}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="action-button" onClick={handlePrint}>Print</button>
              <button className="action-button" onClick={handleExport}>Export CSV</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseHistory;