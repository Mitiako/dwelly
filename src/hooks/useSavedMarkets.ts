import { useState, useEffect } from 'react'
import type { SavedMarket, City } from '../types'
import { STORAGE_KEYS } from '../constants'

export const useSavedMarkets = () => {
  const [savedMarkets, setSavedMarkets] = useState<SavedMarket[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SAVED_MARKETS)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SAVED_MARKETS, JSON.stringify(savedMarkets))
  }, [savedMarkets])

  const addMarket = (city: City) => {
    const alreadySaved = savedMarkets.some(m => m.id === city.id)
    if (alreadySaved) return

    const newMarket: SavedMarket = {
      id: city.id,
      city,
      savedAt: new Date().toISOString(),
    }
    setSavedMarkets(prev => [...prev, newMarket])
  }

  const removeMarket = (cityId: string) => {
    setSavedMarkets(prev => prev.filter(m => m.id !== cityId))
  }

  const isMarketSaved = (cityId: string): boolean => {
    return savedMarkets.some(m => m.id === cityId)
  }

  return {
    savedMarkets,
    addMarket,
    removeMarket,
    isMarketSaved,
  }
}