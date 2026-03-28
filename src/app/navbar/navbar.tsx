"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  const navLinkClass = (path: string) =>
    `cursor-pointer px-4 py-2 rounded ${
      pathname === path
        ? "text-blue-400 font-bold bg-gray-200/20"
        : "text-white hover:text-blue-400"
    }`;

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-black/40'>
      <div className='container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 '>

        {/* LOGO */}
        <Link href="/" className='flex items-center'>
          <img src="/logo_dark.png" alt="logo" className='w-40 sm:w-60' />
        </Link>

        {/* DESKTOP MENU */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-10 text-lg font-semibold'>
          <li>
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </li>

          <li>
            <Link href="/testing" className={navLinkClass("/testing")}>
              Testing
            </Link>
          </li>

          <li>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {showMobileMenu && (
        <div className='md:hidden bg-black text-white flex flex-col items-center gap-6 py-6'>
          <Link href="/" onClick={() => setShowMobileMenu(false)}>Home</Link>
          <Link href="/about" onClick={() => setShowMobileMenu(false)}>About</Link>
          <Link href="/testing" onClick={() => setShowMobileMenu(false)}>Testing</Link>
          <Link href="/contact" onClick={() => setShowMobileMenu(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};


export default Navbar;
