import { useState } from 'react'
import GlobalCard from '../ui/GlobalCard'
import GlobalTab from '../ui/GlobalTab'
import { Dashboard, DashboardCard } from '../ui/dashboard-model'
import  StatusDisplay  from '../ui/StatusDisplay'
import SparklineChart from '../charts/SparklineChart'
import { Power, Activity, Bell } from 'lucide-react'

const OperationalTab = () => {
  const [activeModel, setActiveModel] = useState('model-1')

  const models = [
    { id: 'model-1', name: 'Model 1 Ops' },
    { id: 'model-2', name: 'Model 2 Ops' },
    { id: 'model-3', name: 'Model 3 Ops' },
    { id: 'model-4', name: 'Model 4 Ops' },
    { id: 'rca', name: 'RCA Ops' },
    { id: 'retrainer', name: 'Retrainer Ops' },
  ]

  const operationalData = {
    'model-1': {
      name: 'SentinelGuard Alpha',
      status: 'Active & Healthy',
      endpoint: '/api/v1/predict/sentinelguard',
      version: '1.2.3',
      lastUpdate: '2025-05-10 14:30 UTC',
      uptime: '99.98%',
      alerts: [
        { time: '10:15 AM', level: 'warn', message: 'Prediction latency > 150ms for 5% of requests.' },
        { time: '08:30 AM', level: 'info', message: 'Scaled to 3 instances.' }
      ]
    },
    'model-2': {
      name: 'BehaviorNet Pro',
      status: 'Active & Healthy',
      endpoint: '/api/v1/predict/behaviornet',
      version: '2.1.0',
      lastUpdate: '2025-05-08 10:00 UTC',
      uptime: '100%',
      alerts: []
    }
  }

  const currentModel = operationalData[activeModel] || operationalData['model-1']

  const cpuData = [
    { value: 45 }, { value: 52 }, { value: 48 }, { value: 61 }, 
    { value: 55 }, { value: 67 }, { value: 59 }, { value: 63 }
  ]

  const memoryData = [
    { value: 72 }, { value: 68 }, { value: 75 }, { value: 71 }, 
    { value: 78 }, { value: 74 }, { value: 82 }, { value: 79 }
  ]

  return (
    <div>
      {/* Sub-tabs for different models */}
      <GlobalTab
        tabs={models}
        activeTab={activeModel}
        onTabChange={setActiveModel}
        className="mb-6 border-t border-border pt-5"
        variant="classic"
      />
      <h3 className="text-xl font-semibold mb-6 text-foreground">
        Operational Status: {currentModel.name}
      </h3>

      {/* Operational Content */}
      <Dashboard>
        <DashboardCard span={2}>
          <GlobalCard icon={<Power className="h-5 w-5" />} title="Deployment Status">
            <div className="space-y-9">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Status:</span>
                <StatusDisplay status="active" label={currentModel.status} />
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Endpoint URL:</span>
                <span className="font-mono text-sm">{currentModel.endpoint}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version Deployed:</span>
                <span className="font-medium">{currentModel.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Update:</span>
                <span className="font-medium text-sm">{currentModel.lastUpdate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Uptime (24h):</span>
                <span className="font-medium text-green-400">{currentModel.uptime}</span>
              </div>
            </div>
          </GlobalCard>
        </DashboardCard>

        <DashboardCard span={2}>
          <GlobalCard icon={<Activity className="h-10 w-20" />} title="Resource Utilization">
            <div className="space-y-11">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">CPU Usage</span>
                  <span className="text-sm font-medium">63%</span>
                </div>
                <SparklineChart data={cpuData} height={40} color="#5D8EFF" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Memory Usage</span>
                  <span className="text-sm font-medium">79%</span>
                </div>
                <SparklineChart data={memoryData} height={40} color="#7B6CFF" />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">Instances</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">142ms</div>
                  <div className="text-xs text-muted-foreground">Avg Latency</div>
                </div>
              </div>
            </div>
          </GlobalCard>
        </DashboardCard>

        <DashboardCard span={4}>
          <GlobalCard icon={<Bell className="h-5 w-5" />} title="Active Alerts">
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {currentModel.alerts.length > 0 ? (
                currentModel.alerts.map((alert, index) => (
                  <div key={index} className="p-3 rounded bg-muted/20 border-l-4 border-yellow-500">
                    <div className="flex items-start gap-2">
                      <span className="text-xs text-muted-foreground font-mono">{alert.time}</span>
                      <span className={`text-xs font-semibold uppercase ${
                        alert.level === 'warn' ? 'text-yellow-400' : 'text-blue-400'
                      }`}>
                        {alert.level}:
                      </span>
                    </div>
                    <p className="text-sm mt-1">{alert.message}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">✅</div>
                  <p className="text-muted-foreground">No active alerts</p>
                </div>
              )}
            </div>
          </GlobalCard>
        </DashboardCard>
      </Dashboard>
    </div>
  )
}

export { OperationalTab }

