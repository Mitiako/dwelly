import { useQuery } from '@tanstack/react-query'
import { mockMarketData, mockPriceTrends } from '../data/mockData'
import type { MarketData, PriceTrend } from '../types'

// Хук для отримання даних ринку по cityId
export const useMarketData = (cityId: string) => {
  return useQuery({
    queryKey: ['marketData', cityId],
    queryFn: async (): Promise<MarketData> => {
      const data = mockMarketData[cityId]
      if (data) return data
      // Fallback на Dallas якщо місто не знайдено
      return mockMarketData['dallas-tx']
    },
    enabled: !!cityId,
    staleTime: 1000 * 60 * 60,
  })
}

// Хук для отримання трендів цін
export const usePriceTrends = (cityId: string) => {
  return useQuery({
    queryKey: ['priceTrends', cityId],
    queryFn: async (): Promise<PriceTrend[]> => {
      const trends = mockPriceTrends[cityId]
      if (trends) return trends
      return mockPriceTrends['dallas-tx']
    },
    enabled: !!cityId,
    staleTime: 1000 * 60 * 60,
  })
}