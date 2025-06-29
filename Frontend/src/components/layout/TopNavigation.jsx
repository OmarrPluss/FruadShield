import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserMenu from './UserMenu';

// Define a unique navLink for each page
const NAV_LINKS = {
  dashboard: { id: 'dashboard', icon: 'tachometer-alt', text: 'Dashboard', path: '/dashboard' },
  reports: { id: 'reports', icon: 'chart-pie', text: 'Reports', path: '/reports' },
  marketTrends: { id: 'market-trends', icon: 'chart-line', text: 'Market Trends', path: '/market-trends' },
  casses: { id: 'casses', icon: 'exclamation-triangle', text: 'Casses', path: '/casses' },
  cassesAnalyst: { id: 'client-cases-history', icon: 'exclamation-triangle', text: 'Casses', path: '/client-history' },
  manageUserData: { id: 'manage-user-data', icon: 'users', text: 'Manage User Data', path: '/manage-user-data' },
  modelFeedback: { id: 'model-feedback', icon: 'comment-dots', text: 'Model Feedback', path: '/model-feedback' },
  modelManagment: { id: 'model-managment', icon: 'robot', text: 'Model Managment', path: '/model-managment' },
  settings: { id: 'settings', icon: 'cog', text: 'Settings', path: '/settings' },
  clientFeedback: { id: 'client-feedback', icon: 'comment-dots', text: 'Feedback', path: '/feedback' },
  clientHistory: { id: 'client-history', icon: 'history', text: 'History', path: '/client-history' },
  clientDispute: { id: 'client-dispute', icon: 'gavel', text: 'Dispute Center', path: '/client-dispute' },
  clientHistoryAnalyst: { id: 'client-history-analyst', icon: 'history', text: 'Client History', path: '/client-history-analyst' },
  caseFeedback: { id: 'case-feedback', icon: 'comment-dots', text: 'Case Feedback', path: '/case-feedback' }
};

const TopNavigation = ({ activePage, onPageChange, userType = 'admin', onUserTypeChange, isDark, toggleTheme, onLogout }) => {
  // Build navLinks for each userType
  let navLinks = [];
  switch (userType) {
    case 'manager':
      navLinks = [
        NAV_LINKS.dashboard,
        NAV_LINKS.marketTrends,
        NAV_LINKS.modelManagment,
        NAV_LINKS.reports,
        NAV_LINKS.settings,
      ];
      break;
    case 'client':
      navLinks = [
        NAV_LINKS.dashboard,
        NAV_LINKS.clientDispute,
        NAV_LINKS.clientHistory,
        NAV_LINKS.clientFeedback,
        NAV_LINKS.settings,
      ];
      break;
    case 'analyst':
      navLinks = [
        NAV_LINKS.dashboard,
        NAV_LINKS.clientHistoryAnalyst,
        NAV_LINKS.cassesAnalyst,
        NAV_LINKS.caseFeedback,
        NAV_LINKS.modelFeedback,
        NAV_LINKS.modelManagment,
        NAV_LINKS.settings
      ];
      break;
    case 'admin':
    default:
      navLinks = [
        NAV_LINKS.dashboard,
        NAV_LINKS.marketTrends,
        NAV_LINKS.casses,
        NAV_LINKS.manageUserData,
        NAV_LINKS.modelFeedback,
        NAV_LINKS.modelManagment,
        NAV_LINKS.settings,
      ];
      break;
  }

  // Mock user data
  const user = {
    initials: userType === 'manager' ? 'MG' : userType === 'client' ? 'CL' : userType === 'analyst' ? 'AN' : 'AD',
    name: userType.charAt(0).toUpperCase() + userType.slice(1)
  };

  return (
    <nav style={{ backgroundColor: 'var(--nav-color)', color: 'var(--text-light)' }} className="flex justify-between items-center px-6 h-16 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <Logo />
      <NavLinks 
        links={navLinks} 
        activePage={activePage} 
        onPageChange={onPageChange} 
      />
      <div className="flex items-center gap-4">
        {/* Glassmorphic Slide Switch */}
        <div
          className="relative w-24 h-8 flex items-center cursor-pointer select-none"
          onClick={toggleTheme}
        >
          <div
            className="absolute inset-0 rounded-full backdrop-blur-md border shadow-lg transition-colors duration-300"
            style={{ 
              backgroundColor: isDark ? 'rgba(51, 65, 85, 0.4)' : 'rgba(255, 255, 255, 0.2)',
              borderColor: isDark ? 'rgba(71, 85, 105, 1)' : 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 24px 0 rgba(93,142,255,0.15), 0 1.5px 6px 0 rgba(255,255,255,0.10) inset' 
            }}
          ></div>
          <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${isDark ? 'translate-x-12' : ''}`}
            style={{ 
              backgroundColor: isDark ? 'rgba(51, 65, 85, 1)' : 'rgba(255, 255, 255, 0.7)',
              boxShadow: '0 2px 8px 0 rgba(93,142,255,0.10), 0 1.5px 6px 0 rgba(255,255,255,0.10) inset' 
            }}
          >
            <FontAwesomeIcon
              icon={isDark ? faMoon : faSun}
              className={`text-lg ${isDark ? 'text-blue-300' : 'text-yellow-400'} transition-colors duration-300`}
            />
          </div>
          <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold pointer-events-none select-none transition-colors duration-300 ${isDark ? 'text-blue-300' : 'text-yellow-400'}`}>
            {isDark ? 'Dark' : 'Light'}
          </span>
        </div>
        <UserMenu user={user} onUserTypeChange={onUserTypeChange} onLogout={onLogout} />
      </div>
    </nav>
  );
};

export default TopNavigation;

