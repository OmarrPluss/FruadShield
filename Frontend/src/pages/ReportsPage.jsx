import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import GlobalCard from '../components/ui/GlobalCard';

export default function Dashboard() {
  const detectionRateRef = useRef(null)
  const financialImpactRef = useRef(null)
  const accuracyGaugeRef = useRef(null)
  const fraudTypesRef = useRef(null)
  const alertVolumeRef = useRef(null)

  const detectionRateChart = useRef(null)
  const financialImpactChart = useRef(null)
  const accuracyGaugeChart = useRef(null)
  const fraudTypesChart = useRef(null)
  const alertVolumeChart = useRef(null)

  useEffect(() => {
    // Destroy existing charts if they exist
    const destroyCharts = () => {
      if (detectionRateChart.current) detectionRateChart.current.destroy()
      if (financialImpactChart.current) financialImpactChart.current.destroy()
      if (accuracyGaugeChart.current) accuracyGaugeChart.current.destroy()
      if (fraudTypesChart.current) fraudTypesChart.current.destroy()
      if (alertVolumeChart.current) alertVolumeChart.current.destroy()
    }

    destroyCharts()

    // Dark theme configuration
    Chart.defaults.color = '#9e9e9e'
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)'

    // Create new charts
    if (detectionRateRef.current) {
      detectionRateChart.current = new Chart(detectionRateRef.current, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Detection Rate',
            data: [89.2, 91.5, 93.1, 94.7],
            borderColor: '#64B5F6',
            backgroundColor: 'rgba(100, 181, 246, 0.1)',
            tension: 0.3,
            fill: true,
            pointBackgroundColor: ['#F44336', '#4CAF50', '#4CAF50', '#4CAF50'],
            pointRadius: 5,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              beginAtZero: false,
              min: 85,
              max: 100,
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              ticks: { callback: value => value + '%' }
            },
            x: { grid: { display: false } }
          }
        }
      })
    }

    if (financialImpactRef.current) {
      financialImpactChart.current = new Chart(financialImpactRef.current, {
        type: 'bar',
        data: {
          labels: ['Return paid', 'Value Presented', 'Net Loss'],
          datasets: [{
            label: 'Amount ($)',
            data: [142850, 1842300, 28570],
            backgroundColor: [
              'rgba(100, 181, 246, 0.7)',
              'rgba(126, 87, 194, 0.7)',
              'rgba(239, 83, 80, 0.7)'
            ],
            borderColor: [
              'rgba(100, 181, 246, 1)',
              'rgba(126, 87, 194, 1)',
              'rgba(239, 83, 80, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              ticks: { callback: value => '$' + (value / 1000).toFixed(0) + 'k' }
            },
            x: { grid: { display: false } }
          }
        }
      })
    }

    if (accuracyGaugeRef.current) {
      accuracyGaugeChart.current = new Chart(accuracyGaugeRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Accuracy', ''],
          datasets: [{
            data: [95.9, 4.1],
            backgroundColor: ['#4CAF50', '#3d3d3d'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '75%',
          plugins: { legend: { display: false }, tooltip: { enabled: false } }
        }
      })
    }

    if (fraudTypesRef.current) {
      fraudTypesChart.current = new Chart(fraudTypesRef.current, {
        type: 'pie',
        data: {
          labels: ['Card Net Pricing', 'Activity Taste', 'Account Taxpayer', 'Prisking', 'Others'],
          datasets: [{
            data: [42, 28, 15, 6, 9],
            backgroundColor: ['#64B5F6', '#9C27B0', '#4CAF50', '#F44336', '#FF9800'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { padding: 15, usePointStyle: true, pointStyle: 'circle' }
            }
          }
        }
      })
    }

    if (alertVolumeRef.current) {
      alertVolumeChart.current = new Chart(alertVolumeRef.current, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2'],
          datasets: [{
            label: 'Generated',
            data: [3842, 3721],
            backgroundColor: 'rgba(100, 181, 246, 0.7)',
            borderColor: 'rgba(100, 181, 246, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
            x: { grid: { display: false } }
          }
        }
      })
    }

    // Cleanup function
    return () => {
      destroyCharts()
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent p-5 text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Fraud Detection Rate Card */}
        <GlobalCard title="Fraud Detection Rate (Last 30 Days)" icon="chart-line">
          <div className="h-64">
            <canvas ref={detectionRateRef} />
          </div>
        </GlobalCard>

        {/* Financial Impact Card */}
        <GlobalCard title="Financial Impact - This Month" icon="dollar-sign">
          <div className="flex justify-between gap-4 mb-5">
            <div className="text-center">
              <div className="text-gray-400 text-sm">Total Return paid</div>
              <div className="text-xl font-bold text-white">$142,850</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-sm">Value Presented</div>
              <div className="text-xl font-bold text-white">$1,842,300</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-sm">Net Loss</div>
              <div className="text-xl font-bold text-white">$28,570</div>
            </div>
          </div>
          <div className="h-48">
            <canvas ref={financialImpactRef} />
          </div>
        </GlobalCard>

        {/* Review Accuracy Card */}
        <GlobalCard title="Review Accuracy" icon="bullseye">
          <div className="h-48 mb-4">
            <canvas ref={accuracyGaugeRef} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-900/30 p-3 rounded border-l-4 border-blue-400 text-blue-200 font-medium">
              Precision 96.2%
            </div>
            <div className="bg-gray-700 p-3 rounded font-medium">Specificity 94.5%</div>
            <div className="bg-blue-900/30 p-3 rounded border-l-4 border-blue-400 text-blue-200 font-medium">
              Recall 97.1%
            </div>
            <div className="bg-gray-700 p-3 rounded font-medium">F1 Score 96.6%</div>
            <div className="bg-blue-900/30 p-3 rounded border-l-4 border-blue-400 text-blue-200 font-medium">
              Accuracy 95.9%
            </div>
          </div>
        </GlobalCard>

        {/* Key Performance Indicators Card */}
        <GlobalCard title="Key Performance Indicators" icon="medal">
          <div className="flex justify-between mb-5">
            <div>
              <div className="text-gray-400 text-sm">Year Fraud Class (MTD)</div>
              <div className="text-xl font-bold text-white">3.2%</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Resolution Time ± k%</div>
              <div className="text-xl font-bold text-white">0.5%</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-white mb-2">Top Fraud Types (Last 30 Days)</div>
            <div className="h-64">
              <canvas ref={fraudTypesRef} />
            </div>
          </div>
        </GlobalCard>

        {/* Alert Volume Card */}
        <GlobalCard title="Alert Volume vs. Resolution (Last 7 Days)" icon="bell" span={2}>
          <div className="h-64">
            <canvas ref={alertVolumeRef} />
          </div>
        </GlobalCard>
      </div>
    </div>
  )
}