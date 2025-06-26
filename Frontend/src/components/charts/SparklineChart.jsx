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
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';

// Register ChartJS components
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

const SparklineChart = ({ 
  data, 
  labels, 
  color = '#4A90E2',
  height = 60
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: '',
        data,
        borderColor: color,
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false }, 
      tooltip: { enabled: true, intersect: false, mode: 'index' }
    },
    scales: { 
      x: { 
        type: 'time', 
        time: { unit: 'minute', tooltipFormat: 'HH:mm' }, 
        display: false 
      }, 
      y: { 
        display: false, 
        suggestedMin: Math.min(...data) * 0.9, 
        suggestedMax: Math.max(...data) * 1.1 
      }
    }
  };

  return (
    <div className="chart-container-small" style={{ height }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SparklineChart;
