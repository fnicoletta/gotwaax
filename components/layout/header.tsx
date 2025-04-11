"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { siteConfig } from "@/config/site"
import { NavMenu } from "./nav-menu"
import { MobileNav } from "./mobile-nav"
import { Button } from "../ui/button"
import { Container } from "../ui/container"
import { useCart } from "@/contexts/cart-context"
import { CartItem } from "@/types"

export const Header = () => {
  const { items } = useCart()
  const itemCount = items.reduce((total: number, item: CartItem) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/75">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">GotWaax</span>
            </Link>
            <NavMenu items={siteConfig.mainNav} className="hidden md:flex" />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
} 