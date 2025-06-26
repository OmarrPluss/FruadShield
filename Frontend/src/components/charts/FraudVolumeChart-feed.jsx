import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const FraudVolumeChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Fraud Volume',
        data: data.values,
        borderColor: '#e84393',
        backgroundColor: 'rgba(232, 67, 147, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#e84393',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#e0e0e0',
          font: {
            size: 12,
          },
        },
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
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default FraudVolumeChart;

