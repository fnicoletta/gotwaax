"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-900">
          <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between p-4">
              <Link href="/" className="text-2xl font-bold text-white" onClick={closeMenu}>
                GotWaax
              </Link>
              <button
                onClick={closeMenu}
                className="rounded-md p-2 text-gray-400 hover:bg-zinc-800 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 p-4">
              <Link
                href="/products"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-zinc-800 hover:text-white"
                onClick={closeMenu}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-zinc-800 hover:text-white"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-zinc-800 hover:text-white"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
} 