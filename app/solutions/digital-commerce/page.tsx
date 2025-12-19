import Section from "@/components/Section";
import {
  ShoppingBagIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  UsersIcon,
  CheckCircleIcon,
  CreditCardIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function DigitalCommerce() {
  const channels = [
    {
      name: "Online Store",
      description: "Full e-commerce capabilities with storefront + payments",
      icon: ShoppingBagIcon,
    },
    {
      name: "Physical Stores",
      description: "POS integration + real-time inventory sync",
      icon: CreditCardIcon,
    },
    {
      name: "Marketplaces",
      description: "Multi-marketplace management and catalog syncing",
      icon: ArrowsRightLeftIcon,
    },
  ];

  const benefits = [
    "Multi-channel inventory management",
    "Real-time order synchronization",
    "Unified customer view",
    "Analytics and personalization",
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HEADER */}
          <div className="text-center space-y-5">
            <h1 className="text-6xl font-extrabold text-primary tracking-tight">
              Digital Commerce
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Streamline e-commerce operations with unified commerce solutions
            </p>
          </div>

          {/* MAIN CONTENT GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Illustration Panel */}
            <div
              className="
                rounded-xl bg-white/5 border border-white/10 
                shadow-xl backdrop-blur-md p-10 min-h-[260px] 
                flex flex-col justify-center items-center
              "
            >
              <CreditCardIcon className="w-20 h-20 text-primary opacity-80" />
              <p className="text-lg mt-3 font-semibold text-white/70">
                Unified Commerce Engine
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Omnichannel Solutions
              </h2>

              <p className="text-base-content/70 leading-relaxed">
                We eliminate fragmented e-commerce operations by unifying
                inventory, orders, channels, and customer experience into a
                single digital commerce platform.
              </p>

              <h3 className="text-lg font-bold text-secondary">Key Features</h3>

              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary" />
                    <span className="text-base-content">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CHANNEL CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {channels.map(({ name, description, icon: Icon }) => (
              <div
                key={name}
                className="
                  rounded-xl bg-base-100 border border-base-300 p-8
                  hover:border-primary hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 space-y-4
                "
              >
                <Icon className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-bold text-primary">{name}</h3>
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

          {/* CTA SECTION */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Unify Your Commerce Operations
            </h2>

            <p className="text-base-content/70 max-w-2xl mx-auto">
              Connect all sales channels and deliver seamless customer
              experiences across the digital + physical commerce ecosystem.
            </p>

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
