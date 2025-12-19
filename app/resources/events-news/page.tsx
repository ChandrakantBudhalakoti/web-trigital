import Section from "@/components/Section";
import {
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function EventsNews() {
  const events = [
    {
      title: "Digital Transformation Summit 2024",
      date: "January 15, 2025",
      location: "Virtual",
      type: "Conference",
    },
    {
      title: "Cloud Architecture Workshop",
      date: "January 20, 2025",
      location: "San Francisco, CA",
      type: "Workshop",
    },
    {
      title: "AI/ML Masterclass",
      date: "February 1, 2025",
      location: "Virtual",
      type: "Training",
    },
    {
      title: "Blockchain & Web3 Forum",
      date: "February 15, 2025",
      location: "New York, NY",
      type: "Forum",
    },
  ];

  const news = [
    {
      title: "Trigital Launches NGB 5.0",
      date: "December 10, 2024",
      summary:
        "AI-powered features and enhanced enterprise security introduced.",
    },
    {
      title: "Enterprise Partnership Announced",
      date: "December 5, 2024",
      summary:
        "New collaboration enabling accelerated digital transformation projects.",
    },
    {
      title: "Industry Excellence Award",
      date: "November 30, 2024",
      summary: "Recognized globally for innovation and scalability.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A1424] text-white">
      <Section>
        <div className="space-y-24 py-20">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold tracking-tight text-primary">
              Events & News
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Stay updated with the latest events, workshops, announcements, and product updates.
            </p>
          </div>

          {/* EVENTS SECTION */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Upcoming Events</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="bg-white/5 rounded-xl border border-white/10 
                  shadow-lg p-6 space-y-3 hover:bg-white/10 transition"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">{event.location}</span>
                    <span className="badge badge-primary">{event.type}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-blue-300">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {event.date}
                  </div>

                  <a
                    href="#"
                    className="text-primary flex items-center gap-2 text-sm hover:text-secondary"
                  >
                    Learn More
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* NEWS SECTION */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Latest News</h2>

            <div className="space-y-4">
              {news.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 rounded-xl border border-white/10 
                  shadow p-6 space-y-3 hover:bg-white/10 transition"
                >
                  <h3 className="text-xl font-semibold text-blue-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm">{item.summary}</p>

                  <p className="text-white/40 text-sm">{item.date}</p>

                  <a
                    href="#"
                    className="text-primary text-sm flex items-center gap-2 hover:text-secondary"
                  >
                    Read Full Story →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* SUBSCRIBE BOX */}
          <section>
            <div className="bg-white/5 border border-white/10 rounded-xl p-12 space-y-6 text-center shadow-xl">
              <h2 className="text-3xl font-bold text-primary">
                Stay Connected
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Subscribe to receive updates about events, news, and product announcements.
              </p>

              <div className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered flex-1 bg-transparent text-white placeholder-white/30"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-white">Looking for More?</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/resources/blogs" className="btn btn-outline btn-primary">
                Read Blogs
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
