import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  padding?: string
}

const Card = ({ children, className = '', style, padding = 'p-6' }: CardProps) => {
  return (
    <div
      className={`bg-[#111111] border border-[#222222] rounded-xl ${padding} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default Card