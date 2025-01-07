"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navlinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Discover", path: "/discover" },
    { id: 4, title: "Contact", path: "/contact" }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className='relative flex flex-row justify-between items-center mx-20 pt-10  ' >
            {/* LOGO SECTION */}
            <div className='' >
                <Link href="/" >
                    <FontAwesomeIcon icon={faMugHot} className='h-[60px] opacity-70 text-green hover:text-green-500 cursor-pointer' />
                </Link>
            </div>
            {/* RESPOSIVE MENU */}
            <div className='text-red-300 cursor-pointer sm:hidden ' >
                {/* MENU BUTTON */}
                <button
                    className="fixed transition-all duration-300 top-16 right-8 flex flex-col justify-between w-10 h-8 z-50 items-center"
                    onClick={() => setIsOpen((prev) => !prev)}>
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`h-1 w-10 bg-green text-black rounded origin-left ${isOpen ? "bg-softPink" : "bg-green"}`}
                    />
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className='h-1 w-10 bg-green text-black rounded '
                    />
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isOpen ? -45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`h-1 w-10 bg-green text-black rounded origin-left ${isOpen ? "bg-softPink" : "bg-green"}`}
                    />
                </button>
                {/* MENU LIST */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='flex flex-col gap-4 justify-center items-center text-5xl fixed top-0 left-0 w-full h-full bg-black z-40 ' >
                        {navlinks.map((link) => (
                            <li
                                key={link.id}
                                className='list-none hover:text-green'
                            >
                                <Link href={link.path} >{link.title}</Link>
                            </li>
                        ))}
                    </motion.div>
                )}
            </div>
            {/* NAVIGATION SECTION */}
            <div className='hidden sm:flex' >
                <ul className='flex flex-row items-center justify-center gap-5 ' >
                    {navlinks.map((link) => (
                        <Link
                            className='text-green hover:text-green-500 font-bold text-lg '
                            href={link.path}
                            key={link.id}
                        >
                            {link.title}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar