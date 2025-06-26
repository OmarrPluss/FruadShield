import React from 'react';
import Dashboard from '../components/ui/Dashboard';
import GlobalCard from '../components/ui/GlobalCard';
import ChartBox from '../components/ui/ChartBox';
import FraudVolumeChart from '../components/charts/FraudVolumeChart';
import Accordion from '../components/ui/Accordion';
import ContentBox from '../components/ui/ContentBox';
import DataTable from '../components/ui/DataTable';
import DataTableContainer from '../components/ui/DataTableContainer';
import FraudTypesChart from '../components/charts/FraudTypesChart'; // Import missing component



// Mock data for the Regulatory page
const regulatoryTimelineData = {
  labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026'],
  datasets: [
    {
      label: 'Upcoming',
      data: [1, 2, 3, 2, 1],
      backgroundColor: 'rgba(93, 142, 255, 0.7)',
      borderColor: 'rgba(93, 142, 255, 1)',
      borderWidth: 1
    },
    {
      label: 'Critical',
      data: [0, 1, 2, 1, 0],
      backgroundColor: 'rgba(255, 94, 125, 0.7)',
      borderColor: 'rgba(255, 94, 125, 1)',
      borderWidth: 1
    },
    {
      label: 'Implemented',
      data: [3, 2, 1, 0, 0],
      backgroundColor: 'rgba(46, 204, 113, 0.7)',
      borderColor: 'rgba(46, 204, 113, 1)',
      borderWidth: 1
    }
  ]
};

const complianceData = {
  labels: ['Compliant', 'In Progress', 'At Risk'],
  datasets: [
    {
      data: [75, 20, 5],
      backgroundColor: [
        'rgba(46, 204, 113, 0.7)',
        'rgba(243, 156, 18, 0.7)',
        'rgba(255, 94, 125, 0.7)'
      ],
      borderColor: [
        'rgba(46, 204, 113, 1)',
        'rgba(243, 156, 18, 1)',
        'rgba(255, 94, 125, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const regulatoryUpdates = [
  {
    title: 'FCA Consumer Duty Implementation',
    content: 'New requirements for fair treatment of customers in financial services.',
    deadline: 'Jul 31, 2025',
    link: '#'
  },
  {
    title: 'SEC Cybersecurity Rules',
    content: 'New disclosure requirements for material cybersecurity incidents.',
    deadline: 'Dec 15, 2025',
    link: '#'
  },
  {
    title: 'CFPB Data Privacy Framework',
    content: 'Enhanced consumer data protection requirements for financial institutions.',
    deadline: 'Mar 1, 2026',
    link: '#'
  },
  {
    title: 'EU AI Act Compliance',
    content: 'Risk-based requirements for AI systems used in fraud detection.',
    deadline: 'Jun 30, 2026',
    link: '#'
  }
];

const RegulatoryPage = () => {
  return (
    <div className="page-content">
      <Dashboard>
        {/* Regulatory Timeline */}
        <GlobalCard 
          title="Regulatory Timeline" 
          icon="calendar-alt" 
          span={6}
          actions={[
            { icon: 'filter', onClick: () => console.log('Filter clicked') }
          ]}
        >
          <ChartBox id="regulatoryTimelineChart">
            <FraudVolumeChart 
              data={regulatoryTimelineData}
              options={{
                plugins: {
                  legend: {
                    position: 'top'
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      stepSize: 1
                    }
                  }
                }
              }}
            />
          </ChartBox>
          
          <div className="mt-4 flex gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-accent rounded mr-1.5"></div>
              <span className="text-xs">Upcoming</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-danger-accent rounded mr-1.5"></div>
              <span className="text-xs">Critical</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-success-accent rounded mr-1.5"></div>
              <span className="text-xs">Implemented</span>
            </div>
          </div>
        </GlobalCard>
        
        {/* Compliance Status */}
        <GlobalCard 
          title="Compliance Status" 
          icon="check-circle" 
          span={6}
        >
          <ChartBox id="complianceChart" height="small">
            <FraudTypesChart data={complianceData} />
          </ChartBox>
          
          <div className="mt-4">
            <div className="text-sm text-text-muted mb-2">
              <i className="fas fa-list mr-2"></i> Key Requirements
            </div>
            <ul className="ml-5 text-sm space-y-2">
              <li>Enhanced KYC procedures (Due Sep 2025)</li>
              <li>Real-time transaction monitoring (Due Nov 2025)</li>
              <li>Data localization for EU customers (Due Jan 2026)</li>
            </ul>
          </div>
        </GlobalCard>
        
        {/* Regulatory Updates */}
        <GlobalCard 
          title="Latest Regulatory Updates" 
          icon="newspaper" 
          span={4}
          actions={[
            { icon: 'sync-alt', onClick: () => console.log('Refresh clicked') }
          ]}
        >
          <div className="max-h-96 overflow-y-auto">
            {regulatoryUpdates.map((update, index) => (
              <Accordion 
                key={index} 
                title={update.title}
                defaultOpen={index === 0}
              >
                <p className="mb-2">{update.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-text-muted">Effective: {update.deadline}</span>
                  <a href={update.link} className="text-primary-accent text-sm">Read More</a>
                </div>
              </Accordion>
            ))}
          </div>
        </GlobalCard>
        
        {/* Compliance Roadmap */}
        <GlobalCard 
          title="Compliance Roadmap" 
          icon="road" 
          span={8}
        >
          <DataTableContainer title="Implementation Timeline">
            <DataTable 
              headers={[
                { id: 'requirement', label: 'Requirement' },
                { id: 'deadline', label: 'Deadline' },
                { id: 'status', label: 'Status' }
              ]}
              data={[
                { requirement: 'Enhanced KYC Procedures', deadline: 'Sep 2025', status: 'In Progress' },
                { requirement: 'Real-time Transaction Monitoring', deadline: 'Nov 2025', status: 'Planning' },
                { requirement: 'Data Localization for EU', deadline: 'Jan 2026', status: 'Not Started' },
                { requirement: 'AI Risk Assessment', deadline: 'Mar 2026', status: 'Not Started' },
                { requirement: 'Third-party Vendor Compliance', deadline: 'May 2026', status: 'Not Started' }
              ]}
              sortable={true}
            />
          </DataTableContainer>
          
          <ContentBox 
            variant="warning" 
            title="Priority Focus" 
            icon="exclamation-circle" 
            padding="medium"
            className="mt-4"
          >
            Enhanced KYC procedures require immediate attention to meet the September 2025 deadline. Estimated resource requirement: 3 FTEs for 4 months.
          </ContentBox>
        </GlobalCard>
      </Dashboard>
    </div>
  );
};


export default RegulatoryPage;
