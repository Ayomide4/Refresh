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
      const headings = q("h2");
      const otherContent = q("p, button");
      const tl = gsap.timeline();
      tl.fromTo(
        headings,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.3 }
      ).fromTo(
        otherContent,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power1.inOut",
        },
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
    flex flex-col-reverse 
    bg-[#222]
    overflow-hidden
    md:h-screen
  "
    >
      <div className="absolute flex flex-col justify-end  text-white z-10  px-4 lg:ml-40 mb-32 lg:mb-44" ref={heroContentRef}>
        {/* <h1 className="text-6xl sm:text-6xl lg:text-[18rem] font-bold mt-32 lg:mt-24"> */}
        {/*   REFRESH */}
        {/* </h1> */}

        <h2 className=" text-5xl md:text-6xl  lg:text-7xl lg:max-w-xl mt-6  mb-5 font-semibold lg:font-normal text-white/90 lg:leading-20">
          An Encounter with the Father
        </h2>

        <p className="text-2xl md:text-3xl max-w-xl  mb-8 md:mb-8   text-white/80">
          Welcome to the official website of REFRESH. This is your hub for all news and updates for every edition. Stay tuned.
        </p>

        <div onClick={() => scrollToSection("events")}>
          <button
            className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-normal text-xl w-44 md:w-48 h-14 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Our Events
          </button>
        </div>

        {/* {/* Chevron at bottom for mobile */}
        {/* <div className="flex flex-col items-center mt-auto mb-8 lg:mb-28 cursor-pointer" onClick={() => scrollToSection("about")}> */}
        {/*   <p className="text-xl">See our events</p> */}
        {/*   <ChevronDown width={40} height={40} /> */}
        {/* </div> */}
      </div>

      {/* Video */}
      <div className="w-full h-screen relative ">
        <video
          ref={videoRef}
          autoPlay
          preload="auto"
          playsInline
          muted
          loop
          poster="/banner.jpg"
          className="w-full h-full object-cover z-10"
        >
          <source src="https://circleofintimacy.org/Refresh_Montage.mp4/Refresh_Montage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 pointer-events-none bg-black/60"></div>
      </div>
    </div>);
}
