import type { Product } from "./types"

export function binarySearchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) return products

  const searchTerms = query.toLowerCase().split(" ")

  // Score each product based on search relevance
  const scoredProducts = products.map((product) => {
    let score = 0
    const searchableText = `${product.title} ${product.description} ${product.category} ${product.brand}`.toLowerCase()

    // Binary search approach: check if terms exist
    for (const term of searchTerms) {
      if (searchableText.includes(term)) {
        // Higher score for title matches
        if (product.title.toLowerCase().includes(term)) {
          score += 10
        }
        // Medium score for brand matches
        if (product.brand.toLowerCase().includes(term)) {
          score += 5
        }
        // Lower score for description/category matches
        if (product.description.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)) {
          score += 2
        }
      }
    }

    return { product, score }
  })

  // Filter products with score > 0 and sort by score descending
  return scoredProducts
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.product)
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
