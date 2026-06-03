import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-[#111111] border border-[#222222] rounded-xl p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Card
