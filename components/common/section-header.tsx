interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
}

export const SectionHeader = ({
  title,
  description,
  className = "",
  align = "center",
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  return (
    <div className={`flex flex-col space-y-4 ${alignmentClasses[align]} ${className}`}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          {title}
        </h2>
        {description && (
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  )
} 