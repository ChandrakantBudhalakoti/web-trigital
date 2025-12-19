import Section from "@/components/Section";
import {
  ServerStackIcon,
  ArrowTopRightOnSquareIcon,
  SquaresPlusIcon,
  QueueListIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Integration() {
  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <Section>
        <div className="space-y-24 py-16">
          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-black tracking-tight text-primary">
              Integration Services
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Connect systems, applications, and data pipelines effortlessly.
            </p>
          </div>

          {/* HERO SPLIT */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-extrabold text-blue-400 flex items-center gap-2">
                  <ServerStackIcon className="w-10 h-10 text-blue-500" />
                  System Integration
                </h2>
                <p className="text-white/70 mt-4 leading-relaxed">
                  Build a unified digital ecosystem powered by seamless data
                  flow, workflow automation, and enterprise connectivity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-secondary flex items-center gap-2">
                  <SquaresPlusIcon className="w-6 h-6" />
                  Integration Types
                </h3>

                <ul className="space-y-3 mt-4">
                  {[
                    "API Integration",
                    "Database Integration",
                    "Legacy System Integration",
                    "ETL Pipelines",
                  ].map((type) => (
                    <li key={type} className="flex gap-3 items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-white/80">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* IMAGE PANEL */}
            <div
              className="
                bg-gradient-to-br from-blue-800/60 to-blue-500/30 backdrop-blur-xl
                rounded-2xl p-10 flex items-center justify-center border border-white/10
                shadow-[0_0_35px_-6px_rgba(0,0,0,0.5)]
              "
            >
              <div className="text-center space-y-3">
                <RocketLaunchIcon className="w-20 h-20 text-white/80 mx-auto" />
                <p className="text-white/70 text-lg">
                  Connected Systems • Faster Insights
                </p>
              </div>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "REST APIs",
                desc: "Modern patterns, auth flows + protocols",
                icon: ArrowTopRightOnSquareIcon,
              },
              {
                title: "Message Queues",
                desc: "Kafka, RabbitMQ + async pipelines",
                icon: QueueListIcon,
              },
              {
                title: "Enterprise Connectors",
                desc: "Ready connectors for ERPs + CRMs",
                icon: SquaresPlusIcon,
              },
              {
                title: "Custom Adapters",
                desc: "Tailored integration for legacy/unique apps",
                icon: WrenchScrewdriverIcon,
              },
            ].map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="
                  rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur-lg
                  shadow-[0_0_15px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_-2px_rgba(0,0,0,.6)]
                  hover:-translate-y-1 transition-all duration-300
                "
              >
                <Icon className="w-10 h-10 text-blue-400" />
                <h3 className="text-xl font-bold mt-4 text-blue-300">
                  {title}
                </h3>
                <p className="text-white/70 mt-2">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 py-12 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl">
            <h2 className="text-4xl font-bold text-primary">
              Unify Your Systems
            </h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
              Break silos, create real-time visibility, and power enterprise
              automation.
            </p>

            <div className="flex gap-6 justify-center flex-wrap pt-2">
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-full text-white bg-blue-600 
                  
                  hover:bg-blue-500 hover:-translate-y-1 
                  transition-all duration-300 font-semibold
                "
              >
                Assess Integration Needs
              </a>

              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-full border border-white/30 text-white 
                  hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 
                  transition-all duration-300
                "
              >
                See Examples
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
