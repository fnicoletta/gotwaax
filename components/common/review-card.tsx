"use client"

import Image from "next/image"
import { Review } from "@/types"
import { StarRating } from "./star-rating"

interface ReviewCardProps {
  review: Review
  className?: string
}

export const ReviewCard = ({ review, className = "" }: ReviewCardProps) => {
  return (
    <div className={`flex flex-col rounded-lg border border-zinc-800 bg-zinc-900 p-6 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={review.image}
            alt={review.name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-white">{review.name}</h3>
          {review.role && <p className="text-sm text-gray-400">{review.role}</p>}
        </div>
      </div>
      <div className="mt-4">
        <StarRating rating={review.rating} />
        <p className="mt-2 text-gray-400">{review.comment}</p>
        <p className="mt-2 text-sm text-gray-500">{review.date}</p>
      </div>
    </div>
  )
} 