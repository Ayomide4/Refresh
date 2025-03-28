import welcome from "../assets/welcome.jpg";

interface EventCardProps {
  src: string;
}

export const EventCard = () => {
  return (
    <article className="relative min-w-80 h-80 rounded-2xl overflow-hidden cursor-pointer">
      <img src={welcome} alt="Event" className="w-full h-full object-cover" />
      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: "linear-gradient(to top, black 5%, transparent 90%)",
        }}
      ></div>
      <button className="absolute top-5 left-5 bg-black rounded-full text-sm text-white px-4 py-2 cursor-pointer">
        Watch video
      </button>
      <h2 className="absolute bottom-5 left-5 w-full text-white text-left p-2 text-xl font-semibold">
        Event Title
      </h2>
    </article>
  );
};

export default EventCard;
