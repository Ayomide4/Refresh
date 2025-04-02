import { DonationForm } from "./DonationForm";
import cashApp from "../assets/cash-app.svg";
import zelle from "../assets/zelle.svg";

const Donation = () => {
  return (
    <section
      id="donation"
      className="py-20 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 bg-[#222222] rounded-t-3xl relative -mt-10 z-40"
    >
      <div className="md:mx-20 xl:mx-32 2xl:mx-40 text-left flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-4xl text-center md:text-7xl xl:text-8xl 2xl:text-9xl font-medium mb-6 text-white">
          Support Our Vision
        </h2>

        {/* Description */}
        <p className="text-xl text-center mb-8 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl text-white xl:text-2xl 2xl:text-3xl">
          Your generous donation helps us create more opportunities for
          spiritual growth and community building. Every contribution makes a
          difference in our ability to serve and expand our reach.
        </p>

        {/* Donation Form */}
        <DonationForm />

        {/* Alternative Donation Methods */}
        <div className="space-y-4 mt-10">
          <h3 className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-center">
            Other ways to Donate
          </h3>

          {/* Icons with Placeholder Links */}
          <div className="flex w-full justify-evenly items-center gap-6 xl:gap-12 2xl:gap-16">
            <a
              href="#"
              className="inline-flex flex-col items-center hover:opacity-70 transition-opacity"
            >
              <img
                src={cashApp}
                alt="CashApp"
                className="w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] 2xl:w-[140px] 2xl:h-[140px] mb-2"
              />
            </a>
            <a
              href="#"
              className="inline-flex flex-col items-center hover:opacity-70 transition-opacity"
            >
              <img
                src={zelle}
                alt="Zelle"
                className="w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] 2xl:w-[140px] 2xl:h-[140px] mb-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
