"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToSection } from "../utils/helper";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Animate text
    if (heroContentRef.current) {
      const q = gsap.utils.selector(heroContentRef);
      const headings = q("h1");
      const otherContent = q("p, button");
      const tl = gsap.timeline();
      tl.fromTo(
        headings,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power2.out", stagger: 0.3 }
      ).fromTo(
        otherContent,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "none", stagger: 0.1 },
        "-=0.4"
      );
    }

    // Ensure Chrome buffers and plays the video
    const v = videoRef.current;
    if (v) {
      // Using loadedmetadata event which is more reliable across browsers
      const onLoadedMetadata = () => {
        // Add a small delay to give Chrome more time to process
        setTimeout(() => {
          v.play()
            .catch((err) => console.error("video.play() failed:", err));
        }, 100);
        v.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
      v.addEventListener("loadedmetadata", onLoadedMetadata);

      // Force reload of video element
      v.load();
    }
  }, []);

  return (
    <div
      id="hero"
      className="
        relative
        flex flex-col-reverse md:flex-row
        md:justify-center
        bg-[#222]
        overflow-hidden
      md:h-screen
      "
    >
      {/* Text */}
      <div
        ref={heroContentRef}
        className="
          flex flex-col md:self-center w-full h-full md:pt-40 mb-32 md:mb-0 md:w-1/2 px-5 md:px-14  text-white text-center md:text-left z-20"
      >

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold">
          An Encounter with the Father
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-lg  mt-5">
          Welcome to the official website of REFRESH. This is your hub for all news
          and updates for every edition. Stay tuned.
        </p>
        <button
          onClick={() => scrollToSection("events")}
          className="
          cursor-pointer
          self-center
          md:self-start mt-10
            w-48 h-14
            bg-primary hover:bg-primary/60
            text-white font-normal text-xl
            rounded-full shadow-lg
            transition-all transform hover:scale-105
          "
        >
          Our Events
        </button>

      </div>

      {/* Video */}
      <div className="w-full md:w-1/2 h-64  relative mt-40 mb-10  md:m-0 md:h-full">
        <video
          autoPlay
          preload="auto"
          playsInline
          muted
          loop
          className="w-full h-full object-cover z-10"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* overlay: now truly “invisible” to pointer events */}

        <div className="absolute inset-0 pointer-events-none md:bg-black/50"></div>
      </div>
    </div >
  );
}
