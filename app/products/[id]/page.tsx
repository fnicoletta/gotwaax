"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Star, ShoppingCart, Truck, Shield, RefreshCw, Check } from "lucide-react"
import { useState } from "react"
import * as Select from '@radix-ui/react-select'

import { Button } from "../../components/ui/button"
import { useCart } from "../../contexts/cart-context"

// This would typically come from an API or database
const products = [
  {
    id: "ceramic-coating",
    title: "Ultra Ceramic Coating",
    description: "Professional-grade ceramic coating for ultimate protection",
    longDescription: "Our premium ceramic coating provides unmatched protection against environmental damage, UV rays, and chemical contaminants. The hydrophobic properties ensure water beads off easily, keeping your vehicle cleaner for longer.",
    sizes: [
      { size: "30ml", price: 49.99, coverage: "1 panel" },
      { size: "50ml", price: 89.99, coverage: "Full car (sedan)" },
      { size: "100ml", price: 159.99, coverage: "Multiple vehicles" }
    ],
    rating: 5,
    image: "https://picsum.photos/id/1071/600/400",
    category: "Protection",
    benefits: [
      "Up to 5 years of protection",
      "Superior hydrophobic properties",
      "UV resistance",
      "Chemical resistance",
      "Easy maintenance"
    ],
    ingredients: [
      "SiO2 (Silicon Dioxide)",
      "TiO2 (Titanium Dioxide)",
      "Proprietary polymers",
      "Advanced ceramic compounds"
    ],
    application: [
      "Clean and decontaminate surface",
      "Polish if necessary",
      "Wipe with IPA solution",
      "Apply coating in cross-hatch pattern",
      "Allow 24 hours for initial cure",
      "Avoid water contact for 7 days"
    ],
    reviews: [
      {
        name: "John D.",
        rating: 5,
        comment: "Best ceramic coating I've ever used. The water beading is incredible!"
      },
      {
        name: "Sarah M.",
        rating: 5,
        comment: "Professional grade results at home. Worth every penny."
      }
    ]
  },
  {
    id: "wash-wax",
    title: "Premium Wash & Wax",
    description: "2-in-1 formula for cleaning and protection",
    longDescription: "Our Premium Wash & Wax combines powerful cleaning agents with carnauba wax for a deep clean and lasting protection in one step. Perfect for regular maintenance and achieving a brilliant shine.",
    sizes: [
      { size: "16oz", price: 14.99, coverage: "3-4 washes" },
      { size: "32oz", price: 24.99, coverage: "7-8 washes" },
      { size: "1 gallon", price: 59.99, coverage: "25-30 washes" }
    ],
    rating: 4,
    image: "https://picsum.photos/id/1072/600/400",
    category: "Wash",
    benefits: [
      "Cleans and protects in one step",
      "Rich foam formula",
      "Carnauba wax protection",
      "pH balanced",
      "Streak-free finish"
    ],
    ingredients: [
      "Purified water",
      "Carnauba wax",
      "Surfactants",
      "pH balancers",
      "UV protectants"
    ],
    application: [
      "Rinse vehicle thoroughly",
      "Mix 1oz per gallon of water",
      "Wash with mitt in straight lines",
      "Rinse thoroughly",
      "Dry with microfiber towel"
    ],
    reviews: [
      {
        name: "Mike R.",
        rating: 4,
        comment: "Great for weekly washes. Leaves a nice shine."
      },
      {
        name: "Lisa K.",
        rating: 5,
        comment: "Love how it keeps my car looking fresh between details."
      }
    ]
  },
  // Add more products as needed
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState(products[0]?.sizes[0]?.size)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const product = products.find(p => p.id === params.id)
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-950">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Product Not Found
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  The product you're looking for doesn't exist or has been removed.
                </p>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="text-white border-zinc-500 bg-zinc-800/50 hover:bg-white hover:text-black"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back to Products
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  const currentSizeOption = product.sizes.find(s => s.size === selectedSize)
  const price = currentSizeOption?.price || product.sizes[0].price

  const handleAddToCart = () => {
    if (currentSizeOption) {
      addItem({
        id: `${product.id}-${currentSizeOption.size}`,
        title: `${product.title} - ${currentSizeOption.size}`,
        price: currentSizeOption.price,
        image: product.image
      })
    }
  }

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
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back to Products
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Product image */}
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg bg-zinc-800">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Product details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter text-white">{product.title}</h1>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      {Array(product.rating)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-400">
                      ({product.reviews?.length || 0} reviews)
                    </span>
                  </div>
                </div>
                
                <div>
                  <span className="text-2xl font-bold text-white">${price.toFixed(2)}</span>
                </div>
                
                <div>
                  <p className="text-gray-400">{product.longDescription}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-red" />
                    <span className="text-sm text-gray-400">Free shipping on orders over $75</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red" />
                    <span className="text-sm text-gray-400">30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-red" />
                    <span className="text-sm text-gray-400">Easy returns</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Quantity</label>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center text-white">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setQuantity(prev => prev + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Select Size</label>
                  <Select.Root value={selectedSize} onValueChange={setSelectedSize}>
                    <Select.Trigger className="flex h-10 w-full items-center justify-between rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white">
                      <Select.Value placeholder="Select size" />
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 text-white">
                        <Select.Viewport className="p-1">
                          {product.sizes.map((option) => (
                            <Select.Item
                              key={option.size}
                              value={option.size}
                              className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-800 focus:text-white"
                            >
                              <Select.ItemText>{option.size} - Coverage: {option.coverage}</Select.ItemText>
                              <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                                <Check className="h-4 w-4" />
                              </Select.ItemIndicator>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>
                
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="flex-1 bg-red hover:bg-red-dark" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Buy Now
                  </Button>
                </div>
                
                <div className="pt-4 border-t border-zinc-800">
                  <h3 className="text-lg font-bold text-white">Product Details</h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Category</p>
                      <p className="text-white">{product.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Size</p>
                      <p className="text-white">{selectedSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Coverage</p>
                      <p className="text-white">{currentSizeOption?.coverage || product.sizes[0].coverage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product details sections */}
            <div className="mt-16 space-y-12">              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span className="text-gray-400">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Ingredients</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-gray-400">{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Application Instructions</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {product.application?.map((step, index) => (
                    <li key={index} className="text-gray-400">{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 