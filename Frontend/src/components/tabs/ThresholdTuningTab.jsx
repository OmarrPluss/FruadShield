import { useState } from 'react'
import GlobalCard from '../ui/GlobalCard'
import GlobalTab from '../ui/GlobalTab'
import { Dashboard } from '../ui/dashboard-model'
import { Button } from '../ui/button-model'
import { Settings, History, Save, BookOpen, Wrench, GraduationCap } from 'lucide-react'

const ThresholdTuningTab = () => {
  const [activeModel, setActiveModel] = useState('model-1')
  const [threshold, setThreshold] = useState(0.65)

  const models = [
    { id: 'model-1', name: 'Model 1 Tuning' },
    { id: 'model-2', name: 'Model 2 Tuning' },
    { id: 'model-3', name: 'Model 3 Tuning' },
    { id: 'model-4', name: 'Model 4 Tuning' },
    { id: 'rca', name: 'RCA Tuning Impact' },
    { id: 'retrainer', name: 'Retrainer Tuning Impact' },
  ]

  const thresholdHistory = [
    { date: '2025-05-10', oldValue: 0.60, newValue: 0.65, changedBy: 'AdminUser', reason: 'Recalibration post-retrain' },
    { date: '2025-04-15', oldValue: 0.58, newValue: 0.60, changedBy: 'System', reason: 'Automated adjustment' },
    { date: '2025-03-20', oldValue: 0.55, newValue: 0.58, changedBy: 'AnalystX', reason: 'Increased FP tolerance' },
  ]

  const optimizationTable = [
    { threshold: 0.50, precision: 0.85, recall: 0.95, f1Score: 0.90, fp: 120, fn: 25 },
    { threshold: 0.55, precision: 0.88, recall: 0.92, f1Score: 0.90, fp: 95, fn: 40 },
    { threshold: 0.60, precision: 0.91, recall: 0.88, f1Score: 0.89, fp: 80, fn: 60 },
    { threshold: 0.65, precision: 0.92, recall: 0.86, f1Score: 0.89, fp: 70, fn: 70 },
    { threshold: 0.70, precision: 0.94, recall: 0.82, f1Score: 0.88, fp: 55, fn: 90 },
    { threshold: 0.75, precision: 0.96, recall: 0.78, f1Score: 0.86, fp: 40, fn: 110 },
  ]

  const handleThresholdChange = (e) => {
    setThreshold(parseFloat(e.target.value))
  }

  const handleApplyThreshold = () => {
    alert(`Threshold ${threshold} applied (simulated)`)
  }

  return (
    <div>
      {/* Page Header with Documentation Links */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Threshold Tuning</h2>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <BookOpen className="h-4 w-4" />
            Read Dev Doc
          </Button>
          <Button variant="outline" size="sm">
            <Wrench className="h-4 w-4" />
            Read Maintainer Doc
          </Button>
          <Button variant="outline" size="sm">
            <GraduationCap className="h-4 w-4" />
            Read Model Tuning Guide
          </Button>
        </div>
      </div>

      {/* Sub-tabs for different models */}
      <GlobalTab
        tabs={models}
        activeTab={activeModel}
        onTabChange={setActiveModel}
        className="mb-6 border-t border-border pt-5"
        variant="classic"
      />

      <h3 className="text-xl font-semibold mb-6 text-foreground">
        Threshold Tuning for {activeModel === 'model-1' ? 'Model 1: SentinelGuard Alpha' : `Model ${activeModel.split('-')[1]}`}
      </h3>

      {/* Threshold Tuning Content */}
      <Dashboard>
          <GlobalCard span={2} icon={<Settings className="h-5 w-5" />} title="Current Threshold & Adjuster">
            <div className="space-y-6">
              <div className="bg-muted/10 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <label className="font-medium text-muted-foreground">
                    Current Threshold:
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    {threshold.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={threshold}
                  onChange={handleThresholdChange}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>0.00</span>
                  <span>0.50</span>
                  <span>1.00</span>
                </div>
              </div>
              <Button onClick={handleApplyThreshold} className="w-full">
                <Save className="h-4 w-4" />
                Apply New Threshold (Simulated)
              </Button>
            </div>
          </GlobalCard>

          <GlobalCard span={2} icon={<History className="h-5 w-5" />} title="Threshold Change History">
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-card">
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Date</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Old</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">New</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">By</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {thresholdHistory.map((entry, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-primary/5">
                      <td className="py-4">{entry.date}</td>
                      <td className="py-2 font-mono">{entry.oldValue}</td>
                      <td className="py-2 font-mono">{entry.newValue}</td>
                      <td className="py-2">{entry.changedBy}</td>
                      <td className="py-2 text-xs">{entry.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlobalCard>

          <GlobalCard span={4} icon={<Settings className="h-5 w-5" />} title="Threshold Optimization Table (Example)">
            <p className="text-xs text-muted-foreground mb-4">
              Simulated impact of different thresholds on key metrics for Stacking Ensemble:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Threshold</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Precision</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Recall</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">F1-Score</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">False Positives</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">False Negatives</th>
                  </tr>
                </thead>
                <tbody>
                  {optimizationTable.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-border/50 hover:bg-primary/5 ${
                        row.threshold === threshold ? 'bg-primary/10' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-mono font-bold">{row.threshold}</td>
                      <td className="py-3 px-4">{row.precision}</td>
                      <td className="py-3 px-4">{row.recall}</td>
                      <td className="py-3 px-4">{row.f1Score}</td>
                      <td className="py-3 px-4">{row.fp}</td>
                      <td className="py-3 px-4">{row.fn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlobalCard>
      </Dashboard>
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #5D8EFF;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #5D8EFF;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}

export { ThresholdTuningTab }

