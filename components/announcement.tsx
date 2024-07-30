import Link from 'next/link'
import React from 'react'

const Announcement = () => {
    return (
        <div>
            <div className="bg-maroon px-4 py-2 text-white">
                <p className="text-center hidden md:block text-sm font-normal space-x-4">
                    Sign up and get your order now.
                    <Link href="#" className="underline"> Signup now!</Link>
                </p>
                <p className="text-center md:hidden text-sm  space-x-4">
                    Sign up and get 20% off to your first order now.
                    <Link href="#" className="underline">Signup now!</Link>
                </p>
            </div>
        </div>
    )
}

export default Announcement
