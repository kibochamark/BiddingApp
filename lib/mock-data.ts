import type { Product, Bid, User, Order } from "./types"

export const mockUsers: User[] = [
  {
    id: "user-1",
    email: "john.buyer@example.com",
    name: "John Buyer",
    role: "buyer",
    avatar: "/diverse-group.png",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "user-2",
    email: "sarah.seller@example.com",
    name: "Sarah Seller",
    role: "seller",
    avatar: "/confident-businesswoman.png",
    createdAt: new Date("2023-11-20"),
  },
  {
    id: "user-3",
    email: "admin@bidmarket.com",
    name: "Admin User",
    role: "admin",
    createdAt: new Date("2023-01-01"),
  },
]

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    title: "iPhone 14 Pro Max - 256GB Deep Purple",
    description:
      "Excellent condition iPhone 14 Pro Max with minimal signs of use. Includes original box and accessories. Battery health at 94%.",
    category: "smartphones",
    condition: "excellent",
    images: ["/iphone-14-pro-max-purple.jpg", "/iphone-box.jpg"],
    startingPrice: 699,
    currentBid: 850,
    bidsCount: 12,
    rating: 4.5,
    reviewCount: 115,
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    sellerId: "user-2",
    sellerName: "Sarah Seller",
    sellerRating: 4.8,
    specifications: {
      Storage: "256GB",
      Color: "Deep Purple",
      "Battery Health": "94%",
      "Screen Condition": "Excellent",
      Warranty: "None",
    },
    isActive: true,
    createdAt: new Date("2025-01-10"),
  },
  {
    id: "prod-2",
    title: 'MacBook Pro M2 14" - 16GB RAM, 512GB SSD',
    description:
      "Mint condition MacBook Pro with M2 chip. Used for only 3 months. Perfect for professionals and creators.",
    category: "laptops",
    condition: "mint",
    images: ["/macbook-pro-m2-on-desk.png", "/macbook-keyboard.jpg"],
    startingPrice: 1499,
    currentBid: 1650,
    bidsCount: 8,
    rating: 4.6,
    reviewCount: 1878,
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    sellerId: "user-2",
    sellerName: "Sarah Seller",
    sellerRating: 4.8,
    specifications: {
      Processor: "Apple M2",
      RAM: "16GB",
      Storage: "512GB SSD",
      "Screen Size": "14 inch",
      Condition: "Mint",
    },
    isActive: true,
    createdAt: new Date("2025-01-12"),
  },
  {
    id: "prod-3",
    title: "AirPods Pro 2nd Generation with MagSafe",
    description: "Like new AirPods Pro with active noise cancellation. All original accessories included.",
    category: "audio",
    condition: "excellent",
    images: ["/airpods-pro-lifestyle.png"],
    startingPrice: 149,
    currentBid: 189,
    bidsCount: 15,
    rating: 4.6,
    reviewCount: 715,
    endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    sellerId: "user-2",
    sellerName: "Sarah Seller",
    sellerRating: 4.8,
    specifications: {
      Generation: "2nd Gen",
      "Charging Case": "MagSafe",
      "Noise Cancellation": "Active",
      "Battery Life": "100%",
    },
    isActive: true,
    createdAt: new Date("2025-01-14"),
  },
  {
    id: "prod-4",
    title: "Samsung Galaxy S23 Ultra - 512GB Phantom Black",
    description: "Good condition Galaxy S23 Ultra with S Pen. Minor scratches on back, screen is pristine.",
    category: "smartphones",
    condition: "good",
    images: ["/samsung-galaxy-s23-ultra.png"],
    startingPrice: 799,
    currentBid: 799,
    bidsCount: 0,
    rating: 4.3,
    reviewCount: 89,
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    sellerId: "user-2",
    sellerName: "Sarah Seller",
    sellerRating: 4.8,
    specifications: {
      Storage: "512GB",
      Color: "Phantom Black",
      "Battery Health": "89%",
      Includes: "S Pen",
    },
    isActive: true,
    createdAt: new Date("2025-01-15"),
  },
  {
    id: "prod-5",
    title: "iPad Air M1 - 256GB Space Gray with Magic Keyboard",
    description: "Excellent iPad Air with M1 chip. Comes with Magic Keyboard case worth $299.",
    category: "tablets",
    condition: "excellent",
    images: ["/ipad-air-m1.png"],
    startingPrice: 549,
    currentBid: 625,
    bidsCount: 6,
    rating: 4.7,
    reviewCount: 542,
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    sellerId: "user-2",
    sellerName: "Sarah Seller",
    sellerRating: 4.8,
    specifications: {
      Processor: "Apple M1",
      Storage: "256GB",
      Color: "Space Gray",
      Accessories: "Magic Keyboard",
    },
    isActive: true,
    createdAt: new Date("2025-01-11"),
  },
  {
    id: "prod-6",
    title: "Sony WH-1000XM5 Wireless Headphones - Black",
    description: "Premium noise-canceling headphones in mint condition. Used for one month only.",
    category: "audio",
    condition: "mint",
    images: ["/sony-wh1000xm5.jpg"],
    startingPrice: 249,
    currentBid: 289,
    bidsCount: 9,
    rating: 4.8,
    reviewCount: 234,
    endDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    sellerId: "user-2",
    sellerName: "Sarah Seller",
    sellerRating: 4.8,
    specifications: {
      Color: "Black",
      "Noise Cancellation": "Industry Leading",
      "Battery Life": "30 hours",
      Condition: "Mint",
    },
    isActive: true,
    createdAt: new Date("2025-01-13"),
  },
]

export const mockBids: Bid[] = [
  {
    id: "bid-1",
    productId: "prod-1",
    bidderId: "user-1",
    bidderName: "John Buyer",
    amount: 850,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    status: "active",
  },
  {
    id: "bid-2",
    productId: "prod-2",
    bidderId: "user-1",
    bidderName: "John Buyer",
    amount: 1650,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    status: "active",
  },
]

export const mockOrders: Order[] = [
  {
    id: "order-1",
    productId: "prod-1",
    buyerId: "user-1",
    sellerId: "user-2",
    amount: 850,
    shippingAddress: {
      fullName: "John Buyer",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "USA",
      phone: "+1 555-0123",
    },
    shippingStatus: "processing",
    createdAt: new Date("2025-01-20"),
    updatedAt: new Date("2025-01-21"),
  },
]

// Helper function to get time remaining
export function getTimeRemaining(endDate: Date): string {
  const now = new Date()
  const diff = endDate.getTime() - now.getTime()

  if (diff <= 0) return "Ended"

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  if (days > 0) return `${days}d ${hours}h`
  return `${hours}h`
}

// Helper to format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
