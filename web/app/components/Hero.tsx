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
      const q = gsap.utils.selector(heroContentRef);
      const headings = q("h1");
      const otherContent = q("p, button");

      // Animate on page load (no ScrollTrigger)
      const tl = gsap.timeline();

      tl.fromTo(
        headings,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power2.out",
          stagger: 0.3,
        }
      ).fromTo(
        otherContent,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "none",
          stagger: 0.1,
        },
        "-=0.4" // overlap with the end of heading animation
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
        <div className="absolute top-0 bottom-0 left-0 right-0  bg-black/70  z-10" />

        {/* Centered Text Content */}
        <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white z-20"
          ref={heroContentRef}
        >
          <h1 className="text-5xl md:text-8xl font-semibold mb-0" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
            REFRESH
          </h1>
          <h1>An Encounter with the Father</h1>
          {/* <h1 className="text-5xl md:text-8xl font-semibold mb-0"> */}
          {/*   Stay Connected. */}
          {/* </h1> */}
          <p className="text-xl md:text-2xl md:w-xl mb-8 font-light mt-10">
            Welcome to the official website of Refresh. This is your hub for all news and updates for every edition. Stay tuned.
          </p>
          <button
            onClick={() => scrollToSection("events")}
            className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-normal text-xl w-48 h-14 mt-10 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Our Events
          </button>
        </div>
      </div>
    </div >
  );
};

export default Hero;
