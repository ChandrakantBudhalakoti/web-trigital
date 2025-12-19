import Section from "@/components/Section";
import {
  CloudIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export default function CloudConsultancy() {
  const serviceList = [
    { label: "Cloud readiness assessment", icon: ClipboardDocumentListIcon },
    { label: "Platform selection & evaluation", icon: CubeTransparentIcon },
    { label: "Architecture design", icon: ChartBarIcon },
    { label: "Cost optimization", icon: CurrencyDollarIcon },
  ];

  const cloudVendors = [
    { title: "AWS", desc: "Certified AWS consulting & implementations" },
    { title: "Azure", desc: "Enterprise workloads on Microsoft Azure" },
    { title: "Google Cloud", desc: "GCP deployments and architecture" },
    { title: "Multi-Cloud", desc: "Manage and optimize across platforms" },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">

          {/* HERO */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl tracking-tight font-extrabold text-primary">
              Cloud Consultancy
            </h1>

            <p className="text-xl max-w-2xl mx-auto text-base-content/70 leading-relaxed">
              Strategic guidance for your cloud transformation journey
            </p>
          </div>

          {/* MAIN ROW */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">
                  Cloud Strategy & Planning
                </h2>

                <p className="text-base-content/70 leading-relaxed text-lg">
                  Our experts design a cloud strategy aligned with your goals.
                  We evaluate your existing systems, recommend best-fit platforms,
                  and plan your modernization roadmap.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-secondary text-lg">
                  Our Services
                </h3>

                <ul className="space-y-3">
                  {serviceList.map(({ label, icon: Icon }) => (
                    <li key={label} className="flex items-center gap-3 text-base-content">
                      <Icon className="w-5 h-5 text-primary" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* right illustration */}
            <div
              className="
                rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                p-12 min-h-[260px] shadow-xl flex flex-col items-center justify-center
              "
            >
              <CloudIcon className="w-24 h-24 text-primary opacity-80" />
              <p className="mt-4 text-xl font-semibold text-white/70">
                Cloud Excellence
              </p>
            </div>

          </div>

          {/* CLOUD VENDORS */}
          <div className="grid md:grid-cols-4 gap-8">
            {cloudVendors.map(({ title, desc }) => (
              <div
                key={title}
                className="
                  rounded-xl bg-base-100 border border-base-300 p-8
                  hover:border-primary hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 space-y-3
                "
              >
                <CubeTransparentIcon className="w-8 h-8 text-primary" />

                <h3 className="font-bold text-lg text-primary">{title}</h3>

                <p className="text-base-content/70 text-sm">{desc}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary text-sm transition"
                >
                  Learn more <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-primary">
              Start Your Cloud Journey Today
            </h2>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl border border-primary bg-primary text-white text-lg font-semibold
                  shadow-lg hover:shadow-xl hover:-translate-y-1 transition
                "
              >
                Schedule Consultation
              </a>

              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary
                  text-lg font-semibold hover:bg-primary hover:text-white hover:-translate-y-1 transition
                "
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
