import { Eye, HeartHandshake } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import img from "../assets/IMG_0011.jpg";
import img2 from "../assets/IMG_0015.jpg";
import img3 from "../assets/IMG_0034.jpg";
import img4 from "../assets/IMG_0038.jpg";
import img5 from "../assets/IMG_0046.jpg";
import img6 from "../assets/IMG_0289.jpg";
import img7 from "../assets/IMG_0290.jpg";
import img8 from "../assets/IMG_0306.jpg";

const About = () => {
  const firstRow = [img, img2, img3, img4];
  const secondRow = [img5, img6, img7, img8];

  const statements = [
    {
      icon: <Eye size={40} />,
      title: "Our Vision",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Our Mission",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const renderStatements = statements.map((statement, idx) => (
    <article
      key={idx}
      className="
        flex-shrink-0
        w-64
      md:w-128
        p-4
        space-y-3
      "
    >
      <div className="">{statement.icon}</div>
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
      <div className=" mx-6 md:mx-20 pt-16">
        <div className="flex flex-col md:flex-row w-full mb-20">
          <h2 className="text-5xl md:text-9xl font-light md:font-extralight mb-8 text-left md:w-1/2">
            About Us
          </h2>

          <div className="md:w-1/2 text-xl font-light space-y-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam.
            </p>
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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

        <ImageCarousel images={firstRow} direction="right" />
        <ImageCarousel images={secondRow} direction="left" />
      </div>
    </section>
  );
};

export default About;
