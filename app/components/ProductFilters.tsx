'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface ProductFiltersProps {
  categories: string[]
  minPrice: number
  maxPrice: number
  onFilterChange: (filters: {
    category: string | null
    priceRange: [number, number]
    sortBy: string
    search: string
  }) => void
}

export function ProductFilters({
  categories,
  minPrice,
  maxPrice,
  onFilterChange,
}: ProductFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])
  const [sortBy, setSortBy] = useState('default')
  const [search, setSearch] = useState('')

  const handleCategoryChange = (value: string) => {
    const category = value === 'all' ? null : value
    setSelectedCategory(category)
    onFilterChange({ category, priceRange, sortBy, search })
  }

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]]
    setPriceRange(newRange)
    onFilterChange({ category: selectedCategory, priceRange: newRange, sortBy, search })
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    onFilterChange({ category: selectedCategory, priceRange, sortBy: value, search })
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
    onFilterChange({ category: selectedCategory, priceRange, sortBy, search: value })
  }

  const handleReset = () => {
    setSelectedCategory(null)
    setPriceRange([minPrice, maxPrice])
    setSortBy('default')
    setSearch('')
    onFilterChange({ 
      category: null, 
      priceRange: [minPrice, maxPrice], 
      sortBy: 'default',
      search: ''
    })
  }

  return (
    <div className="space-y-6 p-4 bg-card rounded-lg">
      <div className="space-y-2">
        <Label>Search Products</Label>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full px-3 py-2 bg-background border rounded-md"
        />
      </div>

      <div className="space-y-2">
        <Label>Sort By</Label>
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Category</Label>
        <Select
          value={selectedCategory ?? 'all'}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Price Range</Label>
        <div className="pt-6 pb-4">
          <div className="flex justify-between mb-2 text-sm text-muted-foreground">
            <span>${priceRange[0].toFixed(2)}</span>
            <span>${priceRange[1].toFixed(2)}</span>
          </div>
          <Slider
            min={minPrice}
            max={maxPrice}
            step={1}
            defaultValue={[priceRange[0], priceRange[1]]}
            value={[priceRange[0], priceRange[1]]}
            onValueChange={handlePriceChange}
            minStepsBetweenThumbs={1}
          />
          <div className="flex justify-between mt-1 text-xs text-muted-foreground/60">
            <span>Min</span>
            <span>Max</span>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={handleReset}
      >
        Reset Filters
      </Button>
    </div>
  )
} 