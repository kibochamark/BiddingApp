"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth-context"
import type { UserRole } from "@/lib/types"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

export function LoginPage() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<UserRole>("buyer")

  const handleLogin = (e: React.FormEvent, selectedRole: UserRole) => {
    e.preventDefault()
    if (email) {
      login(email, selectedRole)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">BidMarket</span>
          </div>

          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground mb-8">Sign in to continue to your marketplace</p>

          <Tabs defaultValue="buyer" className="space-y-6" onValueChange={(v) => setRole(v as UserRole)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="buyer">Buyer</TabsTrigger>
              <TabsTrigger value="seller">Seller</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>

            <TabsContent value="buyer">
              <Card>
                <CardHeader>
                  <CardTitle>Buyer Login</CardTitle>
                  <CardDescription>Browse and bid on premium refurbished electronics</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleLogin(e, "buyer")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="buyer-email">Email</Label>
                      <Input
                        id="buyer-email"
                        type="email"
                        placeholder="buyer@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Continue as Buyer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seller">
              <Card>
                <CardHeader>
                  <CardTitle>Seller Login</CardTitle>
                  <CardDescription>Manage your listings and track sales</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleLogin(e, "seller")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="seller-email">Email</Label>
                      <Input
                        id="seller-email"
                        type="email"
                        placeholder="seller@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Continue as Seller
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Login</CardTitle>
                  <CardDescription>Access admin dashboard and moderation tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleLogin(e, "admin")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Continue as Admin
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-xs text-muted-foreground text-center mt-6">
            This is a prototype. Enter any email to continue.
          </p>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-balance">The Smart Way to Buy Refurbished Tech</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-lg mx-auto">
              Join thousands of satisfied customers saving up to 70% on premium electronics through our auction platform
            </p>
            <div className="relative w-full max-w-md aspect-video mx-auto rounded-lg overflow-hidden shadow-2xl">
              <Image src="/diverse-group.png" alt="Happy customers" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
