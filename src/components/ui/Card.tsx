import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const Card = ({ children, className = '', style }: CardProps) => {
  return (
    <div
      className={`bg-[#111111] border border-[#222222] rounded-xl p-6 ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default Card