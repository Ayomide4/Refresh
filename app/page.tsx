import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Events from "./components/Events";
import Donation from "./components/Donation";
import Footer from "./components/Footer";
import { fetchEvents } from "./lib/fetchEvents";
import { Event } from "./types";


const events: Event[] = await fetchEvents()
export default function Home() {

  // console.log(events)
  return (
    <div className="flex flex-col min-h-screen w-full bg-background overflow-hidden" id="app">
      <header className="relative w-full">
        <Navbar />
        <Hero />
      </header>
      <main className="flex-grow">

        <About />
        <Events events={events} />
        <Donation />
      </main>

      <Footer />
    </div>
  );
}
