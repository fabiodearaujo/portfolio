import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shadow, setShadow] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 40) {
            setShadow(true);
        } else {
            setShadow(false);
        }  
    };
    window.addEventListener("scroll", handleShadow);
}, []);

    return (
        <div className={shadow ? 'fixed bg-[#46494e] w-full h-20 shadow-xl shadow-gray-800 z-[100]' : 'fixed bg-[#46494e] w-full h-20 z-[100] easy-in-out'}>
            <div className="container  mx-auto px-10 sm:px-24 lg:px-32 xl:px-44 2xl:pl-52 flex h-full justify-between overflow-hidden items-center">
                <Image className="hover:animate-spin ease-in-out" src="/assets/bar_logo.png" alt="/" width={64} height={64} />
                <div>
                    <ul className="hidden md:flex font-extrabold">
                        <Link href="/#home">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                        <Link href="/">
                            <li className="hidden ml-10 text-sm uppercase hover:border-b">Posts</li>
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
                            <ul className="uppercase font-extrabold">
                                <Link href="/#home">
                                    <li className="py-4 text-sm hover:scale-105 ease-in duration-200">Home</li>
                                </Link>
                                <Link href="/#skills">
                                    <li onClick={() => setIsOpen(false)} className="py-4 text-sm hover:scale-105 ease-in duration-200">Skills</li>
                                </Link>
                                <Link href="/#projects">
                                    <li onClick={() => setIsOpen(false)} className="py-4 text-sm hover:scale-105 ease-in duration-200">Projects</li>
                                </Link>
                                <Link href="/#contact">
                                    <li onClick={() => setIsOpen(false)} className="py-4 text-sm hover:scale-105 ease-in duration-200">Contact</li>
                                </Link>
                                <Link href="/">
                                    <li onClick={() => setIsOpen(false)} className="hidden py-4 text-sm hover:scale-105 ease-in duration-200">Posts</li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="tracking-widest">Let&#39;s connect</p>
                                <div className="py-10 flex items-center justify-evenly">
                                <FaLinkedin size={25} className="mr-5 hover:scale-110 ease-in duration-300 hover:cursor-pointer" onClick={
                                () => {
                                    window.open('https://www.linkedin.com/in/fabioaraujo76', '_blank')
                                }
                                } />
                                <FaGithub size={25} className="mr-5 hover:scale-110 ease-in duration-300 hover:cursor-pointer" onClick={
                                    () => {
                                        window.open('https://github.com/fabiodearaujo', '_blank')
                                    }
                                } />
                                <FaTelegram size={25} className="mr-5 hover:scale-110 ease-in duration-300 hover:cursor-pointer" onClick={
                                    () => {
                                        window.open('https://t.me/fabioaraujo76', '_blank')
                                    }
                                } />
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