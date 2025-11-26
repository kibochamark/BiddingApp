"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import { ShoppingBag, User, HelpCircle, ShoppingCart } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { SearchBar } from "@/components/search-bar"

export function Navigation() {
  const { user, logout } = useAuth()
  const { totalItems } = useCart()
  const pathname = usePathname()
  const router = useRouter()

  if (!user) return null

  const getDashboardLink = () => {
    switch (user.role) {
      case "seller":
        return "/seller"
      case "admin":
        return "/admin"
      default:
        return "/"
    }
  }

  const categories = [
    { label: "Smartphones", href: "/category/smartphones" },
    { label: "Laptops", href: "/category/laptops" },
    { label: "Tablets", href: "/category/tablets" },
    { label: "Audio", href: "/category/audio" },
    { label: "Wearables", href: "/category/wearables" },
    { label: "Gaming", href: "/category/gaming" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href={getDashboardLink()} className="flex items-center gap-2 shrink-0">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">BidMarket</span>
          </Link>

          <div className="hidden md:flex flex-1">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2">
            {user.role === "buyer" && (
              <>
                <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 bg-transparent">
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden lg:inline">Need help?</span>
                </Button>

                <Button variant="ghost" size="sm" className="relative" asChild>
                  <Link href="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                      <Badge
                        variant="destructive"
                        className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                      >
                        {totalItems}
                      </Badge>
                    )}
                  </Link>
                </Button>
              </>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                  <Badge variant="outline" className="w-fit text-xs capitalize mt-1">
                    {user.role}
                  </Badge>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                {user.role === "buyer" && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/my-bids">My Bids</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/orders">Orders</Link>
                    </DropdownMenuItem>
                  </>
                )}
                {user.role === "seller" && (
                  <DropdownMenuItem asChild>
                    <Link href="/seller">Seller Dashboard</Link>
                  </DropdownMenuItem>
                )}
                {user.role === "admin" && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin">Admin Portal</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-destructive">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {user.role === "buyer" && (
        <div className="bg-background">
          <nav className="container mx-auto px-4 overflow-x-auto">
            <div className="flex items-center gap-6 py-3 min-w-max">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors whitespace-nowrap"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
