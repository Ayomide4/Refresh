"use client"
import { useState } from "react";
import logo from "@/public/logo1.png"
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
      <Link className="flex items-center md:hidden cursor-pointer" href="/">
        <Image src={logo} width={100} height={67} alt="MyRefresh Logo" />
      </Link>

      <Link className="hidden md:flex items-center cursor-pointer" href="/">
        <Image src={logo} width={120} height={60} alt="MyRefresh Logo" />
      </Link>

      <button
        onClick={() => scrollToSection("footer")}
        className="font-medium text-xl underline underline-offset-8 hidden md:block cursor-pointer text-white"
      >
        Contact Us
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background shadow-md p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="font-medium hover:text-primary transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("donation")}
              className="font-medium hover:text-primary transition-colors"
            >
              Donation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
