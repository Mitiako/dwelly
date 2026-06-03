import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, TrendingUp, MapPin, BarChart2, GitCompare } from 'lucide-react'
import { useDebounce } from '../../hooks/useDebounce'
import { POPULAR_CITIES, APP_NAME, APP_TAGLINE } from '../../constants'

const Home = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)
  const navigate = useNavigate()

  const filteredCities = POPULAR_CITIES.filter(city =>
    city.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
    city.stateCode.toLowerCase().includes(debouncedQuery.toLowerCase())
  )

  const handleCitySelect = (cityId: string) => {
    navigate(`/dashboard?city=${cityId}`)
  }

  return (
    <div className='min-h-screen bg-[#0a0a0a] text-white'>

      {/* Navbar */}
      <nav className='flex items-center justify-between px-8 py-4 border-b border-[#222222]'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center'>
            <MapPin size={16} className='text-black' />
          </div>
          <span className='font-bold text-lg'>{APP_NAME}</span>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className='bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-300 transition-colors'
        >
          Open Dashboard
        </button>
      </nav>

      {/* Hero */}
      <section className='flex flex-col items-center justify-center px-8 py-24 text-center'>
        <div className='inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-1.5 mb-6'>
          <TrendingUp size={14} className='text-cyan-400' />
          <span className='text-cyan-400 text-sm'>US Real Estate Analytics</span>
        </div>

        <h1 className='text-6xl font-bold mb-4 leading-tight'>
          {APP_TAGLINE}
        </h1>

        <p className='text-gray-400 text-xl mb-12 max-w-2xl'>
          Analyze real estate markets across all 50 states.
          Compare cities, track trends, and make smarter decisions.
        </p>

        {/* Search */}
        <div className='relative w-full max-w-xl'>
          <Search size={18} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
          <input
            type='text'
            placeholder='Search city or state...'
            value={query}
            onChange={e => setQuery(e.target.value)}
            className='w-full bg-[#111111] border border-[#333333] rounded-xl pl-11 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors'
          />
          {/* Dropdown */}
          {query && (
            <div className='absolute top-full left-0 right-0 mt-2 bg-[#111111] border border-[#333333] rounded-xl overflow-hidden z-10'>
              {filteredCities.length > 0 ? (
                filteredCities.slice(0, 6).map(city => (
                  <button
                    key={city.id}
                    onClick={() => handleCitySelect(city.id)}
                    className='w-full flex items-center gap-3 px-4 py-3 hover:bg-[#1a1a1a] transition-colors text-left'
                  >
                    <MapPin size={14} className='text-cyan-400' />
                    <span className='text-white'>{city.name}</span>
                    <span className='text-gray-500 text-sm'>{city.stateCode}</span>
                  </button>
                ))
              ) : (
                <div className='px-4 py-3 text-gray-500 text-sm'>No cities found</div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Popular Cities */}
      <section className='px-8 pb-16'>
        <h2 className='text-gray-400 text-sm font-medium mb-4 text-center'>
          POPULAR MARKETS
        </h2>
        <div className='flex flex-wrap justify-center gap-2'>
          {POPULAR_CITIES.slice(0, 10).map(city => (
            <button
              key={city.id}
              onClick={() => handleCitySelect(city.id)}
              className='flex items-center gap-2 bg-[#111111] border border-[#222222] rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all'
            >
              <MapPin size={12} />
              {city.name}, {city.stateCode}
            </button>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className='px-8 pb-24 grid grid-cols-3 gap-6 max-w-4xl mx-auto'>
        {[
          { icon: BarChart2, title: 'Market Analytics', desc: 'Deep insights into price trends, days on market, and inventory levels.' },
          { icon: GitCompare, title: 'City Comparison', desc: 'Compare multiple markets side by side across any US cities.' },
          { icon: MapPin, title: 'Interactive Map', desc: 'Visualize market heat across all 50 states with our interactive map.' },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className='bg-[#111111] border border-[#222222] rounded-xl p-6'>
            <div className='w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4'>
              <Icon size={20} className='text-cyan-400' />
            </div>
            <h3 className='text-white font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 text-sm'>{desc}</p>
          </div>
        ))}
      </section>

    </div>
  )
}

export default Home