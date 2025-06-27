import { useState } from 'react'
import PageHeader from '../components/layout/PageHeader-model'
import GlobalTab from '../components/ui/GlobalTab'
import GlobalButton from '../components/ui/GlobalButton'
import { Calendar, Download } from 'lucide-react'
import { OverviewTab } from '../components/tabs/OverviewTab'
import { XAITab } from '../components/tabs/XAITab'
import { OperationalTab } from '../components/tabs/OperationalTab'
import { ThresholdTuningTab } from '../components/tabs/ThresholdTuningTab'
import LogsTab from '../components/tabs/LogsTab'
import '../App.css'
import ExportButton from '../components/ui/ExportButton'

const ModelManagement = ({ userType = 'admin' }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊', content: <OverviewTab /> },
    { id: 'xai', name: 'XAI', icon: '🔬', content: <XAITab /> },
    { id: 'operational', name: 'Operational', icon: '⚙️', content: <OperationalTab /> },
    // Only show threshold-tuning for admin
    ...(userType === 'admin' ? [{ id: 'threshold-tuning', name: 'Threshold Tuning', icon: '🎛️', content: <ThresholdTuningTab /> }] : []),
    // Only show logs if not analyst
    ...(userType !== 'analyst' ? [{ id: 'logs', name: 'Logs', icon: '📋', content: <LogsTab /> }] : []),
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Page Header */}
        <PageHeader
          title="Model Management"
          subtitle="Comprehensive monitoring and management of fraud detection models"
          actions={
            <>
              <GlobalButton icon="calendar-alt" title="Select Date Range" />
              <ExportButton/>
            </>
          }
        />
        {/* Main Page Tabs */}
        <GlobalTab
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="classic"
        />
      </div>
    </div>
  )
}

export default ModelManagement

