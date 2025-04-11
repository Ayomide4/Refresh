"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (heroContentRef.current) {
      // Create a selector scoped to heroContentRef
      const q = gsap.utils.selector(heroContentRef);
      // Select the two h1 elements and the rest of the content (p and button)
      const headings = q("h1");
      const otherContent = q("p, button");

      // Create a timeline that triggers on scroll
      gsap.timeline()
        // Animate the h1 elements: move from 50px below and invisible, to their natural position
        .fromTo(headings,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.3 })
        // Then animate the rest of the content (p and button) to fade in
        .fromTo(
          otherContent,
          { opacity: 0 },
          { opacity: 1, duration: 0.2, },
          "-=0.3" // overlap the fade-in slightly with the last heading
        );
    }
  }, []);

  return (
    <div
      className="relative h-screen flex flex-col items-center text-left overflow-hidden "
      id="hero"
    >

      <div className=" z-0 w-full h-full relative">
        {/* Video */}
        <video
          className="z-0 w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="/Refresh_Montage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0  bg-black/40  z-10" />

        {/* Centered Text Content */}
        <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white z-20">
          <h1 className="text-5xl md:text-8xl font-normal mb-0">
            Stay Inspired.
          </h1>
          <h1 className="text-5xl md:text-8xl font-normal mb-0">
            Stay Connected.
          </h1>
          <p className="text-xl md:text-3xl md:w-xl mb-8 font-light mt-10">
            Welcome to Refresh—your hub for all news, updates, and events related
            to the ministry.
          </p>
          <button
            onClick={() => scrollToSection("events")}
            className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-normal text-xl w-48 h-14 mt-10 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Our Events
          </button>
        </div>

      </div>

      {/* Hero Content */}
      {/* <div */}
      {/*   ref={heroContentRef} */}
      {/*   className="relative z-10 px-6 md:px-24 w-full text-black" */}
      {/* > */}
      {/*   <h1 className="text-5xl md:text-8xl font-normal mb-0"> */}
      {/*     Stay Inspired. */}
      {/*   </h1> */}
      {/*   <h1 className="text-5xl md:text-8xl font-normal mb-8"> */}
      {/*     Stay Connected. */}
      {/*   </h1> */}
      {/*   <p className="text-xl md:text-2xl md:w-xl mb-8 font-light"> */}
      {/*     Welcome to Refresh—your hub for all news, updates, and events related */}
      {/*     to the ministry. */}
      {/*   </p> */}
      {/*   <button */}
      {/*     onClick={() => scrollToSection("events")} */}
      {/*     className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-normal text-xl w-48 h-14 rounded-full shadow-lg transition-all transform hover:scale-105" */}
      {/*   > */}
      {/*     Our Events */}
      {/*   </button> */}
      {/* </div> */}
    </div >
  );
};

export default Hero;
