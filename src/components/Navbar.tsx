import { useState } from "react";
import logo from "../assets/logo.png";

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
    <nav className="py-4 px-6 md:px-14 xl:px-20 2xl:px-24 w-full flex justify-between items-center bg-background">
      <div className="flex items-center md:hidden">
        <img src={logo} width={100} height={67} />
      </div>

      <div className="hidden md:flex items-center">
        <img src={logo} className="w-[140px] h-[90px] md:w-[160px] md:h-[100px] xl:w-[180px] xl:h-[120px] 2xl:w-[200px] 2xl:h-[140px]" />
      </div>

      <button
        onClick={() => scrollToSection("footer")}
        className="font-medium text-xl md:text-2xl xl:text-3xl 2xl:text-4xl underline underline-offset-8 md:block cursor-pointer hover:text-primary transition-colors"
      >
        Get in touch
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
