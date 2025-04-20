"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // hero text animation
    if (heroContentRef.current) {
      const q = gsap.utils.selector(heroContentRef);
      const headings = q("h1");
      const otherContent = q("p, button, h2");

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

    // arrow bounce
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: -5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.8,
        delay: 1.5,
      });
    }
  }, []);

  return (
    <div id="hero" className="relative h-screen overflow-hidden">
      {/* Background video + overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/Refresh_Montage.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />

      {/* Centered hero content */}
      <div
        ref={heroContentRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4"
      >
        <div className="-mt-20 flex flex-col items-center">
          <h1 className="text-5xl md:text-[18rem] font-semibold leading-none">
            REFRESH
          </h1>
          <h2 className="text-5xl font-medium">An Encounter with the Father</h2>
          <p className="mt-20 text-xl md:text-2xl max-w-2xl">
            Welcome to the official website of Refresh. This is your hub for all
            news and updates for every edition. Stay tuned.
          </p>

        </div>
      </div>

      {/* Scroll‑down arrow */}
      <button
        onClick={() => scrollToSection("events")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2"
      >
        <ChevronDown
          ref={arrowRef}
          size={32}
          className="text-white opacity-75 hover:opacity-100 transition-opacity -mt-20"
        />
      </button>
    </div>
  );
}
