import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { formatPrice } from '../../utils/formatters'
import { CHART_COLORS } from '../../constants'

interface DataPoint {
  month: string
  [key: string]: string | number
}

interface MultiLineChartProps {
  data: DataPoint[]
  lines: { key: string; label: string }[]
}

const MultiLineChart = ({ data, lines }: MultiLineChartProps) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray='3 3' stroke='#222222' />
        <XAxis
          dataKey='month'
          stroke='#444444'
          tick={{ fill: '#888888', fontSize: 12 }}
        />
        <YAxis
          stroke='#444444'
          tick={{ fill: '#888888', fontSize: 12 }}
          tickFormatter={formatPrice}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#111111',
            border: '1px solid #333333',
            borderRadius: '8px',
          }}
          labelStyle={{ color: '#ffffff' }}
          formatter={(value) => [formatPrice(value as number), '']}
        />
        {lines.map((line, index) => (
          <Line
            key={line.key}
            type='monotone'
            dataKey={line.key}
            name={line.label}
            stroke={CHART_COLORS[index % CHART_COLORS.length]}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default MultiLineChart