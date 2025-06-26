import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import GlobalTab from '../components/ui/GlobalTab';
import CaseView from './CaseView';
import CaseOverview from './CaseOverview';

const Cases = () => {
  const tabs = [
    { id: 'case-view', name: 'Case View', content: <CaseView /> },
    { id: 'overview', name: 'Overview', content: <CaseOverview /> },
  ];
  const [activeTab, setActiveTab] = React.useState('case-view');

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <PageHeader 
        title="Cases Management" 
        description="Manage fraud detection rules and review case overrules"
      />
      <GlobalTab
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        variant="classic"
      />
    </div>
  );
};

export default Cases;

