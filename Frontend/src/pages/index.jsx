// src/pages/Cases/index.jsx
import { useState } from 'react';
import TabContainer from '../../components/layout/TabContainer';
import CaseOverview from './CaseOverview';
import CaseView from './CaseView';

const CasesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'view', label: 'Case View' },
    { id: 'overview', label: 'Case Overview' },

  ];

  return (
    <div className="flex flex-col h-full">
      <TabContainer 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />
      <div className="flex-1 p-6 bg-gray-900">
        {activeTab === 'overview' && <CaseOverview />}
        {activeTab === 'view' && <CaseView />}
      </div>
    </div>
  );
};

export default CasesPage;
