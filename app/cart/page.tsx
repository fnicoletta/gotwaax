"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useCart } from "../contexts/cart-context"
import { Button } from "../components/ui/button"
import { CartItem } from "../components/cart-item"
import { CartSummary } from "../components/cart-summary"
import { PaymentMethods } from "../components/payment-methods"

export default function CartPage() {
  const { items } = useCart()
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <Link href="/products">
                <Button
                  variant="outline"
                  className="text-white border-zinc-500 bg-zinc-800/50 hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Continue Shopping
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white mb-8">Shopping Cart</h1>
                
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-400 mb-4">Your cart is empty</p>
                    <Link href="/products">
                      <Button className="bg-red hover:bg-red-dark">
                        Start Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <CartSummary />
                <PaymentMethods />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 