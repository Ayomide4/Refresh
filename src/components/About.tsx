import { Eye, HeartHandshake } from "lucide-react"
const About = () => {

  const statements = [
    { icon: <Eye />, title: "Our Vision", content: "Quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    {
      icon: <HeartHandshake />, title: "Our Mission", content: "Quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
  ]

  const renderStatements = statements.map((statement, idx) => (
    <article
      key={idx}
      className="
        flex-shrink-0
        w-64
        p-4
        bg-gray-100
        rounded-lg
        shadow-sm
        space-y-3
      "
    >
      <div className="text-3xl text-primary">{statement.icon}</div>
      <h2 className="text-xl font-semibold">{statement.title}</h2>
      <p className="text-sm">{statement.content}</p>
    </article>
  ));

  return (
    <section
      id="about"
      className="
        relative
        bg-white
        rounded-t-3xl
        -mt-16        
    z-20
        p-6
        md:px-12
        lg:px-20
        shadow-lg
      "
    >
      <div className="max-w-6xl mx-auto pt-16">
        <h2 className="text-5xl md:text-4xl font-light mb-8 text-left ">
          About Us
        </h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam.</p>

        <div className="border-b-2 border-black/15 mt-12"></div>

        <div
          className="
            overflow-x-auto
            flex
            flex-nowrap
            gap-6
            py-4
            mt-6
          "
        >
          {renderStatements}
        </div>

      </div>
    </section>
  );
};

export default About;
