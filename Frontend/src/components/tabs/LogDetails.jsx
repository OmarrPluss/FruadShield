import { useParams, useNavigate } from 'react-router-dom'
import { TopNavigation } from '../components/layouts/TopNavigation'
import { PageHeader } from '../components/layouts/PageHeader'
import { TabContainer, Tab } from '../components/ui/tab-container'
import GlobalCard from '../components/ui/GlobalCard'
import { Button } from '../components/ui/button-model'
import { RiskBadge } from '../components/ui/risk-badge-model'
import { ArrowLeft, ExternalLink, MoreHorizontal, AlertTriangle, Info, Clock, Database, Code, Link as LinkIcon } from 'lucide-react'
import '../App.css'

const LogDetails = () => {
  const { logId } = useParams()
  const navigate = useNavigate()

  // Mock log data - in a real app, this would be fetched based on logId
  const logData = {
    id: logId || 'LF-2025-0514-8472',
    timestamp: '2025-05-14 10:32:15 UTC',
    level: 'critical',
    severity: 'critical',
    title: 'Model Confidence Threshold Breach',
    message: 'SentinelGuard Alpha prediction confidence dropped below 0.85 threshold',
    model: 'SentinelGuard Alpha',
    version: '1.2.3',
    endpoint: '/api/v1/predict/sentinelguard',
    affectedTransactions: 1247,
    duration: '00:05:23',
    status: 'Resolved',
    assignedTo: 'ML Engineering Team',
    priority: 'P1 - Critical',
    tags: ['model-performance', 'threshold-breach', 'sentinelguard'],
    relatedLogs: 3,
    context: {
      requestId: 'req_2025051410321501',
      sessionId: 'sess_abc123def456',
      userId: 'user_789xyz',
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    technicalDetails: {
      errorCode: 'MDL_CONF_BREACH_001',
      stackTrace: 'ModelConfidenceError: Prediction confidence 0.82 below threshold 0.85\n  at SentinelGuardPredictor.predict()\n  at ModelService.processRequest()',
      payload: {
        transactionAmount: 1250.75,
        merchantId: 'merch_12345',
        cardType: 'VISA',
        location: 'New York, NY'
      }
    }
  }

  const handleBackToLogs = () => {
    navigate('/model-management')
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <div className="p-6 max-w-7xl mx-auto">
        {/* Model Stats Sub Navigation */}
        <TabContainer className="mb-0">
          <Tab onClick={() => navigate('/model-management')}>📊 Overview</Tab>
          <Tab onClick={() => navigate('/model-management')}>🔬 XAI</Tab>
          <Tab onClick={() => navigate('/model-management')}>⚙️ Operational</Tab>
          <Tab onClick={() => navigate('/model-management')}>🎛️ Threshold Tuning</Tab>
          <Tab active={true}>📋 Logs</Tab>
        </TabContainer>
        {/* Page Header */}
        <PageHeader
          title="Log Details"
          subtitle={`Detailed view of log entry #${logData.id}`}
          actions={
            <Button variant="outline" onClick={handleBackToLogs}>
              <ArrowLeft className="h-4 w-4" />
              Back to Logs
            </Button>
          }
        />
        {/* Main Log Detail Card */}
        <GlobalCard icon={<AlertTriangle className="h-6 w-6 text-red-400" />} title={logData.title} className="mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <RiskBadge risk={logData.severity}>
                {logData.severity.toUpperCase()}
              </RiskBadge>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <LinkIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <div className="border-b border-border pb-4">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Basic Information
                </h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Log ID:</span>
                    <span className="font-mono">{logData.id}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Timestamp:</span>
                    <span>{logData.timestamp}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Severity Level:</span>
                    <RiskBadge risk={logData.severity}>{logData.severity.toUpperCase()}</RiskBadge>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Status:</span>
                    <span className="text-green-400">{logData.status}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Priority:</span>
                    <span className="text-red-400">{logData.priority}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Assigned To:</span>
                    <span>{logData.assignedTo}</span>
                  </div>
                </div>
              </div>
              <div className="border-b border-border pb-4">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Event Details
                </h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Affected Model:</span>
                    <span>{logData.model}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Model Version:</span>
                    <span>{logData.version}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">API Endpoint:</span>
                    <span className="font-mono text-sm">{logData.endpoint}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Duration:</span>
                    <span>{logData.duration}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Affected Transactions:</span>
                    <span className="text-red-400">{logData.affectedTransactions.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Context Information
                </h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Request ID:</span>
                    <span className="font-mono text-sm">{logData.context.requestId}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Session ID:</span>
                    <span className="font-mono text-sm">{logData.context.sessionId}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">User ID:</span>
                    <span className="font-mono text-sm">{logData.context.userId}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">IP Address:</span>
                    <span className="font-mono">{logData.context.ipAddress}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">User Agent:</span>
                    <span className="text-sm break-all">{logData.context.userAgent}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Technical Details */}
            <div className="space-y-6">
              <div className="border-b border-border pb-4">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Technical Details
                </h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="font-semibold text-muted-foreground w-44 flex-shrink-0">Error Code:</span>
                    <span className="font-mono">{logData.technicalDetails.errorCode}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground block mb-2">Stack Trace:</span>
                    <div className="bg-muted/20 rounded-lg p-4 font-mono text-sm border border-border max-h-32 overflow-y-auto">
                      {logData.technicalDetails.stackTrace}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-border pb-4">
                <h3 className="text-lg font-semibold text-primary mb-4">Request Payload</h3>
                <div className="bg-muted/20 rounded-lg p-4 border border-border">
                  <pre className="text-sm font-mono whitespace-pre-wrap">
{JSON.stringify(logData.technicalDetails.payload, null, 2)}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Tags & Classification</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {logData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-primary cursor-pointer flex items-center gap-1 hover:underline">
                  <ExternalLink className="h-4 w-4" />
                  View {logData.relatedLogs} related logs
                </div>
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3 mt-8 pt-6 border-t border-border">
            <Button>
              <ExternalLink className="h-4 w-4" />
              Open in Log Viewer
            </Button>
            <Button variant="outline">
              <LinkIcon className="h-4 w-4" />
              Copy Permalink
            </Button>
            <Button variant="outline">
              Download Raw Log
            </Button>
          </div>
        </GlobalCard>
      </div>
    </div>
  )
}

export default LogDetails

