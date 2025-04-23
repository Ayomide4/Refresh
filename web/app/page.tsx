import Hero from "./components/Hero";
import About from "./components/About"
import Events from "./components/Events";
import Donation from "./components/Donation";
import { fetchEvents } from "./lib/fetchEvents";
import { Event } from "./types";
import Footer from "./components/Footer";


const events: Event[] = await fetchEvents()


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#222] overflow-hidden" id="app">
      <header className="relative w-full">
        <Hero />
      </header>
      <main className="flex-grow">
        <About />
        <Events events={events} />
        <Donation />
      </main>


      <Footer backgroundColor="bg-[#E9E7EC]" textColor="text-black" />

    </div>

  );
}
