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
  faChevronUp, faRobot, faCommentDots
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
  faShieldAlt, faTachometerAlt, faChartLine, faBell, faUsers, faCog, 
  faChevronDown, faCalendar, faFileExport, faGlobe, faExclamationTriangle,
  faCreditCard, faChartPie, faFilter, faIndustry, faSyncAlt, faMapMarkedAlt,
  faLayerGroup, faGavel, faPrint, faWallet, faBullseye, faDollarSign, faMedal,
  faTrophy, faLightbulb, faMoneyBillWave, faCalculator, faCalendarAlt, faCheckCircle,
  faNewspaper, faList, faExpand, faEllipsisH, faCaretUp, faCaretDown, faMinus,
  faChevronUp, faRobot, faCommentDots
);

function App() {
  const location = useLocation();
  const [activePage, setActivePage] = useState('dashboard');

  // Sync activePage with the current route
  useEffect(() => {
    if (location.pathname.startsWith('/dashboard') || location.pathname === '/') {
      setActivePage('dashboard');
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
      />
      <div className="main-content p-6 max-w-7xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <DashboardProvider>
                <DashboardPage setActivePage={setActivePage} />
              </DashboardProvider>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardProvider>
                <DashboardPage setActivePage={setActivePage} />
              </DashboardProvider>
            }
          />
          <Route path="/market-trends" element={<MarketTrends />} />
          <Route path="/casses" element={<CassesPage />} />
          <Route path="/manage-user-data" element={<ManageUserDataPage />} />
          <Route path="/model-feedback" element={<ModelFeedback />} />
          <Route path="/model-managment" element={<ModelManagment />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;