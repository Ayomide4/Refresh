import { useState } from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="py-4 px-6 w-full flex justify-between items-center bg-background">
      <div className="flex items-center ">
        <img src={logo} width={100} height={67} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <button
          onClick={() => scrollToSection('about')}
          className="font-medium hover:text-primary transition-colors"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('events')}
          className="font-medium hover:text-primary transition-colors"
        >
          Events
        </button>
        <button
          onClick={() => scrollToSection('donation')}
          className="font-medium hover:text-primary transition-colors"
        >
          Donation
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-text focus:outline-none"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background shadow-md p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="font-medium hover:text-primary transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('donation')}
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
