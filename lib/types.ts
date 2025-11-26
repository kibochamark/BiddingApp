export type UserRole = "buyer" | "seller" | "admin"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  createdAt: Date
}

export type ProductCondition = "mint" | "excellent" | "good" | "fair"
export type ProductCategory = "smartphones" | "laptops" | "tablets" | "audio" | "wearables" | "gaming"
export type BidStatus = "active" | "won" | "lost" | "expired"
export type ShippingStatus = "pending" | "processing" | "shipped" | "delivered"

export interface Product {
  id: string
  title: string
  description: string
  category: ProductCategory
  condition: ProductCondition
  images: string[]
  startingPrice: number
  currentBid: number
  bidsCount: number
  endDate: Date
  sellerId: string
  sellerName: string
  sellerRating: number
  rating: number
  reviewCount: number
  specifications: Record<string, string>
  isActive: boolean
  createdAt: Date
}

export interface Bid {
  id: string
  productId: string
  bidderId: string
  bidderName: string
  amount: number
  timestamp: Date
  status: BidStatus
}

export interface ShippingAddress {
  fullName: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
}

export interface Order {
  id: string
  productId: string
  buyerId: string
  sellerId: string
  amount: number
  shippingAddress: ShippingAddress
  shippingStatus: ShippingStatus
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
  addedAt: Date
}
