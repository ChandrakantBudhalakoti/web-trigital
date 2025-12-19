import Section from '@/components/Section';

export default function EventsNews() {
  const events = [
    {
      title: 'Digital Transformation Summit 2024',
      date: 'January 15, 2025',
      location: 'Virtual',
      type: 'Conference',
    },
    {
      title: 'Cloud Architecture Workshop',
      date: 'January 20, 2025',
      location: 'San Francisco, CA',
      type: 'Workshop',
    },
    {
      title: 'AI/ML Masterclass',
      date: 'February 1, 2025',
      location: 'Virtual',
      type: 'Training',
    },
    {
      title: 'Blockchain & Web3 Forum',
      date: 'February 15, 2025',
      location: 'New York, NY',
      type: 'Forum',
    },
  ];

  const news = [
    {
      title: 'Trigital Launches NGB 5.0',
      date: 'December 10, 2024',
      summary: 'Latest version brings AI-powered features and enhanced security',
    },
    {
      title: 'Partnership with Leading Enterprise',
      date: 'December 5, 2024',
      summary: 'New partnership to accelerate digital transformation initiatives',
    },
    {
      title: 'Industry Recognition Award',
      date: 'November 30, 2024',
      summary: 'Recognized as leader in digital transformation solutions',
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Events & News</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Stay updated with the latest events and company news
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Upcoming Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <div key={index} className="card bg-base-100 shadow hover:shadow-lg transition">
                    <div className="card-body">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="card-title text-lg text-primary">{event.title}</h3>
                          <p className="text-base-content/70 text-sm mt-2">{event.location}</p>
                        </div>
                        <span className="badge badge-secondary">{event.type}</span>
                      </div>
                      <div className="text-sm text-base-content/60 mt-4">
                        📅 {event.date}
                      </div>
                      <div className="card-actions justify-end mt-4">
                        <a href="#" className="btn btn-outline btn-sm">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Latest News</h2>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <article
                    key={index}
                    className="card bg-base-100 shadow hover:shadow-lg transition"
                  >
                    <div className="card-body">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="card-title text-primary">{item.title}</h3>
                          <p className="text-base-content/70 mt-2">{item.summary}</p>
                        </div>
                      </div>
                      <div className="text-sm text-base-content/60 mt-4">
                        {item.date}
                      </div>
                      <div className="card-actions justify-end mt-4">
                        <a href="#" className="btn btn-ghost btn-sm">
                          Read Full Story →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-base-200 rounded-lg p-8 space-y-6 text-center">
            <h2 className="text-3xl font-bold text-primary">Stay Connected</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Get notified about upcoming events and the latest news
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Looking for More?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/resources/blogs" className="btn btn-outline btn-primary">
                Read Blog Posts
              </a>
              <a href="/contact-us" className="btn btn-outline btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
