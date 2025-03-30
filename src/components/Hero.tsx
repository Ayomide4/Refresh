import mountain from "../assets/transparent_sky_image.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative h-[90vh] flex flex-col items-center text-left overflow-hidden md:pt-5"
      id="hero"
    >
      {/* Background Image */}
      <img
        src={mountain}
        alt="Mountain"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-24 w-full text-black ">
        <h1 className="text-5xl md:text-8xl font-normal mb-0">
          Stay Inspired.
        </h1>
        <h1 className="text-5xl md:text-8xl font-normal mb-8">
          Stay Connected.{" "}
        </h1>

        <p className="text-xl md:text-2xl md:w-xl mb-8 font-light">
          Welcome to Refresh—your hub for all news, updates, and events related
          to the ministry.
        </p>

        <button
          onClick={() => scrollToSection("events")}
          className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-normal text-xl  w-48 h-14 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Our Events
        </button>

        {/* Video Placeholder */}
        {/* <div className="mt-10 w-full h-80 bg-black/70 border border-gray-700 rounded-2xl flex items-center justify-center"> */}
        {/*   <span className="text-white">video here</span> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
