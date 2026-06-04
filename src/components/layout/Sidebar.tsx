import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  GitCompare,
  Map,
  Heart,
  Home,
} from 'lucide-react'
import { APP_NAME, APP_TAGLINE } from '../../constants'

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/compare', icon: GitCompare, label: 'Compare' },
  { path: '/map', icon: Map, label: 'Market Map' },
  { path: '/saved', icon: Heart, label: 'Saved' },
]

const Sidebar = () => {
  return (
    <aside className='w-41 h-screen bg-[#111111] border-r border-[#222222] flex flex-col'>
      {/* Logo */}
      <div className='p-6 border-b border-[#222222]'>
        <NavLink to='/' className='flex items-center gap-3'>
          <div className='w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center'>
            <Home size={16} className='text-black' />
          </div>
          <div>
            <h1 className='text-white font-bold text-lg leading-none'>{APP_NAME}</h1>
            <p className='text-gray-500 text-xs mt-0.5'>{APP_TAGLINE}</p>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className='flex-1 p-4 space-y-1'>
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
              }`
            }
          >
            <Icon size={18} />
            <span className='text-sm font-medium'>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className='p-4 border-t border-[#222222]'>
        <p className='text-gray-600 text-xs text-center'>
          © 2026 {APP_NAME}. All rights reserved.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar