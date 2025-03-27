import mountain from "../assets/transparent_sky_image.png"

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col px-6 md:py-32">
      <div className="flex flex-col text-left text-5xl my-5">
        <h1 className="">
          Stay Inspired
        </h1>
        <h1 className="">Stay Connected</h1>
      </div>
      <p className="text-xl md:text-2xl max-w-2xl mb-8 font-light">
        Welcome to Refresh—your hub for all news, updates, and events related to the ministry.
      </p>
      <button
        onClick={() => scrollToSection('events')}
        className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-102 cursor-poitner z-10"
      >
        Our Events
      </button>
      <div className="w-full h-96 bg-black z-10 rounded-2xl mt-10 text-white flex justify-center items-center">video here</div>
      <img className="absolute bottom-0 left-0 w-screen h-3/4 " src={mountain} width="auto" height="auto" />
    </div>
  );
};

export default Hero;
