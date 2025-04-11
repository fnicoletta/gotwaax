import { Product } from "@/types"

export const products: Product[] = [
  {
    id: "maguiars-ultimate-ceramic-coating",
    title: "Maguiar's Ultimate Ceramic Coating",
    description: "Professional-grade ceramic coating for long-lasting protection",
    longDescription: "Our premium ceramic coating provides unmatched protection and shine for your vehicle. This advanced formula creates a permanent bond with your car's paint, offering superior protection against UV rays, chemical stains, and environmental contaminants.",
    price: 89.99,
    rating: 5,
    image: "https://picsum.photos/id/1071/800/600",
    category: "Protection",
    brand: "Maguiar's",
    benefits: [
      "Lasts up to 2 years with proper maintenance",
      "Creates a hydrophobic surface that repels water and dirt",
      "Provides UV protection to prevent paint fading",
      "Adds depth and clarity to your paint",
      "Makes washing and maintenance easier"
    ],
    ingredients: [
      "Silicon dioxide (SiO2)",
      "Titanium dioxide (TiO2)",
      "Proprietary ceramic nanoparticles",
      "UV inhibitors",
      "Cross-linking agents"
    ],
    applicationInstructions: [
      "Wash and dry your vehicle thoroughly",
      "Clay bar the surface to remove contaminants",
      "Apply a paint correction if needed",
      "Wipe the surface with isopropyl alcohol",
      "Apply the ceramic coating in a cross-hatch pattern",
      "Allow to cure for 24 hours before exposure to water"
    ],
    size: "30ml",
    coverage: "Up to 2 vehicles",
    reviews: [
      {
        name: "Alex Chen",
        rating: 5,
        comment: "Best ceramic coating I've ever used. The shine is incredible and it's so easy to maintain.",
        date: "2023-12-15",
        image: "https://picsum.photos/id/1078/100/100",
        role: "Car Enthusiast"
      },
      {
        name: "Sarah Johnson",
        rating: 5,
        comment: "Applied this 6 months ago and my car still looks like it was just detailed. Worth every penny.",
        date: "2023-11-20",
        image: "https://picsum.photos/id/1079/100/100",
        role: "Professional Detailer"
      }
    ]
  },
  {
    id: "blue-coral-premium-wash-wax",
    title: "Blue Coral Premium Wash & Wax",
    description: "Deep clean and protect in one step",
    longDescription: "Our Premium Wash & Wax combines the power of a gentle car wash with the protection of a high-quality wax. This innovative formula cleans your vehicle while adding a layer of protection that lasts up to 3 months.",
    price: 24.99,
    rating: 4,
    image: "https://picsum.photos/id/1072/800/600",
    category: "Cleaning",
    brand: "Blue Coral",
    benefits: [
      "Cleans and protects in one step",
      "Safe for all paint types",
      "Adds a beautiful shine",
      "Protection lasts up to 3 months",
      "Biodegradable formula"
    ],
    ingredients: [
      "Plant-based surfactants",
      "Carnauba wax",
      "UV protectants",
      "pH balanced formula",
      "Natural fragrances"
    ],
    applicationInstructions: [
      "Rinse your vehicle thoroughly",
      "Mix 1 oz of product per gallon of water",
      "Wash from top to bottom",
      "Rinse thoroughly",
      "Dry with a microfiber towel"
    ],
    size: "32 oz",
    coverage: "Up to 16 washes",
    reviews: [
      {
        name: "Michael Rodriguez",
        rating: 4,
        comment: "Great product for regular maintenance. Leaves a nice shine and is very economical.",
        date: "2023-12-10",
        image: "https://picsum.photos/id/1080/100/100",
        role: "Weekend Warrior"
      },
      {
        name: "Jessica Lee",
        rating: 5,
        comment: "Love how it cleans and protects in one step. Saves me so much time!",
        date: "2023-11-25",
        image: "https://picsum.photos/id/1081/100/100",
        role: "Car Enthusiast"
      }
    ]
  },
  {
    id: "maguiars-wheel-cleaner",
    title: "Maguiar's Wheel Cleaner",
    description: "Safe and effective wheel cleaning solution",
    longDescription: "Professional-grade wheel cleaner that safely dissolves brake dust and road grime. Color-changing formula shows you exactly where it's working.",
    price: 19.99,
    rating: 5,
    image: "https://picsum.photos/id/1073/800/600",
    category: "Cleaning",
    brand: "Maguiar's",
    benefits: [
      "Color-changing formula indicates active cleaning",
      "Safe for all wheel finishes",
      "Dissolves brake dust and road grime",
      "No scrubbing required",
      "pH balanced formula"
    ],
    ingredients: [
      "Advanced surfactants",
      "pH balancers",
      "Color-changing indicators",
      "Brake dust dissolvers",
      "Protective agents"
    ],
    applicationInstructions: [
      "Ensure wheels are cool to touch",
      "Spray product liberally on wheels",
      "Wait for color change (30-60 seconds)",
      "Rinse thoroughly",
      "Repeat if necessary for heavily soiled wheels"
    ],
    size: "24 oz",
    coverage: "20-25 wheels",
    reviews: [
      {
        name: "David Wilson",
        rating: 5,
        comment: "Amazing product! The color-changing feature really helps ensure complete cleaning.",
        date: "2023-12-01",
        image: "https://picsum.photos/id/1082/100/100",
        role: "Car Enthusiast"
      }
    ]
  }
] 