'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductFilters } from '../components/ProductFilters'
import { products, type Product } from '../data/products'

const categories = Array.from(new Set(products.map((product: Product) => product.category)))

export default function ProductsPage() {
  // Get min and max prices from all size variations
  const allPrices = products.flatMap((product: Product) => 
    product.sizes.map(size => size.price)
  )
  const minPrice = Math.floor(Math.min(...allPrices))
  const maxPrice = Math.ceil(Math.max(...allPrices))

  const [filters, setFilters] = useState({
    category: null as string | null,
    priceRange: [minPrice, maxPrice] as [number, number],
    sortBy: 'default',
    search: ''
  })

  const filteredProducts = products
    .filter((product: Product) => {
      const categoryMatch = !filters.category || product.category === filters.category
      const priceMatch = product.sizes.some(
        size => size.price >= filters.priceRange[0] && size.price <= filters.priceRange[1]
      )
      const searchMatch = !filters.search || 
        product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.category.toLowerCase().includes(filters.search.toLowerCase())
      
      return categoryMatch && priceMatch && searchMatch
    })
    .sort((a: Product, b: Product) => {
      switch (filters.sortBy) {
        case 'price-low':
          return Math.min(...a.sizes.map(size => size.price)) - Math.min(...b.sizes.map(size => size.price))
        case 'price-high':
          return Math.max(...b.sizes.map(size => size.price)) - Math.max(...a.sizes.map(size => size.price))
        case 'name-asc':
          return a.title.localeCompare(b.title)
        case 'name-desc':
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64">
            <ProductFilters
              categories={categories}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onFilterChange={setFilters}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => {
                const lowestPrice = Math.min(...product.sizes.map(s => s.price))
                const highestPrice = Math.max(...product.sizes.map(s => s.price))
                const priceDisplay = lowestPrice === highestPrice
                  ? `$${lowestPrice.toFixed(2)}`
                  : `$${lowestPrice.toFixed(2)} - $${highestPrice.toFixed(2)}`

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group block"
                  >
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden transition-colors hover:border-zinc-700">
                      <div className="relative h-48">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {Array(product.rating).fill(null).map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-white font-semibold">
                            {priceDisplay}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No products match your filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setFilters({
                    category: null,
                    priceRange: [minPrice, maxPrice],
                    sortBy: 'default',
                    search: ''
                  })}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 