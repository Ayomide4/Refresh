const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">About REFRESH</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-4">
              REFRESH is a community-driven initiative focused on spiritual growth and renewal. We believe in the power of community, worship, and inspiration to transform lives.
            </p>
            <p className="mb-4">
              Our mission is to create spaces where people can experience spiritual renewal, form meaningful connections, and grow in their faith journey.
            </p>
            <p>
              Join us at our next event and be part of a vibrant community dedicated to spiritual refreshment and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
