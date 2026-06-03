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
  // Texas
  { id: 'dallas-tx', name: 'Dallas', state: 'Texas', stateCode: 'TX', zipCode: '75201', region: 'Southwest', coordinates: { lat: 32.7767, lng: -96.7970 } },
  { id: 'austin-tx', name: 'Austin', state: 'Texas', stateCode: 'TX', zipCode: '78701', region: 'Southwest', coordinates: { lat: 30.2672, lng: -97.7431 } },
  { id: 'houston-tx', name: 'Houston', state: 'Texas', stateCode: 'TX', zipCode: '77001', region: 'Southwest', coordinates: { lat: 29.7604, lng: -95.3698 } },
  { id: 'san-antonio-tx', name: 'San Antonio', state: 'Texas', stateCode: 'TX', zipCode: '78201', region: 'Southwest', coordinates: { lat: 29.4241, lng: -98.4936 } },
  { id: 'fort-worth-tx', name: 'Fort Worth', state: 'Texas', stateCode: 'TX', zipCode: '76101', region: 'Southwest', coordinates: { lat: 32.7555, lng: -97.3308 } },
  // Florida
  { id: 'miami-fl', name: 'Miami', state: 'Florida', stateCode: 'FL', zipCode: '33101', region: 'Southeast', coordinates: { lat: 25.7617, lng: -80.1918 } },
  { id: 'orlando-fl', name: 'Orlando', state: 'Florida', stateCode: 'FL', zipCode: '32801', region: 'Southeast', coordinates: { lat: 28.5383, lng: -81.3792 } },
  { id: 'tampa-fl', name: 'Tampa', state: 'Florida', stateCode: 'FL', zipCode: '33601', region: 'Southeast', coordinates: { lat: 27.9506, lng: -82.4572 } },
  { id: 'jacksonville-fl', name: 'Jacksonville', state: 'Florida', stateCode: 'FL', zipCode: '32099', region: 'Southeast', coordinates: { lat: 30.3322, lng: -81.6557 } },
  { id: 'sarasota-fl', name: 'Sarasota', state: 'Florida', stateCode: 'FL', zipCode: '34230', region: 'Southeast', coordinates: { lat: 27.3364, lng: -82.5307 } },
  // California
  { id: 'los-angeles-ca', name: 'Los Angeles', state: 'California', stateCode: 'CA', zipCode: '90001', region: 'West', coordinates: { lat: 34.0522, lng: -118.2437 } },
  { id: 'san-francisco-ca', name: 'San Francisco', state: 'California', stateCode: 'CA', zipCode: '94102', region: 'West', coordinates: { lat: 37.7749, lng: -122.4194 } },
  { id: 'san-diego-ca', name: 'San Diego', state: 'California', stateCode: 'CA', zipCode: '92101', region: 'West', coordinates: { lat: 32.7157, lng: -117.1611 } },
  { id: 'sacramento-ca', name: 'Sacramento', state: 'California', stateCode: 'CA', zipCode: '95814', region: 'West', coordinates: { lat: 38.5816, lng: -121.4944 } },
  { id: 'san-jose-ca', name: 'San Jose', state: 'California', stateCode: 'CA', zipCode: '95101', region: 'West', coordinates: { lat: 37.3382, lng: -121.8863 } },
  // New York
  { id: 'new-york-ny', name: 'New York', state: 'New York', stateCode: 'NY', zipCode: '10001', region: 'Northeast', coordinates: { lat: 40.7128, lng: -74.0060 } },
  { id: 'buffalo-ny', name: 'Buffalo', state: 'New York', stateCode: 'NY', zipCode: '14201', region: 'Northeast', coordinates: { lat: 42.8864, lng: -78.8784 } },
  { id: 'rochester-ny', name: 'Rochester', state: 'New York', stateCode: 'NY', zipCode: '14601', region: 'Northeast', coordinates: { lat: 43.1566, lng: -77.6088 } },
  // Illinois
  { id: 'chicago-il', name: 'Chicago', state: 'Illinois', stateCode: 'IL', zipCode: '60601', region: 'Midwest', coordinates: { lat: 41.8781, lng: -87.6298 } },
  { id: 'aurora-il', name: 'Aurora', state: 'Illinois', stateCode: 'IL', zipCode: '60505', region: 'Midwest', coordinates: { lat: 41.7606, lng: -88.3201 } },
  // Washington
  { id: 'seattle-wa', name: 'Seattle', state: 'Washington', stateCode: 'WA', zipCode: '98101', region: 'West', coordinates: { lat: 47.6062, lng: -122.3321 } },
  { id: 'spokane-wa', name: 'Spokane', state: 'Washington', stateCode: 'WA', zipCode: '99201', region: 'West', coordinates: { lat: 47.6588, lng: -117.4260 } },
  { id: 'tacoma-wa', name: 'Tacoma', state: 'Washington', stateCode: 'WA', zipCode: '98401', region: 'West', coordinates: { lat: 47.2529, lng: -122.4443 } },
  // Colorado
  { id: 'denver-co', name: 'Denver', state: 'Colorado', stateCode: 'CO', zipCode: '80201', region: 'West', coordinates: { lat: 39.7392, lng: -104.9903 } },
  { id: 'colorado-springs-co', name: 'Colorado Springs', state: 'Colorado', stateCode: 'CO', zipCode: '80901', region: 'West', coordinates: { lat: 38.8339, lng: -104.8214 } },
  // North Carolina
  { id: 'charlotte-nc', name: 'Charlotte', state: 'North Carolina', stateCode: 'NC', zipCode: '28201', region: 'Southeast', coordinates: { lat: 35.2271, lng: -80.8431 } },
  { id: 'raleigh-nc', name: 'Raleigh', state: 'North Carolina', stateCode: 'NC', zipCode: '27601', region: 'Southeast', coordinates: { lat: 35.7796, lng: -78.6382 } },
  { id: 'greensboro-nc', name: 'Greensboro', state: 'North Carolina', stateCode: 'NC', zipCode: '27401', region: 'Southeast', coordinates: { lat: 36.0726, lng: -79.7920 } },
  // DC/Maryland/Virginia
  { id: 'washington-dc', name: 'Washington DC', state: 'District of Columbia', stateCode: 'DC', zipCode: '20001', region: 'Northeast', coordinates: { lat: 38.9072, lng: -77.0369 } },
  { id: 'baltimore-md', name: 'Baltimore', state: 'Maryland', stateCode: 'MD', zipCode: '21201', region: 'Northeast', coordinates: { lat: 39.2904, lng: -76.6122 } },
  { id: 'richmond-va', name: 'Richmond', state: 'Virginia', stateCode: 'VA', zipCode: '23219', region: 'Southeast', coordinates: { lat: 37.5407, lng: -77.4360 } },
  { id: 'virginia-beach-va', name: 'Virginia Beach', state: 'Virginia', stateCode: 'VA', zipCode: '23450', region: 'Southeast', coordinates: { lat: 36.8529, lng: -75.9780 } },
  // Tennessee
  { id: 'nashville-tn', name: 'Nashville', state: 'Tennessee', stateCode: 'TN', zipCode: '37201', region: 'Southeast', coordinates: { lat: 36.1627, lng: -86.7816 } },
  { id: 'memphis-tn', name: 'Memphis', state: 'Tennessee', stateCode: 'TN', zipCode: '38101', region: 'Southeast', coordinates: { lat: 35.1495, lng: -90.0490 } },
  // Arizona
  { id: 'phoenix-az', name: 'Phoenix', state: 'Arizona', stateCode: 'AZ', zipCode: '85001', region: 'Southwest', coordinates: { lat: 33.4484, lng: -112.0740 } },
  { id: 'tucson-az', name: 'Tucson', state: 'Arizona', stateCode: 'AZ', zipCode: '85701', region: 'Southwest', coordinates: { lat: 32.2226, lng: -110.9747 } },
  { id: 'scottsdale-az', name: 'Scottsdale', state: 'Arizona', stateCode: 'AZ', zipCode: '85251', region: 'Southwest', coordinates: { lat: 33.4942, lng: -111.9261 } },
  // Georgia
  { id: 'atlanta-ga', name: 'Atlanta', state: 'Georgia', stateCode: 'GA', zipCode: '30301', region: 'Southeast', coordinates: { lat: 33.7490, lng: -84.3880 } },
  { id: 'savannah-ga', name: 'Savannah', state: 'Georgia', stateCode: 'GA', zipCode: '31401', region: 'Southeast', coordinates: { lat: 32.0835, lng: -81.0998 } },
  // Massachusetts
  { id: 'boston-ma', name: 'Boston', state: 'Massachusetts', stateCode: 'MA', zipCode: '02101', region: 'Northeast', coordinates: { lat: 42.3601, lng: -71.0589 } },
  { id: 'worcester-ma', name: 'Worcester', state: 'Massachusetts', stateCode: 'MA', zipCode: '01601', region: 'Northeast', coordinates: { lat: 42.2626, lng: -71.8023 } },
  // Pennsylvania
  { id: 'philadelphia-pa', name: 'Philadelphia', state: 'Pennsylvania', stateCode: 'PA', zipCode: '19101', region: 'Northeast', coordinates: { lat: 39.9526, lng: -75.1652 } },
  { id: 'pittsburgh-pa', name: 'Pittsburgh', state: 'Pennsylvania', stateCode: 'PA', zipCode: '15201', region: 'Northeast', coordinates: { lat: 40.4406, lng: -79.9959 } },
  // Ohio
  { id: 'columbus-oh', name: 'Columbus', state: 'Ohio', stateCode: 'OH', zipCode: '43201', region: 'Midwest', coordinates: { lat: 39.9612, lng: -82.9988 } },
  { id: 'cleveland-oh', name: 'Cleveland', state: 'Ohio', stateCode: 'OH', zipCode: '44101', region: 'Midwest', coordinates: { lat: 41.4993, lng: -81.6944 } },
  { id: 'cincinnati-oh', name: 'Cincinnati', state: 'Ohio', stateCode: 'OH', zipCode: '45201', region: 'Midwest', coordinates: { lat: 39.1031, lng: -84.5120 } },
  // Michigan
  { id: 'detroit-mi', name: 'Detroit', state: 'Michigan', stateCode: 'MI', zipCode: '48201', region: 'Midwest', coordinates: { lat: 42.3314, lng: -83.0458 } },
  { id: 'grand-rapids-mi', name: 'Grand Rapids', state: 'Michigan', stateCode: 'MI', zipCode: '49501', region: 'Midwest', coordinates: { lat: 42.9634, lng: -85.6681 } },
  // Nevada
  { id: 'las-vegas-nv', name: 'Las Vegas', state: 'Nevada', stateCode: 'NV', zipCode: '89101', region: 'West', coordinates: { lat: 36.1699, lng: -115.1398 } },
  { id: 'reno-nv', name: 'Reno', state: 'Nevada', stateCode: 'NV', zipCode: '89501', region: 'West', coordinates: { lat: 39.5296, lng: -119.8138 } },
  // Oregon
  { id: 'portland-or', name: 'Portland', state: 'Oregon', stateCode: 'OR', zipCode: '97201', region: 'West', coordinates: { lat: 45.5051, lng: -122.6750 } },
  { id: 'eugene-or', name: 'Eugene', state: 'Oregon', stateCode: 'OR', zipCode: '97401', region: 'West', coordinates: { lat: 44.0521, lng: -123.0868 } },
  // Minnesota
  { id: 'minneapolis-mn', name: 'Minneapolis', state: 'Minnesota', stateCode: 'MN', zipCode: '55401', region: 'Midwest', coordinates: { lat: 44.9778, lng: -93.2650 } },
  { id: 'saint-paul-mn', name: 'Saint Paul', state: 'Minnesota', stateCode: 'MN', zipCode: '55101', region: 'Midwest', coordinates: { lat: 44.9537, lng: -93.0900 } },
  // Missouri
  { id: 'kansas-city-mo', name: 'Kansas City', state: 'Missouri', stateCode: 'MO', zipCode: '64101', region: 'Midwest', coordinates: { lat: 39.0997, lng: -94.5786 } },
  { id: 'st-louis-mo', name: 'St. Louis', state: 'Missouri', stateCode: 'MO', zipCode: '63101', region: 'Midwest', coordinates: { lat: 38.6270, lng: -90.1994 } },
  // Indiana
  { id: 'indianapolis-in', name: 'Indianapolis', state: 'Indiana', stateCode: 'IN', zipCode: '46201', region: 'Midwest', coordinates: { lat: 39.7684, lng: -86.1581 } },
  { id: 'fort-wayne-in', name: 'Fort Wayne', state: 'Indiana', stateCode: 'IN', zipCode: '46801', region: 'Midwest', coordinates: { lat: 41.1306, lng: -85.1289 } },
  // Wisconsin
  { id: 'milwaukee-wi', name: 'Milwaukee', state: 'Wisconsin', stateCode: 'WI', zipCode: '53201', region: 'Midwest', coordinates: { lat: 43.0389, lng: -87.9065 } },
  { id: 'madison-wi', name: 'Madison', state: 'Wisconsin', stateCode: 'WI', zipCode: '53701', region: 'Midwest', coordinates: { lat: 43.0731, lng: -89.4012 } },
  // South Carolina
  { id: 'charleston-sc', name: 'Charleston', state: 'South Carolina', stateCode: 'SC', zipCode: '29401', region: 'Southeast', coordinates: { lat: 32.7765, lng: -79.9311 } },
  { id: 'columbia-sc', name: 'Columbia', state: 'South Carolina', stateCode: 'SC', zipCode: '29201', region: 'Southeast', coordinates: { lat: 34.0007, lng: -81.0348 } },
  // Louisiana
  { id: 'new-orleans-la', name: 'New Orleans', state: 'Louisiana', stateCode: 'LA', zipCode: '70112', region: 'Southeast', coordinates: { lat: 29.9511, lng: -90.0715 } },
  { id: 'baton-rouge-la', name: 'Baton Rouge', state: 'Louisiana', stateCode: 'LA', zipCode: '70801', region: 'Southeast', coordinates: { lat: 30.4515, lng: -91.1871 } },
  // Utah
  { id: 'salt-lake-city-ut', name: 'Salt Lake City', state: 'Utah', stateCode: 'UT', zipCode: '84101', region: 'West', coordinates: { lat: 40.7608, lng: -111.8910 } },
  { id: 'provo-ut', name: 'Provo', state: 'Utah', stateCode: 'UT', zipCode: '84601', region: 'West', coordinates: { lat: 40.2338, lng: -111.6585 } },
  // New Jersey
  { id: 'newark-nj', name: 'Newark', state: 'New Jersey', stateCode: 'NJ', zipCode: '07101', region: 'Northeast', coordinates: { lat: 40.7357, lng: -74.1724 } },
  { id: 'jersey-city-nj', name: 'Jersey City', state: 'New Jersey', stateCode: 'NJ', zipCode: '07302', region: 'Northeast', coordinates: { lat: 40.7178, lng: -74.0431 } },
  // Connecticut
  { id: 'hartford-ct', name: 'Hartford', state: 'Connecticut', stateCode: 'CT', zipCode: '06101', region: 'Northeast', coordinates: { lat: 41.7658, lng: -72.6851 } },
  { id: 'new-haven-ct', name: 'New Haven', state: 'Connecticut', stateCode: 'CT', zipCode: '06501', region: 'Northeast', coordinates: { lat: 41.3083, lng: -72.9279 } },
  // Kentucky
  { id: 'louisville-ky', name: 'Louisville', state: 'Kentucky', stateCode: 'KY', zipCode: '40201', region: 'Southeast', coordinates: { lat: 38.2527, lng: -85.7585 } },
  { id: 'lexington-ky', name: 'Lexington', state: 'Kentucky', stateCode: 'KY', zipCode: '40501', region: 'Southeast', coordinates: { lat: 38.0406, lng: -84.5037 } },
  // Alabama
  { id: 'birmingham-al', name: 'Birmingham', state: 'Alabama', stateCode: 'AL', zipCode: '35201', region: 'Southeast', coordinates: { lat: 33.5186, lng: -86.8104 } },
  { id: 'huntsville-al', name: 'Huntsville', state: 'Alabama', stateCode: 'AL', zipCode: '35801', region: 'Southeast', coordinates: { lat: 34.7304, lng: -86.5861 } },
  // New Mexico
  { id: 'albuquerque-nm', name: 'Albuquerque', state: 'New Mexico', stateCode: 'NM', zipCode: '87101', region: 'Southwest', coordinates: { lat: 35.0844, lng: -106.6504 } },
  { id: 'santa-fe-nm', name: 'Santa Fe', state: 'New Mexico', stateCode: 'NM', zipCode: '87501', region: 'Southwest', coordinates: { lat: 35.6870, lng: -105.9378 } },
  // Hawaii
  { id: 'honolulu-hi', name: 'Honolulu', state: 'Hawaii', stateCode: 'HI', zipCode: '96801', region: 'West', coordinates: { lat: 21.3069, lng: -157.8583 } },
  // Alaska
  { id: 'anchorage-ak', name: 'Anchorage', state: 'Alaska', stateCode: 'AK', zipCode: '99501', region: 'West', coordinates: { lat: 61.2181, lng: -149.9003 } },
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