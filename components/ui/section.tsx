interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "default" | "dark" | "darker" | "gradient"
}

export const Section = ({
  children,
  className = "",
  background = "default",
}: SectionProps) => {
  const backgroundClasses = {
    default: "",
    dark: "bg-zinc-900",
    darker: "bg-zinc-950",
    gradient: "bg-gradient-to-b from-zinc-900 to-zinc-950",
  }

  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  )
} 