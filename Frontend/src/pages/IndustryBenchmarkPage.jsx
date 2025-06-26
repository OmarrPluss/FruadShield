import React from 'react';
import Dashboard from '../components/ui/Dashboard';
import GlobalCard from '../components/ui/GlobalCard';
import MetricGrid from '../components/ui/MetricGrid';
import MetricItem from '../components/ui/MetricItem';
import ChartBox from '../components/ui/ChartBox';
import IndustryChart from '../components/charts/IndustryChart';
import FilterControls from '../components/ui/FilterControls';
import FilterGroup from '../components/ui/FilterGroup';
import FilterSelect from '../components/ui/FilterSelect';
import ContentBox from '../components/ui/ContentBox';
import StatsBox from '../components/ui/StatsBox';

// Mock data for the Industry Benchmark page
const industryComparisonData = {
  labels: ['Banking', 'E-commerce', 'Healthcare', 'Insurance', 'Travel'],
  datasets: [
    {
      label: 'Industry Average',
      data: [89.7, 82.3, 78.5, 85.1, 80.9],
      backgroundColor: 'rgba(243, 156, 18, 0.7)',
      borderColor: 'rgba(243, 156, 18, 1)',
      borderWidth: 1
    },
    {
      label: 'Our Performance',
      data: [94.2, 88.5, 81.2, 91.7, 86.3],
      backgroundColor: 'rgba(46, 204, 113, 0.7)',
      borderColor: 'rgba(46, 204, 113, 1)',
      borderWidth: 1
    }
  ]
};

const peerGroupData = {
  labels: ['Top 10%', 'Top 25%', 'Median', 'Our Position', 'Bottom 25%'],
  datasets: [
    {
      label: 'Detection Rate (%)',
      data: [96.1, 92.5, 88.3, 94.2, 82.7],
      backgroundColor: [
        'rgba(46, 204, 113, 0.7)',
        'rgba(93, 142, 255, 0.7)',
        'rgba(243, 156, 18, 0.7)',
        'rgba(123, 108, 255, 0.7)',
        'rgba(255, 94, 125, 0.7)'
      ],
      borderColor: [
        'rgba(46, 204, 113, 1)',
        'rgba(93, 142, 255, 1)',
        'rgba(243, 156, 18, 1)',
        'rgba(123, 108, 255, 1)',
        'rgba(255, 94, 125, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const costBenchmarkData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Our Costs',
      data: [420, 390, 380, 360],
      backgroundColor: 'rgba(93, 142, 255, 0.7)',
      borderColor: 'rgba(93, 142, 255, 1)',
      borderWidth: 1
    },
    {
      label: 'Industry Average',
      data: [510, 500, 490, 480],
      backgroundColor: 'rgba(243, 156, 18, 0.7)',
      borderColor: 'rgba(243, 156, 18, 1)',
      borderWidth: 1,
      borderDash: [5, 5]
    },
    {
      label: 'Top Performers',
      data: [320, 310, 300, 290],
      backgroundColor: 'rgba(46, 204, 113, 0.7)',
      borderColor: 'rgba(46, 204, 113, 1)',
      borderWidth: 1,
      borderDash: [5, 5]
    }
  ]
};

const roiData = {
  labels: ['Prevention Investment', 'Potential Losses Prevented', 'Net Benefit'],
  datasets: [
    {
      label: 'Our ROI (in $K)',
      data: [1000, 4200, 3200],
      backgroundColor: 'rgba(93, 142, 255, 0.7)',
      borderColor: 'rgba(93, 142, 255, 1)',
      borderWidth: 1
    },
    {
      label: 'Industry Average (in $K)',
      data: [1000, 3800, 2800],
      backgroundColor: 'rgba(243, 156, 18, 0.7)',
      borderColor: 'rgba(243, 156, 18, 1)',
      borderWidth: 1
    }
  ]
};

const IndustryBenchmarkPage = () => {
  return (
    <div className="page-content">
      <Dashboard>
        {/* Industry Comparison */}
        <GlobalCard 
          title="Industry Comparison" 
          icon="chart-bar" 
          span={6}
          actions={[
            { icon: 'filter', onClick: () => console.log('Expand clicked') }
          ]}
          expandable={true}
        >
          <FilterControls>
            <FilterGroup label="Metric:">
              <FilterSelect 
                id="industry-metric-select"
                options={[
                  { value: 'detection', label: 'Detection Rate' },
                  { value: 'false-positives', label: 'False Positives' },
                  { value: 'response-time', label: 'Response Time' },
                  { value: 'loss-rate', label: 'Loss Rate' }
                ]}
                defaultValue="detection"
                onChange={(value) => console.log('Metric changed:', value)}
              />
            </FilterGroup>
            <FilterGroup label="Timeframe:">
              <FilterSelect 
                id="industry-time-select"
                options={[
                  { value: '12m', label: 'Last 12 Months' },
                  { value: '3m', label: 'Last Quarter' },
                  { value: '1m', label: 'Last Month' }
                ]}
                defaultValue="12m"
                onChange={(value) => console.log('Timeframe changed:', value)}
              />
            </FilterGroup>
          </FilterControls>
          
          <ChartBox id="industryComparisonChart">
            <IndustryChart data={industryComparisonData} />
          </ChartBox>
        </GlobalCard>
        
        {/* Peer Group Analysis */}
        <GlobalCard 
          title="Peer Group Analysis" 
          icon="users" 
          span={6}
          actions={[]}
        >
          <ChartBox id="peerGroupChart">
            <IndustryChart data={peerGroupData} />
          </ChartBox>
        </GlobalCard>
        
        {/* Cost Benchmarking */}
        <GlobalCard 
          title="Cost Benchmarking" 
          icon="dollar-sign" 
          span={6}
          actions={[]}
        >
          <ChartBox id="costBenchmarkChart">
            <IndustryChart data={costBenchmarkData} />
          </ChartBox>
        </GlobalCard>
        
        {/* Fraud Prevention ROI */}
        <GlobalCard 
          title="Fraud Prevention ROI" 
          icon="chart-line" 
          span={6}
        >
          <ChartBox id="roiChart">
            <IndustryChart 
              data={roiData}
              options={{
                indexAxis: 'x'
              }}
            />
          </ChartBox>
          
          <ContentBox 
            variant="highlight" 
            title="ROI Calculation" 
            icon="calculator" 
            padding="medium"
            className="mt-4"
          >
            For every $1 spent on prevention, we save $4.20 in potential losses (vs. $3.80 industry average).
          </ContentBox>
        </GlobalCard>
        
        
      </Dashboard>
    </div>
  );
};

export default IndustryBenchmarkPage;
