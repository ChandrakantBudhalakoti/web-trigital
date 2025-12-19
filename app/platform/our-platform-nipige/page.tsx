import Section from "@/components/Section";
import {
  ServerIcon,
  BoltIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function OurPlatformNipige() {
  const features = [
    {
      title: "Unified",
      desc: "All your tools, systems, and data in one place",
      icon: ServerIcon,
    },
    {
      title: "Intelligent",
      desc: "AI-powered insights and workflow automation",
      icon: BoltIcon,
    },
    {
      title: "Collaborative",
      desc: "Real-time connected workflows across teams",
      icon: UserGroupIcon,
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HERO */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-extrabold tracking-tight text-primary">
              Nipige Platform
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              The next-generation platform built for integrated, intelligent
              digital operations.
            </p>
          </div>

          {/* WHAT IS NIPIGE */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary flex items-center gap-2">
                <SparklesIcon className="w-10 h-10 text-primary/80" />
                What is Nipige?
              </h2>

              <p className="text-base-content/70 leading-relaxed">
                Nipige simplifies complex digital operations through a unified,
                AI-powered ecosystem that enhances collaboration, automation,
                scalability, and real-time visibility across your entire
                organization.
              </p>

              <ul className="space-y-3 mt-4">
                {[
                  "Unified workspace for all teams",
                  "Intelligent workflow automation",
                  "Real-time collaboration tools",
                  "Advanced analytics and insights",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-base-content/80"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature Highlight Visual */}
            <div
              className="
                bg-gradient-to-br from-primary/70 to-secondary/50 rounded-2xl 
                p-10 h-96 flex items-center justify-center text-white 
                shadow-xl border border-white/20 backdrop-blur-md
              "
            >
              <div className="text-center space-y-1">
                <h3 className="text-6xl font-extrabold drop-shadow">Nipige</h3>
                <p className="text-white/80 text-lg">
                  Platform for Digital Operations
                </p>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="
                  bg-base-100 rounded-xl border border-base-300 p-8
                  shadow-md hover:shadow-xl hover:-translate-y-1 
                  transition-all duration-300
                "
              >
                <Icon className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-bold text-primary mt-4">
                  {title}
                </h3>
                <p className="text-base-content/70 mt-2 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-primary">
              Transform Your Operations
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Join leading organizations modernizing their digital operations
              with Nipige.
            </p>

            <div className="flex gap-6 justify-center flex-wrap pt-3">
              {/* Primary CTA */}
              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary
                  hover:bg-primary hover:text-white hover:-translate-y-1
                  transition-all duration-300 flex items-center gap-2
                "
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </a>

              {/* Secondary CTA */}
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary
                  hover:bg-primary hover:text-white hover:-translate-y-1
                  transition-all duration-300 flex items-center gap-2
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
