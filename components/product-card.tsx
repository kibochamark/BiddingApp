import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"
import { formatCurrency, getTimeRemaining } from "@/lib/mock-data"
import { Star } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const timeLeft = getTimeRemaining(product.endDate)

  const currentPrice = product.currentBid || product.startingPrice
  const discountPercent = Math.round(((product.startingPrice - currentPrice) / product.startingPrice) * 100)

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="overflow-hidden bg-white border border-border shadow-md hover:shadow-lg transition-shadow group">
        <div className="relative aspect-square overflow-hidden bg-gray-light">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-4 transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-medium text-base line-clamp-2 text-foreground leading-snug">{product.title}</h3>

          <div className="text-xs text-muted-foreground line-clamp-1">{product.description}</div>

          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) ? "fill-foreground text-foreground" : "fill-none text-gray-medium"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rating.toFixed(1)}/5 ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-2xl font-bold text-foreground">{formatCurrency(currentPrice)}</span>
            <span className="text-sm text-muted-foreground line-through">{formatCurrency(product.startingPrice)}</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Badge variant="outline" className="capitalize text-xs">
              {product.condition}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {product.bidsCount} bids · {timeLeft}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
