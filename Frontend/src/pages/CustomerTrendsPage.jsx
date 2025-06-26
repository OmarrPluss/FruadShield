import React from 'react';
import Dashboard from '../components/ui/Dashboard';
import GlobalCard from '../components/ui/GlobalCard';
import ChartBox from '../components/ui/ChartBox';
import FraudVolumeChart from '../components/charts/FraudVolumeChart';
import MetricGrid from '../components/ui/MetricGrid';
import MetricItem from '../components/ui/MetricItem';
import DataTable from '../components/ui/DataTable';
import DataTableContainer from '../components/ui/DataTableContainer';
import ContentBox from '../components/ui/ContentBox';
import FilterControls from '../components/ui/FilterControls';
import FilterGroup from '../components/ui/FilterGroup';
import FilterSelect from '../components/ui/FilterSelect';
import FraudTypesChart from '../components/charts/FraudTypesChart'; // Import missing component



// Mock data for the Customer Trends page
const customerSegmentData = {
  labels: ['New Customers', 'Loyal (1-3 yrs)', 'Long-term (3+ yrs)', 'High-value', 'At-risk'],
  datasets: [
    {
      label: 'New Customers',
      data: [42, 18, 12, 35, 28],
      backgroundColor: 'rgba(255, 94, 125, 0.7)',
      borderColor: 'rgba(255, 94, 125, 1)',
      borderWidth: 1
    },
    {
      label: 'Existing Customers',
      data: [88, 94, 96, 92, 90],
      backgroundColor: 'rgba(93, 142, 255, 0.7)',
      borderColor: 'rgba(93, 142, 255, 1)',
      borderWidth: 1,
      type: 'line',
      yAxisID: 'y1'
    }
  ]
};

const channelRiskData = {
  labels: ['Mobile App', 'Web Browser', 'Call Center', 'In-person', 'API/Partners'],
  datasets: [
    {
      label: 'Risk Score',
      data: [68, 72, 45, 32, 78],
      backgroundColor: [
        'rgba(93, 142, 255, 0.7)',
        'rgba(123, 108, 255, 0.7)',
        'rgba(243, 156, 18, 0.7)',
        'rgba(46, 204, 113, 0.7)',
        'rgba(255, 94, 125, 0.7)'
      ],
      borderColor: [
        'rgba(93, 142, 255, 1)',
        'rgba(123, 108, 255, 1)',
        'rgba(243, 156, 18, 1)',
        'rgba(46, 204, 113, 1)',
        'rgba(255, 94, 125, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const behavioralAnomalyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Anomalies Detected',
      data: [120, 135, 125, 142, 155, 165, 180, 210, 230, 250, 270, 285],
      borderColor: '#5D8EFF',
      backgroundColor: 'rgba(93, 142, 255, 0.1)',
      fill: true,
      tension: 0.4
    },
    {
      label: 'False Positives',
      data: [24, 27, 22, 28, 31, 30, 32, 38, 41, 45, 48, 50],
      borderColor: '#FF5E7D',
      backgroundColor: 'rgba(255, 94, 125, 0.1)',
      fill: true,
      tension: 0.4
    }
  ]
};

const customerFeedbackData = {
  labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
  datasets: [
    {
      label: 'Fraud Prevention Experience',
      data: [25, 40, 20, 10, 5],
      backgroundColor: [
        'rgba(46, 204, 113, 0.7)',
        'rgba(93, 142, 255, 0.7)',
        'rgba(243, 156, 18, 0.7)',
        'rgba(231, 76, 60, 0.7)',
        'rgba(255, 94, 125, 0.7)'
      ],
      borderColor: [
        'rgba(46, 204, 113, 1)',
        'rgba(93, 142, 255, 1)',
        'rgba(243, 156, 18, 1)',
        'rgba(231, 76, 60, 1)',
        'rgba(255, 94, 125, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const CustomerTrendsPage = () => {
  return (
    <div className="page-content">
      <Dashboard>
        {/* Customer Segment Analysis */}
        <GlobalCard 
          title="Customer Fraud Trends" 
          icon="users" 
          span={8}
          actions={[
            { icon: 'filter', onClick: () => console.log('Filter clicked') }
          ]}
          expandable={true}
        >
          <FilterControls>
            <FilterGroup label="Time Period:">
              <FilterSelect 
                id="customer-time-select"
                options={[
                  { value: '12m', label: 'Last 12 Months' },
                  { value: '6m', label: 'Last 6 Months' },
                  { value: '3m', label: 'Last 3 Months' }
                ]}
                defaultValue="12m"
                onChange={(value) => console.log('Time period changed:', value)}
              />
            </FilterGroup>
          </FilterControls>
          
          <ChartBox id="customerSegmentChart">
            <FraudVolumeChart 
              data={customerSegmentData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'New Customers'
                    }
                  },
                  y1: {
                    beginAtZero: true,
                    position: 'right',
                    grid: {
                      drawOnChartArea: false
                    },
                    title: {
                      display: false,
                      text: 'Existing Customers'
                    }
                  }
                }
              }}
            />
          </ChartBox>
          
          <ContentBox 
            variant="info" 
            title="Key Insight" 
            icon="lightbulb" 
            padding="medium"
            className="mt-4"
          >
            New customers and high-value accounts face the highest fraud attempt rates, but our detection systems perform best with long-term customers (96% detection rate).
          </ContentBox>
        </GlobalCard>
        
        {/* Channel Risk Assessment */}
        <GlobalCard 
          title="Channel Risk Assessment" 
          icon="random" 
          span={4}
        >
          <ChartBox id="channelRiskChart" height="small">
            <FraudTypesChart 
              data={channelRiskData}
              options={{
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </ChartBox>
          
          <DataTableContainer title="Risk Ranking">
            <DataTable 
              headers={[
                { id: 'channel', label: 'Channel' },
                { id: 'score', label: 'Risk Score' },
                { id: 'trend', label: 'Trend', type: 'trend' }
              ]}
              data={[
                { channel: 'API/Partners', score: '78', trend: 'up', trendValue: '5%' },
                { channel: 'Web Browser', score: '72', trend: 'up', trendValue: '3%' },
                { channel: 'Mobile App', score: '68', trend: 'down', trendValue: '2%' },
                { channel: 'Call Center', score: '45', trend: 'neutral', trendValue: '0%' },
                { channel: 'In-person', score: '32', trend: 'down', trendValue: '4%' }
              ]}
              sortable={true}
            />
          </DataTableContainer>
        </GlobalCard>
        
        {/* Behavioral Anomaly Detection */}
        <GlobalCard 
          title="Behavioral Anomaly Detection" 
          icon="fingerprint" 
          span={6}
        >
          <ChartBox id="behavioralAnomalyChart">
            <FraudVolumeChart data={behavioralAnomalyData} />
          </ChartBox>
          
          <MetricGrid>
            <MetricItem 
              label="Anomalies Detected"
              icon="exclamation-triangle"
              value="285"
              comparison="5.5% increase"
              trend="up"
            />
            <MetricItem 
              label="False Positive Rate"
              icon="check-circle"
              value="17.5%"
              comparison="2.1% improvement"
              trend="down"
            />
          </MetricGrid>
        </GlobalCard>
        
        {/* Customer Feedback */}
        <GlobalCard 
          title="Customer Feedback" 
          icon="comment-alt" 
          span={6}
        >
          <ChartBox id="customerFeedbackChart">
            <FraudTypesChart data={customerFeedbackData} />
          </ChartBox>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContentBox 
              variant="success" 
              title="Positive Feedback" 
              icon="thumbs-up" 
              padding="small"
            >
              65% of customers are satisfied with our fraud prevention measures, citing minimal disruption to legitimate transactions.
            </ContentBox>
            
            <ContentBox 
              variant="warning" 
              title="Areas for Improvement" 
              icon="thumbs-down" 
              padding="small"
            >
              15% of customers report dissatisfaction, primarily due to false declines and authentication friction.
            </ContentBox>
          </div>
        </GlobalCard>
      </Dashboard>
    </div>
  );
};


export default CustomerTrendsPage;
