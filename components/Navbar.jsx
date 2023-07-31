"use client";
import React, { useState } from "react";
import { BsCode, BsCodeSquare } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className='text-gray-700 border-b border-gray-200'>
            <nav className='container mx-auto flex p-5 flex-row justify-between'>
                <Link
                    href='/'
                    className='flex font-medium items-center text-gray-900 mb-2 md:mb-0'
                >
                    <img
                        src='/logo2.png'
                        alt='logo2'
                        className='w-14 h-14 p-2 bg-white rounded-full'
                    />
                    <span className='ml-3 text-xl'>Desatando Nudos</span>
                </Link>

                <ul className='hidden md:flex gap-6 items-center text-base justify-center'>
                    <li>
                        <Link
                            href={"#home"}
                            className='hover:text-blue-600 hover:text-cemibold'
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"#about"}
                            className='hover:text-blue-600 hover:text-cemibold'
                        >
                            Sobre Mi
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"#services"}
                            className='hover:text-blue-600 hover:text-cemibold'
                        >
                            Servicios
                        </Link>
                    </li>

                    <li>

                    </li>
                    <li>
                        <Link
                            href={"#contact"}
                            className='hover:text-blue-600 hover:text-cemibold'
                        >
                            Contactame
                        </Link>
                    </li>
                </ul>

                <button
                    className='block md:hidden text-slate-900'
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <div
                className={`${isOpen ? "flex" : "hidden"
                    } container mx-auto md:hidden flex-col pl-8 gap-3 pb-5`}
            >
                <Link href='#home' onClick={handleCloseNavbar}>
                    Inicio
                </Link>
                <Link href='#about' onClick={handleCloseNavbar}>
                    Sobre Mi
                </Link>
                <Link href='#services' onClick={handleCloseNavbar}>
                    Servicios
                </Link>
                <Link href='#contact' onClick={handleCloseNavbar}>
                    Contactame
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
