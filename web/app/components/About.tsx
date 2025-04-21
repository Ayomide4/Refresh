"use client"
import { useEffect, useRef } from "react";
import { Eye, HeartHandshake } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import gsap from "gsap";
import Link from "next/link";

const imageFilenames = [
  "IMG_0011.jpg",
  "IMG_0015.jpg",
  "IMG_0034.jpg",
  "IMG_0038.jpg",
  "IMG_0046.jpg",
  "IMG_0289.jpg",
  "IMG_0290.jpg",
  "IMG_0306.jpg",
  "IMG_9623.jpg",
  "IMG_9695.jpg",
  "IMG_9707.jpg",
  "IMG_9718.jpg",
  "IMG_9751.jpg",
  "IMG_9862.jpg",
  "IMG_9893.jpg",
  "IMG_9931.jpg",
  "IMG_9978.jpg",
  "IMG_9979.jpg",
  "IMG_9982.jpg",
  "IMG_9983.jpg",
];



const About = () => {
  // State to hold the dynamically loaded image URLs.
  const statementRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);


  // These are plain string URLs (public assets)
  const allImages = imageFilenames.map((name) => `/about/${name}`);

  useEffect(() => {
    if (statementRef.current) {
      statementRef.current.scrollLeft = 0;
    }



    if (headerRef.current) {
      // Create a selector scoped to heroContentRef
      const q = gsap.utils.selector(aboutContentRef);
      // Select the two h1 elements and the rest of the content (p and button)
      const headings = q("h2");
      const otherContent = q("p, article");

      gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%", // when the top of hero content hits 80% of viewport
          toggleActions: "play none none none",
        },
      })

        .fromTo(headings,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0, ease: "power2.out" })
        // Then animate the rest of the content (p and button) to fade in
        .fromTo(
          otherContent,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
            stagger: 0.1,
          },
        );
    }
  }, []);

  const firstRow = allImages.slice(0, 10)
  const secondRow = allImages.slice(10)

  const statements = [
    {
      icon: <HeartHandshake size={40} />,
      title: "Our Mission",
      content: "To create a spiritually refreshing atmosphere where attendees encounter the Father, receive vital empowerment through revelation-based teaching, intense worship, and intercession, and cultivate a lasting passion and hunger for God.",

    },

    {
      icon: <Eye size={40} />,
      title: "Our Vision",
      content:

        "To serve as one of the major hubs for global revival. To take REFRESH across territories - cities, nations, and continents.",
    },
  ];

  const renderStatements = statements.map((statement, idx) => (
    <article
      key={idx}
      className="
        flex-shrink-0
        w-64 md:w-128
        p-4
        space-y-3
      "
    >
      <div>{statement.icon}</div>
      <h2 className="text-2xl md:text-4xl font-normal">{statement.title}</h2>
      <p className="font-light md:text-xl">{statement.content}</p>
    </article>
  ));

  return (
    <section
      id="about"
      className="
       sticky 
      top-[0vh]
        bg-white
        rounded-3xl
        -mt-16        
        z-20
        shadow-lg
      flex flex-col items-center
      pb-20
      "
    >
      <div className="w-full px-6 md:px-20 pt-16 " ref={aboutContentRef}>
        <div className="flex flex-col md:flex-row w-full mb-20" ref={headerRef}>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-light md:font-extralight mb-8 text-left md:w-1/2 opacity-0">
            About Us
          </h2>
          <div className="md:w-1/2 text-xl space-y-5" >
            <p>
              REFRESH is an interdenominational gathering of believers from different races and cultures. Our core areas of operation are: Spirit-filled intense worship,intercession,  and revelation-based teachings.             </p>
            <p>
              At REFRESH, we believe in creating the atmosphere that facilitates encounters with the Father. We believe in the move of the Spirit through which healing, deliverance, and spiritual empowerments are made possible. REFRESH is not an event; it is a movement.
            </p>
          </div>
        </div>

        <div className="border-b-2 border-black/15 mt-12"></div>

        <div
          className="
            overflow-x-auto
            flex
            flex-nowrap
            gap-6
          md:gap-10
            lg:gap-44
            my-10
            md:mb-20
            px-6
          md:pl-20
            -mx-10
          md:-mx-20
          "
          ref={statementRef}
        >
          {renderStatements}
        </div>

        {/* Render the carousels only if images have loaded */}
        <div className="overflow-hidden -mx-20">
          <ImageCarousel images={firstRow} direction="right" />
          <ImageCarousel images={secondRow} direction="left" />
        </div>


      </div>
      <Link href="/gallery">
        <button
          className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-normal text-xl w-48 h-14 mt-5 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Our Gallery
        </button>
      </Link>
    </section>
  );
};

export default About;
