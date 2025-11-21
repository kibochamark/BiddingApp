import React from "react";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

const DropdownProfile = () => {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
            <ul className="flex flex-col gap-2 p-2">
                <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                    <Link href="/profile">Profile</Link>
                </li>
                <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                    <LoginLink >Signin</LoginLink>
                </li>
                <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                    <LogoutLink >SignOut</LogoutLink>
                </li>
            </ul>
        </div>
    )
};
export default DropdownProfile;
