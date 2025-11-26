"use client"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { mockProducts, mockBids, formatCurrency, getTimeRemaining } from "@/lib/mock-data"
import { useAuth } from "@/lib/auth-context"
import {
  Clock,
  TrendingUp,
  Star,
  Package,
  ArrowLeft,
  Gavel,
  Shield,
  RotateCcw,
  Award,
  CheckCircle2,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const product = mockProducts.find((p) => p.id === resolvedParams.id)
  const router = useRouter()
  const { user } = useAuth()
  const { toast } = useToast()
  const [selectedImage, setSelectedImage] = useState(0)
  const [bidAmount, setBidAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => router.push("/")}>Back to Browse</Button>
        </div>
      </div>
    )
  }

  const productBids = mockBids.filter((bid) => bid.productId === product.id).sort((a, b) => b.amount - a.amount)

  const timeLeft = getTimeRemaining(product.endDate)
  const isEndingSoon = product.endDate.getTime() - Date.now() < 24 * 60 * 60 * 1000
  const minimumBid = product.currentBid + 10

  const handlePlaceBid = async () => {
    const amount = Number.parseFloat(bidAmount)

    if (!amount || amount < minimumBid) {
      toast({
        title: "Invalid bid amount",
        description: `Minimum bid is ${formatCurrency(minimumBid)}`,
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: "Bid placed successfully!",
        description: `Your bid of ${formatCurrency(amount)} has been placed.`,
      })
      setBidAmount("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => router.push("/")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Browse
        </Button>

        <div className="grid lg:grid-cols-[1fr,400px] gap-8 mb-12">
          {/* Left Column - Images and Details */}
          <div className="space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-white border border-border">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all bg-white ${
                        selectedImage === idx ? "border-foreground" : "border-border"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.title} ${idx + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Specifications */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">What's in the box</h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-muted-foreground font-medium">{key}</span>
                    <span className="font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trust Badges */}
            <div className="bg-gray-light rounded-lg p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">1-year warranty</div>
                    <div className="text-sm text-muted-foreground">Covered by our guarantee</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw className="h-6 w-6 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">30-day returns</div>
                    <div className="text-sm text-muted-foreground">Free and easy returns</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Quality tested</div>
                    <div className="text-sm text-muted-foreground">25-point inspection</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Certified refurbished</div>
                    <div className="text-sm text-muted-foreground">Like-new quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Bidding Card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="p-6">
              <div className="space-y-6">
                {/* Product Title */}
                <div>
                  <Badge variant="secondary" className="mb-3 capitalize">
                    {product.condition}
                  </Badge>
                  <h1 className="text-2xl font-bold mb-2 leading-tight">{product.title}</h1>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">
                      {product.rating}/5 ({product.reviewCount})
                    </span>
                  </div>
                </div>

                <Separator />

                {/* Seller Info */}
                <div className="flex items-center gap-3 p-4 bg-gray-light rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {product.sellerName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{product.sellerName}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      <span>{product.sellerRating} rating</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Bidding Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className={isEndingSoon ? "text-destructive font-semibold" : ""}>{timeLeft} left</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>{product.bidsCount} bids</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Current bid</div>
                    <div className="text-4xl font-bold">{formatCurrency(product.currentBid)}</div>
                  </div>

                  <div className="space-y-3">
                    <Input
                      type="number"
                      placeholder={`Min ${formatCurrency(minimumBid)}`}
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="h-12 text-lg"
                    />
                    <Button
                      onClick={handlePlaceBid}
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full h-12 text-base font-semibold"
                    >
                      <Gavel className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Placing bid..." : "Place bid"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Minimum bid: {formatCurrency(minimumBid)}
                    </p>
                  </div>

                  <Button variant="outline" size="lg" className="w-full h-12 bg-transparent">
                    <Package className="h-4 w-4 mr-2" />
                    Add to watchlist
                  </Button>
                </div>

                <Separator />

                {/* Bid History */}
                <div>
                  <h3 className="font-bold mb-4">Recent bids</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {productBids.length === 0 ? (
                      <p className="text-sm text-muted-foreground text-center py-4">No bids yet</p>
                    ) : (
                      productBids.slice(0, 10).map((bid) => (
                        <div key={bid.id} className="flex items-center justify-between py-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">{bid.bidderName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{bid.bidderName}</div>
                              <div className="text-xs text-muted-foreground">
                                {new Date(bid.timestamp).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold">{formatCurrency(bid.amount)}</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
