import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Home, DollarSign, Clock, TrendingUp, Heart, Search, MapPin } from 'lucide-react'
import KpiCard from '../../components/ui/KpiCard'
import Card from '../../components/ui/Card'
import PriceAreaChart from '../../components/charts/PriceAreaChart'
import MarketDonutChart from '../../components/charts/MarketDonutChart'
import { useMarketData, usePriceTrends } from '../../hooks/useMarketData'
import { formatPrice, formatNumber, formatPercent } from '../../utils/formatters'
import { POPULAR_CITIES } from '../../constants'
import { useSavedMarkets } from '../../hooks/useSavedMarkets'
import { useDebounce } from '../../hooks/useDebounce'

const Dashboard = () => {
  const [searchParams] = useSearchParams()
  const cityId = searchParams.get('city') || 'dallas-tx'

  const { data: marketData, isLoading } = useMarketData(cityId)
  const { data: trends } = usePriceTrends(cityId)

  const city = POPULAR_CITIES.find(c => c.id === cityId)
  const { isMarketSaved, addMarket, removeMarket } = useSavedMarkets()
  const navigate = useNavigate()
const [searchQuery, setSearchQuery] = useState('')
const [showDropdown, setShowDropdown] = useState(false)
const debouncedQuery = useDebounce(searchQuery, 300)

const filteredCities = POPULAR_CITIES.filter(city =>
  city.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
  city.stateCode.toLowerCase().includes(debouncedQuery.toLowerCase())
)

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-full'>
        <div className='text-gray-400'>Loading market data...</div>
      </div>
    )
  }

  if (!marketData) return null

  return (
    <div className='space-y-6'>

      {/* Header */}
<div className='flex items-center justify-between'>
  <div>
    <h1 className='text-2xl font-bold text-white'>
      {city?.name}, {city?.stateCode}
    </h1>
    <p className='text-gray-400 text-sm mt-1'>
      Real estate market overview
    </p>
  </div>

  {/* Search — по центру */}
  <div className='relative w-[500px]'>
    <Search size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
    <input
      type='text'
      placeholder='Search city or state...'
      value={searchQuery}
      onChange={e => {
        setSearchQuery(e.target.value)
        setShowDropdown(true)
      }}
      onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      className='w-full bg-[#1a1a1a] border border-[#333333] rounded-lg pl-9 pr-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors'
    />
    {showDropdown && debouncedQuery && (
      <div className='absolute top-full left-0 right-0 mt-1 bg-[#111111] border border-[#333333] rounded-lg overflow-hidden z-10'>
        {filteredCities.length > 0 ? (
          filteredCities.slice(0, 6).map(city => (
            <button
              key={city.id}
              onClick={() => {
                navigate(`/dashboard?city=${city.id}`)
                setSearchQuery('')
                setShowDropdown(false)
              }}
              className='w-full flex items-center gap-2 px-3 py-2.5 hover:bg-[#1a1a1a] transition-colors text-left'
            >
              <MapPin size={12} className='text-cyan-400' />
              <span className='text-white text-sm'>{city.name}</span>
              <span className='text-gray-500 text-xs'>{city.stateCode}</span>
            </button>
          ))
        ) : (
          <div className='px-3 py-2.5 text-gray-500 text-sm'>No cities found</div>
        )}
      </div>
    )}
  </div>

  {/* Save Button */}
  <div className='flex items-center gap-3'>
    <button
      onClick={() => cityId && (isMarketSaved(cityId) ? removeMarket(cityId) : addMarket(city!))}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        isMarketSaved(cityId)
          ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-red-400/10 hover:text-red-400 hover:border-red-400/20'
          : 'bg-[#1a1a1a] text-gray-400 border border-[#333333] hover:border-cyan-400 hover:text-cyan-400'
      }`}
    >
      <Heart size={16} className={isMarketSaved(cityId) ? 'fill-cyan-400' : ''} />
      {isMarketSaved(cityId) ? 'Saved' : 'Save Market'}
    </button>
    <span className='text-gray-500 text-sm'>
      Last updated: {new Date().toLocaleDateString()}
    </span>
  </div>
</div>


      {/* KPI Cards */}
      <div className='grid grid-cols-4 gap-4'>
        <KpiCard
          title='Average Price'
          value={formatPrice(marketData.saleData.averagePrice)}
          change={5.2}
          icon={DollarSign}
        />
        <KpiCard
          title='Median Price'
          value={formatPrice(marketData.saleData.medianPrice)}
          change={4.8}
          icon={TrendingUp}
        />
        <KpiCard
          title='Days on Market'
          value={`${marketData.saleData.averageDaysOnMarket} days`}
          change={-3.1}
          icon={Clock}
        />
        <KpiCard
          title='Active Listings'
          value={formatNumber(marketData.saleData.totalListings)}
          change={8.4}
          icon={Home}
        />
      </div>

      {/* Charts */}
      <div className='grid grid-cols-3 gap-6'>
        <Card className='col-span-2'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-white font-semibold'>Price Trends</h2>
            <div className='flex items-center gap-4 text-sm'>
              <span className='flex items-center gap-1.5'>
                <span className='w-3 h-3 rounded-full bg-cyan-400 inline-block' />
                <span className='text-gray-400'>Average</span>
              </span>
              <span className='flex items-center gap-1.5'>
                <span className='w-3 h-3 rounded-full bg-emerald-400 inline-block' />
                <span className='text-gray-400'>Median</span>
              </span>
            </div>
          </div>
          <PriceAreaChart data={trends || []} />
        </Card>

        <Card>
          <h2 className='text-white font-semibold mb-6'>Market Distribution</h2>
          <MarketDonutChart />
        </Card>
      </div>

      {/* Stats Row */}
      <div className='grid grid-cols-3 gap-4'>
        <Card>
          <p className='text-gray-400 text-sm mb-1'>Price per Sq Ft</p>
          <p className='text-white text-xl font-bold'>
            ${marketData.saleData.averagePricePerSquareFoot}
          </p>
          <p className='text-emerald-400 text-sm mt-1'>
            {formatPercent(3.2)} vs last year
          </p>
        </Card>
        <Card>
          <p className='text-gray-400 text-sm mb-1'>New Listings</p>
          <p className='text-white text-xl font-bold'>
            {formatNumber(marketData.saleData.newListings)}
          </p>
          <p className='text-emerald-400 text-sm mt-1'>
            {formatPercent(12.5)} this month
          </p>
        </Card>
        <Card>
          <p className='text-gray-400 text-sm mb-1'>Average Rent</p>
          <p className='text-white text-xl font-bold'>
            {formatPrice(marketData.rentalData.averageRent)}
          </p>
          <p className='text-emerald-400 text-sm mt-1'>
            {formatPercent(6.8)} vs last year
          </p>
        </Card>
      </div>

    </div>
  )
}

export default Dashboard