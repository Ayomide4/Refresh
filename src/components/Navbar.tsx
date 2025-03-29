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
    <nav className="py-4 px-6 md:px-14 w-full flex justify-between items-center bg-background">
      <div className="flex items-center md:hidden">
        <img src={logo} width={100} height={67} />
      </div>

      <div className="hidden md:flex items-center ">
        <img src={logo} width={140} height={90} />
      </div>


      <button
        onClick={() => scrollToSection("footer")}
        className="font-medium text-xl underline underline-offset-8 hidden md:block cursor-pointer"
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
