import { useState } from 'react'
import GlobalCard from '../ui/GlobalCard'
import GlobalTab from '../ui/GlobalTab'
import { Dashboard } from '../ui/dashboard-model'
import { ShapChart } from '../charts/ShapChart'
import { Microscope, ScatterChart, Percent, List } from 'lucide-react'

const XAITab = () => {
  const [activeModel, setActiveModel] = useState('model-1')

  const models = [
    { id: 'model-1', name: 'Model 1' },
    { id: 'model-2', name: 'Model 2' },
    { id: 'model-3', name: 'Model 3' },
    { id: 'model-4', name: 'Model 4' },
    { id: 'rca', name: 'RCA XAI' },
    { id: 'retrainer', name: 'Retrainer XAI' },
  ]

  const featureImpacts = [
    {
      feature: 'Transaction Amount',
      value: '$1,250.75',
      shapValue: '+0.35',
      impact: 'Increases Fraud Score',
      impactWidth: 70
    },
    {
      feature: 'V284',
      value: '0.012',
      shapValue: '+0.22',
      impact: 'Increases Fraud Score',
      impactWidth: 44
    },
    {
      feature: 'Time Since Last Txn',
      value: '3 hours',
      shapValue: '-0.15',
      impact: 'Decreases Fraud Score',
      impactWidth: 30
    },
    {
      feature: 'IP Geolocation Risk',
      value: 'High',
      shapValue: '+0.10',
      impact: 'Increases Fraud Score',
      impactWidth: 20
    },
    {
      feature: 'V14',
      value: '-0.58',
      shapValue: '-0.08',
      impact: 'Decreases Fraud Score',
      impactWidth: 16
    }
  ]

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
      <h3 className="text-xl font-semibold mb-6 text-foreground">
        XAI Insights for {activeModel === 'model-1' ? 'Model 1: SentinelGuard Alpha' : `Model ${activeModel.split('-')[1]}`}
      </h3>
      {/* XAI Content */}
      <Dashboard>
          <GlobalCard span={2} icon={<ScatterChart className="h-5 w-5" />} title="SHAP Values: Txn Amt vs V284">
            <ShapChart height={250} />
            <p className="text-xs text-muted-foreground mt-3">
              SHAP interaction plot showing how Transaction Amount and feature V284 jointly influence predictions.
            </p>
          </GlobalCard>

          <GlobalCard span={2} icon={<Percent className="h-5 w-5" />} title="Prediction Probabilities Distribution">
            <div className="h-64 flex items-center justify-center bg-muted/10 rounded">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-sm text-muted-foreground">
                  Probability Distribution Chart
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  (Chart visualization would be rendered here)
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Distribution of prediction probabilities for recent samples, highlighting model confidence.
            </p>
          </GlobalCard>

          <GlobalCard span={4} icon={<List className="h-5 w-5" />} title="Feature Value & SHAP Impact">
            <p className="text-sm mb-4">
              Top 5 features impacting a sample prediction (Placeholder Transaction ID: TXN123456789):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Feature Name</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Feature Value</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">SHAP Value</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Impact Direction</th>
                  </tr>
                </thead>
                <tbody>
                  {featureImpacts.map((item, idx) => (
                    <tr key={idx} className="border-b border-border/40">
                      <td className="py-2 px-4 font-medium">{item.feature}</td>
                      <td className="py-2 px-4">{item.value}</td>
                      <td className="py-2 px-4">{item.shapValue}</td>
                      <td className="py-2 px-4">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${item.impact.includes('Increase') ? 'bg-green-500/20 text-green-700' : 'bg-blue-500/20 text-blue-700'}`}>{item.impact}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlobalCard>
      </Dashboard>
    </div>
  )
}

export { XAITab }

