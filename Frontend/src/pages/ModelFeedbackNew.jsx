import React, { useState, useEffect } from 'react';
import '../App.css';
import { Calendar, Download, MoreVertical, ChevronDown, Bell, Share2, Settings, ChartLine, Gauge, BarChart3, MessageSquare, Sun, Moon } from 'lucide-react';
import TabContainer from '../components/layout/TabContainer';
import OverviewTab from '../components/tabs/OverviewTabFeed';
import MetricsTab from '../components/tabs/MetricsTab';
import ComparisonTab from '../components/tabs/ComparisonTab';
import FeedbackTab from '../components/tabs/FeedbackTab';


const ModelFeedbackNew = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'metrics', name: 'Detailed Metrics' },
    { id: 'comparison', name: 'Model Comparison' },
    { id: 'feedback', name: 'Feedback' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-5">
        <TabContainer 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="tab-content mt-4">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'metrics' && <MetricsTab />}
          {activeTab === 'comparison' && <ComparisonTab />}
          {activeTab === 'feedback' && <FeedbackTab />}
        </div>
      </div>
    </div>
  );
}

export default ModelFeedbackNew;