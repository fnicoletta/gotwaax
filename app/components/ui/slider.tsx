"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PriceRangeProps {
  className?: string
  minValue: number
  maxValue: number
  onMinChange: (value: number) => void
  onMaxChange: (value: number) => void
}

const PriceRange = React.forwardRef<HTMLDivElement, PriceRangeProps>(
  ({ className, minValue, maxValue, onMinChange, onMaxChange }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
    >
      <input
        type="number"
        value={minValue}
        onChange={(e) => onMinChange(Number(e.target.value))}
        className="w-24 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Min"
        min={0}
      />
      <span className="text-sm text-muted-foreground">to</span>
      <input
        type="number"
        value={maxValue}
        onChange={(e) => onMaxChange(Number(e.target.value))}
        className="w-24 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Max"
        min={0}
      />
    </div>
  )
)

PriceRange.displayName = "PriceRange"

export { PriceRange } 