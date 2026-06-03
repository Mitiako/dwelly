import axios from 'axios'
import { RENTCAST_API_URL, RENTCAST_API_KEY } from '../constants'
import type { RentCastResponse, MarketData } from '../types'

const rentcastClient = axios.create({
  baseURL: RENTCAST_API_URL,
  headers: {
    'X-Api-Key': RENTCAST_API_KEY,
    'Content-Type': 'application/json',
  },
})

// Отримати дані ринку по zip коду
export const getMarketData = async (zipCode: string): Promise<RentCastResponse> => {
  const response = await rentcastClient.get<RentCastResponse>(`/markets`, {
    params: { zipCode },
  })
  return response.data
}

// Отримати активні лістинги по місту
export const getListings = async (
  city: string,
  state: string,
  limit: number = 20
): Promise<MarketData[]> => {
  const response = await rentcastClient.get<MarketData[]>(`/listings/sale`, {
    params: { city, state, limit },
  })
  return response.data
}

// Отримати дані оренди по zip коду
export const getRentalData = async (zipCode: string): Promise<RentCastResponse> => {
  const response = await rentcastClient.get<RentCastResponse>(`/markets`, {
    params: { zipCode, dataType: 'rental' },
  })
  return response.data
}