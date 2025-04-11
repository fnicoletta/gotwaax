"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCart } from "../contexts/cart-context"
import { Button } from "./ui/button"

export function CartIcon() {
  const { itemCount } = useCart()
  
  return (
    <Link href="/cart">
      <Button variant="outline" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red text-[10px] font-bold text-white flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  )
} 