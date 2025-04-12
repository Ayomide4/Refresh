"use client"
import { ArrowUpRight } from "lucide-react";
import logo from "@/public/logo1.png";
import { scrollToSection } from "../utils/helper"
import Image from "next/image"
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#222222] max-w-full m-4 text-background rounded-3xl p-4 md:p-10 mt-10"
      id="footer"
    >
      <h1 className="my-8 text-5xl">Contact Us</h1>

      <div className="flex flex-col md:flex-row w-full md:space-x-96 text-background">
        <div className="flex flex-col space-y-4 mb-12">
          <p className="text-xl text-[#787878]">Contact us</p>
          <a className="text-2xl underline" href="mailto:">
            info.therefresh@gmail.com
          </a>
          <a className="text-2xl underline" href="tel:">
            999-999-9999
          </a>
        </div>

        <div className="flex flex-col space-y-4 mb-8">
          <p className="text-xl text-[#787878]">Follow us</p>
          <Link className="flex items-center space-x-2 text-background" href="/">
            <p className="text-2xl">instagram</p>
            <ArrowUpRight size={24} />
          </Link>
          <Link className="flex items-center space-x-2 text-background" href="/">
            <p className="text-2xl">facebook</p>
            <ArrowUpRight size={24} />
          </Link>
          <Link className="flex items-center space-x-2 text-background" href="/">
            <p className="text-2xl">youtube</p>
            <ArrowUpRight size={24} />
          </Link>
        </div>
      </div>
      <div className="border-b-2 border-background my-10"></div>

      <div className="flex flex-col space-y-4 mb-4 md:flex-row justify-between items-center md:mb-0 md:space-y-0">
        <Image
          src={logo}
          width={120}
          height={80}
          onClick={() => scrollToSection("app")}
          className="object-cover cursor-pointer"
          alt="Refresh Logo"
        />

        <p className="text-lg">
          Designed by <a className="underline">Lone Star Web Studio</a>
        </p>

        <p className=" text-lg">
          © {currentYear} Refresh. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
