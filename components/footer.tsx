import Link from "next/link"
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-light border-t border-border mt-20">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Stay in the loop with hot drops</h3>
            <p className="text-muted-foreground mb-6">
              Be the first to know about new arrivals, exclusive deals, and tech news that matters.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email" className="flex-1 bg-white" />
              <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-muted-foreground hover:text-foreground">
                  Our impact
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-muted-foreground hover:text-foreground">
                  Our NYC store
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-muted-foreground hover:text-foreground">
                  Accessibility statement
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  We're hiring!
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                  Returns and refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/warranty" className="text-muted-foreground hover:text-foreground">
                  1-year warranty
                </Link>
              </li>
              <li>
                <Link href="/protection" className="text-muted-foreground hover:text-foreground">
                  Protection plan
                </Link>
              </li>
              <li>
                <Link href="/trade-in" className="text-muted-foreground hover:text-foreground">
                  Trade-in
                </Link>
              </li>
              <li>
                <Link href="/students" className="text-muted-foreground hover:text-foreground">
                  Student and educator program
                </Link>
              </li>
              <li>
                <Link href="/military" className="text-muted-foreground hover:text-foreground">
                  Military program
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-muted-foreground hover:text-foreground">
                  Sellers: Register to sell
                </Link>
              </li>
              <li>
                <Link href="/seller" className="text-muted-foreground hover:text-foreground">
                  Seller portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/journal" className="text-muted-foreground hover:text-foreground">
                  Tech Journal
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-muted-foreground hover:text-foreground">
                  Compare devices
                </Link>
              </li>
              <li>
                <Link href="/gifts" className="text-muted-foreground hover:text-foreground">
                  Gift ideas
                </Link>
              </li>
              <li>
                <Link href="/black-friday" className="text-muted-foreground hover:text-foreground">
                  Black Friday
                </Link>
              </li>
            </ul>
          </div>

          {/* Law and order */}
          <div>
            <h4 className="font-bold mb-4">Law and order</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/trade-terms" className="text-muted-foreground hover:text-foreground">
                  Trade-in Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-muted-foreground hover:text-foreground">
                  Report illicit content
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Certifications */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border">
          <div className="flex items-center gap-3">
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-8 w-8 rounded-full border-2 border-foreground flex items-center justify-center font-bold">
                B
              </div>
              <span>Certified Corporation</span>
            </div>
            <div className="text-xs text-muted-foreground">BBB Accredited</div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mt-6">© 2025 BidMarket</div>
      </div>
    </footer>
  )
}
