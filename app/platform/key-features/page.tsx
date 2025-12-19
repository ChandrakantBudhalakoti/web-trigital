import Section from "@/components/Section";
import {
  PuzzlePieceIcon,
  BoltIcon,
  UsersIcon,
  ChartBarIcon,
  SquaresPlusIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function KeyFeatures() {
  const features = [
    {
      title: "Integration Engine",
      description: "Connect to 100+ apps with one click",
      icon: PuzzlePieceIcon,
    },
    {
      title: "Workflow Automation",
      description: "Automate complex business processes",
      icon: BoltIcon,
    },
    {
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team",
      icon: UsersIcon,
    },
    {
      title: "AI-Powered Insights",
      description: "Intelligent recommendations and analytics",
      icon: ChartBarIcon,
    },
    {
      title: "Custom Dashboards",
      description: "Build dashboards for any use case",
      icon: SquaresPlusIcon,
    },
    {
      title: "Mobile Access",
      description: "Access from anywhere on any device",
      icon: DevicePhoneMobileIcon,
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold text-primary tracking-tight">
              Key Features of Nipige
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Everything you need to streamline your operations
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="
                  p-8 rounded-xl bg-base-100 border border-base-300 
                  hover:border-primary hover:shadow-xl hover:-translate-y-1 
                  transition-all duration-300
                "
              >
                <Icon className="w-10 h-10 text-primary" />

                <h3 className="text-xl font-bold text-primary mt-4">{title}</h3>

                <p className="text-base-content/70 mt-2">{description}</p>

                <a
                  href="#"
                  className="inline-flex text-primary mt-4 hover:text-secondary transition"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>

          {/* FEATURE HIGHLIGHTS */}
          <div className="space-y-16">
            {/* SECURITY */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h3 className="flex gap-2 items-center text-3xl font-bold text-primary">
                  <ShieldCheckIcon className="w-8 h-8 text-primary" />
                  Advanced Security
                </h3>

                <p className="text-base-content/70">
                  Enterprise-grade protection with encryption, role-based
                  access, and audit logs
                </p>

                <ul className="space-y-2">
                  {[
                    "End-to-end encryption",
                    "Multi-factor authentication",
                    "Compliance ready",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 items-center text-base-content"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="
                  border border-primary/20 bg-primary/5 rounded-xl 
                  flex items-center justify-center min-h-[220px]
                "
              >
                <ShieldCheckIcon className="w-24 h-24 text-primary/50" />
              </div>
            </div>

            {/* SCALABILITY */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div
                className="
                  border border-secondary/20 bg-secondary/5 rounded-xl 
                  flex items-center justify-center min-h-[220px] order-2 md:order-1
                "
              >
                <ArrowsPointingOutIcon className="w-24 h-24 text-secondary/50" />
              </div>

              <div className="space-y-4 order-1 md:order-2">
                <h3 className="flex items-center gap-2 text-3xl font-bold text-primary">
                  <ArrowsPointingOutIcon className="w-8 h-8 text-secondary" />
                  Scalability
                </h3>

                <p className="text-base-content/70">
                  Grow without limits with elastic infrastructure
                </p>

                <ul className="space-y-2">
                  {[
                    "Auto-scaling capabilities",
                    "Global presence",
                    "High availability",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 items-center text-base-content"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-primary">
              Experience These Features Today
            </h2>

            <a
              href="/demo"
              className="p-3 btn btn-primary btn-lg rounded border border-primary"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
