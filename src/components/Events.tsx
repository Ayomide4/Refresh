import { MapPin } from "lucide-react";
import EventCard from "./EventCard";
import welcome from "../assets/welcome.jpg";
import { useEffect, useRef } from "react";

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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section
      id="events"
      className="py-16 px-6  bg-[#E9E7EC] rounded-3xl z-30 -mt-10 relative"
    >
      <div className=" md:mx-20 ">
        <h2 className="text-4xl md:text-9xl font-light md:font-extralight mb-8 md:mb-20 text-left ">
          Events
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* <div className="w-full h-72 bg-black rounded-2xl md:w-[1000px] md:h-[400px]"></div> */}
          <img
            className="object-cover w-full h-72 rounded-2xl md:w-1/2 md:min-h-[400px]"
            src={welcome}
          />

          <div className="space-y-3 mt-8 md:mt-0 md:w-1/2">
            <h3 className="text-3xl md:text-5xl  md:mb-4 font-normal">
              Join us for Refresh April
            </h3>
            <p className="font-light text-xl md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="hidden  max-w-80 bg-black rounded-full text-white md:flex justify-evenly p-4 text-sm items-center mt-8 ">
              <MapPin className="cursor-pointer" href="/" />
              <a href="/" className="underline">
                info@therefresh.com
              </a>
              <p className="underline cursor-pointer">999-999-9999</p>
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

        <h4 className="text-4xl font-light mb-6">Previous Events</h4>

        <div
          className="
            overflow-x-auto
            flex
            flex-nowrap
            gap-6
            py-4
            my-6
          -mx-20
          pl-20
          md:pl-28
          md:-mx-28
          "
          ref={containerRef}
        >
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
          <EventCard />
          <div className="border-r-2 border-black border-dashed"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;
