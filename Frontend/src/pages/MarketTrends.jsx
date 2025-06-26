import React, { useState, useRef } from 'react';
import PageHeader from '../components/layout/PageHeader';
import GlobalTab from '../components/ui/GlobalTab';
import OverviewPage from './OverviewPage';
import IndustryBenchmarkPage from './IndustryBenchmarkPage';
import RegulatoryPage from './RegulatoryPage';
import CustomerTrendsPage from './CustomerTrendsPage';
import TechnologyPage from './TechnologyPage';
import DateRangePicker from '../components/ui/DateRangePicker';
import ExportButton from '../components/ui/ExportButton';

const MarketTrends = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const contentRef = useRef();

  const tabs = [
    { id: 'overview', name: 'Overview', content: <OverviewPage dateRange={dateRange} /> },
    { id: 'industry', name: 'Industry Benchmark', content: <IndustryBenchmarkPage dateRange={dateRange} /> },
    { id: 'regulatory', name: 'Regulatory', content: <RegulatoryPage dateRange={dateRange} /> },
    { id: 'customer', name: 'Customer Trends', content: <CustomerTrendsPage dateRange={dateRange} /> },
    { id: 'technology', name: 'Technology', content: <TechnologyPage dateRange={dateRange} /> },
  ];

  const handleDateChange = (from, to) => {
    setDateRange({ from, to });
  };

  const handleExport = () => {
    if (contentRef.current && typeof contentRef.current.exportAsPDF === 'function') {
      contentRef.current.exportAsPDF();
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Market Trends Intelligence</h1>
          <div className="text-gray-500 text-sm">Last updated: May 13, 2025 at 09:42 AM</div>
        </div>
        <div className="flex items-center gap-4">
          <DateRangePicker
            from={dateRange.from}
            to={dateRange.to}
            onChange={handleDateChange}
          />
          <ExportButton onExport={handleExport} targetRef={contentRef} />
        </div>
      </div>
      <GlobalTab
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="mb-6"
        variant="classic"
      />
      <div className="page-content fade-in" ref={contentRef}></div>
    </>
  );
};

export default MarketTrends;