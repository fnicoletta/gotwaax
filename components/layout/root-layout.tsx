"use client"

import { ReactNode } from "react"
import { CartProvider } from "@/contexts/cart-context"
import { Header } from "./header"
import { Footer } from "./footer"

interface RootLayoutProps {
  children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <CartProvider>
      <div className="relative flex min-h-screen flex-col bg-zinc-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  )
} 