import { ChevronDownIcon, CircleUserRound, Heart, MenuIcon, MountainIcon, Search, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const NavBar = () => {
    return (
        <header className="bg-white h-16 py-3 z-10 px-2 max-w-full">
            <div className='flex justify-between p-1 flex-row w-full items-center'>
                <div className='flex items-start flex-row justify-start'>
                    <div className='flex flex-row'>
                        <MenuIcon className='w-8 h-8 md:hidden text-black hover:cursor-pointer' />
                        <Link href="/" className="flex items-center gap-2" prefetch={false}>
                            <MountainIcon className="h-6 w-6 text-[#800020]" />
                            <span className=" text-md md:text-lg md:font-bold">Electronic Inc</span>
                        </Link>
                    </div>
                    <div className='hidden md:flex'>
                        <ol className='list-none m-0 p-0 flex flex-row justify-center items-start gap-2'>
                            <li className='bg-maroon py-2 text-white text-balance text-nowrap text-center rounded-md text-sm tracking-tight leading-tight'>
                                <Link href="/">Home</Link>
                            </li>
                            <li className='hover:cursor-pointer group relative text-balance py-2 text-center transition-all duration-300 text-sm tracking-tight leading-tight'>
                                <Link href="/">Sell</Link>
                                <div className='absolute inset-0 h-1 top-8 group-hover:bg-maroon transition-all duration-300'></div>

                            </li>
                            <li className='relative  py-2 text-balance tex-sm text-nowrap group hover:cursor-pointer  text-center
                             transition-all duration-300  text-sm tracking-tight leading-tight'>
                                <Link href="/">About us</Link>
                                <div className='absolute inset-0 h-1 top-8 group-hover:bg-maroon transition-all duration-300'></div>
                            </li>
                        </ol>
                    </div>


                </div>

                <div className='flex items-center flex-row justify-end gap-2'>
                    <Search className='w-6 h-6 text-black hover:cursor-pointer' />
                    <Heart className='w-6 h-6 text-black hover:cursor-pointer' />
                    <CircleUserRound className='w-6 h-6 text-black hover:cursor-pointer' />
                </div>
            </div>
        </header>
    )
}

export default NavBar
