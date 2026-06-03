// Market Data Types
export interface MarketData {
  zipCode: string
  city: string
  state: string
  saleData: {
    averagePrice: number
    medianPrice: number
    averagePricePerSquareFoot: number
    averageDaysOnMarket: number
    newListings: number
    totalListings: number
  }
  rentalData: {
    averageRent: number
    medianRent: number
  }
}

// City Types
export interface City {
  id: string
  name: string
  state: string
  stateCode: string
  zipCode: string
  region: string
  population?: number
  coordinates: {
    lat: number
    lng: number
  }
}

// Compare Types
export interface MarketComparison {
  city: City
  marketData: MarketData
  trends?: PriceTrend[]
}

export interface PriceTrend {
  month: string
  averagePrice: number
  medianPrice: number
}

// Saved Market Types
export interface SavedMarket {
  id: string
  city: City
  savedAt: string
}

// API Response Types
export interface RentCastResponse {
  id: string
  zipCode: string
  saleData: MarketData['saleData']
  rentalData: MarketData['rentalData']
}

// Filter Types
export interface MarketFilters {
  priceMin?: number
  priceMax?: number
  propertyType?: PropertyType
  state?: string
}

export type PropertyType = 
  | 'Single Family'
  | 'Condo'
  | 'Townhouse'
  | 'Multi Family'
  | 'All'