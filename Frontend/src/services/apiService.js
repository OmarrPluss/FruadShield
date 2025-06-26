import axios from 'axios';

// Mock data for development
const mockData = {
  sysHealthData: {
    uptime: 99.98,
    apiResponse: 118, // ms
    dbConnections: { current: 45, max: 100 },
    jobQueue: "medium" // Could be Normal, Warning, Critical
  },
  userMgmtData: {
    totalActive: 253,
    admins: 5,
    analysts: 22,
    pendingRequests: 2
  },
  securityEventsData: {
    failedLogins: 18,
    permissionChanges: 1,
    integrityChecks: "Passed", // Passed, Failed
    lastAudit: "April 30, 2025"
  },
  fraudEngineData: {
    version: "v2.5.3",
    lastRuleUpdate: "May 09, 2025",
    alertsToday: 1302,
    queueStatus: "Healthy" // Healthy, Degraded, Critical
  },
  criticalLogs: [
    { timestamp: "2025-05-09 16:50:01", level: "ERROR", message: "Database connection timeout on replica-02. Service impact likely." },
    { timestamp: "2025-05-09 16:45:15", level: "WARN", message: "High CPU usage (92%) detected on worker-05. Performance may degrade." },
    { timestamp: "2025-05-09 16:30:00", level: "ERROR", message: "Rule engine failed to load new ruleset critical_rules.xml - syntax error in rule ID 45B." },
    { timestamp: "2025-05-09 16:15:45", level: "INFO", message: "System maintenance window started. Scheduled downtime for non-critical services." },
    { timestamp: "2025-05-09 16:05:20", level: "WARN", message: "Disk space on /var/log approaching 85% full." }
  ]
};

// Base API URL - would be replaced with actual API endpoint in production
const API_BASE_URL = 'https://api.example.com';

// API client with authentication
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication interceptor
apiClient.interceptors.request.use(
  (config) => {
    // In a real app, you would get the token from localStorage or a secure store
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Dashboard data fetching
export const fetchDashboardData = async () => {
  // In development, return mock data
  if (process.env.NODE_ENV === 'development') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockData;
  }
  
  // In production, fetch from API
  try {
    const response = await apiClient.get('/dashboard');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

// User management API methods
export const fetchUsers = async () => {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { users: [] }; // Mock user data would go here
  }
  
  const response = await apiClient.get('/users');
  return response.data;
};

// System logs API methods
export const fetchSystemLogs = async (filters = {}) => {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { logs: mockData.criticalLogs }; // Return mock logs
  }
  
  const response = await apiClient.get('/logs', { params: filters });
  return response.data;
};

// Settings API methods
export const fetchSettings = async () => {
  if (process.env.NODE_ENV === 'development') {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { settings: {} }; // Mock settings would go here
  }
  
  const response = await apiClient.get('/settings');
  return response.data;
};

export default apiClient;
