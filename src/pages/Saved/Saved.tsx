import { useNavigate } from 'react-router-dom'
import { Heart, Trash2, BarChart2, MapPin, RefreshCw, Clock } from 'lucide-react'
import Card from '../../components/ui/Card'
import { useSavedMarkets } from '../../hooks/useSavedMarkets'
import { mockMarketData } from '../../data/mockData'
import { formatPrice, formatNumber } from '../../utils/formatters'

const Saved = () => {
  const navigate = useNavigate()
  const { savedMarkets, removeMarket, updateMarket, getDaysUntilUpdate, canUpdate } = useSavedMarkets()

  if (savedMarkets.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-full min-h-96 space-y-4'>
        <div className='w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center'>
          <Heart size={28} className='text-gray-600' />
        </div>
        <h2 className='text-white text-xl font-semibold'>No saved markets yet</h2>
        <p className='text-gray-400 text-sm text-center max-w-xs'>
          Save cities from the Dashboard to quickly access their market data here.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className='bg-cyan-400 text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition-colors'
        >
          Explore Markets
        </button>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-white'>Saved Markets</h1>
          <p className='text-gray-400 text-sm mt-1'>
            {savedMarkets.length} {savedMarkets.length === 1 ? 'market' : 'markets'} saved
          </p>
        </div>
      </div>

      {/* Saved Cities Grid */}
      <div className='grid grid-cols-3 gap-4'>
        {savedMarkets.map(({ id, city, savedAt, lastUpdatedAt }) => {
          const data = mockMarketData[id]
          if (!data) return null
          const daysLeft = getDaysUntilUpdate(lastUpdatedAt)
          const updateAvailable = canUpdate(lastUpdatedAt)

          return (
            <Card key={id} className='relative hover:border-[#333333] transition-all'>

              {/* Remove Button */}
              <button
                onClick={() => removeMarket(id)}
                aria-label={`Remove ${city.name}`}
                className='absolute top-3 right-3 text-gray-600 hover:text-red-400 transition-colors'
              >
                <Trash2 size={14} />
              </button>

              {/* City Info */}
              <div className='flex items-center gap-2 mb-4'>
                <div className='w-8 h-8 bg-cyan-400/10 rounded-lg flex items-center justify-center'>
                  <MapPin size={14} className='text-cyan-400' />
                </div>
                <div>
                  <h3 className='text-white font-semibold'>{city.name}</h3>
                  <p className='text-gray-500 text-xs'>{city.state}</p>
                </div>
              </div>

              {/* Stats */}
              <div className='space-y-2 mb-4'>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-xs'>Avg Price</span>
                  <span className='text-cyan-400 text-xs font-medium'>
                    {formatPrice(data.saleData.averagePrice)}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-xs'>Median Price</span>
                  <span className='text-white text-xs'>
                    {formatPrice(data.saleData.medianPrice)}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-xs'>Days on Market</span>
                  <span className='text-white text-xs'>
                    {data.saleData.averageDaysOnMarket} days
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-xs'>Active Listings</span>
                  <span className='text-white text-xs'>
                    {formatNumber(data.saleData.totalListings)}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400 text-xs'>Avg Rent</span>
                  <span className='text-white text-xs'>
                    {formatPrice(data.rentalData.averageRent)}
                  </span>
                </div>
              </div>

              {/* Update Status */}
              <div className='border-t border-[#222222] pt-3 space-y-2'>
                <div className='flex items-center justify-between'>
                  <p className='text-gray-600 text-xs'>
                    Saved {new Date(savedAt).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => navigate(`/dashboard?city=${id}`)}
                    className='flex items-center gap-1.5 text-cyan-400 text-xs hover:text-cyan-300 transition-colors'
                  >
                    <BarChart2 size={12} />
                    View Dashboard
                  </button>
                </div>

                {/* Update button or countdown */}
                {updateAvailable ? (
                  <button
                    onClick={() => updateMarket(id)}
                    className='w-full flex items-center justify-center gap-2 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium hover:bg-cyan-400/20 transition-all'
                  >
                    <RefreshCw size={12} />
                    Update Data
                  </button>
                ) : (
                  <div className='flex items-center gap-1.5 text-gray-500 text-xs'>
                    <Clock size={11} />
                    Next update available in {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
                  </div>
                )}
              </div>

            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Saved