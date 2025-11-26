"use client"

import { useCart } from "@/lib/cart-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { formatCurrency } from "@/lib/mock-data"
import { ArrowLeft, Shield } from "lucide-react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart()

  const qualityAssuranceFee = 3.99
  const estimatedTaxes = "Pending"
  const total = subtotal + qualityAssuranceFee

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Start bidding on amazing refurbished electronics!</p>
            <Button asChild size="lg">
              <Link href="/">Browse Products</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue shopping
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Your cart</h1>
              </div>

              <div className="space-y-4">
                {items.map((item) => {
                  const product = item.product
                  const isAvailable = product.isActive

                  return (
                    <div key={item.id} className="bg-background rounded-lg border border-border p-6">
                      {!isAvailable && (
                        <div className="mb-4 text-sm text-destructive font-medium">Item no longer available</div>
                      )}

                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-muted rounded-md flex-shrink-0 overflow-hidden">
                          <img
                            src={product.images[0] || "/placeholder.svg"}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <Link
                                href={`/product/${product.id}`}
                                className="font-medium hover:underline line-clamp-2"
                              >
                                {product.title}
                              </Link>
                              <Badge variant="secondary" className="mt-2 capitalize text-xs">
                                {product.condition}
                              </Badge>
                            </div>

                            <div className="text-right">
                              <p className="text-lg font-semibold">
                                {formatCurrency(product.currentBid || product.startingPrice)}
                              </p>
                              {product.startingPrice < (product.currentBid || product.startingPrice) && (
                                <p className="text-sm text-muted-foreground line-through">
                                  {formatCurrency(product.startingPrice + 100)}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Select
                                value={item.quantity.toString()}
                                onValueChange={(value) => updateQuantity(product.id, Number.parseInt(value))}
                              >
                                <SelectTrigger className="w-20">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>
                                      {num}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>

                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeFromCart(product.id)}
                                className="text-destructive hover:text-destructive"
                              >
                                Remove
                              </Button>
                            </div>

                            <div className="text-sm text-muted-foreground">
                              Free shipping • Get it by{" "}
                              {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-background rounded-lg border border-border p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Summary</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-muted rounded-md flex-shrink-0 overflow-hidden relative">
                        <img
                          src={item.product.images[0] || "/placeholder.svg"}
                          alt={item.product.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                          {item.quantity}
                        </Badge>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm line-clamp-2">{item.product.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">Shipping: Free</p>
                      </div>
                      <p className="text-sm font-semibold">
                        {formatCurrency((item.product.currentBid || item.product.startingPrice) * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-1">
                      Quality Assurance Fee
                      <Shield className="h-3 w-3" />
                    </span>
                    <span className="font-medium">${qualityAssuranceFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated taxes</span>
                    <span className="font-medium">{estimatedTaxes}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>

                <Button className="w-full mb-4" size="lg">
                  Go to shipping
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By confirming this order you accept our{" "}
                  <Link href="#" className="underline">
                    Terms of Service Agreement
                  </Link>{" "}
                  and our{" "}
                  <Link href="#" className="underline">
                    Data Protection Policy
                  </Link>
                </p>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-2 flex-wrap text-xs text-muted-foreground">
                    <img src="/visa-application-process.png" alt="Visa" className="h-5" />
                    <img src="/mastercard-logo-abstract.png" alt="Mastercard" className="h-5" />
                    <img src="/discovery-path.png" alt="Discover" className="h-5" />
                    <img src="/abstract-credit-card-design.png" alt="Amex" className="h-5" />
                    <img src="/paypal-digital-payment.png" alt="PayPal" className="h-5" />
                    <img src="/apple-pay.jpg" alt="Apple Pay" className="h-5" />
                    <img src="/gpay.jpg" alt="Google Pay" className="h-5" />
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
                    <Shield className="h-3 w-3" />
                    Secure payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
