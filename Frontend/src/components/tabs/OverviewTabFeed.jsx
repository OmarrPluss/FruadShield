import React from 'react';
import MetricCard from '../../components/ui/MetricCard';
import ChartContainer from '../../components/ui/ChartContainer';

const OverviewTab = () => {
  const metrics = [
    {
      title: 'Model Accuracy',
      value: '94.2%',
      change: '+2.1% from last week',
      changeType: 'positive',
      description: 'Overall prediction accuracy across all test cases',
      type: 'success',
      tooltip: 'Percentage of correct predictions made by the model'
    },
    {
      title: 'Response Time',
      value: '127ms',
      change: '-15ms from last week',
      changeType: 'positive',
      description: 'Average API response time',
      type: 'default',
      tooltip: 'Average time taken to process and return predictions'
    },
    {
      title: 'Throughput',
      value: '2,847',
      change: '+12.3% from last week',
      changeType: 'positive',
      description: 'Requests processed per minute',
      type: 'success',
      tooltip: 'Number of prediction requests handled per minute'
    },
    {
      title: 'Error Rate',
      value: '0.8%',
      change: '+0.2% from last week',
      changeType: 'negative',
      description: 'Failed requests percentage',
      type: 'warning',
      tooltip: 'Percentage of requests that resulted in errors'
    },
    {
      title: 'Data Drift Score',
      value: '0.23',
      change: '+0.05 from last week',
      changeType: 'negative',
      description: 'Statistical measure of input data drift',
      type: 'danger',
      tooltip: 'Measures how much the input data has changed from training data',
      showDriftIndicator: true
    },
    {
      title: 'Model Confidence',
      value: '87.5%',
      change: '-1.2% from last week',
      changeType: 'negative',
      description: 'Average prediction confidence score',
      type: 'warning',
      tooltip: 'Average confidence level of model predictions'
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="space-y-6">
        <ChartContainer
          title="Performance Trends"
          type="line"
          description="Model performance metrics over time"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Request Distribution"
            type="doughnut"
            description="Distribution of requests by type"
          />
          
          <ChartContainer
            title="Response Time Distribution"
            type="bar"
            description="Response time histogram"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;

