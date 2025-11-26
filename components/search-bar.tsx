"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { mockProducts } from "@/lib/mock-data"
import Link from "next/link"
import { useRouter } from "next/navigation"

const POPULAR_SEARCHES = ["iPhone", "iPad", "MacBook", "AirPods", "Samsung Galaxy", "PlayStation"]

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [suggestions, setSuggestions] = useState<typeof mockProducts>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (query.length > 1) {
      // Filter products that match the search query
      const filtered = mockProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()),
      )
      setSuggestions(filtered.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query.trim())}`)
      setIsFocused(false)
    }
  }

  const handleSuggestionClick = (productId: string) => {
    setIsFocused(false)
    setQuery("")
  }

  return (
    <div ref={searchRef} className="relative flex-1 max-w-2xl">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
        <Input
          placeholder="What are you looking for?"
          className="pl-10 bg-muted border-0 h-10 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
      </form>

      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 max-h-[500px] overflow-y-auto">
          {query.length <= 1 ? (
            <div className="p-4">
              <p className="text-sm font-medium mb-3">Popular searches</p>
              <div className="space-y-2">
                {POPULAR_SEARCHES.map((search) => (
                  <button
                    key={search}
                    onClick={() => {
                      setQuery(search)
                      router.push(`/?search=${encodeURIComponent(search)}`)
                      setIsFocused(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          ) : suggestions.length > 0 ? (
            <div className="p-2">
              {suggestions.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={() => handleSuggestionClick(product.id)}
                  className="flex items-center gap-3 p-3 hover:bg-muted rounded-md transition-colors"
                >
                  <div className="w-12 h-12 bg-muted rounded-md flex-shrink-0 overflow-hidden">
                    <img
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">{product.category}</p>
                  </div>
                  <p className="text-sm font-semibold">${product.currentBid || product.startingPrice}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">No results found for "{query}"</div>
          )}
        </div>
      )}
    </div>
  )
}
