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
        <Image src={logo} width={120} height={60} alt="MyRefresh Logo" />
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 text-white">
        <button onClick={() => handleNavClick("hero")} className="group relative">
          <span className="font-medium text-xl">Home</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </button>
        <button onClick={() => handleNavClick("about")} className="group relative">
          <span className="font-medium text-xl">About</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </button>
        <button onClick={() => handleNavClick("events")} className="group relative">
          <span className="font-medium text-xl">Events</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </button>
        <Link href="/gallery" className="group relative">
          <span className="font-medium text-xl">Gallery</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </Link>
        <button onClick={() => handleNavClick("donation")} className="group relative">
          <span className="font-medium text-xl">Donate</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
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

          <button onClick={() => handleNavClick("about")}>About</button>
          <button onClick={() => handleNavClick("events")}>Events</button>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <button onClick={() => handleNavClick("donation")}>Donate</button>
        </div>
      )}
    </nav>
  );
}
