"use client"

import { useCart } from "../contexts/cart-context"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

export function CartSummary() {
  const { items, subtotal, shipping, tax, total } = useCart()
  
  if (items.length === 0) {
    return (
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 text-center">Your cart is empty</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span className="text-white">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Shipping</span>
            <span className="text-white">
              {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Tax</span>
            <span className="text-white">${tax.toFixed(2)}</span>
          </div>
          
          <div className="border-t border-zinc-800 pt-4">
            <div className="flex justify-between">
              <span className="font-medium text-white">Total</span>
              <span className="font-medium text-white">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full bg-primary hover:bg-primary/90">
          Proceed to Checkout
        </Button>
        
        {shipping > 0 && (
          <p className="text-sm text-gray-400 text-center">
            Add ${(75 - subtotal).toFixed(2)} more to qualify for free shipping
          </p>
        )}
      </CardFooter>
    </Card>
  )
} 