import Section from "@/components/Section";
import {
  ExclamationTriangleIcon,
  LightBulbIcon,
  ArrowRightIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export default function MarketSolution() {
  const useCases = [
    {
      title: "Operations Management",
      challenge: "Managing multiple operational tools and processes",
      solution: "Nipige unifies all operations in a single platform",
      icon: CogIcon,
    },
    {
      title: "Team Collaboration",
      challenge: "Coordinating work across distributed teams",
      solution: "Built-in collaboration tools keep teams connected",
      icon: UsersIcon,
    },
    {
      title: "Process Automation",
      challenge: "Manual workflows consume time and resources",
      solution: "Automate workflows and reduce manual effort",
      icon: LightBulbIcon,
    },
    {
      title: "Data Analytics",
      challenge: "Insights scattered across multiple systems",
      solution: "Centralized dashboards with real-time analytics",
      icon: ChartBarIcon,
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">

          {/* HEADER */}
          <div className="text-center space-y-5">
            <h1 className="text-6xl font-extrabold text-primary tracking-tight">
              Market & Solution
            </h1>

            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Solutions for every operational challenge
            </p>
          </div>

          {/* USE CASE GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map(({ title, challenge, solution, icon: Icon }) => (
              <div
                key={title}
                className="
                  rounded-xl p-8 bg-base-100 border border-base-300
                  hover:border-primary hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 space-y-4
                "
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">{title}</h3>
                </div>

                <div className="space-y-3 mt-4">
                  <p className="text-base-content/60 flex gap-1 items-start">
                    <ExclamationTriangleIcon className="w-5 h-5 text-secondary mt-1" />
                    <span className="font-semibold text-base-content">Challenge:</span>
                  </p>
                  <p className="text-base-content/70">{challenge}</p>

                  <p className="text-base-content/60 flex gap-1 items-start mt-2">
                    <LightBulbIcon className="w-5 h-5 text-primary/70 mt-1" />
                    <span className="font-semibold text-base-content">Solution:</span>
                  </p>
                  <p className="text-base-content/70">{solution}</p>
                </div>

                <a
                  href="#"
                  className="inline-flex mt-3 text-primary hover:text-secondary transition items-center gap-1"
                >
                  Learn how →
                </a>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div
            className="
              bg-gradient-to-r from-primary/20 to-secondary/10 text-white
              rounded-2xl p-10 shadow-xl backdrop-blur-sm
            "
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Why Choose Nipige?
            </h2>

            <div className="grid md:grid-cols-3 border-t border-white/20 divide-x divide-white/10">
              {[
                { stat: "10,000+", label: "Active Organizations" },
                { stat: "1M+", label: "Active Users" },
                { stat: "100+", label: "Integrations" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center p-6">
                  <div className="text-5xl font-extrabold">{stat}</div>
                  <div className="opacity-80 mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-5">
            <h2 className="text-3xl font-bold text-primary">
              Join the Platform Revolution
            </h2>

            <div className="flex gap-6 justify-center flex-wrap pt-2">
              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl bg-primary border border-primary text-white text-lg font-semibold
                  shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2
                "
              >
                Start Free Trial
              </a>

              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all font-semibold
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
