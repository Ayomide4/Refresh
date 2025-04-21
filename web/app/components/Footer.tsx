"use client"
import { ArrowUpRight, SquareArrowUp } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
}

const Footer = ({ backgroundColor, textColor }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${backgroundColor ? backgroundColor : "bg-[#222222]"} ${textColor ? textColor : ""} max-w-full m-4 rounded-3xl p-4 md:p-10 mt-10`}
      id="footer"
    >
      <h1 className={`my-8 text-5xl ${textColor ?? "text-background"}`}>Contact Us</h1>

      <div className={`flex flex-col md:flex-row w-full md:space-x-96 ${textColor ?? "text-background"}`}>
        <div className="flex flex-col space-y-4 mb-12">
          <p className="text-xl text-[#787878]">Contact us</p>
          <a className={`text-2xl underline ${textColor ?? "text-background"}`} href="mailto:">
            info.therefresh@gmail.com
          </a>
          <a className={`text-2xl underline ${textColor ?? "text-background"}`} href="tel:">
            682-583-1240
          </a>
        </div>

        <div className="flex flex-col space-y-4 mb-8">
          <p className="text-xl text-[#787878]">Follow us</p>
          <Link className={`flex items-center space-x-2 ${textColor ?? "text-background"}`} href="https://www.instagram.com/therefreshgathering?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <p className="text-2xl">instagram</p>
            <ArrowUpRight size={24} />
          </Link>
          <Link className={`flex items-center space-x-2 ${textColor ?? "text-background"}`} href="https://www.facebook.com/people/The-Refresh-Gathering/100091409076993/" target="_blank" rel="noopener noreferrer">
            <p className="text-2xl">facebook</p>
            <ArrowUpRight size={24} />
          </Link>
          <Link className={`flex items-center space-x-2 ${textColor ?? "text-background"}`} href="https://www.youtube.com/@therefreshgathering/videos" target="_blank" rel="noopener noreferrer">
            <p className="text-2xl">youtube</p>
            <ArrowUpRight size={24} />
          </Link>
        </div>
      </div>

      <p className={`md:hidden text-lg ${textColor ?? "text-background"}`}>
        Designed by{" "}
        <a href="mailto:info@lonestarwebstudio.com" className="cursor-pointer underline">Lone Star Web Studio</a>
      </p>

      <div className={`border-b-2 ${textColor ? "border-black" : "border-background"} my-10`}></div>

      <div className="flex flex-col space-y-4 mb-4 md:flex-row justify-between items-center md:mb-0 md:space-y-0">
        <p className={`text-lg ${textColor ?? "text-background"}`}>
          © {currentYear} Refresh. All Rights Reserved
        </p>

        <p className={`hidden md:block text-lg ${textColor ?? "text-background"}`}>
          Designed by <a className="underline cursor-pointer">Lone Star Web Studio</a>        </p>

        <button className={`flex items-center md:text-lg space-x-2 cursor-pointer ${textColor ?? "text-background"}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <p>Back to top</p>
          <SquareArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
