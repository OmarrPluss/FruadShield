import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ModelEvaluationChart = ({ height = 300, modelData }) => {
  const defaultData = [
    { metric: 'Precision', value: 0.92 },
    { metric: 'Recall', value: 0.88 },
    { metric: 'F1-Score', value: 0.90 },
    { metric: 'Accuracy', value: 0.94 },
    { metric: 'AUC-ROC', value: 0.96 },
  ]

  const data = modelData || defaultData

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#3A3D5A" />
        <XAxis dataKey="metric" stroke="#A0A0C0" />
        <YAxis stroke="#A0A0C0" domain={[0, 1]} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#25253A', 
            border: '1px solid #3A3D5A',
            borderRadius: '8px',
            color: '#F0F0FF'
          }}
          formatter={(value) => [value.toFixed(3), 'Score']}
        />
        <Bar dataKey="value" fill="#5D8EFF" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export { ModelEvaluationChart }

