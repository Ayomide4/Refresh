"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import cashApp from "@/public/cash-app.svg";
import zelle from "@/public/zelle.svg";
import paypal from "@/public/paypal.svg";
import { SiteSettings } from "../page";

interface DonationProps {
  siteSettings: SiteSettings
}



const Donation = ({ siteSettings }: DonationProps) => {
  const [copied, setCopied] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const divContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      // Create a selector scoped to divContentRef
      const q = gsap.utils.selector(divContentRef);
      // Select the h2 elements and the rest of the content (p and article)
      const headings = q("h2");
      const otherContent = q("p, article");

      gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      })
        .fromTo(
          headings,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0 }
        )
        .fromTo(
          otherContent,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.3"
        );
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("682-583-1240");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="donation"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#222222] rounded-3xl relative -mt-10 z-20"
      ref={divContentRef}
    >
      <div className="md:mx-20 text-left flex flex-col items-center" ref={titleRef}>
        {/* Section Heading */}
        <h2 className="text-4xl text-center md:text-7xl font-medium mb-6 text-white">
          Support Our Vision
        </h2>

        {/* Description */}
        <p className="text-xl text-center mb-8 max-w-2xl text-white">
          {siteSettings.donationDescription
            ? siteSettings.donationDescription
            : "Your generous donation helps us create more opportunities for spiritual growth and community building. Every contribution makes a difference in our ability to serve and expand our reach."}
        </p>


        <div className="space-y-4 mt-10">

          <div className="flex flex-col md:flex-row w-full justify-center gap-6 md:gap-12 lg:gap-20 xl:gap-24">
            {/* CashApp */}
            <Link
              href={siteSettings.cashAppLink || "https://cash.app/$refreshdfw"}
              target="_blank"
              className="flex flex-col items-center text-center hover:opacity-70 transition-opacity w-44 h-auto p-4"
            >
              <Image
                src={cashApp}
                alt="CashApp Logo"
                width={80}
                height={80}
                className="w-20 mb-2"
              />
              <p className="font-bold text-white text-base">$Refreshdfw</p>
            </Link>

            {/* Zelle */}
            <div className="flex flex-col items-center text-center hover:opacity-70 transition-opacity w-44 h-auto p-4">
              <Image
                src={zelle}
                alt="Zelle Logo"
                width={80}
                height={80}
                className="w-20 mb-2"
              />
              <p className="font-bold text-white text-sm">
                Send via Zelle:{" "}
                <span
                  onClick={handleCopy}
                  className="underline cursor-pointer hover:text-gray-300 transition"
                >
                  {siteSettings.zellePhoneNumber || "682-583-1240"}
                </span>
              </p>
              {copied && (
                <span className="text-sm text-green-400 mt-1">Copied!</span>
              )}
            </div>

            {/* PayPal */}
            <Link
              href={siteSettings.paypalLink || "https://paypal.me/refreshdfw"}
              target="_blank"
              className="flex flex-col items-center text-center hover:opacity-70 transition-opacity w-44 h-auto p-4"
            >
              <Image
                src={paypal}
                alt="Paypal Logo"
                width={80}
                height={80}
                className="w-20 mb-2"
              />
              <p className="font-bold text-white text-base">
                @Refreshdfw              </p>
            </Link>
          </div>

        </div>
      </div>
    </section >
  );
};

export default Donation;
