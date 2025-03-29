import { ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";
import scrollToSection from "../utils/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#222222] max-w-full m-4 text-background rounded-3xl p-4 mt-10"
      id="footer"
    >
      <h1 className="my-8 text-5xl">Get in touch</h1>

      <div className="flex flex-col space-y-4 mb-12">
        <p className="text-xl text-[#787878]">Contact us</p>
        <a className="text-2xl underline">info.therefresh@gmail.com</a>
        <a className="text-2xl underline">999-999-9999</a>
      </div>

      <div className="flex flex-col space-y-4 mb-8">
        <p className="text-xl text-[#787878]">Follow us</p>
        <div className="flex items-center space-x-2">
          <a className="text-2xl">instagram</a>
          <ArrowUpRight size={24} />
        </div>
        <div className="flex items-center space-x-2">
          <a className="text-2xl">facebook</a>
          <ArrowUpRight size={24} />
        </div>
        <div className="flex items-center space-x-2">
          <a className="text-2xl">youtube</a>
          <ArrowUpRight size={24} />
        </div>
      </div>

      <p className="text-lg">
        Designed by <a className="underline">Lone Star Web Studio</a>
      </p>

      <div className="border-b-2 border-background my-10"></div>

      <img
        src={logo}
        width={120}
        height={80}
        onClick={() => scrollToSection("app")}
        className="object-cover cursor-pointer"
      />

      <p className="mt-4 text-lg">
        © {currentYear} Refresh. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
