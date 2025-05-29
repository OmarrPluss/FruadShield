import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import ModelLogs from './Components/ModelLogs'; // import your second page
import TopBar from './Components/Topbar';

function App() {
  const [page, setPage] = useState('dashboard');

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />

      {/* Page switch buttons */}
      <div style={{ padding: '12px', backgroundColor: '#ddd' }}>
        <button
          onClick={() => setPage('dashboard')}
          style={{ marginRight: 10, padding: '8px 16px' }}
        >
          Dashboard
        </button>
        <button onClick={() => setPage('modellogs')} style={{ padding: '8px 16px' }}>
          Model Logs
        </button>
      </div>

      {/* Main content */}
      <div
        style={{ flex: 1, overflow: 'auto', backgroundColor: '#f4f4f4', padding: '24px' }}
      >
        {page === 'dashboard' && <Dashboard />}
        {page === 'modellogs' && <ModelLogs />}
      </div>
    </div>
  );
}

export default App;
