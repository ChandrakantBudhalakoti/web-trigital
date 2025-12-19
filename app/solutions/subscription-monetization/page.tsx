import Section from "@/components/Section";
import {
  CurrencyDollarIcon,
  CreditCardIcon,
  ChartBarIcon,
  ArrowPathIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function SubscriptionMonetization() {
  const benefits = [
    "Predictable recurring revenue",
    "Flexible pricing tiers",
    "Automated billing",
    "Customer lifecycle management",
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">

          {/* HERO */}
          <div className="text-center space-y-5">
            <h1 className="text-6xl font-extrabold text-primary tracking-tight">
              Subscription Monetization
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Build recurring revenue with a modern subscription platform
            </p>
          </div>

          {/* MAIN FEATURE BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
                <CurrencyDollarIcon className="w-8 h-8 text-primary" />
                The Subscription Revolution
              </h2>

              <p className="text-base-content/70 leading-relaxed">
                Transform your business model from one-time transactions to
                recurring revenue. Our platform handles billing, payments,
                customer lifecycle, invoicing, and analytics.
              </p>

              {/* BENEFITS */}
              <ul className="space-y-3 pt-2">
                {benefits.map((text) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 text-base-content"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-primary" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT visual panel */}
            <div
              className="
                p-10 rounded-xl bg-white/5 border border-white/10
                shadow-[0_0_25px_rgba(0,0,0,.35)]
                flex flex-col items-center justify-center 
                backdrop-blur-xl min-h-[260px]
              "
            >
              <ArrowPathIcon className="w-20 h-20 text-primary opacity-80" />
              <p className="mt-4 text-lg font-semibold text-white/80">
                Recurring Revenue Engine
              </p>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Flexible Pricing",
                desc: "Build tiered, usage-based, or custom hybrid pricing models.",
                icon: ChartBarIcon,
              },
              {
                title: "Payment Processing",
                desc: "Secure multi-gateway payment handling with PCI compliance.",
                icon: CreditCardIcon,
              },
            ].map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="
                  rounded-xl bg-base-100 border border-base-300 p-8 
                  hover:border-primary hover:shadow-xl hover:-translate-y-1 
                  transition duration-300 space-y-4
                "
              >
                <Icon className="w-10 h-10 text-primary" />

                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <p className="text-base-content/70">{desc}</p>

                <a
                  href="/contact-us"
                  className="text-primary hover:text-secondary transition inline-flex items-center gap-1"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-primary">
              Ready to Launch Your Subscription Business?
            </h2>

            <div className="flex gap-6 justify-center flex-wrap pt-2">
              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl bg-primary border border-primary text-white font-semibold
                  shadow-lg hover:shadow-xl hover:-translate-y-1 transition
                "
              >
                See Demo
              </a>
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary font-semibold
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
