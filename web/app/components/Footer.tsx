"use client"
import { ArrowUpRight, Instagram, FacebookIcon, SquareArrowUp, Youtube } from "lucide-react";
import Link from "next/link";
import { SiteSettings } from "../page";
import Image from "next/image"
import kingdomLife from "@/public/kingdom.png"
import logoBlack from "@/public/logoBlack.png"

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
  siteSettings: SiteSettings;
}

const Footer = ({ backgroundColor, textColor, siteSettings }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${backgroundColor ? backgroundColor : "bg-[#222222]"} ${textColor ? textColor : ""} max-w-full m-4 rounded-3xl p-4 md:p-10 mt-10 relative`}
      id="footer"
    >
      <h1 className={`my-8 text-5xl ${textColor ?? "text-background"}`}>Contact Us</h1>

      <div className={`flex flex-col md:flex-row w-full md:space-x-40 justify-between  ${textColor ?? "text-background"} 2xl:space-x-[500px]`}>
        <div className="flex flex-col space-y-4 mb-12">
          <p className="text-xl text-[#787878]">Get in touch</p>
          <a
            className={`text-xl md:text-2xl underline ${textColor ?? "text-background"} w-fit`}
            href={`mailto:${siteSettings.contactEmail || "info.therefresh@gmail.com"}`}
          >
            {siteSettings.contactEmail || "info.therefresh@gmail.com"}
          </a>

          <a
            className={`text-xl md:text-2xl underline ${textColor ?? "text-background"} w-fit`}
            href={`tel:${siteSettings.phoneNumber || "682-583-1240"}`}
          >
            {siteSettings.phoneNumber || "682-583-1240"}
          </a>
        </div>

        <div className="flex flex-col space-y-4 mb-8">
          <p className="text-xl text-[#787878]">Follow us</p>
          <Link
            className={`flex  items-center space-x-2 ${textColor ?? "text-background"}  w-fit`}
            href={siteSettings.instagramUrl || "https://www.instagram.com/therefreshgathering"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} color="#E1306C" />
            <p className="text-2xl">instagram</p>
            <ArrowUpRight size={24} />
          </Link>

          <Link
            className={`flex items-center space-x-2 ${textColor ?? "text-background"}  w-fit`}
            href={siteSettings.facebookUrl || "https://www.facebook.com/people/The-Refresh-Gathering"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon size={24} color="blue" />
            <p className="text-2xl">facebook</p>
            <ArrowUpRight size={24} />
          </Link>

          <Link
            className={`flex items-center space-x-2 ${textColor ?? "text-background"}  w-fit`}
            href={siteSettings.youtubeUrl || "https://www.youtube.com/@therefreshgathering/videos"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={24} color="red" />
            <p className="text-2xl">youtube</p>
            <ArrowUpRight size={24} />
          </Link>
        </div>

        <Image
          src={logoBlack}
          alt="Refresh Logo"
          width={240}
          height={120}
          className="object-contain relative top-0 right-20 hidden lg:block"
        />


      </div>


      <div className="lg:hidden my-5">
        <Link href="/">
          <Image
            src={logoBlack}
            alt="Refresh Logo"
            width={150}
            height={90}
            className="object-contain "
          />
        </Link>
      </div>




      <p className={`md:hidden text-lg ${textColor ?? "text-background"}`}>
        Designed by{" "}
        <a href="mailto:info@lonestarwebstudio.com" className="cursor-pointer underline">Lone Star Web Studio</a>
      </p>

      <div className={`border-b-2 ${textColor ? "border-black" : "border-background"} my-10`}></div>

      <div className="flex flex-col space-y-4 mb-4 md:flex-row justify-between  items-start lg:items-center md:mb-0 md:space-y-0">
        <p className={`text-lg ${textColor ?? "text-background"}`}>
          © {currentYear} Refresh. All Rights Reserved
        </p>


        <div className="flex items-center space-x-4 w-full lg:w-fit">
          <p className={`text-lg ${textColor ?? "text-background"}`}>Powered by</p>
          <Image src={kingdomLife} width="200" height="100" alt="image for Kingdom Life Network" sizes="(max-width: 640px) 100px, (max-width: 768px) 200px, 320px" className="h-auto w-[120px]" />
        </div>

        <p className={`hidden lg:block text-lg ${textColor ?? "text-background"} text-nowrap`}>
          Designed by <a className="underline cursor-pointer">Lone Star Web Studio</a>
        </p>

      </div>

      <button className={`hidden absolute top-18 right-10 lg:flex items-center md:text-xl space-x-2 cursor-pointer ${textColor ?? "text-background"}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <p>Back to top</p>
        <SquareArrowUp />
      </button>


    </footer>
  );
};

export default Footer;
