import Section from "@/components/Section";
import {
  CloudIcon,
  ServerIcon,
  ArrowsRightLeftIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function DeploymentModel() {
  const models = [
    {
      name: "Cloud Deployment",
      description: "Fully managed cloud platform",
      benefits: [
        "Zero infrastructure management",
        "Auto-scaling",
        "Always up-to-date",
      ],
      icon: CloudIcon,
    },
    {
      name: "Hybrid Deployment",
      description: "Mix of cloud + on-premise infrastructure",
      benefits: [
        "Flexibility",
        "Cost optimization",
        "Data sovereignty",
      ],
      icon: ArrowsRightLeftIcon,
    },
    {
      name: "Enterprise Deployment",
      description: "Private cloud or self-hosted on-premise",
      benefits: [
        "Full control",
        "Custom configurations",
        "Legacy integration",
      ],
      icon: ServerIcon,
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">

          {/* HEADER */}
          <div className="text-center space-y-5">
            <h1 className="text-6xl font-extrabold text-primary">
              Deployment Models
            </h1>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Choose the deployment option that works best for your organization
            </p>
          </div>

          {/* MODEL CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {models.map(({ name, description, benefits, icon: Icon }) => (
              <div
                key={name}
                className="
                  rounded-xl bg-base-100 border border-base-300 p-8
                  hover:border-primary hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 space-y-4
                "
              >
                <Icon className="w-12 h-12 text-primary" />

                <h3 className="text-2xl font-bold text-primary">{name}</h3>

                <p className="text-base-content/70">{description}</p>

                <ul className="space-y-2 pt-2">
                  {benefits.map((b) => (
                    <li key={b} className="text-base-content flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* COMPARISON */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">
              Why Nipige Deployment?
            </h2>

            <div className="grid md:grid-cols-4 gap-10 text-center">
              {[
                { title: "Quick Setup", desc: "Deploy in days, not months" },
                { title: "Cost Efficient", desc: "Pay for what you use" },
                { title: "Secure", desc: "Enterprise-grade protection" },
                { title: "Reliable", desc: "99.99% uptime SLA" },
              ].map(({ title, desc }) => (
                <div key={title} className="space-y-3">
                  <ShieldCheckIcon className="w-10 h-10 text-primary mx-auto opacity-80" />
                  <p className="font-bold text-primary">{title}</p>
                  <p className="text-base-content/70 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Need Help Choosing?
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Our team can help recommend the best deployment path for your business.
            </p>

            <a
              href="/contact-us"
              className="
                px-10 py-3 rounded-xl bg-primary text-white font-semibold
                shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300
              "
            >
              Schedule Consultation
            </a>
          </div>

        </div>
      </Section>
    </main>
  );
}
