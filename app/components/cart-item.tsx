"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "../contexts/cart-context"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

type CartItemProps = {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

export function CartItem({ id, title, price, image, quantity }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-md">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-white">{title}</h3>
            <p className="text-gray-400">${price.toFixed(2)}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(id, quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center text-white">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateQuantity(id, quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-right">
            <p className="font-medium text-white">
              ${(price * quantity).toFixed(2)}
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-red"
              onClick={() => removeItem(id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 