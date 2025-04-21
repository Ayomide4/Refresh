"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo1.png";
import { Menu } from "lucide-react"
import { scrollToSection } from "../utils/helper";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; }
  }, [isOpen]);

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    scrollToSection(target);
  };

  return (
    <nav className="absolute z-30 top-0 left-0 right-0 flex items-center justify-between px-6 py-4 md:px-14">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} width={120} height={60} alt="MyRefresh Logo" className="h-auto w-[120px]" />
      </Link>

      {/* Desktop menu */}
      <div className="hidden lg:flex space-x-6 text-white">
        <Link href="/" className="group relative">
          <span className="font-medium text-xl">Home</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </Link>
        <Link href="/#about" className="group relative">
          <span className="font-medium text-xl">About</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </Link>
        <Link href="/#events" className="group relative">
          <span className="font-medium text-xl">Events</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </Link>
        <Link href="/gallery" className="group relative">
          <span className="font-medium text-xl">Gallery</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </Link>
        <Link href="/#donation" onClick={() => handleNavClick("donation")} className="group relative">
          <span className="font-medium text-xl">Donate</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white"
        aria-label="Toggle menu"
      >
        <Menu width={32} height={32} />
      </button>

      {/* Mobile overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-4xl text-black z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-5xl"
            aria-label="Close menu"
          >
            &times;
          </button>

          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>


          <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>

          <Link href="/#events" onClick={() => setIsOpen(false)}>Events</Link>

          <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>

          <Link href="/#donation" onClick={() => setIsOpen(false)}>Donation</Link>
        </div>
      )}
    </nav>
  );
}
