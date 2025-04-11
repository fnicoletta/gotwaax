export interface Product {
  id: string
  title: string
  description: string
  longDescription: string
  price: number
  rating: number
  image: string
  category: string
  brand: 'Maguiar\'s' | 'Blue Coral'
  benefits: string[]
  ingredients: string[]
  applicationInstructions: string[]
  size: string
  coverage: string
  reviews: Review[]
}

export interface Review {
  name: string
  rating: number
  comment: string
  date: string
  image: string
  role?: string
}

export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

export interface NavItem {
  title: string
  href: string
  description?: string
}

export interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    github: string
    facebook: string
    instagram: string
  }
} 