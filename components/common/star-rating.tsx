"use client"

import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizes = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
}

export const StarRating = ({
  rating,
  size = "md",
  className = "",
}: StarRatingProps) => {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <Star
            key={i}
            className={`${sizes[size]} ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
            }`}
            aria-hidden="true"
          />
        ))}
    </div>
  )
} 