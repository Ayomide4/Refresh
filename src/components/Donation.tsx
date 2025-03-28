const Donation = () => {
  return (
    <section
      id="donation"
      className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-primary/5 to-accent/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Support Our Mission
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your generous donation helps us create more opportunities for
          spiritual growth and community building. Every contribution makes a
          difference in our ability to serve and expand our reach.
        </p>

        <a
          href="https://example.com/donate"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg inline-block transition-all transform hover:scale-105"
        >
          Donate Now
        </a>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Where Your Donation Goes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-bold text-secondary mb-2">
                Events & Programs
              </h4>
              <p>
                Funding for venues, speakers, materials, and resources for our
                events and programs.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-2">
                Community Outreach
              </h4>
              <p>
                Supporting initiatives to reach more people and expand our
                community impact.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-2">Scholarships</h4>
              <p>
                Providing financial assistance for those who cannot afford to
                attend our events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
