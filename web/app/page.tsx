import Hero from "./components/Hero";
import About from "./components/About"
import Events from "./components/Events";
import Donation from "./components/Donation";
import { fetchEvents } from "./lib/fetchEvents";
import { Event } from "./types";
import Footer from "./components/Footer";
import { sanity } from "./lib/sanity";
import { siteSettingsQuery } from "./lib/queries";

export interface SiteSettings {
  aboutParagraph1: string;
  aboutParagraph2: string;
  missionStatement: string;
  visionStatement: string;

  donationDescription: string;
  cashAppLink: string;
  zellePhoneNumber: string;
  paypalLink: string;

  contactEmail: string;
  phoneNumber: string;

  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;

  designedByText: string;
  designedByLink: string;

  copyrightText: string;
}
const events: Event[] = await fetchEvents()
const siteSettings: SiteSettings = await sanity.fetch(siteSettingsQuery);


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#222] overflow-hidden" id="app">
      <header className="relative w-full">
        <Hero />
      </header>
      <main className="flex-grow">
        <About siteSettings={siteSettings} />
        <Events events={events} />
        <Donation siteSettings={siteSettings} />
      </main>


      <Footer backgroundColor="bg-[#E9E7EC]" textColor="text-black" siteSettings={siteSettings} />

    </div>

  );
}
