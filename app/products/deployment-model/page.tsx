import Section from "@/components/Section";
import {
  CloudIcon,
  ShieldCheckIcon,
  HomeModernIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function DeploymentModel() {
  const deploymentOptions = [
    {
      type: "Cloud (SaaS)",
      description: "Multi-tenant cloud deployment",
      icon: CloudIcon,
      benefits: [
        "No infrastructure management",
        "Automatic updates",
        "High availability",
      ],
      ideal: "Best for rapid deployment and scalability",
    },
    {
      type: "Private Cloud",
      description: "Dedicated cloud infrastructure",
      icon: ShieldCheckIcon,
      benefits: [
        "Complete control",
        "Enhanced security",
        "Custom configurations",
      ],
      ideal: "Best for enterprises with strict compliance requirements",
    },
    {
      type: "On-Premise",
      description: "Self-hosted deployment",
      icon: HomeModernIcon,
      benefits: [
        "Maximum control",
        "Data sovereignty",
        "Legacy system integration",
      ],
      ideal: "Best for organizations with legacy infrastructure",
    },
    {
      type: "Hybrid",
      description: "Combination of cloud and on-premise",
      icon: ArrowsRightLeftIcon,
      benefits: ["Flexibility", "Optimal resource usage", "Gradual migration"],
      ideal: "Best for complex enterprise environments",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-extrabold text-primary tracking-tight">
              Deployment Models
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Choose the deployment option that best fits your organization
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {deploymentOptions.map(
              ({ type, description, benefits, ideal, icon: Icon }) => (
                <div
                  key={type}
                  className="
                  bg-base-100 rounded-xl border border-base-300 shadow-md
                  hover:-translate-y-1 hover:shadow-xl transition-all duration-300 p-8
                "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-9 h-9 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">{type}</h3>
                  </div>

                  <p className="text-base-content/70 mb-4">{description}</p>

                  <div className="space-y-3">
                    <p className="font-semibold text-primary">Benefits:</p>
                    <ul className="space-y-2">
                      {benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-base-content/70"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium border border-primary/30 rounded-lg px-3 py-1 bg-primary/10">
                      <ClipboardDocumentCheckIcon className="w-4 h-4" />
                      {ideal}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* COMPARISON TABLE */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 shadow-lg backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Deployment Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/40 text-primary text-lg font-semibold">
                    <th className="text-left p-4">Aspect</th>
                    <th className="text-center p-4">Cloud</th>
                    <th className="text-center p-4">Private</th>
                    <th className="text-center p-4">On-Premise</th>
                  </tr>
                </thead>

                <tbody className="text-base-content/80">
                  {[
                    ["Setup Time", "Days", "Weeks", "Months"],
                    ["Maintenance", "Managed", "Shared", "Your Team"],
                    ["Cost", "Low", "Medium", "High"],
                    ["Customization", "Medium", "High", "Very High"],
                  ].map(([label, c1, c2, c3]) => (
                    <tr key={label} className="border-b border-base-300">
                      <td className="p-4 font-medium">{label}</td>
                      <td className="text-center p-4">{c1}</td>
                      <td className="text-center p-4">{c2}</td>
                      <td className="text-center p-4">{c3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Not Sure Which Model to Choose?
            </h2>
            <p className="text-base-content/70 max-w-xl mx-auto">
              Our deployment specialists can help you select the perfect option
              for your organization
            </p>
            <a
              href="/contact-us"
              className="
                btn btn-primary btn-lg rounded-xl flex items-center gap-2 mt-4
                shadow-lg hover:shadow-xl hover:-translate-y-1 transition
              "
            >
              Schedule a Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
