"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockOrders, mockProducts, formatCurrency } from "@/lib/mock-data"
import { useAuth } from "@/lib/auth-context"
import Image from "next/image"
import Link from "next/link"
import { Package, Truck, CheckCircle, MapPin } from "lucide-react"
import type { ShippingStatus } from "@/lib/types"

const statusConfig: Record<ShippingStatus, { label: string; icon: any; variant: any }> = {
  pending: { label: "Pending", icon: Package, variant: "secondary" },
  processing: { label: "Processing", icon: Package, variant: "default" },
  shipped: { label: "Shipped", icon: Truck, variant: "default" },
  delivered: { label: "Delivered", icon: CheckCircle, variant: "default" },
}

export default function OrdersPage() {
  const { user } = useAuth()

  const userOrders = mockOrders.filter((order) => order.buyerId === user?.id)

  return (
    <div className="min-h-screen bg-background">
    

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Orders</h1>
          <p className="text-muted-foreground">Track your purchases and shipments</p>
        </div>

        <div className="space-y-4">
          {userOrders.length === 0 ? (
            <Card>
              <CardContent className="py-16 text-center">
                <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-semibold mb-2">No orders yet</h3>
                <p className="text-muted-foreground mb-4">Win an auction to see your orders here</p>
                <Button asChild>
                  <Link href="/">Browse Products</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            userOrders.map((order) => {
              const product = mockProducts.find((p) => p.id === order.productId)
              if (!product) return null

              const statusInfo = statusConfig[order.shippingStatus]
              const StatusIcon = statusInfo.icon

              return (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex gap-4 flex-1">
                        <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={product.images[0] || "/placeholder.svg"}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-2">{product.title}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant={statusInfo.variant as any}>
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div>Order #{order.id}</div>
                            <div>Placed {order.createdAt.toLocaleDateString()}</div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:text-right space-y-3">
                        <div>
                          <div className="text-sm text-muted-foreground">Total</div>
                          <div className="text-2xl font-bold">{formatCurrency(order.amount)}</div>
                        </div>

                        <div className="flex lg:flex-col gap-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <MapPin className="h-4 w-4 mr-2" />
                            Track Order
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="text-sm font-medium mb-2">Shipping Address</div>
                      <div className="text-sm text-muted-foreground">
                        <div>{order.shippingAddress.fullName}</div>
                        <div>{order.shippingAddress.street}</div>
                        <div>
                          {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                        </div>
                        <div>{order.shippingAddress.country}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
