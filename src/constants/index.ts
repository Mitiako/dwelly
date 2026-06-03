// API
export const RENTCAST_API_URL = 'https://api.rentcast.io/v1'
export const RENTCAST_API_KEY = import.meta.env.VITE_RENTCAST_API_KEY

// App
export const APP_NAME = 'Dwelly'
export const APP_TAGLINE = 'Find where you dwell.'

// US Regions
export const US_REGIONS = {
  NORTHEAST: 'Northeast',
  SOUTHEAST: 'Southeast',
  MIDWEST: 'Midwest',
  SOUTHWEST: 'Southwest',
  WEST: 'West',
}

// Major US Cities for mock data
export const POPULAR_CITIES = [
  { id: 'dallas-tx', name: 'Dallas', state: 'Texas', stateCode: 'TX', zipCode: '75201', region: 'Southwest', coordinates: { lat: 32.7767, lng: -96.7970 } },
  { id: 'austin-tx', name: 'Austin', state: 'Texas', stateCode: 'TX', zipCode: '78701', region: 'Southwest', coordinates: { lat: 30.2672, lng: -97.7431 } },
  { id: 'houston-tx', name: 'Houston', state: 'Texas', stateCode: 'TX', zipCode: '77001', region: 'Southwest', coordinates: { lat: 29.7604, lng: -95.3698 } },
  { id: 'miami-fl', name: 'Miami', state: 'Florida', stateCode: 'FL', zipCode: '33101', region: 'Southeast', coordinates: { lat: 25.7617, lng: -80.1918 } },
  { id: 'orlando-fl', name: 'Orlando', state: 'Florida', stateCode: 'FL', zipCode: '32801', region: 'Southeast', coordinates: { lat: 28.5383, lng: -81.3792 } },
  { id: 'tampa-fl', name: 'Tampa', state: 'Florida', stateCode: 'FL', zipCode: '33601', region: 'Southeast', coordinates: { lat: 27.9506, lng: -82.4572 } },
  { id: 'chicago-il', name: 'Chicago', state: 'Illinois', stateCode: 'IL', zipCode: '60601', region: 'Midwest', coordinates: { lat: 41.8781, lng: -87.6298 } },
  { id: 'new-york-ny', name: 'New York', state: 'New York', stateCode: 'NY', zipCode: '10001', region: 'Northeast', coordinates: { lat: 40.7128, lng: -74.0060 } },
  { id: 'los-angeles-ca', name: 'Los Angeles', state: 'California', stateCode: 'CA', zipCode: '90001', region: 'West', coordinates: { lat: 34.0522, lng: -118.2437 } },
  { id: 'seattle-wa', name: 'Seattle', state: 'Washington', stateCode: 'WA', zipCode: '98101', region: 'West', coordinates: { lat: 47.6062, lng: -122.3321 } },
  { id: 'denver-co', name: 'Denver', state: 'Colorado', stateCode: 'CO', zipCode: '80201', region: 'West', coordinates: { lat: 39.7392, lng: -104.9903 } },
  { id: 'charlotte-nc', name: 'Charlotte', state: 'North Carolina', stateCode: 'NC', zipCode: '28201', region: 'Southeast', coordinates: { lat: 35.2271, lng: -80.8431 } },
  { id: 'washington-dc', name: 'Washington DC', state: 'District of Columbia', stateCode: 'DC', zipCode: '20001', region: 'Northeast', coordinates: { lat: 38.9072, lng: -77.0369 } },
  { id: 'nashville-tn', name: 'Nashville', state: 'Tennessee', stateCode: 'TN', zipCode: '37201', region: 'Southeast', coordinates: { lat: 36.1627, lng: -86.7816 } },
  { id: 'phoenix-az', name: 'Phoenix', state: 'Arizona', stateCode: 'AZ', zipCode: '85001', region: 'Southwest', coordinates: { lat: 33.4484, lng: -112.0740 } },
] 

// Property Types
export const PROPERTY_TYPES = [
  'All',
  'Single Family',
  'Condo', 
  'Townhouse',
  'Multi Family',
]

// Price Ranges
export const PRICE_RANGES = [
  { label: '< $250K', min: 0, max: 250000 },
  { label: '$250K - $400K', min: 250000, max: 400000 },
  { label: '$400K - $550K', min: 400000, max: 550000 },
  { label: '$550K - $700K', min: 550000, max: 700000 },
  { label: '> $700K', min: 700000, max: Infinity },
]

// Chart Colors
export const CHART_COLORS = [
  '#22d3ee',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
]

// Local Storage Keys
export const STORAGE_KEYS = {
  SAVED_MARKETS: 'dwelly_saved_markets',
  SELECTED_CITY: 'dwelly_selected_city',
}