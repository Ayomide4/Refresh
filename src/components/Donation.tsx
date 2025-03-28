import { DonationForm } from "./DonationForm";
import cashApp from "../assets/cash-app.svg";
import zelle from "../assets/zelle.svg";

const Donation = () => {
  return (
    <section
      id="donation"
      className="py-20 px-6 md:px-12 lg:px-20 bg-[#222222] rounded-t-3xl relative -mt-10 z-40"
    >
      <div className="max-w-4xl mx-auto text-left">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-4xl font-medium mb-6 text-white">
          Support Our Vision
        </h2>

        {/* Description */}
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Your generous donation helps us create more opportunities for
          spiritual growth and community building. Every contribution makes a
          difference in our ability to serve and expand our reach.
        </p>

        {/* Donation Form */}
        <DonationForm />

        {/* Alternative Donation Methods */}
        <div className="space-y-4 mt-10">
          <h3 className="text-white text-2xl font-semibold text-center">
            Other ways to Donate
          </h3>

          {/* Icons with Placeholder Links */}
          <div className="flex w-full justify-evenly items-center gap-6">
            <a
              href="#"
              className="inline-flex flex-col items-center hover:opacity-70 transition-opacity"
            >
              <img
                src={cashApp}
                alt="CashApp"
                width={100}
                height={100}
                className="mb-2"
              />
            </a>
            <a
              href="#"
              className="inline-flex flex-col items-center hover:opacity-70 transition-opacity"
            >
              <img
                src={zelle}
                alt="Zelle"
                width={100}
                height={100}
                className="mb-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
