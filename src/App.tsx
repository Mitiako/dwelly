import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Compare from './pages/Compare/Compare'
import MapPage from './pages/Map/MapPage'
import Saved from './pages/Saved/Saved'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/saved' element={<Saved />} />
      </Route>
    </Routes>
  )
}

export default App