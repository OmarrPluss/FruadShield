import React, { useState, useMemo } from "react";

// SVG Icons
const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" 
          stroke="#ff4d4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ListIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" 
          stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const severityColors = {
  Critical: "#ff4d4f",
  Warning: "#faad14",
  Info: "#1890ff"
};

const logsPerPage = 5;

const ModelLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");
  const [modelFilter, setModelFilter] = useState("All");
  const [timeRangeFilter, setTimeRangeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const criticalLogs = [
    { time: "10:04:25 AM", severity: "Critical", model: "Transaction Model", description: "Model confidence dropped below 60% threshold" },
    { time: "09:42:51 AM", severity: "Critical", model: "Behavioural Model", description: "API connection timeout - 3 consecutive failures" },
    { time: "09:35:33 AM", severity: "Warning", model: "Stacking Ensemble", description: "Feature drift detected in transaction amount" },
    { time: "08:10:07 AM", severity: "Critical", model: "Account Model", description: "Prediction latency exceeded 500ms threshold" },
  ];

  const allLogs = [
    { timestamp: "2025-05-14 10:04:25", uidRole: "System", action: "Model Alert", description: "Transaction model confidence dropped below 60% threshold", actionType: "Automated", component: "Transaction Model", severity: "Critical" },
    { timestamp: "2025-05-14 09:42:51", uidRole: "admin.user", action: "Threshold Update", description: "Changed behavioural model threshold from 0.65 to 0.68", actionType: "Manual", component: "Behavioural Model", severity: "Info" },
    { timestamp: "2025-05-14 09:35:33", uidRole: "System", action: "Connection Error", description: "API connection timeout - 3 consecutive failures", actionType: "Automated", component: "Behavioural Model", severity: "Warning" },
    { timestamp: "2025-05-14 09:24:17", uidRole: "model_engineer", action: "Model Update", description: "Successfully refreshed account model weights", actionType: "Manual", component: "Account Model", severity: "Info" },
    { timestamp: "2025-05-14 09:10:33", uidRole: "System", action: "Data Drift", description: "Feature drift detected in transaction amount", actionType: "Automated", component: "Stacking Ensemble", severity: "Warning" },
    { timestamp: "2025-05-14 09:03:47", uidRole: "audit_bot", action: "Access Log", description: "Business manager accessed model performance dashboard", actionType: "Manual", component: "System", severity: "Info" },
    { timestamp: "2025-05-14 08:10:07", uidRole: "System", action: "Performance Alert", description: "Prediction latency exceeded 500ms threshold", actionType: "Automated", component: "Account Model", severity: "Critical" },
    { timestamp: "2025-05-14 08:00:11", uidRole: "data_engineer", action: "Feature Update", description: "Added new transaction velocity feature", actionType: "Manual", component: "Transaction Model", severity: "Info" },
    { timestamp: "2025-05-14 07:50:20", uidRole: "data_engineer", action: "Data Upload", description: "Uploaded missing customer segments", actionType: "Manual", component: "Data Pipeline", severity: "Info" },
    { timestamp: "2025-05-14 07:35:10", uidRole: "System", action: "Data Drift", description: "Detected drift in geolocation features", actionType: "Automated", component: "Account Model", severity: "Warning" },
    { timestamp: "2025-05-14 07:22:00", uidRole: "admin", action: "Threshold Change", description: "Changed stacking ensemble risk threshold", actionType: "Manual", component: "Stacking Ensemble", severity: "Info" },
    { timestamp: "2025-05-14 07:11:11", uidRole: "audit_bot", action: "Audit Log", description: "Logged daily model health stats", actionType: "Automated", component: "Audit", severity: "Info" },
  ];

  // Get unique models/components for filter dropdown
  const allModels = useMemo(() => {
    const models = new Set();
    allLogs.forEach(log => models.add(log.component));
    criticalLogs.forEach(log => log.model && models.add(log.model));
    return ["All", ...Array.from(models).sort()];
  }, []);

  const filterLogs = (logs) => {
    return logs.filter(log => {
      // Severity filter
      if (severityFilter !== "All" && log.severity !== severityFilter) return false;
      
      // Model/component filter
      const component = log.model || log.component;
      if (modelFilter !== "All" && component !== modelFilter) return false;
      
      // Time range filter
      if (timeRangeFilter !== "All") {
        const logDate = new Date(log.timestamp || `2025-05-14 ${log.time}`);
        const now = new Date();
        const hoursDiff = (now - logDate) / (1000 * 60 * 60);
        
        if (timeRangeFilter === "Last hour" && hoursDiff > 1) return false;
        if (timeRangeFilter === "Last 4 hours" && hoursDiff > 4) return false;
        if (timeRangeFilter === "Last 24 hours" && hoursDiff > 24) return false;
      }
      
      // Search term filter
      const textToSearch = (log.description + " " + component).toLowerCase();
      return textToSearch.includes(searchTerm.toLowerCase());
    });
  };

  const filteredCriticalLogs = useMemo(() => filterLogs(criticalLogs), [searchTerm, severityFilter, modelFilter, timeRangeFilter]);
  const filteredAllLogs = useMemo(() => filterLogs(allLogs), [searchTerm, severityFilter, modelFilter, timeRangeFilter]);

  const totalPages = Math.ceil(filteredAllLogs.length / logsPerPage);
  const currentLogs = filteredAllLogs.slice(
    (currentPage - 1) * logsPerPage,
    currentPage * logsPerPage
  );

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) setCurrentPage(pageNum);
  };

  const SeverityIndicator = ({ severity }) => {
    return (
      <span className="severity-indicator" style={{ color: severityColors[severity] }}>
        {severity}
      </span>
    );
  };

  return (
    <div className="logs-container">
      {/* Top Navigation Bar */}
      <div className="top-navbar">
        <div className="top-navbar-left">Model Monitoring</div>
        <div className="top-navbar-center">
          <button className="top-tab">Overview</button>
          <button className="top-tab">XAI</button>
          <button className="top-tab active">Logs</button>
          <button className="top-tab">Performance</button>
          <button className="top-tab">Drift</button>
        </div>
        <div className="top-navbar-right">
          {/* Removed the model name and status */}
        </div>
      </div>

      {/* Logs Header */}
      <div className="logs-header">
        <h1>Model Logs & Monitoring</h1>
        <p>Last updated: May 14, 2025 at 10:15 AM</p>
      </div>

      {/* Filters */}
      <div className="logs-filters">
        <input
          type="text"
          placeholder="Search model or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={severityFilter} onChange={(e) => setSeverityFilter(e.target.value)}>
          <option value="All">All Severities</option>
          <option value="Critical">Critical</option>
          <option value="Warning">Warning</option>
          <option value="Info">Info</option>
        </select>
        <select value={modelFilter} onChange={(e) => setModelFilter(e.target.value)}>
          {allModels.map(model => (
            <option key={model} value={model}>
              {model === "All" ? "All Models" : model}
            </option>
          ))}
        </select>
        <select value={timeRangeFilter} onChange={(e) => setTimeRangeFilter(e.target.value)}>
          <option value="All">All Time</option>
          <option value="Last hour">Last Hour</option>
          <option value="Last 4 hours">Last 4 Hours</option>
          <option value="Last 24 hours">Last 24 Hours</option>
        </select>
        <button className="btn-export">Export Logs</button>
      </div>

      {/* Critical Logs Section */}
      <div className="logs-section">
        <div className="section-header">
          <WarningIcon />
          <h2>Critical Logs</h2>
        </div>
        <table className="logs-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Severity</th>
              <th>Model</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCriticalLogs.length > 0 ? (
              filteredCriticalLogs.map((log, idx) => (
                <tr key={idx} className={`log-row ${log.severity.toLowerCase()}-highlight`}>
                  <td>{log.time}</td>
                  <td><SeverityIndicator severity={log.severity} /></td>
                  <td>{log.model}</td>
                  <td>{log.description}</td>
                  <td><button className="btn-details">Details</button></td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={5} className="empty-state">No matching logs found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* All Logs Section */}
      <div className="logs-section">
        <div className="section-header">
          <ListIcon />
          <h2>All Logs</h2>
        </div>
        <table className="logs-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>UID/Role</th>
              <th>Action</th>
              <th>Description</th>
              <th>Action Type</th>
              <th>Affected Component</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {currentLogs.length > 0 ? (
              currentLogs.map((log, idx) => (
                <tr key={idx} className={`log-row ${log.severity.toLowerCase()}-highlight`}>
                  <td>{log.timestamp}</td>
                  <td>{log.uidRole}</td>
                  <td>{log.action}</td>
                  <td>{log.description}</td>
                  <td>{log.actionType}</td>
                  <td>{log.component}</td>
                  <td><SeverityIndicator severity={log.severity} /></td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={7} className="empty-state">No matching logs found.</td></tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active-page" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>

      <style jsx global>{`
        html, body, #__next, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100vh;
          background-color: #0c0f1f;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #ffffff;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

      <style jsx>{`
        .logs-container {
          background-color: #0c0f1f;
          color: #ffffff;
          padding: 32px;
          width: 100%;
          min-height: 100vh;
        }

        /* Navigation */
        .top-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #1a1e34;
          padding: 1rem 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .top-navbar-left {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .top-navbar-center {
          display: flex;
          gap: 1rem;
        }

        .top-tab {
          background: none;
          border: none;
          color: #ccc;
          font-size: 0.875rem;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.3s;
        }

        .top-tab:hover,
        .top-tab.active {
          background-color: #2d3148;
          color: white;
        }

        .top-navbar-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Header */
        .logs-header {
          margin-bottom: 2rem;
        }

        .logs-header h1 {
          font-size: 1.75rem;
          margin-bottom: 0.25rem;
        }

        .logs-header p {
          font-size: 0.875rem;
          color: #888;
        }

        /* Filters */
        .logs-filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .logs-filters input,
        .logs-filters select {
          padding: 10px 15px;
          background-color: #1a1e34;
          border: 1px solid #2c2f4a;
          border-radius: 6px;
          color: white;
          font-size: 0.875rem;
          min-width: 150px;
        }

        .logs-filters input {
          flex: 1;
          min-width: 200px;
          max-width: 400px;
        }

        .btn-export {
          padding: 10px 20px;
          background: #2d3148;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .btn-export:hover {
          background: #454a6f;
        }

        /* Logs Sections */
        .logs-section {
          background-color: #1a1e34;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        /* Section Headers */
        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1rem;
        }

        .section-header h2 {
          margin: 0;
          font-size: 1.125rem;
        }

        .section-header svg {
          flex-shrink: 0;
        }

        /* Tables */
        .logs-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .logs-table th {
          text-align: left;
          padding: 12px 16px;
          color: #ccc;
          border-bottom: 1px solid #2c2f4a;
          font-weight: 600;
        }

        .logs-table td {
          padding: 12px 16px;
          border-bottom: 1px solid #2c2f4a;
          color: #e2e8f0;
        }

        /* Severity Indicators */
        .severity-indicator {
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Row Highlight Colors */
        .critical-highlight {
          border-left: 4px solid #ff4d4f;
          background-color: rgba(255, 77, 79, 0.2);
        }

        .warning-highlight {
          border-left: 4px solid #faad14;
          background-color: rgba(250, 173, 20, 0.2);
        }

        .info-highlight {
          border-left: 4px solid #1890ff;
          background-color: rgba(24, 144, 255, 0.2);
        }

        .logs-table tr:hover td {
          background-color: rgba(255, 255, 255, 0.05);
        }

        /* Buttons */
        .btn-details {
          padding: 6px 12px;
          background: #2d3148;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
          font-size: 0.75rem;
          transition: all 0.2s;
        }

        .btn-details:hover {
          background: #454a6f;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 2rem;
          color: #888;
          font-style: italic;
        }

        /* Pagination */
        .pagination {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 20px;
        }

        .pagination button {
          padding: 8px 12px;
          border: 1px solid #2c2f4a;
          background: #1a1e34;
          color: white;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pagination button:hover:not(:disabled) {
          background: #2d3148;
        }

        .pagination button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination .active-page {
          background: #4299e1;
          border-color: #4299e1;
        }
      `}</style>
    </div>
  );
};

export default ModelLogs;