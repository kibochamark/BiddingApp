"use client"

import { useMemo } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCarousel } from "@/components/product-carousel"
import { ProductCard } from "@/components/product-card"
import { HeroCarousel } from "@/components/hero-carousel"
import { mockProducts } from "@/lib/mock-data"
import type { ProductCategory } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { LoginPage } from "@/components/login-page"
import { Breadcrumb } from "@/components/breadcrumbs"

const categoryInfo: Record<string, { label: string; description: string }> = {
  smartphones: {
    label: "Smartphones",
    description: "Tested and perfected to the core",
  },
  laptops: {
    label: "Laptops",
    description: "Tested and perfected to the core",
  },
  tablets: {
    label: "Tablets",
    description: "Tested and perfected to the core",
  },
  audio: {
    label: "Audio",
    description: "Tested and perfected to the core",
  },
  wearables: {
    label: "Wearables",
    description: "Tested and perfected to the core",
  },
  gaming: {
    label: "Gaming",
    description: "Tested and perfected to the core",
  },
}

export default function CategoryPage() {
  const { user } = useAuth()
  const params = useParams()
  const slug = params.slug as string
  const category = slug as ProductCategory

  const categoryData = categoryInfo[category] || { label: "Products", description: "Browse our selection" }

  const categoryProducts = useMemo(() => {
    return mockProducts.filter((product) => product.category === category && product.isActive)
  }, [category])

  const featuredProducts = categoryProducts.slice(0, 4)
  const allProducts = categoryProducts

  if (!user) {
    return <LoginPage />
  }

  return (
    <div className="min-h-screen bg-white">

      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: categoryData.label, href: `/category/${slug}` },
            ]}
          />
        </div>
      </section>

      {/* <section className="border-b border-border bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Shop all {categoryData.label.toLowerCase()}
          </h2>
        </div>
      </section> */}

      {/* {featuredProducts.length > 0 && <HeroCarousel featuredProducts={featuredProducts} />}  */}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
            Shop {categoryData.label.toLowerCase()} and more
          </h2>
          <p className="text-foreground/70 text-lg">{categoryData.description}</p>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <ProductCarousel products={featuredProducts} title="Featured items" description="Handpicked selections" />
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-white">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">{categoryData.label} auctions</h2>
            <p className="text-muted-foreground">{allProducts.length} products available</p>
          </div>
        </div>

        {allProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

    </div>
  )
}
