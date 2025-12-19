import Section from "@/components/Section";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function PreBuiltIntegration() {
  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "SAP", category: "ERP" },
    { name: "Oracle", category: "Database" },
    { name: "Microsoft Dynamics", category: "CRM" },
    { name: "NetSuite", category: "ERP" },
    { name: "Workday", category: "HCM" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Stripe", category: "Payment" },
  ];

  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <Section>
        <div className="space-y-24 py-16">
          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-black tracking-tight text-primary">
              Pre-Built Integrations
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Connect NGB seamlessly with trusted enterprise systems.
            </p>
          </div>

          {/* Integrations Grid */}
          <section className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-12">
              Available Integrations
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="
                    rounded-xl p-6 bg-white/5 border border-white/10
                    shadow-[0_0_10px_rgba(0,0,0,.3)]
                    hover:bg-white/10 hover:shadow-[0_0_22px_rgba(0,0,0,.4)]
                    hover:border-blue-500 transition-all duration-300 
                    hover:-translate-y-1 backdrop-blur-md
                  "
                >
                  <h3 className="text-lg font-bold text-blue-400">
                    {integration.name}
                  </h3>

                  <p className="text-sm text-white/60 mt-1 mb-4">
                    {integration.category}
                  </p>

                  <button className="flex items-center gap-1 text-sm text-primary hover:text-secondary transition font-semibold">
                    Integration details
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Custom Integration Support */}
          <section className="space-y-12">
            <h2 className="text-3xl font-extrabold text-center text-primary">
              Custom Integration Support
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="
                  rounded-xl bg-white/5 border border-white/10 p-8
                  shadow-lg backdrop-blur-xl hover:-translate-y-1 
                  transition-all hover:shadow-xl
                "
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  API Documentation
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Comprehensive developer docs with SDKs and sample code.
                </p>

                <a
                  href="/resources/documentation"
                  className="btn btn-outline btn-primary"
                >
                  View Docs
                </a>
              </div>

              <div
                className="
                  rounded-xl bg-white/5 border border-white/10 p-8
                  shadow-lg backdrop-blur-xl hover:-translate-y-1 
                  transition-all hover:shadow-xl
                "
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  Integration Services
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Our engineers can build secure custom connectors.
                </p>

                <a
                  href="/services/integration"
                  className="btn btn-outline btn-primary"
                >
                  Integration Services
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            className="
              text-center space-y-6 p-12 rounded-2xl
              bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl
            "
          >
            <h2 className="text-3xl font-bold text-primary">
              Need More Integrations?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
              Our integration engineers will securely connect NGB to any
              internal or external system.
            </p>

            <a
              href="/contact-us"
              className="
                inline-block px-10 py-3 rounded-full bg-blue-600 text-white 
                
                hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300
                font-semibold text-lg
              "
            >
              Contact Integration Team
            </a>
          </section>
        </div>
      </Section>
    </main>
  );
}
