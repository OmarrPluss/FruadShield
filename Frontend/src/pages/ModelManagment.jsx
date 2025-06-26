import { useState } from 'react'
import  PageHeader  from '../components/layout/PageHeader-model'
import GlobalTab from '../components/ui/GlobalTab'
import { Button } from '../components/ui/button-model'
import { Calendar, Download } from 'lucide-react'
import { OverviewTab } from '../components/tabs/OverviewTab'
import { XAITab } from '../components/tabs/XAITab'
import { OperationalTab } from '../components/tabs/OperationalTab'
import { ThresholdTuningTab } from '../components/tabs/ThresholdTuningTab'
import  LogsTab  from '../components/tabs/LogsTab'
import '../App.css'

const ModelManagement = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊', content: <OverviewTab /> },
    { id: 'xai', name: 'XAI', icon: '🔬', content: <XAITab /> },
    { id: 'operational', name: 'Operational', icon: '⚙️', content: <OperationalTab /> },
    { id: 'threshold-tuning', name: 'Threshold Tuning', icon: '🎛️', content: <ThresholdTuningTab /> },
    { id: 'logs', name: 'Logs', icon: '📋', content: <LogsTab /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <PageHeader
          title="Model Management"
          subtitle="Comprehensive monitoring and management of fraud detection models"
          actions={
            <>
              <Button variant="outline">
                <Calendar className="h-4 w-4" />
                Select Date Range
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
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
        {/* Tab Content */}
        <div className="mt-6">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  )
}

export default ModelManagement

