import React, { useState } from 'react';

const FraudWatchLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    style={{ marginRight: '10px' }}
  >
    <path 
      d="M12 2L4 5v6c0 5 4 9 8 9s8-4 8-9V5l-8-3z" 
      stroke="#4a90e2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M12 22c4 0 8-4 8-9V5l-8-3v20z" 
      fill="#2a7de1"
    />
  </svg>
);

const DashboardLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const MarketTrendsLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const ModelStatsLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const AlertsLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const FeedbackLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const HistoryLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const SettingsLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d0e7ff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginLeft: '4px' }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const TopBar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <DashboardLogo /> },
    { name: 'Market Trends', icon: <MarketTrendsLogo /> },
    { name: 'Model Stats', icon: <ModelStatsLogo /> },
    { name: 'Alerts', icon: <AlertsLogo /> },
    { name: 'Feedback', icon: <FeedbackLogo /> },
    { name: 'History', icon: <HistoryLogo /> },
    { name: 'Settings', icon: <SettingsLogo /> }
  ];

  return (
    <header
      style={{
        width: '100%',
        backgroundColor: '#394f68',
        color: '#cbd6e8',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxSizing: 'border-box',
        height: '60px',
        boxShadow: '0 2px 6px rgba(20, 40, 60, 0.4)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FraudWatchLogo />
        <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#d0e7ff' }}>
          Fraud Watch
        </h1>
      </div>
      
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '12px',
            margin: 0,
            padding: 0,
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              style={{
                color: activeTab === item.name ? '#ffffff' : '#cbd6e8',
                backgroundColor: activeTab === item.name ? '#2a7de1' : 'transparent',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => {
                if (activeTab !== item.name) {
                  e.currentTarget.style.backgroundColor = '#3a4f6e';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== item.name) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#cbd6e8';
                }
              }}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      
      <div 
        style={{ 
          position: 'relative',
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          cursor: 'pointer',
          padding: '6px 12px',
          borderRadius: '20px',
          transition: 'all 0.3s ease',
        }}
        onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
        onMouseEnter={() => setIsAdminMenuOpen(true)}
        onMouseLeave={() => setIsAdminMenuOpen(false)}
      >
        <div 
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#4a90e2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '14px',
          }}
        >
          AD
        </div>
        <span style={{ color: '#d0e7ff', fontSize: '14px', fontWeight: '500' }}>Admin</span>
        <ChevronDown />
        
        {isAdminMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              backgroundColor: '#394f68',
              borderRadius: '8px',
              padding: '8px 0',
              minWidth: '160px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              zIndex: 1001,
            }}
          >
            <div
              style={{
                padding: '8px 16px',
                color: '#d0e7ff',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: '#3a4f6e',
                }
              }}
            >
              Profile
            </div>
            <div
              style={{
                padding: '8px 16px',
                color: '#d0e7ff',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: '#3a4f6e',
                }
              }}
            >
              Settings
            </div>
            <div
              style={{
                padding: '8px 16px',
                color: '#d0e7ff',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: '#3a4f6e',
                }
              }}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopBar;