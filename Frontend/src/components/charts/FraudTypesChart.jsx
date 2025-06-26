import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
Chart.register(...registerables, ChartDataLabels);

const FraudTypesChart = ({ data, options = {} }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  useEffect(() => {
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // Create new chart instance
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // Default options
      const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: 'rgba(240, 240, 255, 0.8)',
              font: {
                family: "'Inter', 'Segoe UI', sans-serif",
                size: 12
              },
              boxWidth: 12,
              usePointStyle: true,
              padding: 20
            }
          },
          tooltip: {
            backgroundColor: 'rgba(37, 37, 58, 0.9)',
            titleColor: 'rgba(240, 240, 255, 1)',
            bodyColor: 'rgba(240, 240, 255, 0.8)',
            borderColor: 'rgba(93, 142, 255, 0.5)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            titleFont: {
              family: "'Inter', 'Segoe UI', sans-serif",
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              family: "'Inter', 'Segoe UI', sans-serif",
              size: 13
            },
            displayColors: true,
            boxWidth: 8,
            boxHeight: 8,
            boxPadding: 4,
            usePointStyle: true
          },
          datalabels: {
            color: 'white',
            font: {
              weight: 'bold',
              size: 11
            },
            formatter: (value, ctx) => {
              const sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = (value * 100 / sum).toFixed(1) + '%';
              return percentage;
            }
          }
        }
      };
      
      // Merge default options with provided options
      const mergedOptions = { ...defaultOptions, ...options };
      
      // Create chart
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: mergedOptions
      });
    }
    
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);
  
  return (
    <canvas ref={chartRef}></canvas>
  );
};

export default FraudTypesChart;
