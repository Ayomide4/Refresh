"use client"
import { MapPin, Calendar } from "lucide-react";
import EventCard from "./EventCard";
import { useEffect, useRef } from "react";
import gsap from "gsap/all";
import Image from "next/image"
import Link from "next/link";
import { urlFor } from "../lib/sanityImage"
import { Event } from "../types";
import { format } from 'date-fns';


interface EventProps {
  events: Event[]
}

export const Events = ({ events }: EventProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null)

  const currentEvent = events[0]
  const formattedDate = format(new Date(currentEvent.date), 'MM/dd/yy'); // "04/16/25"
  const formattedTime = format(new Date(currentEvent.date), 'ha');   // "3:00 PM"
  const url = urlFor(events[0].image).url()

  const previousEvents = events.slice(1).map((event, index) => {
    const imageUrl = urlFor(event.image).url()

    return <EventCard event={event} imageUrl={imageUrl} key={index} />
  })

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }

    if (headerRef.current) {
      const q = gsap.utils.selector(headerRef)

      const headings = q("h2")
      const otherContent = q("h3, h4, p, a, .animateable")

      gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        },
      })
        .fromTo(headings,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0 })
        .fromTo(
          otherContent,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },);
    }

  }, []);

  return (
    <section
      id="events"
      className="py-16 px-6  bg-[#E9E7EC] rounded-3xl z-30 -mt-10 relative"
    >

      <div className=" md:mx-20" ref={headerRef}>


        <h2 className="text-5xl md:text-9xl font-light md:font-extralight mb-8 text-left md:w-1/2 opacity-0">
          Events
        </h2>


        {currentEvent ?
          <div className="flex flex-col md:flex-row md:space-x-10">
            {/* <div className="w-full h-72 bg-black rounded-2xl md:w-[1000px] md:h-[400px]"></div> */}
            <Image
              className="object-cover w-full h-72 rounded-2xl md:w-1/2 md:min-h-[400px]"
              src={url}
              width={800} height={600}
              alt="The poster for the latest REFRESH event"
            />

            <div className="space-y-3 mt-8 md:mt-0 md:w-1/2">
              <h3 className="text-3xl  lg:text-5xl  md:mb-5 font-normal">
                Join us for {currentEvent ? currentEvent.title : "Refresh"}      </h3>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 space-y-3 md:space-y-0 md:space-x-8 text-lg mt-5 font-semibold">
                <div className="flex space-x-2 items-center ">
                  <Calendar className=" animateable w-6 h-6 text-black" />
                  <p> {formattedTime} {formattedDate}</p>
                </div>
                <div className="flex space-x-2 items-center ">
                  <MapPin className="animateable w-6 h-6 text-black" href="https://www.google.com/maps?q=2625 Texas Drive, Irving Tx 75062" />
                  <Link className="underline" href="https://www.google.com/maps?q=2625 Texas Drive, Irving Tx 75062" target="_blank" rel="noopener noreferrer">
                    2625 Texas Drive, Irving Tx 75062
                  </Link>
                </div>
              </div>


              <hr className="my-5 border-black/15" />



              <p className="font-light text-xl lg:text-2xl">
                {currentEvent.body}
              </p>






            </div>

          </div>

          : <></>}
        {/* <div className="bg-black rounded-full text-white flex justify-evenly p-4 text-sm items-center mt-8 md:hidden"> */}
        {/*   <MapPin className="cursor-pointer" href="/" /> */}
        {/*   <Link href="/" className="underline"> */}
        {/*     info@therefresh.com */}
        {/*   </Link> */}
        {/*   <p className="underline cursor-pointer">999-999-9999</p> */}
        {/* </div> */}

        <hr className=" border-black/15 my-12" />

        <h4 className="text-4xl font-light mb-6">Previous Events</h4>

        <div
          className="
            overflow-x-auto
            flex
            flex-nowrap
            gap-6
            py-4
            my-6
            md:mb-20
            pl-10
          md:pl-40
            -mx-10
          md:-mx-40
          "
          ref={containerRef}
        >
          {previousEvents}
          {/* <div className="border-r-2 border-black border-dashed"></div> */}

        </div>
      </div>
    </section>
  );
};

export default Events;
