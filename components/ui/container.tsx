interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`container mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  )
} 