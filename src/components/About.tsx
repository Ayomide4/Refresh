import { useEffect, useRef, useState } from "react";
import { Eye, HeartHandshake } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import gsap from "gsap";

// Add type for the dynamic import
type ImageModule = {
  default: string;
};

const About = () => {
  // State to hold the dynamically loaded image URLs.
  const [images, setImages] = useState<string[]>([]);
  const statementRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statementRef.current) {
      statementRef.current.scrollLeft = 0;
    }

    // Dynamically import all matching images from the assets folder.
    const imageModules = import.meta.glob<ImageModule>("../assets/*.{jpg,png}");

    // Filter keys to only include paths starting with "../assets/IMG_"
    const filteredPaths = Object.keys(imageModules).filter((path) =>
      path.startsWith("../assets/IMG_"),
    );

    // Import each module and extract its default export (the image URL).
    const importPromises = filteredPaths.map((path) =>
      imageModules[path]().then((mod) => mod.default),
    );

    // Once all promises resolve, update the state.
    Promise.all(importPromises).then((resolvedImages) => {
      setImages(resolvedImages);
    });


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
          { y: 0, opacity: 1, duration: 0.75, stagger: 0 })
        // Then animate the rest of the content (p and button) to fade in
        .fromTo(
          otherContent,
          { opacity: 0 },
          { opacity: 1, duration: 1, },
          "-=0.3" // overlap the fade-in slightly with the last heading
        );
    }
  }, []);

  // Once images are loaded, split them into two rows.
  // You could also hardcode a number if you know exactly how many images you want per row.
  const half = Math.ceil(images.length / 2);
  const firstRow = images.slice(0, half);
  const secondRow = images.slice(half);

  const statements = [
    {
      icon: <Eye className="w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20" />,
      title: "Our Vision",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 md:w-12 md:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20" />,
      title: "Our Mission",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const renderStatements = statements.map((statement, idx) => (
    <article
      key={idx}
      className="
        flex-shrink-0
        w-64 md:w-128 xl:w-160 2xl:w-192
        p-4
        space-y-3
      "
    >
      <div>{statement.icon}</div>
      <h2 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-normal">{statement.title}</h2>
      <p className="font-light md:text-xl xl:text-2xl 2xl:text-3xl">{statement.content}</p>
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
        pb-10
      "
    >
      <div className="mx-6 md:mx-20 xl:mx-32 2xl:mx-40 pt-16" ref={aboutContentRef}>
        <div className="flex flex-col md:flex-row w-full mb-20" ref={headerRef}>
          <h2 className="text-5xl md:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-light md:font-extralight mb-8 text-left md:w-1/2">
            About Us
          </h2>
          <div className="md:w-1/2 text-xl xl:text-2xl 2xl:text-3xl font-light space-y-5" >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
            md:gap-44
            xl:gap-64
            2xl:gap-96
            py-4
            my-6
            md:mb-20
            pl-6
            md:pl-20
            xl:pl-32
            2xl:pl-40
            -mx-10
            md:-mx-20
            xl:-mx-32
            2xl:-mx-40
          "
          ref={statementRef}
        >
          {renderStatements}
        </div>

        {/* Render the carousels only if images have loaded */}
        {images.length > 0 && (
          <div className="overflow-hidden -mx-20">
            <ImageCarousel images={firstRow} direction="right" />
            <ImageCarousel images={secondRow} direction="left" />
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
