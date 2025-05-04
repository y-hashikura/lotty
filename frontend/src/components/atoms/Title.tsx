interface TitleProps {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className = '' }: TitleProps) => {
  return (
    <h1 className={`text-2xl font-bold text-gray-800 ${className}`}>
      {children}
    </h1>
  )
} 