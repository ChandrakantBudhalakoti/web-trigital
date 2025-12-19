import Section from '@/components/Section';

export default function KeyFeatures() {
  const features = [
    { title: 'Integration Engine', description: 'Connect to 100+ apps with one click' },
    { title: 'Workflow Automation', description: 'Automate complex business processes' },
    { title: 'Real-time Collaboration', description: 'Work together seamlessly with your team' },
    { title: 'AI-Powered Insights', description: 'Intelligent recommendations and analytics' },
    { title: 'Custom Dashboards', description: 'Build dashboards for any use case' },
    { title: 'Mobile Access', description: 'Access from anywhere on any device' },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Key Features of Nipige</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Everything you need to streamline your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card bg-base-100 shadow hover:shadow-lg transition">
                <div className="card-body">
                  <h3 className="card-title text-primary">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <a href="#" className="link link-primary">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Feature Highlights</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Advanced Security</h3>
                  <p className="text-base-content/70">
                    Enterprise-grade security with encryption, role-based access, and audit logs
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-base-content">
                      <span className="text-secondary">✓</span>
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex gap-2 text-base-content">
                      <span className="text-secondary">✓</span>
                      <span>Multi-factor authentication</span>
                    </li>
                    <li className="flex gap-2 text-base-content">
                      <span className="text-secondary">✓</span>
                      <span>Compliance ready</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/10 rounded-lg p-8 h-64" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-secondary/10 rounded-lg p-8 h-64 order-2 md:order-1" />
                <div className="space-y-4 order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-primary">Scalability</h3>
                  <p className="text-base-content/70">
                    Grow without limits with our elastic infrastructure
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-base-content">
                      <span className="text-secondary">✓</span>
                      <span>Auto-scaling capabilities</span>
                    </li>
                    <li className="flex gap-2 text-base-content">
                      <span className="text-secondary">✓</span>
                      <span>Global presence</span>
                    </li>
                    <li className="flex gap-2 text-base-content">
                      <span className="text-secondary">✓</span>
                      <span>High availability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Experience These Features Today</h2>
            <a href="/demo" className="btn btn-primary">
              Start Free Trial
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
