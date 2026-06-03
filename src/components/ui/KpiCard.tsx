import type { ElementType } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import Card from './Card'

interface KpiCardProps {
  title: string
  value: string
  change?: number
  icon: ElementType
}

const KpiCard = ({ title, value, change, icon: Icon }: KpiCardProps) => {
  const isPositive = change && change > 0

  return (
    <Card>
      <div className='flex items-start justify-between mb-4'>
        <div className='w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center'>
          <Icon size={20} className='text-cyan-400' />
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      <p className='text-gray-400 text-sm mb-1'>{title}</p>
      <p className='text-white text-2xl font-bold'>{value}</p>
    </Card>
  )
}

export default KpiCard