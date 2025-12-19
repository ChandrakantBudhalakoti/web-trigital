import Section from "@/components/Section";
import {
  MegaphoneIcon,
  UsersIcon,
  BellAlertIcon,
  EnvelopeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

export default function DigitalEngagement() {
  const channels = [
    { name: "Email marketing automation", icon: EnvelopeIcon },
    { name: "Social media management", icon: MegaphoneIcon },
    { name: "Mobile push notifications", icon: BellAlertIcon },
    { name: "Personalized content", icon: CursorArrowRaysIcon },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HEADER */}
          <div className="text-center space-y-5">
            <h1 className="text-6xl font-extrabold text-primary tracking-tight">
              Digital Engagement
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Connect with customers across every digital touchpoint
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Customer-Centric Engagement
              </h2>

              <p className="text-base-content/70 leading-relaxed">
                Build meaningful relationships with your customers across
                digital channels. Personalize interactions, automate campaigns,
                and measure impact with advanced analytics.
              </p>

              <h3 className="text-lg font-bold text-secondary">
                Engagement Channels
              </h3>

              <ul className="space-y-3">
                {channels.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 text-base-content"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            {/* VISUAL PANEL */}
            <div
              className="
                rounded-xl bg-white/5 border border-white/10
                shadow-xl backdrop-blur-md p-10 min-h-[260px]
                flex flex-col justify-center items-center
              "
            >
              <UsersIcon className="w-20 h-20 text-primary opacity-80" />
              <p className="text-lg mt-3 font-semibold text-white/70">
                Engaged Customers
              </p>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Personalization",
                desc: "Deliver tailored experiences based on behavior and preferences",
                icon: CursorArrowRaysIcon,
              },
              {
                title: "Analytics",
                desc: "Measure engagement effectiveness with advanced analytics",
                icon: ChartBarIcon,
              },
            ].map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="
                  rounded-xl bg-base-100 border border-base-300 p-8
                  hover:border-primary hover:shadow-xl hover:-translate-y-1 
                  transition-all duration-300 space-y-4
                "
              >
                <Icon className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <p className="text-base-content/70">{desc}</p>

                <a
                  href="/contact-us"
                  className="text-primary inline-flex items-center gap-1 hover:text-secondary transition text-sm"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          {/* CTA SECTION */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Engage More, Earn More
            </h2>

            <div className="flex gap-6 justify-center flex-wrap pt-3">
              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl bg-primary border border-primary text-white text-lg font-semibold
                  shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all
                "
              >
                See Demo
              </a>

              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary text-lg font-semibold
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all
                "
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
