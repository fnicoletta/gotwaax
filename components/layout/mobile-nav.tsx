"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/config/site"
import { NavMenu } from "./nav-menu"

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={handleToggle}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        aria-label="Toggle menu"
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
          <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between p-4">
              <Link href="/" className="text-2xl font-bold text-white" onClick={handleClose}>
                {siteConfig.name}
              </Link>
              <button
                onClick={handleClose}
                className="rounded-md p-2 text-gray-400 hover:bg-zinc-800 hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <NavMenu
              items={siteConfig.mainNav}
              className="flex-1 flex-col space-y-4 p-4"
            />
          </div>
        </div>
      )}
    </div>
  )
} 