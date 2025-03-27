const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 md:py-32 bg-gradient-to-br from-background to-accent/10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
        Welcome to <span className="text-secondary">REFRESH</span>
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mb-8">
        Revitalize your spirit and connect with a community dedicated to spiritual growth and renewal.
      </p>
      <button
        onClick={() => scrollToSection('about')}
        className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        Learn More
      </button>
    </div>
  );
};

export default Hero;
