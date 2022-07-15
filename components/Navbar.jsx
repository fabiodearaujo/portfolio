import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center h-full w-full px-10 2x1:px-16">
                <Image className="hover:animate-spin ease-in-out" src="/assets/bar_logo.png" alt="/" width={64} height={64} />
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;