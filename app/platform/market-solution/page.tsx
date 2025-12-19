import Section from '@/components/Section';

export default function MarketSolution() {
  const useCases = [
    {
      title: 'Operations Management',
      challenge: 'Managing multiple operational tools and processes',
      solution: 'Nipige unifies all operations in a single platform',
    },
    {
      title: 'Team Collaboration',
      challenge: 'Coordinating work across distributed teams',
      solution: 'Built-in collaboration tools keep teams connected',
    },
    {
      title: 'Process Automation',
      challenge: 'Manual workflows consume time and resources',
      solution: 'Automate workflows and reduce manual effort',
    },
    {
      title: 'Data Analytics',
      challenge: 'Insights scattered across multiple systems',
      solution: 'Centralized dashboards with real-time analytics',
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Market & Solution</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Solutions for every operational challenge
            </p>
          </div>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary text-xl">{useCase.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-secondary mb-1">Challenge:</h4>
                      <p className="text-base-content/70">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary mb-1">Our Solution:</h4>
                      <p className="text-base-content/70">{useCase.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-accent to-primary/30 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nipige?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p>Active Organizations</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <p>Active Users</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <p>Integrations</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Join the Platform Revolution</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/demo" className="btn btn-primary">
                Start Free Trial
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
