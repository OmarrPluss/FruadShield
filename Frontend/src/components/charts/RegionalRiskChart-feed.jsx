import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RegionalRiskChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Risk Level',
        data: data.values,
        backgroundColor: [
          '#4d8bf0',
          '#00b894',
          '#fdcb6e',
          '#e84393',
          '#a0a0c0',
        ],
        borderColor: '#27293B',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#27293B',
        titleColor: '#e0e0e0',
        bodyColor: '#e0e0e0',
        borderColor: '#4a4d66',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#4a4d66',
        },
        ticks: {
          color: '#a0a0c0',
          font: {
            size: 11,
          },
        },
        beginAtZero: true,
      },
      y: {
        grid: {
          color: '#4a4d66',
        },
        ticks: {
          color: '#a0a0c0',
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default RegionalRiskChart;

