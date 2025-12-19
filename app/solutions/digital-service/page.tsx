import Section from "@/components/Section";
import {
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function DigitalService() {
  const capabilities = [
    { label: "Multi-channel support", icon: MegaphoneIcon },
    { label: "AI-powered chatbots", icon: ChatBubbleLeftRightIcon },
    { label: "Ticketing system", icon: ClipboardDocumentListIcon },
    { label: "Knowledge base", icon: BookOpenIcon },
  ];

  const serviceBlocks = [
    {
      title: "Support",
      description: "Multi-channel customer support",
      icon: MegaphoneIcon,
    },
    {
      title: "Knowledge",
      description: "Self-service knowledge base",
      icon: BookOpenIcon,
    },
    {
      title: "Analytics",
      description: "Service metrics and insights",
      icon: ChartBarIcon,
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HERO */}
          <div className="text-center space-y-5">
            <h1 className="text-6xl font-extrabold text-primary tracking-tight">
              Digital Service
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Deliver exceptional customer service at scale
            </p>
          </div>

          {/* MAIN SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* VISUAL PANEL */}
            <div
              className="
                bg-white/5 backdrop-blur-xl border border-white/10 
                rounded-xl p-10 min-h-[260px]
                shadow-lg flex flex-col items-center justify-center
              "
            >
              <MegaphoneIcon className="w-20 h-20 text-primary opacity-80" />
              <p className="mt-4 text-lg font-semibold text-white/70">
                Service Excellence
              </p>
            </div>

            {/* CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Customer Service Platform
              </h2>

              <p className="text-base-content/70 leading-relaxed">
                Manage customer inquiries across multiple channels with a
                unified service platform. Automate routine tasks, reduce
                resolution time, and improve customer satisfaction.
              </p>

              <h3 className="text-lg font-bold text-secondary">
                Service Capabilities
              </h3>

              <ul className="space-y-3 pt-2">
                {capabilities.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-base-content"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARD GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {serviceBlocks.map(({ title, description, icon: Icon }) => (
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

                <p className="text-base-content/70 text-sm">{description}</p>

                <a
                  href="#"
                  className="inline-flex text-primary hover:text-secondary transition items-center gap-1 text-sm"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-primary">
              Deliver Better Service, Faster
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Reduce support costs while improving customer satisfaction scores
            </p>

            <div className="flex gap-6 justify-center flex-wrap pt-3">
              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all font-semibold
                "
              >
                See Demo
              </a>
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary text-lg font-semibold
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition
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
