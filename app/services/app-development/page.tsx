import Section from "@/components/Section";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export default function AppDevelopment() {
  const services = [
    { label: "Web application development", icon: CodeBracketIcon },
    { label: "Mobile app development", icon: DevicePhoneMobileIcon },
    { label: "API development", icon: ServerStackIcon },
    { label: "Enterprise solutions", icon: WrenchScrewdriverIcon },
  ];

  const tech = [
    {
      title: "Frontend",
      desc: "React, Vue, Angular for modern user experiences",
    },
    {
      title: "Backend",
      desc: "Node.js, Python, Java, microservices architecture",
    },
    {
      title: "Mobile",
      desc: "Native, hybrid, and cross-platform using modern stacks",
    },
    {
      title: "DevOps",
      desc: "CI/CD, automation, and cloud deployment pipelines",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HERO */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-extrabold tracking-tight text-primary">
              App Development
            </h1>

            <p className="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              We build secure, scalable, high-performance custom applications.
            </p>
          </div>

          {/* CONTENT ROW */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: TEXT */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">
                  Full-Stack Development
                </h2>

                <p className="text-base-content/70 text-lg leading-relaxed">
                  Our engineering teams build enterprise-grade applications,
                  tailored to solve business problems with the right technology,
                  performance, and security foundation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-secondary text-lg">Services</h3>

                <ul className="space-y-3">
                  {services.map(({ label, icon: Icon }) => (
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

            {/* RIGHT visual panel */}
            <div
              className="
                rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl
                shadow-xl p-12 min-h-[260px] flex flex-col items-center justify-center
              "
            >
              <CpuChipIcon className="w-28 h-28 text-primary opacity-90" />
              <p className="mt-4 text-xl text-white/70 font-semibold">
                Custom Applications
              </p>
            </div>
          </div>

          {/* TECHNOLOGY GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {tech.map(({ title, desc }) => (
              <div
                key={title}
                className="
                  rounded-xl bg-base-100 border border-base-300 p-8
                  shadow hover:shadow-xl hover:-translate-y-1 transition duration-300
                "
              >
                <h3 className="text-primary font-bold text-lg">{title}</h3>
                <p className="text-base-content/70 mt-2 text-sm">{desc}</p>

                <a
                  href="#"
                  className="
                    mt-4 inline-flex items-center gap-1 text-primary hover:text-secondary 
                    text-sm transition
                  "
                >
                  Learn more
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Build Something Great
            </h2>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary bg-primary text-white shadow-lg 
                  hover:-translate-y-1 hover:shadow-xl transition font-semibold
                "
              >
                Start Your Project
              </a>

              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition font-semibold
                "
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
