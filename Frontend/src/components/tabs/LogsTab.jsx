import { useState } from 'react'
import GlobalCard from '../ui/GlobalCard'
import { LogItem, LogList } from '../ui/log-item-model'
import { Button } from '../ui/button-model'
import { RiskBadge } from '../ui/risk-badge-model'
import { Dashboard, DashboardCard } from '../ui/dashboard-model'
import { ClipboardList, Filter, Search, Calendar } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LogsTab = () => {
  const navigate = useNavigate()
  const [selectedRisk, setSelectedRisk] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const logEntries = [
    {
      id: 'LF-2025-0514-8472',
      timestamp: '2025-05-14 10:32:15',
      level: 'critical',
      message: 'Model Confidence Threshold Breach - SentinelGuard Alpha prediction confidence dropped below 0.85',
      risk: 'critical',
      model: 'SentinelGuard Alpha',
      details: true
    },
    {
      id: 'LF-2025-0514-8471',
      timestamp: '2025-05-14 10:28:42',
      level: 'warn',
      message: 'High prediction latency detected - BehaviorNet Pro response time exceeded 200ms',
      risk: 'medium',
      model: 'BehaviorNet Pro',
      details: true
    },
    {
      id: 'LF-2025-0514-8470',
      timestamp: '2025-05-14 10:15:33',
      level: 'info',
      message: 'Model retrained successfully - SentinelGuard Alpha v1.2.4 deployed',
      risk: 'low',
      model: 'SentinelGuard Alpha',
      details: true
    },
    {
      id: 'LF-2025-0514-8469',
      timestamp: '2025-05-14 09:45:18',
      level: 'warn',
      message: 'Feature drift detected in transaction amount distribution',
      risk: 'high',
      model: 'SentinelGuard Alpha',
      details: true
    },
    {
      id: 'LF-2025-0514-8468',
      timestamp: '2025-05-14 09:30:07',
      level: 'info',
      message: 'Scheduled model evaluation completed - All metrics within acceptable ranges',
      risk: 'low',
      model: 'All Models',
      details: false
    },
    {
      id: 'LF-2025-0514-8467',
      timestamp: '2025-05-14 09:12:55',
      level: 'error',
      message: 'API endpoint timeout - Model prediction service temporarily unavailable',
      risk: 'critical',
      model: 'BehaviorNet Pro',
      details: true
    }
  ]

  const filteredLogs = logEntries.filter(log => {
    const matchesRisk = selectedRisk === 'all' || log.risk === selectedRisk
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.model.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesRisk && matchesSearch
  })

  const handleDetailsClick = (logId) => {
    navigate(`/log-details/${logId}`)
  }

  const riskCounts = {
    all: logEntries.length,
    critical: logEntries.filter(log => log.risk === 'critical').length,
    high: logEntries.filter(log => log.risk === 'high').length,
    medium: logEntries.filter(log => log.risk === 'medium').length,
    low: logEntries.filter(log => log.risk === 'low').length,
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Model Logs</h2>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" />
            Export Logs
          </Button>
        </div>
      </div>
      <Dashboard>
        {/* Filter Controls */}
        <DashboardCard span={4}>
          <GlobalCard icon={<Filter className="h-5 w-5" />} title="Filter & Search">
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Risk Level Filter */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Filter by Risk Level:
                </label>
                <div className="flex flex-wrap gap-2">
                  <RiskBadge
                    risk="low"
                    active={selectedRisk === 'all'}
                    onClick={() => setSelectedRisk('all')}
                    className="bg-muted/20 text-foreground border-border"
                  >
                    All ({riskCounts.all})
                  </RiskBadge>
                  <RiskBadge
                    risk="critical"
                    active={selectedRisk === 'critical'}
                    onClick={() => setSelectedRisk('critical')}
                  >
                    Critical ({riskCounts.critical})
                  </RiskBadge>
                  <RiskBadge
                    risk="high"
                    active={selectedRisk === 'high'}
                    onClick={() => setSelectedRisk('high')}
                  >
                    High ({riskCounts.high})
                  </RiskBadge>
                  <RiskBadge
                    risk="medium"
                    active={selectedRisk === 'medium'}
                    onClick={() => setSelectedRisk('medium')}
                  >
                    Medium ({riskCounts.medium})
                  </RiskBadge>
                  <RiskBadge
                    risk="low"
                    active={selectedRisk === 'low'}
                    onClick={() => setSelectedRisk('low')}
                  >
                    Low ({riskCounts.low})
                  </RiskBadge>
                </div>
              </div>
            </div>
          </GlobalCard>
        </DashboardCard>
        {/* Log Entries */}
        <DashboardCard span={4}>
          <GlobalCard icon={<ClipboardList className="h-5 w-5" />} title={`Recent Log Entries (${filteredLogs.length})`}>
            <LogList maxHeight="max-h-96">
              {filteredLogs.map((log) => (
                <LogItem
                  key={log.id}
                  timestamp={log.timestamp}
                  level={log.level}
                  message={log.message}
                  details={log.details}
                  onDetailsClick={() => handleDetailsClick(log.id)}
                />
              ))}
              {filteredLogs.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">🔍</div>
                  <p className="text-muted-foreground">No logs match your current filters</p>
                </div>
              )}
            </LogList>
          </GlobalCard>
        </DashboardCard>
      </Dashboard>
    </div>
  )
}

export default LogsTab;
