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

const IndustryChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Risk Score',
        data: data.values,
        backgroundColor: data.values.map(value => {
          if (value >= 80) return '#e84393';
          if (value >= 60) return '#fdcb6e';
          return '#00b894';
        }),
        borderColor: '#27293B',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default IndustryChart;

