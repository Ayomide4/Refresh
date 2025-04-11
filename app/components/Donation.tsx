"use client"
import { DonationForm } from "./DonationForm";
import cashApp from "@/public/cash-app.svg";
import zelle from "@/public/zelle.svg";
import Image from "next/image"
import { useEffect, useRef } from "react";
import gsap from "gsap";


const Donation = () => {

  const titleRef = useRef<HTMLDivElement>(null);
  const divContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      // Create a selector scoped to heroContentRef
      const q = gsap.utils.selector(divContentRef);
      // Select the two h1 elements and the rest of the content (p and button)
      const headings = q("h2");
      const otherContent = q("p, article");

      gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%", // when the top of hero content hits 80% of viewport
          toggleActions: "play none none none",
        },
      })

        .fromTo(headings,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0 })
        // Then animate the rest of the content (p and button) to fade in
        .fromTo(
          otherContent,
          { opacity: 0 },
          { opacity: 1, duration: 1, },
          "-=0.3" // overlap the fade-in slightly with the last heading
        );
    }
  }, [])


  return (
    <section
      id="donation"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#222222] rounded-t-3xl relative -mt-10 z-40"
      ref={divContentRef}
    >
      <div className="md:mx-20  text-left flex flex-col items-center" ref={titleRef}>
        {/* Section Heading */}
        <h2 className="text-4xl text-center  md:text-7xl font-medium mb-6 text-white">
          Support Our Vision
        </h2>

        {/* Description */}
        <p className="text-xl text-center  mb-8 max-w-2xl  text-white">
          Your generous donation helps us create more opportunities for
          spiritual growth and community building. Every contribution makes a
          difference in our ability to serve and expand our reach.
        </p>

        {/* Donation Form */}
        <DonationForm />

        {/* Alternative Donation Methods */}
        <div className="space-y-4 mt-10">
          <h3 className="text-white text-2xl font-semibold text-center">
            Other ways to Donate
          </h3>

          {/* Icons with Placeholder Links */}
          <div className="flex w-full justify-evenly items-center gap-6">
            <a
              href="#"
              className="inline-flex flex-col items-center hover:opacity-70 transition-opacity"
            >
              <Image
                src={cashApp}
                alt="CashApp"
                width={100}
                height={100}
                className="mb-2"
              />
            </a>
            <a
              href="#"
              className="inline-flex flex-col items-center hover:opacity-70 transition-opacity"
            >
              <Image
                src={zelle}
                alt="Zelle"
                width={100}
                height={100}
                className="mb-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
