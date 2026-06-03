// Форматування ціни
export const formatPrice = (price: number): string => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`
  }
  if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}K`
  }
  return `$${price}`
}

// Форматування повної ціни
export const formatFullPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

// Форматування відсотка
export const formatPercent = (value: number): string => {
  const sign = value > 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}%`
}

// Форматування числа
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value)
}

// Визначення кольору тренду
export const getTrendColor = (value: number): string => {
  if (value > 0) return 'text-emerald-400'
  if (value < 0) return 'text-red-400'
  return 'text-gray-400'
}

// Визначення кольору для теплової карти
export const getHeatMapColor = (price: number): string => {
  if (price < 250000) return '#1e3a2f'
  if (price < 400000) return '#166534'
  if (price < 550000) return '#15803d'
  if (price < 700000) return '#ca8a04'
  return '#d97706'
}