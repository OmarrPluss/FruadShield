import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import GlobalCard from '../components/ui/GlobalCard';

function ManagerDashboard() {
  const detectionRateRef = useRef(null)
  const financialImpactRef = useRef(null)
  const fraudTypesRef = useRef(null)
  const reviewAccuracyRef = useRef(null)
  const alertVolumeRef = useRef(null)

  // Store chart instances for cleanup
  const chartInstances = useRef([])

  useEffect(() => {
    // Helper to destroy all charts
    const destroyCharts = () => {
      chartInstances.current.forEach(chart => chart && chart.destroy())
      chartInstances.current = []
    }
    destroyCharts()

    // Fraud Detection Rate Chart (Line Chart)
    chartInstances.current[0] = new Chart(detectionRateRef.current, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [{
          label: 'Detection Rate',
          data: [82, 85, 88, 91, 89, 93, 95, 97],
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          tension: 0.3,
          fill: true,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { 
              stepSize: 10,
              callback: value => value + '%'
            }
          },
          x: { grid: { display: false } }
        }
      }
    })

    // Financial Impact Chart (Bar Chart)
    chartInstances.current[1] = new Chart(financialImpactRef.current, {
      type: 'bar',
      data: {
        labels: ['Total Attempted', 'Value Presented', 'Net Loss'],
        datasets: [{
          data: [0.9, 0.7, 0.2],
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
            max: 1.0,
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { 
              stepSize: 0.1,
              callback: value => value.toFixed(1)
            }
          },
          x: { grid: { display: false } }
        }
      }
    })

    // Top Fraud Types Chart (Doughnut Chart)
    chartInstances.current[2] = new Chart(fraudTypesRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Card Not Present', 'Account Takeover', 'Pilating', 'Identify Their', 'Other'],
        datasets: [{
          data: [35, 25, 20, 15, 5],
          backgroundColor: [
            '#4CAF50',
            '#2196F3',
            '#FF9800',
            '#F44336',
            '#9C27B0'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { padding: 15 }
          }
        }
      }
    })

    // Review Accuracy Gauge
    chartInstances.current[3] = new Chart(reviewAccuracyRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Accuracy', ''],
        datasets: [{
          data: [97.5, 2.5],
          backgroundColor: ['#4CAF50', '#3d3d3d'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: { 
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    })

    // Alert Volume Chart (Bar Chart)
    chartInstances.current[4] = new Chart(alertVolumeRef.current, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Alerts Generated',
            data: [180, 150, 170, 190, 160, 120, 100],
            backgroundColor: 'rgba(100, 181, 246, 0.7)'
          },
          {
            label: 'Alerts Resolved',
            data: [160, 140, 150, 170, 150, 100, 80],
            backgroundColor: 'rgba(76, 175, 80, 0.7)'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 200,
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { stepSize: 20 }
          },
          x: { grid: { display: false } }
        }
      }
    })

    return () => {
      destroyCharts()
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent p-5 text-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Fraud Detection Rate Card */}
        <GlobalCard 
          title="Fraud Detection Rate (Last 30 Days)"
          span={2}
          className="border-gray-700"
        >
          <div className="h-80">
            <canvas ref={detectionRateRef} />
          </div>
        </GlobalCard>

        {/* Financial Impact Card */}
        <GlobalCard 
          title="Financial Impact - This Month"
          span={1}
          className="border-gray-700"
        >
          <div className="h-64">
            <canvas ref={financialImpactRef} />
          </div>
        </GlobalCard>

        {/* Key Performance Indicators Card */}
        <GlobalCard 
          title="Key Performance Indicators"
          span={1}
          className="border-gray-700"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="font-semibold">Year</div>
              <div className="font-semibold text-green-400">Total Fraud Cases (MTD) ↑ 10%</div>
              <div className="font-semibold text-red-400">Avg. Resolution Time ↓ 5%</div>
              
              <div className="col-span-3 h-px bg-gray-700 my-1"></div>
              
              <div>2023</div>
              <div>15.0</div>
              <div>2.5 hrs</div>
              
              <div>2024</div>
              <div>3.2%</div>
              <div>0.5%</div>
            </div>
          </div>
        </GlobalCard>

        {/* Top Fraud Types Card */}
        <GlobalCard 
          title="Top Fraud Types (Last 30 Days)"
          span={1}
          className="border-gray-700"
        >
          <div className="h-64">
            <canvas ref={fraudTypesRef} />
          </div>
        </GlobalCard>

        {/* Review Accuracy Card */}
        <GlobalCard 
          title="Review Accuracy"
          span={1}
          className="border-gray-700"
        >
          <div className="flex flex-col items-center">
            <div className="h-40 w-40 mb-4">
              <canvas ref={reviewAccuracyRef} />
            </div>
            <div className="text-3xl font-bold text-green-400">97.5%</div>
            <div className="text-sm text-gray-400 mt-2">↑ 0.2% from last month</div>
            <div className="mt-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Avg. Cases/Analyst/Day</span>
                <span className="text-gray-300">25 ↔</span>
              </div>
            </div>
          </div>
        </GlobalCard>

        {/* Alert Volume Card */}
        <GlobalCard 
          title="Alert Volume vs. Resolution (Last 7 Days)"
          span={2}
          className="border-gray-700"
        >
          <div className="h-64">
            <canvas ref={alertVolumeRef} />
          </div>
        </GlobalCard>
      </div>
    </div>
  )
}

export default ManagerDashboard;
