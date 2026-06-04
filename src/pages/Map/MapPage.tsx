import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Card from '../../components/ui/Card'
import { mockMarketData } from '../../data/mockData'
import { POPULAR_CITIES } from '../../constants'
import { formatPrice, formatNumber } from '../../utils/formatters'

const MapPage = () => {
  const getMarkerColor = (price: number): string => {
    if (price < 400000) return '#10b981'
    if (price < 600000) return '#22d3ee'
    if (price < 800000) return '#f59e0b'
    return '#ef4444'
  }

  const getMarkerSize = (totalListings: number): number => {
    if (totalListings > 15000) return 18
    if (totalListings > 10000) return 14
    if (totalListings > 5000) return 10
    return 8
  }

  const citiesWithData = POPULAR_CITIES.filter(
    city => mockMarketData[city.id] !== undefined
  ).map(city => ({
    city,
    data: mockMarketData[city.id],
  }))

  const topCities = [...citiesWithData]
    .sort((a, b) => b.data.saleData.averagePrice - a.data.saleData.averagePrice)

  return (
    <div className='space-y-4'>

      {/* Header */}
      <div>
        <h1 className='text-lg font-bold text-white'>Market Map</h1>
<p className='text-gray-400 text-xs'>Interactive US real estate market map</p>
      </div>

      {/* Full Width Map with Overlays */}
      <div className='relative rounded-xl overflow-hidden' style={{ height: '520px' }}>
        <MapContainer
          center={[39.5, -98.35]}
          zoom={4}
          minZoom={3}
          maxZoom={10}
          maxBounds={[[15, -170], [75, -50]]}
          maxBoundsViscosity={1.0}
          style={{ height: '100%', width: '100%', background: '#0a0a0a' }}
          zoomControl={false}
        >
          <TileLayer
            url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {citiesWithData.map(({ city, data }) => {
            const color = getMarkerColor(data.saleData.averagePrice)
            const size = getMarkerSize(data.saleData.totalListings)
            return (
              <CircleMarker
                key={city.id}
                center={[city.coordinates.lat, city.coordinates.lng]}
                radius={size}
                fillColor={color}
                color={color}
                weight={2}
                opacity={0.9}
                fillOpacity={0.7}
                eventHandlers={{
                  mouseover: (e) => e.target.openPopup(),
                  mouseout: (e) => e.target.closePopup(),
                }}
              >
                <Popup>
                  <div className='bg-[#111111] rounded-lg p-3 min-w-48'>
                    <h3 className='text-white font-bold mb-2'>
                      {city.name}, {city.stateCode}
                    </h3>
                    <div className='space-y-1'>
                      <div className='flex justify-between'>
                        <span className='text-gray-400 text-xs'>Avg Price</span>
                        <span className='text-cyan-400 text-xs font-medium'>
                          {formatPrice(data.saleData.averagePrice)}
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
                  </div>
                </Popup>
              </CircleMarker>
            )
          })}
        </MapContainer>

        {/* Overlay — Legend (bottom left) */}
        <div className='absolute bottom-5 right-4 z-[1000] bg-[#111111]/85 backdrop-blur-sm border border-[#333333] rounded-xl p-3'>
          <p className='text-gray-400 text-xs mb-2 font-medium uppercase tracking-wider'>Price Range</p>
          <div className='space-y-1.5'>
            {[
              { color: '#10b981', label: '< $400K' },
              { color: '#22d3ee', label: '$400K - $600K' },
              { color: '#f59e0b', label: '$600K - $800K' },
              { color: '#ef4444', label: '> $800K' },
            ].map(({ color, label }) => (
              <div key={label} className='flex items-center gap-2'>
                <div className='w-2.5 h-2.5 rounded-full' style={{ backgroundColor: color }} />
                <span className='text-gray-300 text-xs'>{label}</span>
              </div>
            ))}
            <p className='text-gray-500 text-xs mt-1.5 pt-1.5 border-t border-[#333333]'>
              Size = market volume
            </p>
          </div>
        </div>

        {/* Overlay — Top Markets (top right) */}
        <div className='absolute top-4 left-4 z-[1000] bg-[#111111]/85 backdrop-blur-sm border border-[#333333] rounded-xl p-3 w-52'>
          <p className='text-white text-sm font-semibold mb-3'>Top Markets</p>
          <div className='space-y-2'>
            {topCities.slice(0, 5).map(({ city, data }, index) => (
              <div key={city.id} className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-gray-500 text-xs w-3'>{index + 1}</span>
                  <div>
                    <p className='text-white text-xs'>{city.name}</p>
                    <p className='text-gray-500 text-xs'>{city.stateCode}</p>
                  </div>
                </div>
                <p className='text-cyan-400 text-xs font-medium'>
                  {formatPrice(data.saleData.averagePrice)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay — Market Trends (bottom right) */}
        <div className='absolute bottom-4 left-4 z-[1000] bg-[#111111]/85 backdrop-blur-sm border border-[#333333] rounded-xl p-3 w-52'>
          <p className='text-white text-sm font-semibold mb-3'>Market Trends</p>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-gray-400 text-xs'>Hottest Region</span>
              <span className='text-white text-xs font-medium'>Southeast</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-400 text-xs'>Fastest Growing</span>
              <span className='text-emerald-400 text-xs font-medium'>Texas</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-400 text-xs'>Most Affordable</span>
              <span className='text-white text-xs font-medium'>Midwest</span>
            </div>
          </div>
        </div>

      </div>

      {/* Top Cities Bar Chart */}
      <Card>
        <h2 className='text-white font-semibold mb-3 text-sm'>Top Cities by Average Price</h2>
<div className='grid grid-cols-2 gap-2'>
          {(() => {
            const maxPrice = Math.max(...citiesWithData.map(c => c.data.saleData.averagePrice))
            return topCities.slice(0, 8).map(({ city, data }) => {
              const width = (data.saleData.averagePrice / maxPrice) * 100
              return (
                <div key={city.id} className='flex items-center gap-3'>
  <div className='w-32 text-right shrink-0'>
  <p className='text-gray-300 text-xs truncate'>{city.name}, {city.stateCode}</p>
</div>
  <div className='flex-1 h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden'>
    <div
      className='h-full rounded-full transition-all duration-500'
      style={{
        width: `${Math.min(width, 100)}%`,
        backgroundColor: data.saleData.averagePrice > 800000
          ? '#ef4444'
          : data.saleData.averagePrice > 600000
            ? '#f59e0b'
            : data.saleData.averagePrice > 400000
              ? '#22d3ee'
              : '#10b981',
      }}
    />
  </div>
  <p className='text-gray-300 text-xs w-16 shrink-0'>
    {formatPrice(data.saleData.averagePrice)}
  </p>
</div>
              )
            })
          })()}
        </div>
      </Card>

      {/* National Stats */}
      <div className='grid grid-cols-4 gap-3'>
  <Card className='py-3 px-4'>
    <p className='text-gray-400 text-xs mb-0.5'>National Avg Price</p>
    <p className='text-white text-lg font-bold'>$514K</p>
    <p className='text-emerald-400 text-xs'>+2.4% vs last year</p>
  </Card>
  <Card className='py-3 px-4'>
    <p className='text-gray-400 text-xs mb-0.5'>Total Active Listings</p>
    <p className='text-white text-lg font-bold'>1.48M</p>
    <p className='text-emerald-400 text-xs'>+1.6% this month</p>
  </Card>
  <Card className='py-3 px-4'>
    <p className='text-gray-400 text-xs mb-0.5'>Avg Days on Market</p>
    <p className='text-white text-lg font-bold'>49 days</p>
    <p className='text-red-400 text-xs'>+4 days vs last year</p>
  </Card>
  <Card className='py-3 px-4'>
    <p className='text-gray-400 text-xs mb-0.5'>Most Expensive Market</p>
    <p className='text-white text-lg font-bold'>San Francisco</p>
    <p className='text-cyan-400 text-xs'>$1.18M avg price</p>
  </Card>
</div>

    </div>
  )
}

export default MapPage