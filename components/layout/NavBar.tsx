"use client"
import { ChevronDownIcon, CircleUserRound, Heart, MenuIcon, MountainIcon, Search } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import DropdownProfile from '@/components/profile'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // Close dropdown if clicked outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <header className="bg-white h-16 py-3 z-10 px-2 max-w-full">
      <div className='flex justify-between items-center w-full h-full px-4'>
              
              <div className='flex flex-row items-center'>
                <MenuIcon className='w-8 h-8 md:hidden text-black hover:cursor-pointer' />
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                  <MountainIcon className="h-6 w-6 text-[#800020]" />
                  <span className=" text-md md:text-lg md:font-bold">Electronic Inc</span>
                </Link>
              </div>
      
              <div className="hidden md:flex">
                <ol className="flex flex-row items-center gap-8">
                  <li className="bg-maroon py-2 px-4 text-white rounded-md text-sm">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="relative py-2 text-sm tracking-tight group cursor-pointer">
                    <Link href="/">Sell</Link>
                    <div className="absolute inset-x-0 top-8 h-1 group-hover:bg-maroon transition-all duration-300"></div>
                  </li>
                  <li className="relative py-2 text-sm tracking-tight group cursor-pointer">
                    <Link href="/">About us</Link>
                    <div className="absolute inset-x-0 top-8 h-1 group-hover:bg-maroon transition-all duration-300"></div>
                  </li>
                </ol>
              </div>
      
              <div className='flex items-center flex-row justify-end gap-2'>
                <Search className='w-6 h-6 text-black hover:cursor-pointer' />
                <Heart className='w-6 h-6 text-black hover:cursor-pointer' />
      
                {/* Profile Dropdown */}
                <div ref={dropdownRef} className="relative">
                  <CircleUserRound
                    className='w-6 h-6 text-black hover:cursor-pointer'
                    onClick={() => setOpen((prev) => !prev)}
                  />
                  {open && <DropdownProfile />}
                </div>
              </div>
      
            </div>
    </header>
  )
}

export default NavBar
