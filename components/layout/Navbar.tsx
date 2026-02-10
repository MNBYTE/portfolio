"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            mt-4 h-16 flex items-center justify-between
            rounded-2xl
            backdrop-blur-xl
            bg-white/10 dark:bg-white/5
            border border-white/20
            shadow-lg shadow-black/5
          "
        >
          {/* Logo with Icon */}
          <Link
            href="/"
            className="
              px-4 sm:px-6 flex items-center gap-3
              text-white/90
              hover:text-white
              transition group
            "
            onClick={closeMenu}
          >
            {/* Icon */}
            <div className="relative">
              <div
                className="
                  w-10 h-10 rounded-xl
                  bg-gradient-to-br from-black to-white
                  flex items-center justify-center
                  group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-300
                  shadow-lg shadow-purple-500/50
                "
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              {/* Glow effect */}
              <div
                className="
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br from-black to-white
                  blur-md opacity-50 group-hover:opacity-75
                  transition-opacity duration-300
                  -z-10
                "
              ></div>
            </div>

            {/* Text (hidden on very small screens) */}
            {/* <span className="hidden sm:block text-xl sm:text-2xl font-display font-bold italic">
              MNBYTE
            </span> */}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 text-white/80 text-sm lg:text-base">
            <Link
              href="/about"
              className="hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-white transition-colors duration-200 font-medium"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 px-4 lg:px-6">
            <Link
              href="/contact"
              className="
                px-4 lg:px-5 py-2 rounded-xl
                backdrop-blur-md
                bg-gradient-to-br from-black to-white
                border border-white/30
                text-white font-semibold text-sm lg:text-base
                hover:from-white-500 hover:via-black-500 hover:to-white-500
                hover:scale-105 hover:shadow-lg hover:shadow-white-500/50
                transition-all duration-300
              "
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="
              md:hidden px-4 sm:px-6
              text-white/90 hover:text-white
              transition-colors duration-200
              focus:outline-none
            "
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`
                  w-full h-0.5 bg-current rounded-full
                  transition-all duration-300 origin-left
                  ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}
                `}
              ></span>
              <span
                className={`
                  w-full h-0.5 bg-current rounded-full
                  transition-all duration-300
                  ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
                `}
              ></span>
              <span
                className={`
                  w-full h-0.5 bg-current rounded-full
                  transition-all duration-300 origin-left
                  ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}
                `}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden mt-2 rounded-2xl overflow-hidden
            backdrop-blur-xl
            bg-white/10 dark:bg-white/5
            border border-white/20
            shadow-lg shadow-black/5
            transition-all duration-300 ease-in-out
            ${isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 border-transparent'
            }
          `}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Links */}
            <Link
              href="/about"
              onClick={closeMenu}
              className="
                block px-4 py-3 rounded-xl
                text-white/80 hover:text-white
                hover:bg-white/10
                transition-all duration-200
                font-medium
              "
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={closeMenu}
              className="
                block px-4 py-3 rounded-xl
                text-white/80 hover:text-white
                hover:bg-white/10
                transition-all duration-200
                font-medium
              "
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                block px-4 py-3 rounded-xl
                text-white/80 hover:text-white
                hover:bg-white/10
                transition-all duration-200
                font-medium
              "
            >
              Contact
            </Link>

            {/* Mobile Hire Me Button */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                block px-5 py-3 rounded-xl text-center
                backdrop-blur-md
                bg-gradient-to-br from-black to-white
                border border-white/30
                text-white font-semibold
                hover:from-white-500 hover:via-black-500 hover:to-white-500
                hover:shadow-lg hover:shadow-white-500/50
                transition-all duration-300
              "
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}