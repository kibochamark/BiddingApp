import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/lib/auth-context"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BidMarket - Buy & Sell Refurbished Electronics",
  description: "Premium marketplace for bidding on certified refurbished electronics from trusted sellers",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}> 
        <AuthProvider>
          <CartProvider>
            <Navigation/>
            {children}
             <Footer/>
            </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
