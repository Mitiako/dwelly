import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Single Family', value: 58 },
  { name: 'Condo', value: 22 },
  { name: 'Townhouse', value: 12 },
  { name: 'Multi Family', value: 8 },
]

const COLORS = ['#22d3ee', '#10b981', '#f59e0b', '#8b5cf6']

const MarketDonutChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          innerRadius={70}
          outerRadius={110}
          paddingAngle={3}
          dataKey='value'
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#111111',
            border: '1px solid #333333',
            borderRadius: '8px',
          }}
          labelStyle={{ color: '#ffffff' }}
          formatter={(value) => [`${value}%`, '']}
        />
        <Legend
  iconType='circle'
  iconSize={8}
  formatter={(value) => (
    <span className='text-gray-400 text-xs'>{value}</span>
  )}
/>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default MarketDonutChart