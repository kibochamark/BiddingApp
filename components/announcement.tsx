import Link from 'next/link'
import React from 'react'


import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from '@radix-ui/themes/dist/cjs/index.js';

const Announcement = () => {
    return (
        <div>
            <div className="bg-maroon px-4 py-2 text-white">
                 <p className="text-center hidden md:block text-sm font-normal space-x-4">
                    <RegisterLink className="underline"> Signup now</RegisterLink> and get your order now.
                </p>
                <p className="text-center md:hidden text-sm  space-x-4">
                    <RegisterLink className="underline">Signup now!</RegisterLink> and get 20% off to your first order now.
                </p>
            </div>
        </div>
    )
}

export default Announcement
