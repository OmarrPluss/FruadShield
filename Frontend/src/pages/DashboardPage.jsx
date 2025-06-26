import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import DashboardCard from '../components/ui/DashboardCard';
import MetricGrid from '../components/ui/MetricGrid';
import MetricItem from '../components/ui/MetricItem';
import SparklineChart from '../components/charts/SparklineChart';
import LogList from '../components/ui/LogList';
import ConfigLinks from '../components/ui/ConfigLinks';
import StatusDisplay from '../components/ui/StatusDisplay';

const DashboardPage = ({ setActivePage }) => {
  const {
    sysHealthData,
    userMgmtData,
    securityEventsData,
    fraudEngineData,
    criticalLogs,
    loading,
    error,
    refreshData
  } = useDashboard();

  // Generate time series data for sparkline chart
  const generateTimeSeriesData = () => {
    const now = Date.now();
    const labels = Array.from({ length: 10 }, (_, i) => new Date(now - (9 - i) * 300000));
    const data = [120, 125, 110, 115, 130, 122, 118, 123, 119, sysHealthData.apiResponse];
    return { labels, data };
  };

  const { labels, data } = generateTimeSeriesData();

  // Configuration links
  const configLinks = [
    { text: 'Fraud Detection Thresholds', href: '/settings/thresholds' },
    { text: 'Alerting Rules & Notifications', href: '/settings/alerts' },
    { text: 'User Role Permissions', href: '/settings/roles' },
    { text: 'System Maintenance Settings', href: '/settings/maintenance' },
    { text: 'API Key Management', href: '/settings/api-keys' }
  ];

  if (loading) {
    return <div className="loading">Loading dashboard data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <main className="dashboard-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* System Health Overview */}
      <DashboardCard title="System Health">
        <MetricGrid>
          <MetricItem
            label="Server Uptime"
            value={`${sysHealthData.uptime}%`}
            status={
              sysHealthData.uptime >= 99.95
                ? 'green'
                : sysHealthData.uptime >= 99.0
                ? 'yellow'
                : 'red'
            }
          />
          <MetricItem
            label="Avg API Response"
            value={`${sysHealthData.apiResponse} ms`}
            status={
              sysHealthData.apiResponse <= 150
                ? 'green'
                : sysHealthData.apiResponse <= 300
                ? 'yellow'
                : 'red'
            }
          />
          <MetricItem
            label="DB Connections"
            value={`${sysHealthData.dbConnections.current}/${sysHealthData.dbConnections.max}`}
            status={
              (sysHealthData.dbConnections.current / sysHealthData.dbConnections.max) * 100 < 70
                ? 'green'
                : (sysHealthData.dbConnections.current / sysHealthData.dbConnections.max) * 100 < 90
                ? 'yellow'
                : 'red'
            }
          />
          <MetricItem
            label="Job Queue"
            value={<StatusDisplay status={sysHealthData.jobQueue} />}
          />
        </MetricGrid>
        <SparklineChart data={data} labels={labels} />
      </DashboardCard>

      {/* User Management */}
      <DashboardCard
        title="User Management"
        actionLink={{
          text: 'Manage Users',
          href: '/manage-user-data',
          onClick: () => setActivePage && setActivePage('manage-user-data')
        }}
      >
        <MetricGrid>
          <MetricItem label="Total Active Users" value={userMgmtData.totalActive} />
          <MetricItem label="Administrators" value={userMgmtData.admins} />
          <MetricItem label="Analysts" value={userMgmtData.analysts} />
          <MetricItem
            label="Pending Access Requests"
            value={userMgmtData.pendingRequests}
            status={userMgmtData.pendingRequests > 0 ? 'yellow' : 'green'}
          />
        </MetricGrid>
      </DashboardCard>

      {/* Security Events */}
      <DashboardCard
        title="Security Events (Last 24h)"
        actionLink={{
          text: 'View Audit Logs',
          href: '/model-managment',
          onClick: () => setActivePage && setActivePage('model-managment')
        }}
      >
        <MetricGrid>
          <MetricItem
            label="Failed Logins"
            value={securityEventsData.failedLogins}
            status={
              securityEventsData.failedLogins > 10
                ? 'red'
                : securityEventsData.failedLogins > 0
                ? 'yellow'
                : 'green'
            }
          />
          <MetricItem
            label="Critical Permission Changes"
            value={securityEventsData.permissionChanges}
            status={securityEventsData.permissionChanges > 0 ? 'yellow' : 'green'}
          />
        </MetricGrid>
        <p style={{ fontSize: '0.9em', marginTop: '15px' }}>
          Data Integrity Checks:{' '}
          <span
            className={
              securityEventsData.integrityChecks === 'Passed'
                ? 'text-green'
                : 'text-red'
            }
          >
            {securityEventsData.integrityChecks}
          </span>
        </p>
        <p style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>
          Last Security Audit: {securityEventsData.lastAudit}
        </p>
      </DashboardCard>

      {/* System Configuration */}
      <DashboardCard title="System Configuration">
        <ConfigLinks links={configLinks} />
      </DashboardCard>

      {/* Recent Critical Logs */}
      <DashboardCard
        title="Recent Critical Logs"
        actionLink={{
          text: 'View Full Logs',
          href: '/model-managment',
          onClick: () => setActivePage && setActivePage('model-managment')
        }}
      >
        <LogList logs={criticalLogs} />
      </DashboardCard>

      {/* Fraud Engine Status */}
      <DashboardCard title="Fraud Engine Status">
        <MetricGrid>
          <MetricItem label="Rule Engine Version" value={fraudEngineData.version} />
          <MetricItem label="Last Rule Update" value={fraudEngineData.lastRuleUpdate} />
          <MetricItem label="Alerts Generated (Today)" value={fraudEngineData.alertsToday} />
          <MetricItem
            label="Processing Queue"
            value={<StatusDisplay status={fraudEngineData.queueStatus} />}
          />
        </MetricGrid>
      </DashboardCard>
    </main>
  );
};

export default DashboardPage;