// Генеруємо останні 12 місяців від поточної дати
export const getLast12Months = (): string[] => {
  const months = []
  const now = new Date()

  for (let i = 11; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
    months.push(
      date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
    )
  }
  return months
}

// Форматування дати оновлення
export const getLastUpdated = (): string => {
  return new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}