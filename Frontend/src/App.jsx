import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import TopNavigation from './components/layout/TopNavigation';
import DashboardPage from './pages/DashboardPage';
import MarketTrends from './pages/MarketTrends';
import CassesPage from './pages/CassesPage';
import ManageUserDataPage from './pages/ManageUserDataPage';
import ModelFeedback from './pages/ModelFeedbackNew';
import ModelManagment from './pages/ModelManagment';
import SettingsPage from './pages/SettingsPage';
import ReportsPage from './pages/ReportsPage';
import ManagerDashboard from './pages/ManagerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import AnalystDashboard from './pages/AnalystDashboard';
import ClientFeedback from './pages/ClientFeedback';
import ClientHistory from './pages/ClientHistory';
import CaseDetails from './pages/CaseDetails';
import ClientDispute from './pages/ClientDispute';
import ProfilePage from './pages/ProfilePage';
import ClientHistoryAnalyst from './pages/ClientHistoryAnalyst';
import CaseFeedbackAnalyst from './pages/CaseFeedbackAnalyst';
import CaseReview from './pages/CaseReview';
import LogDetails from './pages/LogDetails';
import TransactionDetails from './pages/TransactionDetails';
import { DashboardProvider } from './context/DashboardContext';
import './styles/global.css';

// Import Auth Components
import AuthContainer from './components/AuthContainer';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShieldAlt, faTachometerAlt, faChartLine, faBell, faUsers, faCog,
  faChevronDown, faCalendar, faFileExport, faGlobe, faExclamationTriangle,
  faCreditCard, faChartPie, faFilter, faIndustry, faSyncAlt, faMapMarkedAlt,
  faLayerGroup, faGavel, faPrint, faWallet, faBullseye, faDollarSign, faMedal,
  faTrophy, faLightbulb, faMoneyBillWave, faCalculator, faCalendarAlt, faCheckCircle,
  faNewspaper, faList, faExpand, faEllipsisH, faCaretUp, faCaretDown, faMinus,
  faChevronUp, faRobot, faCommentDots, faHistory, faEye, faEyeSlash, faEdit, faSave, faTimes
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
  faShieldAlt, faTachometerAlt, faChartLine, faBell, faUsers, faCog,
  faChevronDown, faCalendar, faFileExport, faGlobe, faExclamationTriangle,
  faCreditCard, faChartPie, faFilter, faIndustry, faSyncAlt, faMapMarkedAlt,
  faLayerGroup, faGavel, faPrint, faWallet, faBullseye, faDollarSign, faMedal,
  faTrophy, faLightbulb, faMoneyBillWave, faCalculator, faCalendarAlt, faCheckCircle,
  faNewspaper, faList, faExpand, faEllipsisH, faCaretUp, faCaretDown, faMinus,
  faChevronUp, faRobot, faCommentDots, faHistory, faEye, faEyeSlash, faEdit, faSave, faTimes
);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('dashboard');
  const [userType, setUserType] = useState('admin'); // Default to admin
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState('login');

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document and body
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const switchToLogin = () => {
    setCurrentPage('login');
  };

  const switchToSignup = () => {
    setCurrentPage('signup');
  };

  const handleLoginSuccess = (loginUserType = 'admin') => {
    setUserType(loginUserType);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userType', loginUserType);

    // Navigate to appropriate dashboard based on user type
    switch (loginUserType) {
      case 'manager':
        navigate('/manager-dashboard');
        break;
      case 'client':
        navigate('/client-dashboard');
        break;
      case 'analyst':
        navigate('/analyst-dashboard');
        break;
      case 'admin':
      default:
        navigate('/dashboard');
        break;
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    setUserType('admin');
    setCurrentPage('login');
    navigate('/');
  };

  // Sync activePage with the current route
  useEffect(() => {
    if (isAuthenticated) {
      if (location.pathname.startsWith('/dashboard') || location.pathname === '/') {
        setActivePage('dashboard');
      } else if (location.pathname.startsWith('/reports')) {
        setActivePage('reports');
      } else if (location.pathname.startsWith('/market-trends')) {
        setActivePage('market-trends');
      } else if (location.pathname.startsWith('/casses')) {
        setActivePage('casses');
      } else if (location.pathname.startsWith('/manage-user-data')) {
        setActivePage('manage-user-data');
      } else if (location.pathname.startsWith('/model-feedback')) {
        setActivePage('model-feedback');
      } else if (location.pathname.startsWith('/model-managment')) {
        setActivePage('model-managment');
      } else if (location.pathname.startsWith('/settings')) {
        setActivePage('settings');
      }
    }
  }, [location.pathname, isAuthenticated]);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <AuthContainer
          currentPage={currentPage}
          switchToLogin={switchToLogin}
          switchToSignup={switchToSignup}
          onLoginSuccess={handleLoginSuccess}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
      ) : (
        <>
          <TopNavigation
            activePage={activePage}
            onPageChange={setActivePage}
            userType={userType}
            onUserTypeChange={setUserType}
            isDark={isDark}
            toggleTheme={toggleTheme}
            onLogout={handleLogout}
          />
          <div className="main-content p-6 w-9/10 mx-auto">
            <Routes>
              <Route
                path="/"
                element={
                  userType === 'manager' ? (
                    <ManagerDashboard />
                  ) : userType === 'client' ? (
                    <ClientDashboard />
                  ) : userType === 'analyst' ? (
                    <AnalystDashboard />
                  ) : (
                    <DashboardProvider>
                      <DashboardPage setActivePage={setActivePage} />
                    </DashboardProvider>
                  )
                }
              />
              <Route path="/dashboard" element={
                userType === 'manager' ? (
                  <ManagerDashboard />
                ) : userType === 'client' ? (
                  <ClientDashboard />
                ) : userType === 'analyst' ? (
                  <AnalystDashboard />
                ) : (
                  <DashboardProvider>
                    <DashboardPage setActivePage={setActivePage} />
                  </DashboardProvider>
                )
              } />
              <Route path="/market-trends" element={<MarketTrends />} />
              <Route path="/casses" element={<CassesPage />} />
              <Route path="/manage-user-data" element={<ManageUserDataPage />} />
              <Route path="/model-feedback" element={<ModelFeedback />} />
              <Route path="/model-managment" element={<ModelManagment userType={userType} />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/manager-dashboard" element={<ManagerDashboard />} />
              <Route path="/client-dashboard" element={<ClientDashboard />} />
              <Route path="/analyst-dashboard" element={<AnalystDashboard />} />
              <Route path="/feedback" element={<ClientFeedback />} />
              <Route path="/client-history" element={<ClientHistory />} />
              <Route path="/case-details/:id" element={<CaseDetails />} />
              <Route path="/client-dispute" element={<ClientDispute />} />
              <Route path="/client-history-analyst" element={<ClientHistoryAnalyst />} />
              <Route path="/case-feedback" element={<CaseFeedbackAnalyst />} />
              <Route path="/case-review" element={<CaseReview />} />
              <Route path="/log-details/:logId" element={<LogDetails />} />
              <Route path="/transaction-details" element={<TransactionDetails />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

