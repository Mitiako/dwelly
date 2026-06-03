import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { PriceTrend } from '../../types'
import { formatPrice } from '../../utils/formatters'

interface PriceAreaChartProps {
  data: PriceTrend[]
}

const PriceAreaChart = ({ data }: PriceAreaChartProps) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id='avgGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#22d3ee' stopOpacity={0.3} />
            <stop offset='95%' stopColor='#22d3ee' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='medGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#10b981' stopOpacity={0.3} />
            <stop offset='95%' stopColor='#10b981' stopOpacity={0} />
          </linearGradient>
        </defs>
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
          itemStyle={{ color: '#888888' }}
          formatter={(value) => [formatPrice(value as number), '']}
        />
        <Area
          type='monotone'
          dataKey='averagePrice'
          name='Average'
          stroke='#22d3ee'
          strokeWidth={2}
          fill='url(#avgGradient)'
        />
        <Area
          type='monotone'
          dataKey='medianPrice'
          name='Median'
          stroke='#10b981'
          strokeWidth={2}
          fill='url(#medGradient)'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default PriceAreaChart