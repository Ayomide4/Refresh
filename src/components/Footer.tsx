import { ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";
import { scrollToSection } from "../utils/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#222222] max-w-full m-4 text-background rounded-3xl p-4 md:p-10 xl:p-16 2xl:p-20 mt-10"
      id="footer"
    >
      <h1 className="my-8 text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">Get in touch</h1>

      <div className="flex flex-col md:flex-row w-full md:space-x-96 xl:space-x-[32rem] 2xl:space-x-[40rem]">
        <div className="flex flex-col space-y-4 mb-12">
          <p className="text-xl xl:text-2xl 2xl:text-3xl text-[#787878]">Contact us</p>
          <a className="text-2xl xl:text-3xl 2xl:text-4xl underline" href="mailto:">
            info.therefresh@gmail.com
          </a>
          <a className="text-2xl xl:text-3xl 2xl:text-4xl underline" href="tel:">
            999-999-9999
          </a>
        </div>

        <div className="flex flex-col space-y-4 mb-8">
          <p className="text-xl xl:text-2xl 2xl:text-3xl text-[#787878]">Follow us</p>
          <a className="flex items-center space-x-2" href="/">
            <p className="text-2xl xl:text-3xl 2xl:text-4xl">instagram</p>
            <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
          </a>
          <a className="flex items-center space-x-2" href="/">
            <p className="text-2xl xl:text-3xl 2xl:text-4xl">facebook</p>
            <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
          </a>
          <a className="flex items-center space-x-2" href="/">
            <p className="text-2xl xl:text-3xl 2xl:text-4xl">youtube</p>
            <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
          </a>
        </div>
      </div>
      <div className="border-b-2 border-background my-10"></div>

      <div className="flex flex-col space-y-4 mb-4 md:flex-row justify-between items-center md:mb-0 md:space-y-0">
        <img
          src={logo}
          onClick={() => scrollToSection("app")}
          className="w-[120px] h-[80px] md:w-[140px] md:h-[90px] xl:w-[160px] xl:h-[100px] 2xl:w-[180px] 2xl:h-[120px] object-cover cursor-pointer"
        />

        <p className="text-lg xl:text-xl 2xl:text-2xl">
          Designed by <a className="underline">Lone Star Web Studio</a>
        </p>

        <p className="text-lg xl:text-xl 2xl:text-2xl">
          © {currentYear} Refresh. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
