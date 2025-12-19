import Section from "@/components/Section";
import {
  ArrowPathIcon,
  ServerStackIcon,
  ArrowRightIcon,
  CogIcon,
  CloudIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export default function MigrationServices() {
  const migrationTypes = [
    { label: "Application migration", icon: CogIcon },
    { label: "Database migration", icon: ServerStackIcon },
    { label: "Infrastructure migration", icon: CloudIcon },
    { label: "Data center relocation", icon: DocumentDuplicateIcon },
  ];

  const processSteps = [
    {
      title: "Assess & Plan",
      description: "Detailed evaluation of systems & dependencies",
    },
    {
      title: "Design & Build",
      description: "Target architecture & environment preparation",
    },
    {
      title: "Test & Validate",
      description: "Rigorous pre-production testing & performance checks",
    },
    {
      title: "Execute & Support",
      description: "Controlled cutover + ongoing post-go-live support",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HERO */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-extrabold tracking-tight text-primary">
              Migration Services
            </h1>

            <p className="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              Seamless migration to modern platforms with minimal disruption.
            </p>
          </div>

          {/* TOP ROW */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* icon tile */}
            <div
              className="
                rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                shadow-xl p-12 min-h-[260px] flex flex-col items-center justify-center
              "
            >
              <ArrowPathIcon className="w-28 h-28 text-primary opacity-80" />
              <p className="text-white/80 mt-4 text-xl font-semibold">
                Safe Migration
              </p>
            </div>

            {/* content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">
                  End-to-End Migration
                </h2>

                <p className="text-base-content/70 leading-relaxed text-lg">
                  We manage full migration lifecycle from planning to
                  post-cutover support. Our proven methodologies ensure minimal
                  downtime, data integrity & predictable execution.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">
                  Migration Types
                </h3>

                <ul className="space-y-3">
                  {migrationTypes.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 text-base-content"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PROCESS SECTION */}
          <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-xl space-y-10">
            <h2 className="text-3xl font-bold text-primary">
              Our Migration Process
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="p-6 rounded-lg bg-white/5 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >
                  <h3 className="font-bold text-primary text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Ready to Migrate?
            </h2>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary bg-primary text-white shadow-lg 
                  hover:shadow-xl hover:-translate-y-1 transition font-semibold
                "
              >
                Start Assessment
              </a>

              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary 
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition font-semibold
                "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
