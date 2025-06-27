import React, { useState } from 'react';
import GlobalButton from '../components/ui/GlobalButton';
import  GlobalCard from '../components/ui/GlobalCard';
import  StatusBadge  from '../components/ui/StatusBadge';
import  SummaryItem  from '../components/ui/SummaryItem';
import  MetricGrid  from '../components/ui/MetricGrid';
import  MetricItem  from '../components/ui/MetricItem';
import  GlobalTab from '../components/ui/GlobalTab';
import  ThresholdSlider from '../components/ui/ThresholdSlider';
import  CircularProgress  from '../components/ui/CircularProgress';
import  AlertMessage  from '../components/ui/AlertMessage';
import  FeedbackTable  from '../components/ui/FeedbackTable';
import  ActionSection  from '../components/ui/ActionSection';
import  ChartBox  from '../components/ui/ChartBox';
import  SparklineChart  from '../components/charts/SparklineChart-feed';
import  FraudVolumeChart  from '../components/charts/FraudVolumeChart-feed';
import  FraudTypesChart  from '../components/charts/FraudTypesChart-feed';
import  IndustryChart  from '../components/charts/IndustryChart-feed';
import  RegionalRiskChart  from '../components/charts/RegionalRiskChart-feed';

const ModelFeedbackPage = () => {
  const [thresholdValue, setThresholdValue] = useState(75);
  const [simulatedMetrics, setSimulatedMetrics] = useState({
    precision: 94.2,
    recall: 91.8,
    f1Score: 93.0,
    accuracy: 95.1
  });
  const [activeTab, setActiveTab] = useState('model-performance');

  // Sample data for charts
  const sparklineData = [65, 68, 70, 72, 69, 71, 74, 76, 73, 75];
  const fraudVolumeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [120, 190, 300, 500, 200, 300]
  };
  const fraudTypesData = {
    labels: ['Credit GlobalCard', 'Identity Theft', 'Account Takeover', 'Phishing', 'Other'],
    values: [35, 25, 20, 15, 5]
  };
  const industryData = {
    labels: ['Banking', 'E-commerce', 'Insurance', 'Healthcare', 'Fintech'],
    values: [85, 72, 68, 45, 78]
  };
  const regionalData = {
    labels: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Africa'],
    values: [78, 65, 82, 45, 38]
  };

  // Sample feedback data
  const feedbackData = [
    { id: 'FB001', type: 'False Positive', submitted: '2024-06-10', status: 'pending', statusText: 'Pending Review', priority: 'High' },
    { id: 'FB002', type: 'False Negative', submitted: '2024-06-09', status: 'reviewed', statusText: 'Reviewed', priority: 'Medium' },
    { id: 'FB003', type: 'Model Accuracy', submitted: '2024-06-08', status: 'pending', statusText: 'Pending Review', priority: 'Low' },
  ];

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleExport = () => {
    window.print();
  };

  const handleThresholdChange = (value) => {
    setThresholdValue(value);
    // Simulate metric changes based on threshold
    setSimulatedMetrics({
      precision: Math.max(85, 98 - (value - 50) * 0.1),
      recall: Math.max(80, 95 - (value - 50) * 0.15),
      f1Score: Math.max(82, 96 - (value - 50) * 0.12),
      accuracy: Math.max(88, 97 - (value - 50) * 0.08)
    });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-color)]">
      <div className="p-">
        {/* Executive Summary GlobalCard
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <GlobalCard className="lg:col-span-5">
            <div className="card-header">
              <span>
                <img src="https://picsum.photos/seed/dashboard_health/30/30" alt="Health" className="header-icon" />
                Model Health & Executive Summary
              </span>
              <i className="fas fa-notes-medical" title="Overall Health"></i>
            </div>
            
            <div className="space-y-5">
              <SummaryItem 
                label="Overall Status:" 
                value={<StatusBadge type="positive" icon="fas fa-check-circle">Optimal Performance</StatusBadge>}
              />
              <SummaryItem 
                label="Performance Trend (7d):" 
                value="Stable" 
                icon="fa-chart-line" 
                iconColor="positive"
                sparkline={<SparklineChart data={sparklineData} color="var(--positive)" />}
              />
              <SummaryItem 
                label="Avg. Response Time:" 
                value="15 ms" 
                icon="fa-stopwatch-20" 
                iconColor="positive"
                sparkline={<SparklineChart data={sparklineData.map(x => x * 0.8)} color="var(--positive)" />}
              />
              <SummaryItem 
                label="Prediction Error Rate:" 
                value="0.2%" 
                icon="fa-bug" 
                iconColor="warning"
                sparkline={<SparklineChart data={sparklineData.map(x => x * 0.3)} color="var(--warning)" />}
              />
              <SummaryItem 
                label="Daily Predictions:" 
                value="~1.2M" 
                icon="fa-stream" 
                iconColor="primary-accent"
                sparkline={<SparklineChart data={sparklineData.map(x => x * 1.2)} color="var(--primary-accent)" />}
              />
            </div>
          </GlobalCard>
        </div> */}

        {/* Alerts Section */}
        <div className="mb-6">
          <AlertMessage type="positive" icon="fas fa-info-circle">
            <strong>Model Performance Update:</strong> The fraud detection model has been successfully updated with the latest training data. Performance metrics show a 2.3% improvement in accuracy.
          </AlertMessage>
        </div>

        {/* Main Tabs - User Management Style */}
        <div className="w-full">
          <GlobalCard>
            <GlobalTab
              tabs={[
                { id: 'model-performance', name: 'Model Performance', content: (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <ChartBox title="Fraud Volume Trends" icon="https://picsum.photos/seed/fraud_volume/30/30">
                      <FraudVolumeChart data={fraudVolumeData} />
                    </ChartBox>
                    <ChartBox title="Fraud Types Distribution" icon="https://picsum.photos/seed/fraud_types/30/30">
                      <FraudTypesChart data={fraudTypesData} />
                    </ChartBox>
                    <ChartBox title="Industry Risk Analysis" icon="https://picsum.photos/seed/industry/30/30">
                      <IndustryChart data={industryData} />
                    </ChartBox>
                    <ChartBox title="Regional Risk Assessment" icon="https://picsum.photos/seed/regional/30/30">
                      <RegionalRiskChart data={regionalData} />
                    </ChartBox>
                  </div>
                ) },
                { id: 'threshold-simulation', name: 'Threshold Simulation', content: (
                  <div className="space-y-6">
                    <GlobalCard>
                      <div className="card-header">
                        <span>Threshold Configuration</span>
                        <i className="fas fa-sliders-h"></i>
                      </div>
                      <ThresholdSlider
                        min={10}
                        max={95}
                        defaultValue={75}
                        onChange={handleThresholdChange}
                        label="Fraud Detection Threshold"
                        unit="%"
                      />
                      <div className="mt-6">
                        <h4 className="text-[var(--text-muted)] text-sm mb-4">Simulated Performance Metrics:</h4>
                        <MetricGrid>
                          <MetricItem 
                            label="Precision" 
                            value={`${simulatedMetrics.precision.toFixed(1)}%`}
                            trend={true}
                            trendIcon="fa-arrow-up"
                            trendColor="positive"
                          />
                          <MetricItem 
                            label="Recall" 
                            value={`${simulatedMetrics.recall.toFixed(1)}%`}
                            trend={true}
                            trendIcon="fa-arrow-up"
                            trendColor="positive"
                          />
                          <MetricItem 
                            label="F1-Score" 
                            value={`${simulatedMetrics.f1Score.toFixed(1)}%`}
                            trend={true}
                            trendIcon="fa-arrow-up"
                            trendColor="positive"
                          />
                          <MetricItem 
                            label="Accuracy" 
                            value={`${simulatedMetrics.accuracy.toFixed(1)}%`}
                            trend={true}
                            trendIcon="fa-arrow-up"
                            trendColor="positive"
                          />
                        </MetricGrid>
                      </div>
                    </GlobalCard>
                  </div>
                ) },
                { id: 'feedback-management', name: 'Feedback Management', content: (
                  <div className="space-y-6">
                    <GlobalCard>
                      <div className="card-header">
                        <span>Recent Feedback Submissions</span>
                        <i className="fas fa-comments"></i>
                      </div>
                      <FeedbackTable data={feedbackData} />
                      <div className="mt-6 flex gap-4 flex-wrap">
                        <GlobalButton icon="plus" title="Submit New Feedback" />
                        <GlobalButton icon="download" title="Export Feedback Report" />
                      </div>
                    </GlobalCard>
                  </div>
                ) },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              variant="classic"
            />
          </GlobalCard>
        </div>
      </div>
    </div>
  );
};

export default ModelFeedbackPage;

