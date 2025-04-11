"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types"
import { StarRating } from "@/components/common/star-rating"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  featured?: boolean
  onAddToCart?: (product: Product) => void
}

export const ProductCard = ({
  product,
  featured = false,
  onAddToCart,
}: ProductCardProps) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  return (
    <div
      className={`flex flex-col rounded-lg border ${
        featured ? "border-primary/50" : "border-zinc-800"
      } bg-zinc-900 hover:border-primary transition-all`}
    >
      <div className="relative">
        {featured && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-primary text-white text-xs font-bold px-3 py-1">
              BEST SELLER
            </div>
          </div>
        )}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="mb-2">
          <span className="text-sm text-primary">{product.brand}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{product.title}</h3>
        <p className="mt-2 text-gray-400">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="text-lg font-bold text-white">
            {formatPrice(product.price)}
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          {onAddToCart && (
            <Button
              onClick={handleAddToCart}
              className="flex-1"
              aria-label={`Add ${product.title} to cart`}
            >
              Add to Cart
            </Button>
          )}
          <Link
            href={`/products/${product.id}`}
            className="flex-1"
            aria-label={`View details for ${product.title}`}
          >
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 