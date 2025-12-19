import Section from '@/components/Section';

export default function MarketSolution() {
  const markets = [
    {
      industry: 'Financial Services',
      challenge: 'Complex regulatory requirements and need for rapid innovation',
      solution: 'NGB provides compliance-ready modules and rapid deployment capabilities',
    },
    {
      industry: 'E-commerce',
      challenge: 'Managing multi-channel sales and inventory',
      solution: 'Unified commerce platform with real-time synchronization',
    },
    {
      industry: 'Healthcare',
      challenge: 'Patient data management and compliance',
      solution: 'HIPAA-compliant solution with integrated EHR capabilities',
    },
    {
      industry: 'Retail',
      challenge: 'Omnichannel experience and customer loyalty',
      solution: 'Integrated retail management with customer intelligence',
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Market & Solution</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Industry-specific solutions powered by NGB©
            </p>
          </div>

          <div className="space-y-6">
            {markets.map((market, index) => (
              <div key={index} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary text-xl">{market.industry}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-secondary mb-1">Challenge:</h4>
                      <p className="text-base-content/70">{market.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary mb-1">Our Solution:</h4>
                      <p className="text-base-content/70">{market.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary/30 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Proven Track Record</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p>Enterprise Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p>Countries Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.99%</div>
                <p>Uptime SLA</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Ready to Transform Your Industry?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/demo" className="btn btn-primary">
                Schedule Demo
              </a>
              <a href="/contact-us" className="btn btn-outline btn-primary">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
