"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"

interface NavMenuProps {
  items: NavItem[]
  className?: string
}

export const NavMenu = ({ items, className = "" }: NavMenuProps) => {
  const pathname = usePathname()

  return (
    <nav className={`flex gap-6 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-white ${
            pathname === item.href ? "text-white" : "text-gray-400"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
} 