import { useEffect, useState } from "react";
import { Eye, HeartHandshake } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const About = () => {
  // State to hold the dynamically loaded image URLs.
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Dynamically import all matching images from the assets folder.
    const imageModules = import.meta.glob("../assets/*.{jpg,png}");

    // Filter keys to only include paths starting with "../assets/IMG_"
    const filteredPaths = Object.keys(imageModules).filter((path) =>
      path.startsWith("../assets/IMG_")
    );

    // Import each module and extract its default export (the image URL).
    const importPromises = filteredPaths.map((path) =>
      imageModules[path]().then((mod) => mod.default)
    );

    // Once all promises resolve, update the state.
    Promise.all(importPromises).then((resolvedImages) => {
      setImages(resolvedImages);
    });
  }, []);

  // Once images are loaded, split them into two rows.
  // You could also hardcode a number if you know exactly how many images you want per row.
  const half = Math.ceil(images.length / 2);
  const firstRow = images.slice(0, half);
  const secondRow = images.slice(half);

  const statements = [
    {
      icon: <Eye size={40} />,
      title: "Our Vision",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: <HeartHandshake size={40} />,
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
        relative
        bg-white
        rounded-3xl
        -mt-16        
        z-20
        shadow-lg
      "
    >
      <div className="mx-6 md:mx-20 pt-16">
        <div className="flex flex-col md:flex-row w-full mb-20">
          <h2 className="text-5xl md:text-9xl font-light md:font-extralight mb-8 text-left md:w-1/2">
            About Us
          </h2>
          <div className="md:w-1/2 text-xl font-light space-y-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
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
            py-4
            my-6
            md:mb-20
            -mr-10
          "
        >
          {renderStatements}
        </div>

        {/* Render the carousels only if images have loaded */}
        {images.length > 0 && (
          <div className="-mx-20">
            <ImageCarousel images={firstRow} direction="right" />
            <ImageCarousel images={secondRow} direction="left" />
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
