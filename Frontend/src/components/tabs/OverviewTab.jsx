import { useState } from 'react'
import GlobalCard from '../ui/GlobalCard'
import GlobalTab from '../ui/GlobalTab'
import { Dashboard } from '../ui/dashboard-model'
import { ModelEvaluationChart } from '../charts/ModelEvaluationChart'
import { Info, BarChart3 } from 'lucide-react'

const OverviewTab = () => {
  const [activeModel, setActiveModel] = useState('model-1')

  const models = [
    { id: 'model-1', name: 'Model 1' },
    { id: 'model-2', name: 'Model 2' },
    { id: 'model-3', name: 'Model 3' },
    { id: 'model-4', name: 'Model 4' },
    { id: 'rca', name: 'RCA' },
    { id: 'retrainer', name: 'Retrainer' },
  ]

  const modelDetails = {
    'model-1': {
      name: 'SentinelGuard Alpha',
      version: '1.2.3',
      role: 'Primary transaction risk scoring',
      approach: 'XGBoost Classifier',
      lastTrained: '2025-05-01',
      inputFeatures: '120 (e.g., amount, location, time)',
      output: 'Fraud Score (0.0-1.0)',
      confusionMatrix: {
        tn: 14870,
        fp: 80,
        fn: 150,
        tp: 900
      }
    },
    'model-2': {
      name: 'BehaviorNet Pro',
      version: '2.1.0',
      role: 'User behavioral anomaly detection',
      approach: 'Recurrent Neural Network (LSTM)',
      lastTrained: '2025-04-20',
      inputFeatures: 'User session patterns, device info',
      output: 'Anomaly Score (0.0-1.0)',
      confusionMatrix: {
        tn: 13250,
        fp: 95,
        fn: 180,
        tp: 1475
      }
    },
    'model-3': {
      name: 'BehaviorNet Exxxxx',
      version: '2.1.0',
      role: 'User behavioral anomaly detection',
      approach: 'Recurrent Neural Network (LSTM)',
      lastTrained: '2025-04-20',
      inputFeatures: 'User session patterns, device info',
      output: 'Anomaly Score (0.0-1.0)',
      confusionMatrix: {
        tn: 13250,
        fp: 95,
        fn: 180,
        tp: 1475
      }
    },
    // Add more model details as needed
  }

  const currentModel = modelDetails[activeModel] || modelDetails['model-1']

  return (
    <div>
      {/* Sub-tabs for different models */}
      <GlobalTab
        tabs={models}
        activeTab={activeModel}
        onTabChange={setActiveModel}
        className="mb-6 border-border border-border pt-5"
        variant="classic"
      />
      {/* Model Overview Content */}
      <Dashboard>
          <GlobalCard title={`${currentModel.name} Details`} icon={Info} span={2}>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-medium">{currentModel.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Version:</span>
                <span className="font-medium">{currentModel.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Role:</span>
                <span className="font-medium text-sm">{currentModel.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Approach:</span>
                <span className="font-medium">{currentModel.approach}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Trained:</span>
                <span className="font-medium">{currentModel.lastTrained}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Input Features:</span>
                <span className="font-medium text-sm">{currentModel.inputFeatures}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Output:</span>
                <span className="font-medium">{currentModel.output}</span>
              </div>
            </div>
          </GlobalCard>

          <GlobalCard title="Confusion Matrix" icon={BarChart3} span={2}>
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Text Representation:</p>
              <pre className="text-xs bg-muted/20 p-3 rounded text-muted-foreground">
{`Predicted   | Actual Non-Fraud | Actual Fraud
----------------------------------------------
Non-Fraud   | TN: ${currentModel.confusionMatrix.tn.toLocaleString()}        | FN: ${currentModel.confusionMatrix.fn}
Fraud       | FP: ${currentModel.confusionMatrix.fp}           | TP: ${currentModel.confusionMatrix.tp}`}
              </pre>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Visual Representation:</p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div></div>
                <div className="text-center font-medium text-muted-foreground">Actual Non-Fraud</div>
                <div className="text-center font-medium text-muted-foreground">Actual Fraud</div>
                <div className="font-medium text-muted-foreground">Predicted Non-Fraud</div>
                <div className="text-center p-2 bg-green-500/20 rounded">
                  {currentModel.confusionMatrix.tn.toLocaleString()} <span className="text-xs">(TN)</span>
                </div>
                <div className="text-center p-2 bg-red-500/20 rounded">
                  {currentModel.confusionMatrix.fn} <span className="text-xs">(FN)</span>
                </div>
                <div className="font-medium text-muted-foreground">Predicted Fraud</div>
                <div className="text-center p-2 bg-red-500/20 rounded">
                  {currentModel.confusionMatrix.fp} <span className="text-xs">(FP)</span>
                </div>
                <div className="text-center p-2 bg-green-500/20 rounded">
                  {currentModel.confusionMatrix.tp} <span className="text-xs">(TP)</span>
                </div>
              </div>
            </div>
          </GlobalCard>

          <GlobalCard title="Model Evaluation" icon={BarChart3} span={4}>
            <ModelEvaluationChart height={250} />
          </GlobalCard>
      </Dashboard>
    </div>
  )
}

export { OverviewTab }

