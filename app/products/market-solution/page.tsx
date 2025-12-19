import Section from "@/components/Section";

export default function MarketSolution() {
  const markets = [
    {
      industry: "Financial Services",
      challenge:
        "Complex regulatory requirements and need for rapid innovation",
      solution: "Compliance-ready modules + rapid deployment capabilities",
    },
    {
      industry: "E-commerce",
      challenge: "Managing multi-channel sales and inventory",
      solution: "Unified commerce platform with realtime sync",
    },
    {
      industry: "Healthcare",
      challenge: "Patient data management + compliance",
      solution: "HIPAA-ready integrated EHR platform",
    },
    {
      industry: "Retail",
      challenge: "Customer loyalty + omnichannel experience",
      solution: "Integrated retail intelligence + unified experience",
    },
  ];

  return (
    <main className="min-h-screen bg-[#061120] text-white">
      <Section>
        <div className="space-y-28 py-20">
          {/* Page Title */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold tracking-tight">
              Market & Solution
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Industry-ready digital solutions powered by NGB©
            </p>
          </div>

          {/* Market Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {markets.map((market) => (
              <div
                key={market.industry}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 
                transition-all hover:border-blue-500 hover:bg-white/10 
                hover:-translate-y-1 backdrop-blur-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {market.industry}
                </h3>

                <div className="space-y-6 text-white/70">
                  <div>
                    <h4 className="uppercase text-xs font-semibold tracking-wide text-white/50 mb-1">
                      Challenge
                    </h4>
                    <p>{market.challenge}</p>
                  </div>

                  <div>
                    <h4 className="uppercase text-xs font-semibold tracking-wide text-white/50 mb-1">
                      Our Solution
                    </h4>
                    <p>{market.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            className="rounded-2xl bg-gradient-to-r from-blue-900/60 to-blue-600/40 p-16 
          text-center border border-white/10 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-12">Proven Track Record</h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="text-5xl font-bold">500+</p>
                <p className="text-white/60 text-sm tracking-wide mt-1">
                  Enterprise Customers
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">50+</p>
                <p className="text-white/60 text-sm tracking-wide mt-1">
                  Countries Served
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">99.99%</p>
                <p className="text-white/60 text-sm tracking-wide mt-1">
                  Uptime SLA
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Transform?</h2>

            <div className="flex gap-6 justify-center flex-wrap pt-2">
              <a
                href="/demo"
                className="px-10 py-3 rounded-full text-white bg-blue-600 
                 hover:bg-blue-500 transition  
                hover:-translate-y-1"
              >
                Schedule Demo
              </a>

              <a
                href="/contact-us"
                className="px-10 py-3 rounded-full border border-white/30 
                text-white hover:border-blue-400 hover:text-blue-400 
                hover:-translate-y-1 transition"
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
