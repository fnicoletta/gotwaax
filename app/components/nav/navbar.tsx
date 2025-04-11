'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../contexts/cart-context'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const { itemCount } = useCart()
  const pathname = usePathname()

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === '/') {
      // If we're on the home page, scroll to the section
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If we're on another page, navigate to home page with hash
      window.location.href = '/#about'
    }
  }

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50 top-0 left-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/gotwaax-logo.png"
                alt="GotWaax Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
                <a href="#about" onClick={scrollToAbout} className="hover:text-primary transition-colors">
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <Link href="/products">
                Shop Now
              </Link>
            </Button>
            <Link 
              href="/cart" 
              className="relative p-2 hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 