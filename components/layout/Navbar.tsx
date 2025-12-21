"use client";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-dark/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-bold">
          Husl
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-primary transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="px-5 py-2 rounded-xl bg-primary text-dark font-semibold hover:scale-105 transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
