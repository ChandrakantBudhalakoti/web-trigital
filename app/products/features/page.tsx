import Section from "@/components/Section";
import {
  BoltIcon,
  ChartBarIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  LinkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with real-time data insights",
      Icon: ChartBarIcon,
    },
    {
      title: "API-First Architecture",
      description: "RESTful APIs for seamless third-party integrations",
      Icon: LinkIcon,
    },
    {
      title: "Multi-tenant Support",
      description: "Support for multiple business units and organizations",
      Icon: CommandLineIcon,
    },
    {
      title: "Advanced Reporting",
      description: "Custom reports and automated insights generation",
      Icon: BoltIcon,
    },
    {
      title: "Mobile Application",
      description: "Native iOS and Android apps for on-the-go access",
      Icon: DevicePhoneMobileIcon,
    },
    {
      title: "Automation",
      description: "Workflow automation to reduce manual processes",
      Icon: Cog6ToothIcon,
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-12">
          {/* Page Title */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-primary tracking-tight">
              NGB© Features
            </h1>
            <p className="text-xl text-base-content/70 leading-relaxed">
              Comprehensive capabilities engineered for enterprise-grade digital
              transformation
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="
                  card bg-base-100 rounded-xl shadow-lg p-6 transition-all 
                  duration-300 border border-base-300 hover:shadow-2xl 
                  hover:-translate-y-1 hover:border-primary
                "
              >
                <div className="flex flex-col space-y-3">
                  <Icon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold text-primary">{title}</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {description}
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="font-semibold text-primary hover:text-secondary transition"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Block */}
          <div
            className="
              space-y-10 bg-base-300 rounded-xl p-10 shadow-inner 
              border border-base-300
            "
          >
            <h2 className="text-3xl font-bold text-primary text-center">
              Why Choose NGB Features?
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  heading: "Innovation",
                  text: "Built with the latest technologies and continuous evolution",
                },
                {
                  heading: "Reliability",
                  text: "99.99% uptime SLA with robust infrastructure",
                },
                {
                  heading: "Flexibility",
                  text: "Customizable to match business workflows and architecture",
                },
                {
                  heading: "Support",
                  text: "Dedicated, 24×7 enterprise-grade support at scale",
                },
              ].map(({ heading, text }) => (
                <div key={heading} className="space-y-3">
                  <h3 className="font-bold text-lg text-primary">{heading}</h3>
                  <p className="text-base-content/70 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">Explore More</h2>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/products/market-solution"
                className="
                  px-8 py-3 rounded-xl border border-base-content/30 
                  hover:border-primary hover:text-primary hover:-translate-y-1
                  transition-all duration-300 font-semibold
                "
              >
                Market & Solution
              </a>

              <a
                href="/products/deployment-model"
                className="
                  px-8 py-3 rounded-xl border border-base-content/30 
                  hover:border-primary hover:text-primary hover:-translate-y-1
                  transition-all duration-300 font-semibold
                "
              >
                Deployment Model
              </a>

              <a
                href="/demo"
                className="
                  px-8 py-3 rounded-xl border border-base-content/30 
                  hover:border-primary hover:text-primary hover:-translate-y-1
                  transition-all duration-300 font-semibold
                "
              >
                See in Action
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
