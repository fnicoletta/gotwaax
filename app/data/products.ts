export interface ProductSize {
  size: string;
  price: number;
  coverage: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  sizes: ProductSize[];
  rating: number;
  image: string;
  category: string;
  benefits: string[];
  ingredients: string[];
  application: string[];
  reviews: {
    name: string;
    rating: number;
    comment: string;
  }[];
}

export const products: Product[] = [
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
  }
]; 