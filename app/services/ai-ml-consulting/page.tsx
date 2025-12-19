import Section from "@/components/Section";
import {
  CpuChipIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  PhotoIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function AIMLConsulting() {
  const services = [
    { label: "AI strategy & roadmap", icon: DocumentChartBarIcon },
    { label: "Predictive analytics", icon: ChartBarIcon },
    {
      label: "Natural language processing",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    { label: "Computer vision", icon: PhotoIcon },
  ];

  const capabilityCards = [
    {
      title: "Machine Learning",
      desc: "Models for classification, regression, and clustering",
    },
    {
      title: "Deep Learning",
      desc: "Neural networks for vision, NLP, and advanced tasks",
    },
    {
      title: "Data Science",
      desc: "Analytics and feature engineering for real business impact",
    },
    {
      title: "LLM Applications",
      desc: "Applications built with modern transformer-based models",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HERO */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-extrabold tracking-tight text-primary">
              AI/ML Consulting
            </h1>

            <p className="text-xl max-w-2xl mx-auto text-base-content/70 leading-relaxed">
              Leverage AI and machine learning to drive measurable business
              outcomes.
            </p>
          </div>

          {/* TOP GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* left*/}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">
                  Intelligent Solutions
                </h2>

                <p className="text-base-content/70 leading-relaxed text-lg">
                  We identify high-value AI opportunities and build scalable,
                  production-grade solutions tailored to your workflows and
                  industry.
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

            {/* right illustration */}
            <div
              className="
                rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                p-12 min-h-[260px] shadow-xl flex flex-col items-center justify-center
              "
            >
              <CpuChipIcon className="w-28 h-28 text-primary opacity-90" />
              <p className="mt-4 text-xl font-semibold text-white/70">
                AI Intelligence
              </p>
            </div>
          </div>

          {/* CAPABILITIES GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {capabilityCards.map(({ title, desc }) => (
              <div
                key={title}
                className="
                  rounded-xl bg-base-100 border border-base-300 p-8 shadow
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                "
              >
                <h3 className="text-primary font-bold text-lg">{title}</h3>
                <p className="text-base-content/70 mt-2">{desc}</p>

                <a
                  href="#"
                  className="
                    inline-flex items-center gap-1 text-primary hover:text-secondary
                    text-sm mt-4 transition
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
              Unlock AI Potential
            </h2>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary bg-primary text-white shadow-lg 
                  hover:shadow-xl hover:-translate-y-1 transition font-semibold
                "
              >
                Consult Our Experts
              </a>

              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary font-semibold
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition
                "
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
