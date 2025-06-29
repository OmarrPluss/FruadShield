import React from 'react';
import MetricCard from '../../components/ui/MetricCard';
import ChartContainer from '../../components/ui/ChartContainer';

const MetricsTab = () => {
  const detailedMetrics = [
    {
      title: 'Precision',
      value: '92.8%',
      change: '+1.5% from last week',
      changeType: 'positive',
      description: 'True positives / (True positives + False positives)',
      type: 'success',
      tooltip: 'Measures the accuracy of positive predictions'
    },
    {
      title: 'Recall',
      value: '89.3%',
      change: '+0.8% from last week',
      changeType: 'positive',
      description: 'True positives / (True positives + False negatives)',
      type: 'success',
      tooltip: 'Measures the ability to find all positive instances'
    },
    {
      title: 'F1 Score',
      value: '91.0%',
      change: '+1.1% from last week',
      changeType: 'positive',
      description: 'Harmonic mean of precision and recall',
      type: 'success',
      tooltip: 'Balanced measure of precision and recall'
    },
    {
      title: 'AUC-ROC',
      value: '0.94',
      change: '+0.02 from last week',
      changeType: 'positive',
      description: 'Area under the ROC curve',
      type: 'success',
      tooltip: 'Measures the model\'s ability to distinguish between classes'
    },
    {
      title: 'Memory Usage',
      value: '2.3 GB',
      change: '+0.1 GB from last week',
      changeType: 'negative',
      description: 'Current model memory consumption',
      type: 'warning',
      tooltip: 'Amount of memory used by the model during inference'
    },
    {
      title: 'CPU Utilization',
      value: '67%',
      change: '+5% from last week',
      changeType: 'negative',
      description: 'Average CPU usage during inference',
      type: 'warning',
      tooltip: 'Percentage of CPU resources used by the model'
    },
    {
      title: 'Inference Latency P95',
      value: '245ms',
      change: '-12ms from last week',
      changeType: 'positive',
      description: '95th percentile response time',
      type: 'default',
      tooltip: '95% of requests are processed faster than this time'
    },
    {
      title: 'Batch Processing Rate',
      value: '1,250/min',
      change: '+150/min from last week',
      changeType: 'positive',
      description: 'Batch predictions per minute',
      type: 'success',
      tooltip: 'Number of batch predictions processed per minute'
    },
    {
      title: 'Model Drift Detection',
      value: 'Stable',
      change: 'No change',
      changeType: 'positive',
      description: 'Statistical drift in model performance',
      type: 'success',
      tooltip: 'Indicates whether model performance has degraded over time'
    }
  ];

  const performanceMetrics = [
    {
      title: 'Feature Importance Drift',
      value: '0.12',
      change: '+0.03 from last week',
      changeType: 'negative',
      description: 'Change in feature importance scores',
      type: 'warning',
      tooltip: 'Measures how feature importance has changed over time'
    },
    {
      title: 'Prediction Stability',
      value: '96.2%',
      change: '-0.5% from last week',
      changeType: 'negative',
      description: 'Consistency of predictions over time',
      type: 'success',
      tooltip: 'Percentage of predictions that remain stable across similar inputs'
    },
    {
      title: 'Data Quality Score',
      value: '8.7/10',
      change: '+0.2 from last week',
      changeType: 'positive',
      description: 'Overall input data quality assessment',
      type: 'success',
      tooltip: 'Composite score based on completeness, accuracy, and consistency'
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Core Performance Metrics */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Core Performance Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {detailedMetrics.slice(0, 9).map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>

      {/* Advanced Metrics */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Advanced Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {performanceMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>

      {/* Detailed Charts */}
      <div className="space-y-6">
        <ChartContainer
          title="Performance Metrics Over Time"
          type="line"
          description="Detailed view of key performance indicators"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Resource Utilization"
            type="bar"
            description="CPU and memory usage patterns"
          />
          
          <ChartContainer
            title="Error Distribution"
            type="doughnut"
            description="Breakdown of different error types"
          />
        </div>

        <ChartContainer
          title="Latency Distribution"
          type="bar"
          description="Response time distribution across percentiles"
        />
      </div>
    </div>
  );
};

export default MetricsTab;

