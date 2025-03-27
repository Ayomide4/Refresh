interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export const Events = () => {
  // Sample events data
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'Spring Refresh Gathering',
      date: 'April 15, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Community Center',
      description: 'Join us for an evening of worship, inspiration, and community.'
    },
    {
      id: 2,
      title: 'Summer Refresh Retreat',
      date: 'June 10-12, 2025',
      time: 'All Day',
      location: 'Mountain Retreat Center',
      description: 'A weekend getaway focused on spiritual renewal and connection.'
    },
    {
      id: 3,
      title: 'Fall Refresh Conference',
      date: 'September 25, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Downtown Convention Center',
      description: 'A full day of inspiring speakers, workshops, and community building.'
    }
  ];

  return (
    <section id="events" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">Upcoming Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Event Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Date:</span> {event.date}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Time:</span> {event.time}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
