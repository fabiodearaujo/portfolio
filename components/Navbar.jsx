import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaAddressCard, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Container } from "postcss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="container flex justify-between items-center h-full px-10 2xl:mx-20">
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
                    <div onClick={toggleMenu} className="md:hidden rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={isOpen ? "md:hidden fixed left-0 top-0 w-full h-scren" : ""}>
                <div className={isOpen ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#5c5e62] p10 easy-in-out duration-500": "fixed left-[-100%] top-0 h-screen bg-[#5c5e62] p10 easy-in-out duration-500"}>
                    <div>
                        <div className="px-10 2xl:px-20 py-2 flex w-full items-center justify-between border-b border-gray-500 shadow-xl h-20">
                            <Image className="hover:animate-spin ease-in-out" src="/assets/bar_logo.png" alt="/" width={64} height={64} />
                            <div onClick={toggleMenu} className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer">
                                <AiOutlineClose size={20} />
                            </div>
                        </div>
                        <div className="py-10 px-10 flex flex-col">
                            <ul className="uppercase">
                                <Link href="/">
                                    <li className="py-4 text-sm hover:scale-105 ease-in duration-200">Home</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm hover:scale-105 ease-in duration-200">About</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm hover:scale-105 ease-in duration-200">Skills</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm hover:scale-105 ease-in duration-200">Projects</li>
                                </Link>
                                <Link href="/">
                                    <li className="py-4 text-sm hover:scale-105 ease-in duration-200">Contact</li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="tracking-widest">Let&#39;s connect</p>
                                <div className="py-10 flex items-center justify-between">
                                    <FaLinkedin size={25} className="mr-5 hover:scale-110 ease-in duration-200" />
                                    <FaGithub size={25} className="mr-5 hover:scale-110 ease-in duration-200" />
                                    <FaEnvelope size={25} className="mr-5 hover:scale-110 ease-in duration-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;