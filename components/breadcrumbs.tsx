"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <Link href={item.href} className="text-foreground hover:text-foreground/80 transition-colors">
            {item.label}
          </Link>
          {index < items.length - 1 && <ChevronRight className="h-4 w-4 text-foreground/60" />}
        </div>
      ))}
    </nav>
  )
}
