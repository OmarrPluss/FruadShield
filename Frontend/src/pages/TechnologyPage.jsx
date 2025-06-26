import React from 'react';
import Dashboard from '../components/ui/Dashboard';
import GlobalCard from '../components/ui/GlobalCard';
import ChartBox from '../components/ui/ChartBox';
import FraudVolumeChart from '../components/charts/FraudVolumeChart';
import FraudTypesChart from '../components/charts/FraudTypesChart';
import MetricGrid from '../components/ui/MetricGrid';
import MetricItem from '../components/ui/MetricItem';
import ContentBox from '../components/ui/ContentBox';
import InfoBox from '../components/ui/InfoBox';
import DataTable from '../components/ui/DataTable';
import DataTableContainer from '../components/ui/DataTableContainer';

// Mock data for the Technology page
const techAdoptionData = {
  labels: ['AI/ML', 'Biometrics', 'Behavioral Analytics', 'Device Intelligence', 'Blockchain'],
  datasets: [
    {
      label: 'Industry Adoption (%)',
      data: [68, 52, 75, 82, 24],
      backgroundColor: 'rgba(243, 156, 18, 0.7)',
      borderColor: 'rgba(243, 156, 18, 1)',
      borderWidth: 1
    },
    {
      label: 'Our Implementation (%)',
      data: [85, 70, 90, 75, 30],
      backgroundColor: 'rgba(93, 142, 255, 0.7)',
      borderColor: 'rgba(93, 142, 255, 1)',
      borderWidth: 1
    }
  ]
};

const mlPerformanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Accuracy (%)',
      data: [91.2, 91.5, 92.1, 92.8, 93.2, 93.5, 93.8, 94.2, 94.5, 94.8, 95.1, 95.4],
      borderColor: '#5D8EFF',
      backgroundColor: 'rgba(93, 142, 255, 0.1)',
      fill: true,
      tension: 0.4,
      yAxisID: 'y'
    },
    {
      label: 'False Positives (%)',
      data: [8.8, 8.5, 7.9, 7.2, 6.8, 6.5, 6.2, 5.8, 5.5, 5.2, 4.9, 4.6],
      borderColor: '#FF5E7D',
      backgroundColor: 'rgba(255, 94, 125, 0.1)',
      fill: true,
      tension: 0.4,
      yAxisID: 'y1'
    }
  ]
};

const techInvestmentData = {
  labels: ['AI/ML Models', 'Biometric Auth', 'Behavioral Analytics', 'Device Intelligence', 'Blockchain'],
  datasets: [
    {
      label: 'Current Investment ($K)',
      data: [850, 420, 650, 380, 150],
      backgroundColor: 'rgba(93, 142, 255, 0.7)',
      borderColor: 'rgba(93, 142, 255, 1)',
      borderWidth: 1
    },
    {
      label: 'Planned Investment ($K)',
      data: [1200, 650, 800, 450, 300],
      backgroundColor: 'rgba(123, 108, 255, 0.7)',
      borderColor: 'rgba(123, 108, 255, 1)',
      borderWidth: 1
    }
  ]
};

const emergingTechData = {
  labels: ['Quantum-resistant Crypto', 'Federated Learning', 'Zero-knowledge Proofs', 'Continuous Auth', 'Synthetic Data'],
  datasets: [
    {
      label: 'Potential Impact (1-10)',
      data: [8.5, 7.8, 9.2, 8.7, 7.5],
      backgroundColor: [
        'rgba(93, 142, 255, 0.7)',
        'rgba(123, 108, 255, 0.7)',
        'rgba(46, 204, 113, 0.7)',
        'rgba(243, 156, 18, 0.7)',
        'rgba(155, 89, 182, 0.7)'
      ],
      borderColor: [
        'rgba(93, 142, 255, 1)',
        'rgba(123, 108, 255, 1)',
        'rgba(46, 204, 113, 1)',
        'rgba(243, 156, 18, 1)',
        'rgba(155, 89, 182, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const TechnologyPage = () => {
  return (
    <div className="page-content">
      <Dashboard>
        {/* Technology Adoption */}
        <GlobalCard 
          title="Technology Adoption" 
          icon="microchip" 
          span={8}
          actions={[
            { icon: 'filter', onClick: () => console.log('Expand clicked') }
          ]}
          expandable={true}
        >
          <ChartBox id="techAdoptionChart">
            <FraudVolumeChart 
              data={techAdoptionData}
              options={{
                indexAxis: 'y',
                scales: {
                  x: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                      display: true,
                      text: 'Adoption (%)'
                    }
                  }
                }
              }}
            />
          </ChartBox>
          
          <ContentBox 
            variant="info" 
            title="Technology Leadership" 
            icon="trophy" 
            padding="medium"
            className="mt-4"
          >
            Our organization leads the industry in AI/ML and Behavioral Analytics adoption, with implementation rates 17% and 15% above industry averages respectively.
          </ContentBox>
        </GlobalCard>
        

        {/* Technology Investment */}
        <GlobalCard 
          title="Technology Investment" 
          icon="chart-line" 
          span={4}
        >
          <ChartBox id="techInvestmentChart">
            <FraudTypesChart data={techInvestmentData} />
          </ChartBox>
        </GlobalCard>


        {/* ML Model Performance */}
        <GlobalCard 
          title="ML Model Performance" 
          icon="brain" 
          span={6}
        >

          <MetricGrid>
            <MetricItem 
              label="Current Accuracy"
              icon="bullseye"
              value="95.4%"
              comparison="4.2% improvement"
              trend="up"
            />
            <MetricItem 
              label="False Positives"
              icon="exclamation-triangle"
              value="4.6%"
              comparison="2.1% lower"
              trend="down"
            />
            
          </MetricGrid>
          <ChartBox id="mlPerformanceChart">
            <FraudVolumeChart 
              data={mlPerformanceData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                      display: true,
                      text: 'Accuracy (%)'
                    }
                  },
                  y1: {
                    beginAtZero: true,
                    position: 'right',
                    grid: {
                      drawOnChartArea: false
                    },
                    title: {
                      display: true,
                      text: 'False Positives (%)'
                    },
                    min: 0,
                    max: 20
                  }
                }
              }}
            />
          </ChartBox>
        </GlobalCard>
        
        
        
        {/* Emerging Technologies */}
        <GlobalCard 
          title="Emerging Technologies" 
          icon="lightbulb" 
          span={6}
        >
          <ChartBox id="emergingTechChart">
            <FraudTypesChart 
              data={emergingTechData}
              options={{
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </ChartBox>
          
          <DataTableContainer title="Implementation Roadmap">
            <DataTable 
              headers={[
                { id: 'technology', label: 'Technology' },
                { id: 'timeline', label: 'Timeline' },
                { id: 'priority', label: 'Priority' }
              ]}
              data={[
                { technology: 'Zero-knowledge Proofs', timeline: 'Q3 2025', priority: 'High' },
                { technology: 'Continuous Authentication', timeline: 'Q4 2025', priority: 'High' },
                { technology: 'Quantum-resistant Crypto', timeline: 'Q1 2026', priority: 'Medium' },
                { technology: 'Federated Learning', timeline: 'Q2 2026', priority: 'Medium' },
                { technology: 'Synthetic Data', timeline: 'Q3 2026', priority: 'Low' }
              ]}
              sortable={true}
            />
          </DataTableContainer>
        </GlobalCard>

        {/* Key Technology Insights */}
        <GlobalCard 
          title="Key Technology Insights" 
          icon="lightbulb" 
          span={12}
        >
          <InfoBox 
            type="info"
            title="AI/ML Drives Results"
            icon="robot"
          >
            Our AI/ML models have reduced false positives by 2.1% and improved detection accuracy by 4.2% in the last year.
          </InfoBox>
          <InfoBox 
            type="success"
            title="Biometric Adoption"
            icon="fingerprint"
          >
            Biometric authentication adoption has increased by 18% across our customer base in the last 12 months.
          </InfoBox>
        </GlobalCard>
        
        
      </Dashboard>
    </div>
  );
};

export default TechnologyPage;
