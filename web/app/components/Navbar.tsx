"use client";
import { useState } from "react";
import logo from "@/public/logo1.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="absolute z-10 top-0 left-8 right-8 py-4 flex justify-between items-center md:mt-5">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center">
          <Image src={logo} width={120} height={60} alt="MyRefresh Logo" />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="relative group">
          <span className="font-medium text-xl text-white">Home</span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/#about"
          className="relative group focus:outline-none"
        >
          <span className="font-medium text-xl text-white">About</span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link href="/#events"

          className="relative group focus:outline-none"
        >
          <span className="font-medium text-xl text-white">Events</span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/gallery" className="relative group">
          <span className="font-medium text-xl text-white">Gallery</span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/#donation"
          className="relative group focus:outline-none"
        >
          <span className="font-medium text-xl text-white">Donate</span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
        Menu
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background shadow-md p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-medium text-xl text-white">Home</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="relative group focus:outline-none"
            >
              <span className="font-medium text-xl text-white">About</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="relative group focus:outline-none"
            >
              <span className="font-medium text-xl text-white">Events</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link
              href="/gallery"
              className="relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-medium text-xl text-white">Gallery</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/donate"
              className="relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-medium text-xl text-white">Donate</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
