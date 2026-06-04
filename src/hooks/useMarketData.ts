import { useQuery } from '@tanstack/react-query'
import { mockMarketData, mockPriceTrends } from '../data/mockData'
import { fetchMarketDataFromAPI } from '../api/rentcast'
import { POPULAR_CITIES } from '../constants'
import type { MarketData, PriceTrend } from '../types'
import { getLast12Months } from '../utils/dateHelpers'


// Хук для отримання даних ринку по cityId
export const useMarketData = (cityId: string) => {
  return useQuery({
    queryKey: ['marketData', cityId],
    queryFn: async (): Promise<MarketData> => {
      // Спочатку перевіряємо mock data — не витрачаємо API запити
      if (mockMarketData[cityId]) {
        return mockMarketData[cityId]
      }

      // Якщо міста немає в mock — йдемо в RentCast API
      const cityInfo = POPULAR_CITIES.find(c => c.id === cityId)
      if (cityInfo) {
        const apiData = await fetchMarketDataFromAPI(cityInfo.name, cityInfo.stateCode)
        if (apiData) return apiData
      }

      // Fallback на Dallas якщо все інше не спрацювало
      return mockMarketData['dallas-tx']
    },
    enabled: !!cityId,
    staleTime: 1000 * 60 * 60 * 24, // 24 години — кешуємо щоб не витрачати ліміт
  })
}

// Хук для отримання трендів цін
export const usePriceTrends = (cityId: string) => {
  return useQuery({
    queryKey: ['priceTrends', cityId],
    queryFn: async (): Promise<PriceTrend[]> => {
      const months = getLast12Months() // ← тут
      const trends = mockPriceTrends[cityId] || mockPriceTrends['dallas-tx']
      return trends.map((trend, index) => ({
        ...trend,
        month: months[index] || trend.month,
      }))
    },
    enabled: !!cityId,
    staleTime: 1000 * 60 * 60 * 24,
  })
}