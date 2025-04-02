import { MapPin } from "lucide-react";
import EventCard from "./EventCard";
import welcome from "../assets/welcome.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap/all";
import ImageSkeleton from "./ImageSkeleton";

// interface Event {
//   id: number;
//   title: string;
//   date: string;
//   time: string;
//   location: string;
//   description: string;
// }

//TODO: add programtic way of displayin next events and past events refer to calendar

export const Events = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }

    if (headerRef.current) {
      const q = gsap.utils.selector(headerRef)

      const headings = q("h2")
      const otherContent = q("h3, p")

      gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 10%",
          toggleActions: "play none none none"
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

  return (
    <section
      id="events"
      className="py-16 px-6 md:px-12 xl:px-16 2xl:px-20 bg-[#E9E7EC] rounded-3xl z-30 -mt-10 relative"
    >
      <div className="md:mx-20 xl:mx-32 2xl:mx-40" ref={headerRef}>
        <h2 className="text-4xl md:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-light md:font-extralight mb-8 md:mb-20 text-left">
          Events
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-10 xl:space-x-16 2xl:space-x-20">
          <div className="relative w-full md:w-1/2">
            {!isImageLoaded && (
              <ImageSkeleton
                width="100%"
                height="400px"
                rounded
                className="absolute"
              />
            )}
            <img
              className={`object-cover w-full h-72 rounded-2xl md:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              src={welcome}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>

          <div className="space-y-3 mt-8 md:mt-0 md:w-1/2">
            <h3 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl md:mb-4 font-normal">
              Join us for Refresh April
            </h3>
            <p className="font-light text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="hidden max-w-[400px]  bg-black rounded-full text-white md:flex justify-evenly p-4  text-sm xl:text-base 2xl:text-lg items-center mt-8 ">
              <MapPin className="cursor-pointer w-5 h-5 xl:w-6 xl:h-6 2xl:w-9 2xl:h-7" href="/" />
              <a href="/" className="underline">
                info@therefresh.com
              </a>
              <a className="underline cursor-pointer">999-999-9999</a>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-full text-white flex justify-evenly p-4 text-sm items-center mt-8 md:hidden">
          <MapPin className="cursor-pointer" href="/" />
          <a href="/" className="underline">
            info@therefresh.com
          </a>
          <p className="underline cursor-pointer">999-999-9999</p>
        </div>

        <div className="border-b-2 border-black/15 my-12"></div>

        <h4 className="text-4xl xl:text-5xl 2xl:text-6xl font-light mb-6">Previous Events</h4>

        <div
          className="
            overflow-x-auto
            flex
            flex-nowrap
            gap-6
            md:gap-8
            xl:gap-12
            2xl:gap-16
            py-4
            my-6
            md:mb-20
            pl-10
            md:pl-40
            xl:pl-60
            2xl:pl-80
            -mx-10
            md:-mx-40
            xl:-mx-60
            2xl:-mx-80
          "
          ref={containerRef}
        >
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
        </div>
      </div>
    </section>
  );
};

export default Events;
