import React, { useEffect, useRef } from 'react';
import GlobalCard from '../components/ui/GlobalCard';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const workloadData = {
  labels: ['Reviewed', 'Pending'],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ['#4A90E2', '#333333'],
      borderWidth: 0,
      hoverOffset: 10,
    },
  ],
};

const workloadOptions = {
  cutout: '70%',
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#E0E0E0',
        font: { family: 'Poppins' },
      },
    },
  },
};

const dailyReviewsData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Reviews',
      data: [45, 60, 75, 50, 85, 40, 30],
      backgroundColor: '#4A90E2',
      borderRadius: 4,
      hoverBackgroundColor: '#3A80D2',
    },
  ],
};

const dailyReviewsOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
      ticks: { color: '#AAAAAA' },
    },
    x: {
      grid: { display: false },
      ticks: { color: '#AAAAAA' },
    },
  },
  plugins: { legend: { display: false } },
};

const alerts = [
  {
    type: 'High Risk',
    typeClass: 'bg-[rgba(208,2,27,0.2)] text-[#FF6B6B]',
    case: 'Case #FRD-2023-0456',
    time: '10:24 AM, Today',
  },
  {
    type: 'Suspicious',
    typeClass: 'bg-[rgba(245,166,35,0.2)] text-[#F5A623]',
    case: 'Case #FRD-2023-0455',
    time: '9:42 AM, Today',
  },
  {
    type: 'High Risk',
    typeClass: 'bg-[rgba(208,2,27,0.2)] text-[#FF6B6B]',
    case: 'Case #FRD-2023-0454',
    time: 'Yesterday',
  },
];

const transactionSummary = [
  {
    icon: 'fa-exchange-alt',
    label: 'Total Today',
    value: '1,240',
    change: '+12%',
    changeType: 'positive',
    changeIcon: 'fa-arrow-up',
    details: 'Click to view transaction breakdown by type and region',
    boxClass: '',
  },
  {
    icon: 'fa-exclamation-triangle',
    label: 'Unusual',
    value: '42',
    change: '-8%',
    changeType: 'negative',
    changeIcon: 'fa-arrow-down',
    details: 'Review flagged transactions requiring attention',
    boxClass: 'unusual',
  },
  {
    icon: 'fa-shield-alt',
    label: 'Potential Fraud',
    value: '18',
    change: '+5%',
    changeType: 'positive',
    changeIcon: 'fa-arrow-up',
    details: 'High-risk transactions that may require immediate action',
    boxClass: 'fraud',
  },
  {
    icon: 'fa-dollar-sign',
    label: 'Total Value',
    value: '$2.4M',
    change: '+22%',
    changeType: 'positive',
    changeIcon: 'fa-arrow-up',
    details: 'View transaction value distribution and trends',
    boxClass: '',
  },
];

const AnalystDashboard = () => {
  return (
    <div className="min-h-screen bg-transparent text-[#E0E0E0] font-[Poppins,sans-serif]">
      <div className="max-w-6xl mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Workload Pie Chart */}
          <GlobalCard title="Workload Overview">
            <div className="h-64 flex items-center justify-center">
              <Doughnut data={workloadData} options={workloadOptions} />
            </div>
          </GlobalCard>
          {/* Daily Reviews Bar Chart */}
          <GlobalCard title="Daily Review Activity">
            <div className="h-64 flex items-center justify-center">
              <Bar data={dailyReviewsData} options={dailyReviewsOptions} />
            </div>
          </GlobalCard>
          {/* Alerts Box */}
          <GlobalCard title="Recent Alerts">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-[#4A90E2]">Recent Alerts</span>
              <a href="#" className="text-[#4A90E2] text-sm hover:opacity-80">View All</a>
            </div>
            <div>
              {alerts.map((alert, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-[#333] hover:bg-[#2A2A2A] last:border-b-0">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${alert.type === 'High Risk' ? 'bg-[rgba(208,2,27,0.2)] text-[#FF6B6B]' : 'bg-[rgba(245,166,35,0.2)] text-[#F5A623]'}`}>{alert.type}</span>
                    <div className="flex flex-col">
                      <span className="font-medium">{alert.case}</span>
                      <span className="text-xs text-[#AAAAAA]">{alert.time}</span>
                    </div>
                  </div>
                  <button className="border border-[#4A90E2] text-[#4A90E2] px-3 py-1 rounded text-xs font-semibold hover:bg-[#4A90E2] hover:text-white transition">Investigate</button>
                </div>
              ))}
            </div>
          </GlobalCard>
          {/* Transaction Overview */}
          <GlobalCard title="Transaction Summary">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {transactionSummary.map((item, idx) => (
                <div
                  key={idx}
                  className={`kpi-item border border-[#333] shadow-md transition cursor-pointer relative overflow-hidden group ${item.boxClass === 'unusual' ? 'hover:border-[#F5A623]' : item.boxClass === 'fraud' ? 'hover:border-[#FF6B6B]' : 'hover:border-[#4A90E2]'}`}
                  style={{ backgroundColor: 'var(--bg-item)' }}
                >
                  <div className="flex items-center gap-2 text-[#AAAAAA] mb-2">
                    <i className={`fas ${item.icon}`}></i>
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${item.boxClass === 'unusual' ? 'text-[#F5A623]' : item.boxClass === 'fraud' ? 'text-[#FF6B6B]' : 'text-white'}`}>{item.value}</div>
                  <div className={`flex items-center gap-1 text-xs mb-2 ${item.changeType === 'positive' ? 'text-[#6BCB77]' : 'text-[#FF6B6B]' }`}>
                    <i className={`fas ${item.changeIcon}`}></i> {item.change} from yesterday
                  </div>
                  <div className="text-xs text-[#AAAAAA]">{item.details}</div>
                  <div className={`absolute left-0 top-0 h-1 w-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${item.boxClass === 'unusual' ? 'bg-[#F5A623]' : item.boxClass === 'fraud' ? 'bg-[#FF6B6B]' : 'bg-[#4A90E2]'}`}></div>
                </div>
              ))}
            </div>
          </GlobalCard>
        </div>
      </div>
    </div>
  );
};

export default AnalystDashboard;
