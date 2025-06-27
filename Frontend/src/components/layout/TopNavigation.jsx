import React, { useState } from 'react';
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
  manageUserData: { id: 'manage-user-data', icon: 'users', text: 'Manage User Data', path: '/manage-user-data' },
  modelFeedback: { id: 'model-feedback', icon: 'comment-dots', text: 'Model Feedback', path: '/model-feedback' },
  modelManagment: { id: 'model-managment', icon: 'robot', text: 'Model Managment', path: '/model-managment' },
  settings: { id: 'settings', icon: 'cog', text: 'Settings', path: '/settings' },
  clientFeedback: { id: 'client-feedback', icon: 'comment-dots', text: 'Feedback', path: '/feedback' },
  clientHistory: { id: 'client-history', icon: 'history', text: 'History', path: '/client-history' },
  clientDispute: { id: 'client-dispute', icon: 'gavel', text: 'Dispute Center', path: '/client-dispute' }
};

const TopNavigation = ({ activePage, onPageChange, userType = 'admin', onUserTypeChange }) => {
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
        // NAV_LINKS.cases,
        // NAV_LINKS.clientHistory,
        NAV_LINKS.modelFeedback,
        NAV_LINKS.modelManagment,
        // NAV_LINKS.clientFeedbackm,
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

  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or default to true
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  // Set theme before paint to avoid flash
  React.useLayoutEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="bg-nav-color flex justify-between items-center px-6 h-16 shadow-nav sticky top-0 z-50">
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
          onClick={() => setDarkMode((prev) => !prev)}
        >
          <div
            className="absolute inset-0 rounded-full bg-white/20 dark:bg-slate-800/40 backdrop-blur-md border border-white/30 dark:border-slate-700 shadow-lg transition-colors duration-300"
            style={{ boxShadow: '0 4px 24px 0 rgba(93,142,255,0.15), 0 1.5px 6px 0 rgba(255,255,255,0.10) inset' }}
          ></div>
          <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white/70 dark:bg-slate-700 shadow-md flex items-center justify-center transition-all duration-300 ${darkMode ? 'translate-x-12' : ''}`}
            style={{ boxShadow: '0 2px 8px 0 rgba(93,142,255,0.10), 0 1.5px 6px 0 rgba(255,255,255,0.10) inset' }}
          >
            <FontAwesomeIcon
              icon={darkMode ? faMoon : faSun}
              className={`text-lg ${darkMode ? 'text-blue-300' : 'text-yellow-400'} transition-colors duration-300`}
            />
          </div>
          <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold pointer-events-none select-none transition-colors duration-300 ${darkMode ? 'text-blue-300' : 'text-yellow-400'}`}>{darkMode ? 'Dark' : 'Light'}</span>
        </div>
        <UserMenu user={user} onUserTypeChange={onUserTypeChange} />
      </div>
    </nav>
  );
};

export default TopNavigation;
