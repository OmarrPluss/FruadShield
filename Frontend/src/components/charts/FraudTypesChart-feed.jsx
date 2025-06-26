import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FraudTypesChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          '#4d8bf0',
          '#00b894',
          '#e84393',
          '#fdcb6e',
          '#a0a0c0',
        ],
        borderColor: '#27293B',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#e0e0e0',
          font: {
            size: 12,
          },
          padding: 15,
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
  };

  return <Doughnut data={chartData} options={options} />;
};

export default FraudTypesChart;

