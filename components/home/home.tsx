"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { ProductCard } from "@/components/product-card"
import { Badge } from "@/components/ui/badge"
import { mockProducts } from "@/lib/mock-data"
import { binarySearchProducts } from "@/lib/search-utils"
import type { ProductCategory } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { LoginPage } from "@/components/login-page"
import { Star, CheckCircle2, RotateCcw, Award } from "lucide-react"
import Image from "next/image"
import { ProductCarousel } from "@/components/product-carousel"
const categories: { value: ProductCategory; label: string; image: string }[] = [
  { value: "smartphones", label: "Smartphones", image: "/iphone-14-pro-max-purple.jpg" },
  { value: "laptops", label: "Laptops", image: "/macbook-air-m1.jpg" },
  { value: "tablets", label: "Tablets", image: "/ipad-air-5.jpg" },
  { value: "audio", label: "Audio", image: "/airpods-pro-2.jpg" },
  { value: "wearables", label: "Wearables", image: "/apple-watch-series-8.jpg" },
  { value: "gaming", label: "Gaming", image: "/ps5-console.jpg" },
]

export default function HomePage() {
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all")

  const searchQuery = searchParams.get("search") || ""
  const categoryFromUrl = searchParams.get("category") as ProductCategory | null

  const filteredProducts = useMemo(() => {
    let products = mockProducts.filter((product) => product.isActive)

    if (searchQuery) {
      products = binarySearchProducts(products, searchQuery)
    }

    if (selectedCategory !== "all") {
      products = products.filter((product) => product.category === selectedCategory)
    }

    return products
  }, [searchQuery, selectedCategory])

  const featuredProducts = filteredProducts.slice(0, 8)
  const recommendedProducts = filteredProducts.slice(8, 16)

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl)
    }
  }, [categoryFromUrl])

  if (!user) {
    return <LoginPage />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

      <HeroCarousel featuredProducts={featuredProducts} />

      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Where the world shops refurbished tech.
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-4">
            Everything you love about new, for less.{" "}
            <span className="underline decoration-2 underline-offset-4">Guaranteed by the BidMarket Promise.</span>
          </p>
        </div>
      </section>

      <section className="bg-gray-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 shrink-0" />
              <span className="text-sm font-medium">Best-in-class refurbishment</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 shrink-0" />
              <span className="text-sm font-medium">25-point quality inspection</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-6 w-6 shrink-0" />
              <span className="text-sm font-medium">30-day free returns</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 shrink-0" />
              <span className="text-sm font-medium">1-year warranty</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {searchQuery ? (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold mb-2">Search results for "{searchQuery}"</h2>
              <p className="text-muted-foreground">{filteredProducts.length} products found</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <>
            <ProductCarousel
              products={featuredProducts}
              title="Recommended for you"
              description="Handpicked items based on your interest"
            />
          </>
        )}
      </section>

      {!searchQuery && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Shop our most wanted</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`group relative rounded-lg overflow-hidden transition-transform hover:scale-105 ${
                  selectedCategory === cat.value ? "ring-2 ring-foreground" : ""
                }`}
              >
                <div className="relative aspect-square bg-gray-light">
                  <Image src={cat.image || "/placeholder.svg"} alt={cat.label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-sm md:text-base font-semibold text-white">{cat.label}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {!searchQuery && recommendedProducts.length > 0 && (
        <section className="bg-white border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
            <ProductCarousel
              products={recommendedProducts}
              title="Trending now"
              description="Popular items with the best bids"
            />
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-white">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              {searchQuery
                ? "All results"
                : selectedCategory === "all"
                  ? "All auctions"
                  : `${selectedCategory} auctions`}
            </h2>
            <p className="text-muted-foreground">{filteredProducts.length} products available</p>
          </div>

          {(selectedCategory !== "all" || searchQuery) && (
            <Badge
              variant="outline"
              className="cursor-pointer"
              onClick={() => {
                setSelectedCategory("all")
                window.history.pushState({}, "", "/")
              }}
            >
              Clear filter
            </Badge>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {searchQuery ? `No products found for "${searchQuery}"` : "No products found"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* <Footer /> */}
    </div>
  )
}
