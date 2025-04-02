import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mountain from "../assets/transparent_sky_image.png";
import ImageSkeleton from "./ImageSkeleton";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
      className="relative h-[90vh] flex flex-col items-center text-left overflow-hidden md:pt-5"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {!isImageLoaded && (
          <ImageSkeleton
            width="100%"
            height="100%"
            className="absolute"
          />
        )}
        <img
          src={mountain}
          alt="Mountain"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      {/* Hero Content */}
      <div
        ref={heroContentRef}
        className="relative z-10 px-6 md:px-24 xl:px-32 2xl:px-40 w-full text-black"
      >
        <h1 className="text-5xl md:text-8xl xl:text-[10rem] 2xl:text-[11rem] font-normal mb-0 2xl:mb-4">
          Stay Inspired.
        </h1>
        <h1 className="text-5xl md:text-8xl xl:text-[10rem] 2xl:text-[11rem] font-normal mb-8 2xl:mb-12">
          Stay Connected.
        </h1>
        <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl md:w-xl xl:w-2xl 2xl:w-3xl mb-8 2xl:mb-10 font-light">
          Welcome to Refresh—your hub for all news, updates, and events related
          to the ministry.
        </p>
        <button
          onClick={() => scrollToSection("events")}
          className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-normal text-xl md:text-2xl xl:text-3xl 2xl:text-4xl w-48 md:w-56 xl:w-64 2xl:w-72 h-14 md:h-16 xl:h-20 2xl:h-24 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Our Events
        </button>
      </div>
    </div>
  );
};

export default Hero;
