import React, { useState } from 'react';
import './ClientDashboard.css';

// Icons (you can replace these with actual imports or use inline SVGs)
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const BasicInfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const FinancialIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const DeviceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const MerchantIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const RiskIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const generateTxnId = () => 'TXN' + Math.floor(1000000 + Math.random() * 9000000);

const TransactionDetailModal = ({ transaction, onClose }) => {
  if (!transaction) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-popup" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Transaction Details</h2>
        <div className="transaction-cards-container">
          {/* Basic Info Card */}
          <div className="detail-card">
            <div className="card-title-with-logo">
              <BasicInfoIcon />
              <h3>Basic Information</h3>
            </div>
            <div className="detail-row">
              <span className="detail-label">Transaction ID:</span>
              <span>{transaction.transactionId}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Client Name:</span>
              <span>{transaction.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date & Time:</span>
              <span>{transaction.date} at {transaction.time}</span>
            </div>
          </div>

          {/* Financial Info Card */}
          <div className="detail-card">
            <div className="card-title-with-logo">
              <FinancialIcon />
              <h3>Financial Details</h3>
            </div>
            <div className="detail-row">
              <span className="detail-label">Amount:</span>
              <span className={`amount-cell ${transaction.amount.startsWith('-') ? 'negative' : 'positive'}`}>
                {transaction.amount}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Type:</span>
              <span>{transaction.type}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Status:</span>
              <span className={`status-badge status-${transaction.status.toLowerCase()}`}>
                {transaction.status}
              </span>
            </div>
          </div>

          {/* Device Info Card */}
          <div className="detail-card">
            <div className="card-title-with-logo">
              <DeviceIcon />
              <h3>Device Information</h3>
            </div>
            <div className="detail-row">
              <span className="detail-label">IP Address:</span>
              <span>{transaction.device.ip}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Device Model:</span>
              <span>{transaction.device.model}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Security Models:</span>
              <span>
                {transaction.device.securityModels.join(', ')}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone Number:</span>
              <span>{transaction.device.phoneNumber}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Notes:</span>
              <span>{transaction.device.notes || 'None'}</span>
            </div>
          </div>

          {/* Merchant Info Card */}
          <div className="detail-card">
            <div className="card-title-with-logo">
              <MerchantIcon />
              <h3>Merchant Information</h3>
            </div>
            <div className="detail-row">
              <span className="detail-label">Merchant:</span>
              <span>{transaction.merchant}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Category:</span>
              <span>{transaction.category}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location:</span>
              <span className="location-with-logo">
                <LocationIcon />
                {transaction.location}
              </span>
            </div>
          </div>

          {/* Risk Info Card */}
          <div className="detail-card">
            <div className="card-title-with-logo">
              <RiskIcon />
              <h3>Risk Information</h3>
            </div>
            <div className="detail-row">
              <span className="detail-label">Risk Level:</span>
              <span className={`risk-badge risk-${transaction.risk.toLowerCase()}`}>
                {transaction.risk}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Details:</span>
              <span>{transaction.details}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactions = [
    {
      transactionId: generateTxnId(),
      name: 'Sarah Ahmed',
      time: '2:30 PM',
      amount: '-$250',
      date: 'May 21, 2025',
      type: 'Payment',
      status: 'Completed',
      details: 'Monthly subscription fee',
      risk: 'Low',
      merchant: 'Netflix',
      location: 'New York, USA',
      category: 'Entertainment',
      device: {
        ip: '192.168.1.45',
        model: 'iPhone 13 Pro',
        securityModels: ['Behavioural v2.1', 'Velocity Check 3.1'],
        phoneNumber: '+1 (555) 123-4567',
        notes: 'Device verified through biometrics'
      }
    },
    {
      transactionId: generateTxnId(),
      name: 'Omar Khalid',
      time: '12:15 PM',
      amount: '-$140',
      date: 'May 21, 2025',
      type: 'Refund',
      status: 'Pending',
      details: 'Refund for returned item',
      risk: 'Medium',
      merchant: 'Amazon',
      location: 'San Francisco, USA',
      category: 'E-commerce',
      device: {
        ip: '172.217.14.196',
        model: 'Samsung Galaxy S22',
        securityModels: ['Behavioural v2.1', 'Geo-Fencing 1.4'],
        phoneNumber: '+1 (555) 987-6543',
        notes: 'New device, requires verification'
      }
    },
    {
      transactionId: generateTxnId(),
      name: 'Huda Ali',
      time: '9:00 AM',
      amount: '+$400',
      date: 'May 21, 2025',
      type: 'Payment',
      status: 'Declined',
      details: 'Project milestone payment',
      risk: 'High',
      merchant: 'Upwork',
      location: 'Remote',
      category: 'Freelance',
      device: {
        ip: '104.16.85.20',
        model: 'Google Pixel 6',
        securityModels: ['Behavioural v2.1', 'Anomaly Detection 4.2'],
        phoneNumber: '+1 (555) 456-7890',
        notes: 'Suspicious location detected'
      }
    },
  ];

  const filteredTransactions = transactions.filter(tx =>
    tx.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.risk.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    console.log('Search clicked:', searchTerm);
  };

  const handlePrint = () => {
    const printContent = document.getElementById('transactions-table').outerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = `
      <h1>Client Transactions Report</h1>
      <style>
        @media print {
          body { font-family: Arial, sans-serif; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; }
          th { background-color: #f2f2f2; text-align: left; }
          .status-badge, .risk-badge { padding: 3px 6px; border-radius: 3px; }
          .status-completed { background-color: #d4edda; color: #155724; }
          .status-pending { background-color: #fff3cd; color: #856404; }
          .status-declined { background-color:rgb(92, 0, 0); color: #721c24; }
          .risk-low { background-color: #d4edda; color: #155724; }
          .risk-medium { background-color: #fff3cd; color: #856404; }
          .risk-high { background-color: #f8d7da; color: #721c24; }
        }
      </style>
      ${printContent}
    `;
    window.print();
    document.body.innerHTML = originalContent;
  };

  const handleExport = () => {
    const headers = [
      'Transaction ID', 'Name', 'Amount', 'Type', 'Status', 'Date', 'Time',
      'Details', 'Risk Level', 'Merchant', 'Location', 'Category'
    ];

    const rows = filteredTransactions.map(tx => [
      tx.transactionId,
      tx.name,
      tx.amount,
      tx.type,
      tx.status,
      tx.date,
      tx.time,
      tx.details,
      tx.risk,
      tx.merchant,
      tx.location,
      tx.category,
    ]);

    let csvContent = headers.join(',') + '\n' + 
      rows.map(row => row.map(v => `"${v}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'transactions_export.csv');
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleRowClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Client Transactions</h1>

      <div className="controls-container">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search clients, merchants, categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearchClick(); }}
            aria-label="Search transactions"
          />
          <button
            onClick={handleSearchClick}
            className="search-button"
            aria-label="Search"
          >
            Search
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        <div className="action-buttons">
          <button onClick={handlePrint} className="action-button print-button">
            Print Report
          </button>
          <button onClick={handleExport} className="action-button export-button">
            Export CSV
          </button>
        </div>
      </div>

      <div className="transactions-table-container">
        <table className="transactions-table" id="transactions-table" aria-live="polite">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Client Name</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
              <th>Risk Level</th>
              <th>Date</th>
              <th>Merchant</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <tr 
                  key={tx.transactionId} 
                  onClick={() => handleRowClick(tx)}
                  className="clickable-row"
                >
                  <td>{tx.transactionId}</td>
                  <td>{tx.name}</td>
                  <td className={`amount-cell ${tx.amount.startsWith('-') ? 'negative' : 'positive'}`}>
                    {tx.amount}
                  </td>
                  <td>{tx.type}</td>
                  <td>
                    <span className={`status-badge status-${tx.status.toLowerCase()}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td>
                    <span className={`risk-badge risk-${tx.risk.toLowerCase()}`}>
                      {tx.risk}
                    </span>
                  </td>
                  <td>{tx.date}</td>
                  <td>{tx.merchant}</td>
                  <td>{tx.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="no-results">No transactions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <TransactionDetailModal 
        transaction={selectedTransaction} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default ClientDashboard;