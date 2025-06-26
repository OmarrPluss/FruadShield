import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
Chart.register(...registerables, ChartDataLabels);

const FraudVolumeChart = ({ data, options = {} }) => {
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
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'rgba(240, 240, 255, 0.8)',
              font: {
                family: "'Inter', 'Segoe UI', sans-serif",
                size: 12
              },
              boxWidth: 12,
              usePointStyle: true
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
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: 'rgba(160, 160, 192, 1)',
              font: {
                family: "'Inter', 'Segoe UI', sans-serif",
                size: 11
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: 'rgba(160, 160, 192, 1)',
              font: {
                family: "'Inter', 'Segoe UI', sans-serif",
                size: 11
              }
            }
          }
        }
      };
      
      // Merge default options with provided options
      const mergedOptions = { ...defaultOptions, ...options };
      
      // Create chart
      chartInstance.current = new Chart(ctx, {
        type: 'line',
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

export default FraudVolumeChart;
