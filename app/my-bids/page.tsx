"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockBids, mockProducts, formatCurrency, getTimeRemaining } from "@/lib/mock-data"
import { useAuth } from "@/lib/auth-context"
import Image from "next/image"
import Link from "next/link"
import { Gavel, Trophy, XCircle, Clock } from "lucide-react"

export default function MyBidsPage() {
  const { user } = useAuth()

  const userBids = mockBids.filter((bid) => bid.bidderId === user?.id)
  const activeBids = userBids.filter((bid) => bid.status === "active")
  const wonBids = userBids.filter((bid) => bid.status === "won")
  const lostBids = userBids.filter((bid) => bid.status === "lost")

  const BidItem = ({ bid }: { bid: (typeof mockBids)[0] }) => {
    const product = mockProducts.find((p) => p.id === bid.productId)
    if (!product) return null

    const isWinning = bid.amount === product.currentBid
    const timeLeft = getTimeRemaining(product.endDate)

    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <Link
              href={`/product/${product.id}`}
              className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0"
            >
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </Link>

            <div className="flex-1 min-w-0">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">{product.title}</h3>
              </Link>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <Badge variant={isWinning ? "default" : "secondary"} className="text-xs">
                  {isWinning ? "Winning" : "Outbid"}
                </Badge>
                {bid.status === "active" && (
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {timeLeft}
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-end justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Your bid</div>
                  <div className="text-lg font-bold">{formatCurrency(bid.amount)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Current bid</div>
                  <div className="text-sm font-semibold text-primary">{formatCurrency(product.currentBid)}</div>
                </div>
              </div>

              {!isWinning && bid.status === "active" && (
                <Button size="sm" className="w-full mt-3" asChild>
                  <Link href={`/product/${product.id}`}>Place Higher Bid</Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background">


      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Bids</h1>
          <p className="text-muted-foreground">Track all your bidding activity</p>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active" className="gap-2">
              <Gavel className="h-4 w-4" />
              Active ({activeBids.length})
            </TabsTrigger>
            <TabsTrigger value="won" className="gap-2">
              <Trophy className="h-4 w-4" />
              Won ({wonBids.length})
            </TabsTrigger>
            <TabsTrigger value="lost" className="gap-2">
              <XCircle className="h-4 w-4" />
              Lost ({lostBids.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeBids.length === 0 ? (
              <Card>
                <CardContent className="py-16 text-center">
                  <Gavel className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold mb-2">No active bids</h3>
                  <p className="text-muted-foreground mb-4">Start bidding on products you love</p>
                  <Button asChild>
                    <Link href="/">Browse Products</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              activeBids.map((bid) => <BidItem key={bid.id} bid={bid} />)
            )}
          </TabsContent>

          <TabsContent value="won" className="space-y-4">
            {wonBids.length === 0 ? (
              <Card>
                <CardContent className="py-16 text-center">
                  <Trophy className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold mb-2">No won auctions yet</h3>
                  <p className="text-muted-foreground">Keep bidding to win great deals!</p>
                </CardContent>
              </Card>
            ) : (
              wonBids.map((bid) => <BidItem key={bid.id} bid={bid} />)
            )}
          </TabsContent>

          <TabsContent value="lost" className="space-y-4">
            {lostBids.length === 0 ? (
              <Card>
                <CardContent className="py-16 text-center">
                  <XCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold mb-2">No lost bids</h3>
                  <p className="text-muted-foreground">You haven't lost any auctions yet</p>
                </CardContent>
              </Card>
            ) : (
              lostBids.map((bid) => <BidItem key={bid.id} bid={bid} />)
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
