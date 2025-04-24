import Image from "next/image";
import Link from "next/link";
import { Event } from "../types";

interface EventCardProps {
  event: Event;
  imageUrl: string;
}
export const EventCard = ({ event, imageUrl }: EventCardProps) => {
  return (
    <Link href="https://www.youtube.com/@therefreshgathering/videos" target="_blank" rel="noopener noreferrer" > < article className="relative min-w-80 rounded-2xl overflow-hidden cursor-pointer" >
      <Image
        src={imageUrl}
        alt="Event"
        width={320} // equivalent to 20rem
        height={320}
        className="object-cover rounded-2xl"
      />

      <div className="absolute top-5 right-5 bg-black rounded-full text-sm text-white px-4 py-2 cursor-pointer">
        Watch video
      </div>
    </article >
    </Link >
  );
};

export default EventCard;
