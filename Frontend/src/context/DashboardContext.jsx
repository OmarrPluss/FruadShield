import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchDashboardData } from '../services/apiService';

const defaultContext = {
  sysHealthData: {
    uptime: 0,
    apiResponse: 0,
    dbConnections: { current: 0, max: 0 },
    jobQueue: '',
  },
  userMgmtData: {
    totalActive: 0,
    admins: 0,
    analysts: 0,
    pendingRequests: 0,
  },
  securityEventsData: {
    failedLogins: 0,
    permissionChanges: 0,
    integrityChecks: '',
    lastAudit: '',
  },
  fraudEngineData: {
    version: '',
    lastRuleUpdate: '',
    alertsToday: 0,
    queueStatus: '',
  },
  criticalLogs: [],
  loading: true,
  error: null,
  refreshData: () => {},
};

const DashboardContext = createContext(defaultContext);

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(defaultContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDashboardData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchDashboardData();
      setDashboardData({
        ...dashboardData,
        ...data,
        loading: false,
        error: null,
      });
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error('Error loading dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshData = () => {
    loadDashboardData();
  };

  const value = {
    ...dashboardData,
    loading,
    error,
    refreshData,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};
