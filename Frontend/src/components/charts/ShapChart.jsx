import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ShapChart = ({ height = 300, title = "SHAP Values" }) => {
  const data = [
    { x: 1250.75, y: 0.35, feature: 'Transaction Amount' },
    { x: 0.012, y: 0.22, feature: 'V284' },
    { x: 3, y: -0.15, feature: 'Time Since Last Txn' },
    { x: 0.8, y: 0.10, feature: 'IP Geolocation Risk' },
    { x: -0.58, y: -0.08, feature: 'V14' },
    { x: 2.5, y: 0.18, feature: 'Device Score' },
    { x: 0.95, y: -0.12, feature: 'Velocity Check' },
    { x: 1.2, y: 0.25, feature: 'Merchant Risk' },
  ]

  return (
    <ResponsiveContainer width="100%" height={height}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#3A3D5A" />
        <XAxis 
          type="number" 
          dataKey="x" 
          name="Feature Value" 
          stroke="#A0A0C0"
        />
        <YAxis 
          type="number" 
          dataKey="y" 
          name="SHAP Value" 
          stroke="#A0A0C0"
        />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{ 
            backgroundColor: '#25253A', 
            border: '1px solid #3A3D5A',
            borderRadius: '8px',
            color: '#F0F0FF'
          }}
          formatter={(value, name, props) => [
            `${name}: ${value}`,
            props.payload.feature
          ]}
        />
        <Scatter 
          name="Features" 
          data={data} 
          fill="#5D8EFF"
        />
      </ScatterChart>
    </ResponsiveContainer>
  )
}

export { ShapChart }

