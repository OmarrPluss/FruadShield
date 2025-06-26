import React from 'react';
import Dashboard from '../components/ui/Dashboard';
import GlobalCard from '../components/ui/GlobalCard';
import MetricGrid from '../components/ui/MetricGrid';
import MetricItem from '../components/ui/MetricItem';
import ChartBox from '../components/ui/ChartBox';
import FraudVolumeChart from '../components/charts/FraudVolumeChart';
import FraudTypesChart from '../components/charts/FraudTypesChart';
import IndustryChart from '../components/charts/IndustryChart';
import RegionalRiskChart from '../components/charts/RegionalRiskChart';
import DataTable from '../components/ui/DataTable';
import DataTableContainer from '../components/ui/DataTableContainer';
import RiskBadge from '../components/ui/RiskBadge';
import Accordion from '../components/ui/Accordion';
import InfoBox from '../components/ui/InfoBox';

// Mock data for the Overview page
const fraudVolumeData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Fraud Volume',
      data: [1200, 1350, 1250, 1420, 1550, 1650, 1800, 2100, 2300, 2500, 2700, 2850],
      borderColor: '#5D8EFF',
      backgroundColor: 'rgba(93, 142, 255, 0.1)',
      fill: true,
      tension: 0.4
    },
    {
      label: 'Previous Year',
      data: [1000, 1100, 1150, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000],
      borderColor: 'rgba(123, 108, 255, 0.6)',
      backgroundColor: 'rgba(123, 108, 255, 0.05)',
      fill: true,
      tension: 0.4,
      borderDash: [5, 5]
    }
  ]
};

const fraudTypesData = {
  labels: ['Card Not Present', 'Phishing', 'Identity Theft', 'Account Takeover'],
  datasets: [
    {
      data: [1197, 998, 513, 342],
      backgroundColor: ['#5D8EFF', '#7B6CFF', '#FF5E7D', '#F39C12'],
      borderColor: 'rgba(26, 26, 42, 0.5)',
      borderWidth: 2
    }
  ]
};

const industryData = {
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

const regionalRiskData = {
  labels: ['Nigeria', 'Philippines', 'Brazil', 'Turkey', 'Germany', 'Canada'],
  datasets: [
    {
      label: 'Risk Score',
      data: [85, 72, 58, 55, 22, 18],
      backgroundColor: [
        'rgba(255, 94, 125, 0.7)',
        'rgba(231, 76, 60, 0.7)',
        'rgba(243, 156, 18, 0.7)',
        'rgba(243, 156, 18, 0.7)',
        'rgba(46, 204, 113, 0.7)',
        'rgba(46, 204, 113, 0.7)'
      ],
      borderColor: [
        'rgba(255, 94, 125, 1)',
        'rgba(231, 76, 60, 1)',
        'rgba(243, 156, 18, 1)',
        'rgba(243, 156, 18, 1)',
        'rgba(46, 204, 113, 1)',
        'rgba(46, 204, 113, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const fraudTypeTableHeaders = [
  { id: 'type', label: 'Type' },
  { id: 'volume', label: 'Volume' },
  { id: 'trendValue', label: 'Trend', type: 'trend' }
];

const fraudTypeTableData = [
  { type: 'Card Not Present', volume: '1,197', trendValue: '12%', trend: 'up' },
  { type: 'Phishing', volume: '998', trendValue: '8%', trend: 'up' },
  { type: 'Identity Theft', volume: '513', trendValue: '5%', trend: 'down' },
  { type: 'Account Takeover', volume: '342', trendValue: '0%', trend: 'neutral' }
];

const regulatoryUpdates = [
  {
    title: 'AML Directive 2025-06',
    content: 'New transaction monitoring requirements for crypto exchanges effective Q3 2025.',
    deadline: 'Aug 15, 2025',
    link: '#'
  },
  {
    title: 'PSD3 Implementation',
    content: 'Enhanced authentication requirements for all digital payments over €150.',
    deadline: 'Oct 1, 2025',
    link: '#'
  },
  {
    title: 'GDPR Amendment 2025/18',
    content: 'New data retention limits for financial transaction records.',
    deadline: 'Jan 1, 2026',
    link: '#'
  }
];

const recommendations = [
  {
    type: 'success',
    title: 'Budget Planning',
    icon: 'wallet',
    content: 'Increase fraud prevention budget by 8% next quarter to address rising CNP fraud.'
  },
  {
    type: 'info',
    title: 'Policy Update',
    icon: 'shield-alt',
    content: 'Implement MFA for all high-value transactions over $500 and new payees.'
  },
  {
    type: 'warning',
    title: 'Technology',
    icon: 'robot',
    content: 'Pilot adaptive authentication systems in Q3 with 20% of customer base.'
  }
];

const OverviewPage = () => {
  return (
    <div className="page-content active">
      <Dashboard>
        {/* Fraud Landscape Overview */}
        <GlobalCard
          title="Fraud Landscape Overview"
          icon="globe"
          span={12}
          actions={[
            { icon: 'filter', onClick: () => console.log('Filter clicked') }
          ]}
          expandable={true}
        >
          <MetricGrid columns={3}>
            <MetricItem
              label="Year-over-Year Change"
              icon="calendar-alt"
              value="12%"
              comparison="4.2% vs last quarter"
              trend="up"
            />
            <MetricItem
              label="Total Fraud Volume"
              icon="exclamation-triangle"
              value="2,850"
              comparison="18% vs last quarter"
              trend="up"
            />
            <MetricItem
              label="CNP Fraud Rate"
              icon="credit-card"
              value="42%"
              comparison="8% improvement"
              trend="down"
            />
          </MetricGrid>

          <ChartBox id="fraudVolumeChart">
            <FraudVolumeChart data={fraudVolumeData} />
          </ChartBox>
        </GlobalCard>

        {/* Fraud Type Breakdown */}
        <GlobalCard
          title="Fraud Type Breakdown"
          icon="chart-pie"
          span={6}
          actions={[
            { icon: 'filter', onClick: () => console.log('Filter clicked') }
          ]}
        >
          <ChartBox id="fraudTypesChart" height="small">
            <FraudTypesChart data={fraudTypesData} />
          </ChartBox>

          <DataTableContainer>
            <DataTable
              headers={fraudTypeTableHeaders}
              data={fraudTypeTableData}
              sortable={true}
            />
          </DataTableContainer>
        </GlobalCard>

        {/* Industry Benchmarking */}
        <GlobalCard
          title="Industry Benchmarking"
          icon="industry"
          span={6}
          actions={[
            { icon: 'sync-alt', onClick: () => console.log('Refresh clicked') }
          ]}
        >
          <ChartBox id="industryChart">
            <IndustryChart data={industryData} />
          </ChartBox>

          <MetricGrid>
            <MetricItem
              label="Our Detection Rate"
              icon="bullseye"
              value="94.2%"
              comparison="+4.5% vs industry"
              trend="up"
            />
            <MetricItem
              label="Losses per $1B"
              icon="dollar-sign"
              value="$5.20K"
              comparison="34% better"
              trend="down"
            />
          </MetricGrid>
        </GlobalCard>

        {/* Regional Risk Trends */}
        <GlobalCard
          title="Regional Risk Trends"
          icon="map-marked-alt"
          span={8}
          actions={[
            { icon: 'layer-group', onClick: () => console.log('Layers clicked') }
          ]}
        >
          <ChartBox id="regionalRiskChart">
            <RegionalRiskChart data={regionalRiskData} />
          </ChartBox>

          <div className="mt-4 flex gap-2 flex-wrap">
            <RiskBadge level="critical" text="Nigeria" />
            <RiskBadge level="high" text="Philippines" />
            <RiskBadge level="medium" text="Brazil" />
            <RiskBadge level="medium" text="Turkey" />
            <RiskBadge level="low" text="Germany" />
            <RiskBadge level="low" text="Canada" />
          </div>
        </GlobalCard>

        {/* Regulatory Updates */}
        <GlobalCard
          title="Regulatory Updates"
          icon="gavel"
          span={4}
          actions={[
            { icon: 'bell', onClick: () => console.log('Notifications clicked') }
          ]}
        >
          {regulatoryUpdates.map((update, index) => (
            <Accordion
              key={index}
              title={update.title}
              defaultOpen={index === 0}
            >
              <p className="mb-2">{update.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted">Deadline: {update.deadline}</span>
                <a href={update.link} className="text-primary-accent text-sm">Read Full Text</a>
              </div>
            </Accordion>
          ))}
        </GlobalCard>

        {/* Recommendations */}
        <GlobalCard
          title="Recommendations"
          icon="lightbulb"
          span={12}
          actions={[
            { icon: 'print', onClick: () => console.log('Print clicked') }
          ]}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendations.map((rec, index) => (
              <InfoBox
                key={index}
                type={rec.type}
                title={rec.title}
                icon={rec.icon}
              >
                {rec.content}
              </InfoBox>
            ))}
          </div>
        </GlobalCard>
      </Dashboard>
    </div>
  );
};

export default OverviewPage;
