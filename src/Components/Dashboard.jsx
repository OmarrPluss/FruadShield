import React, { useState } from 'react';
import ClientDashboard from './ClientDashboard';
import CaseHistory from './CaseHistory';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('transactions');

  return (
    <div
      style={{
        flex: 1,
        padding: '24px',
        overflowY: 'auto',
        width: '95vw',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0a1e3a',
        color: '#dbeeff',
        minHeight: '80vh',
      }}
    >
      {/* Tabs Navigation */}
      <div style={{ 
        display: 'flex', 
        borderBottom: '2px solid #183070', 
        marginBottom: '16px'
      }}>
        {/* Transactions Tab */}
        <div
          onClick={() => setActiveTab('transactions')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: activeTab === 'transactions' ? '3px solid #59a2ff' : 'none',
            color: activeTab === 'transactions' ? '#59a2ff' : '#a0b9e8',
            fontWeight: activeTab === 'transactions' ? 'bold' : 'normal',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            userSelect: 'none',
            transition: 'all 0.2s ease',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" 
                  transform="translate(0,-3)"/>
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" 
                  transform="translate(0,3)"/>
          </svg>
          Transaction History
        </div>

        {/* Case History Tab */}
        <div
          onClick={() => setActiveTab('cases')}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: activeTab === 'cases' ? '3px solid #59a2ff' : 'none',
            color: activeTab === 'cases' ? '#59a2ff' : '#a0b9e8',
            fontWeight: activeTab === 'cases' ? 'bold' : 'normal',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            userSelect: 'none',
            transition: 'all 0.2s ease',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zm6.339-1.577A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
            <path d="M11.854 10.146a.5.5 0 0 0-.707.708L12.293 12l-1.146 1.146a.5.5 0 0 0 .707.708L13 12.707l1.146 1.147a.5.5 0 0 0 .708-.708L13.707 12l1.147-1.146a.5.5 0 0 0-.707-.708L13 11.293l-1.146-1.147z"/>
          </svg>
          Case History
        </div>
      </div>

      {/* Tab Content Area */}
      <div style={{ 
        flex: 1, 
        width: '100%', 
        overflowY: 'auto',
        padding: '8px 4px'
      }}>
        {activeTab === 'transactions' ? <ClientDashboard /> : <CaseHistory />}
      </div>
    </div>
  );
};

export default Dashboard;