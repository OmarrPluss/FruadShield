import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopNavigation from './components/layout/TopNavigation';
import DashboardPage from './pages/DashboardPage';
import MarketTrends from './pages/MarketTrends';
import CassesPage from './pages/CassesPage';
import ManageUserDataPage from './pages/ManageUserDataPage';
import ModelFeedback from './pages/ModelFeedback';
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
import { DashboardProvider } from './context/DashboardContext';
import './styles/global.css';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faShieldAlt, faTachometerAlt, faChartLine, faBell, faUsers, faCog, 
  faChevronDown, faCalendar, faFileExport, faGlobe, faExclamationTriangle,
  faCreditCard, faChartPie, faFilter, faIndustry, faSyncAlt, faMapMarkedAlt,
  faLayerGroup, faGavel, faPrint, faWallet, faBullseye, faDollarSign, faMedal,
  faTrophy, faLightbulb, faMoneyBillWave, faCalculator, faCalendarAlt, faCheckCircle,
  faNewspaper, faList, faExpand, faEllipsisH, faCaretUp, faCaretDown, faMinus,
  faChevronUp, faRobot, faCommentDots, faHistory
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
  faShieldAlt, faTachometerAlt, faChartLine, faBell, faUsers, faCog, 
  faChevronDown, faCalendar, faFileExport, faGlobe, faExclamationTriangle,
  faCreditCard, faChartPie, faFilter, faIndustry, faSyncAlt, faMapMarkedAlt,
  faLayerGroup, faGavel, faPrint, faWallet, faBullseye, faDollarSign, faMedal,
  faTrophy, faLightbulb, faMoneyBillWave, faCalculator, faCalendarAlt, faCheckCircle,
  faNewspaper, faList, faExpand, faEllipsisH, faCaretUp, faCaretDown, faMinus,
  faChevronUp, faRobot, faCommentDots, faHistory
);

function App() {
  const location = useLocation();
  const [activePage, setActivePage] = useState('dashboard');
  // Example: get userType from localStorage, context, or props
  const [userType, setUserType] = useState('analyst'); // Now setUserType is available

  // Sync activePage with the current route
  useEffect(() => {
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
  }, [location.pathname]);

  return (
    <div className="App">
      <TopNavigation 
        activePage={activePage} 
        onPageChange={setActivePage} 
        userType={userType}
        onUserTypeChange={setUserType}
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
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/analyst-dashboard" element={<AnalystDashboard />} />
          <Route path="/feedback" element={<ClientFeedback />} />
          <Route path="/client-history" element={<ClientHistory />} />
          <Route path="/case-details/:id" element={<CaseDetails />} />
          <Route path="/client-dispute" element={<ClientDispute />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;