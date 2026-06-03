import axios from 'axios'
import { RENTCAST_API_URL, RENTCAST_API_KEY } from '../constants'
import type { MarketData } from '../types'

const rentcastClient = axios.create({
  baseURL: RENTCAST_API_URL,
  headers: {
    'X-Api-Key': RENTCAST_API_KEY,
    'Content-Type': 'application/json',
  },
})

// Отримати дані ринку по місту і штату
export const fetchMarketDataFromAPI = async (
  city: string,
  state: string
): Promise<MarketData | null> => {
  try {
    const response = await rentcastClient.get('/markets', {
      params: {
        city,
        state,
        dataType: 'Sale',
      },
    })

    const data = response.data

    // Перетворюємо відповідь RentCast у наш формат MarketData
    return {
      zipCode: data.zipCode || '',
      city,
      state,
      saleData: {
        averagePrice: data.averagePrice || 0,
        medianPrice: data.medianPrice || 0,
        averagePricePerSquareFoot: data.averagePricePerSquareFoot || 0,
        averageDaysOnMarket: data.averageDaysOnMarket || 0,
        newListings: data.newListings || 0,
        totalListings: data.totalListings || 0,
      },
      rentalData: {
        averageRent: 0,
        medianRent: 0,
      },
    }
  } catch (error) {
    console.error(`RentCast API error for ${city}, ${state}:`, error)
    return null
  }
}