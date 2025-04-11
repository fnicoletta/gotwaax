"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Carousel from "@/app/components/carousel"

interface Product {
  title: string
  description: string
  image: string
  price: string
  rating: number
}

interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=2000",
    alt: "Professional car detailing products"
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000",
    alt: "Car being detailed to a perfect shine"
  },
  {
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=2000",
    alt: "Premium car care products display"
  }
]

const featuredProducts: Product[] = [
  {
    title: "Maguiar's Ultimate Ceramic Coating",
    description: "Professional-grade ceramic coating for long-lasting protection",
    image: "https://picsum.photos/id/1071/600/400",
    price: "$89.99",
    rating: 5,
  },
  {
    title: "Blue Coral Premium Wash & Wax",
    description: "Deep clean and protect in one step",
    image: "https://picsum.photos/id/1072/600/400",
    price: "$24.99",
    rating: 4,
  },
  {
    title: "Maguiar's Wheel Cleaner",
    description: "Safe and effective wheel cleaning solution",
    image: "https://picsum.photos/id/1073/600/400",
    price: "$19.99",
    rating: 5,
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Alex Chen",
    role: "Car Enthusiast",
    image: "https://picsum.photos/id/1078/100/100",
    quote: "The Maguiar's ceramic coating is absolutely amazing. My car has never looked better!",
  },
  {
    name: "Sarah Johnson",
    role: "Professional Detailer",
    image: "https://picsum.photos/id/1079/100/100",
    quote: "Blue Coral's products are my go-to for professional detailing. Consistent quality every time.",
  },
  {
    name: "Michael Rodriguez",
    role: "Weekend Warrior",
    image: "https://picsum.photos/id/1080/100/100",
    quote: "GotWaax has the best selection of car care products. Their customer service is top-notch!",
  },
]

export default function Home() {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative w-full">
          <Carousel images={heroImages} className="h-[80vh]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-4 bg-black/60 p-8 rounded-xl max-w-3xl mx-auto border border-white/10">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Premium Car Care Products
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl font-medium">
                    Professional-grade car care products from trusted brands like Maguiar's and Blue Coral. Keep your vehicle looking its best with our premium selection.
                  </p>
                </div>
                <div className="space-x-4 mt-8">
                  <Link href="/products">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Shop Now
                    </Button>
                  </Link>
                  <a href="#about" onClick={scrollToAbout}>
                    <Button size="lg" variant="outline" className="bg-black/60 hover:bg-black/70 border-white/20">
                      Our Story
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Featured Products
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Discover our curated selection of premium car care products from industry-leading brands.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
              {featuredProducts.map((product, index) => (
                <div key={index} className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col h-full p-6">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-bold text-white">{product.title}</h3>
                      <p className="text-gray-400">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: product.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-lg font-bold text-white">{product.price}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link href={`/products/${product.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  What Our Customers Say
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say about our products.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">About GotWaax</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://picsum.photos/id/1077/800/600"
                  alt="About GotWaax"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Your Car Deserves the Best Care
                </h3>
                <p className="text-gray-300">
                  At GotWaax, we believe that every car deserves exceptional care. Founded by car enthusiasts
                  for car enthusiasts, we've spent years perfecting our formulas to bring you the highest
                  quality car care products on the market.
                </p>
                <p className="text-gray-300">
                  Our commitment to excellence drives us to use only the finest ingredients and cutting-edge
                  technology in our products. Whether you're a professional detailer or a weekend warrior,
                  our products are designed to deliver outstanding results every time.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">10+ Years</h4>
                    <p className="text-gray-300">Industry Experience</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">50,000+</h4>
                    <p className="text-gray-300">Satisfied Customers</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">100%</h4>
                    <p className="text-gray-300">Satisfaction Guaranteed</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">24/7</h4>
                    <p className="text-gray-300">Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

