import Section from '@/components/Section';

export default function Features() {
  const features = [
    { title: 'Real-time Analytics', description: 'Comprehensive dashboards with real-time data insights' },
    { title: 'API-First Architecture', description: 'RESTful APIs for seamless third-party integrations' },
    { title: 'Multi-tenant Support', description: 'Support for multiple business units and organizations' },
    { title: 'Advanced Reporting', description: 'Custom reports and automated insights generation' },
    { title: 'Mobile Application', description: 'Native iOS and Android apps for on-the-go access' },
    { title: 'Automation', description: 'Workflow automation to reduce manual processes' },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">NGB© Features</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Comprehensive features designed to meet all your digital transformation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card bg-base-100 shadow hover:shadow-lg transition">
                <div className="card-body">
                  <h3 className="card-title text-primary text-lg">{feature.title}</h3>
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

          <div className="space-y-6 bg-base-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary">Why Choose NGB Features?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Innovation</h3>
                <p className="text-base-content/70">
                  Built with the latest technologies and continuous innovation at its core
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Reliability</h3>
                <p className="text-base-content/70">
                  99.99% uptime SLA with redundant infrastructure and disaster recovery
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Flexibility</h3>
                <p className="text-base-content/70">
                  Highly customizable to meet unique business requirements
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Support</h3>
                <p className="text-base-content/70">
                  Dedicated support team available 24/7 for your success
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Explore More</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/products/market-solution" className="btn btn-outline btn-primary">
                Market & Solution
              </a>
              <a href="/products/deployment-model" className="btn btn-outline btn-primary">
                Deployment Model
              </a>
              <a href="/demo" className="btn btn-primary">
                See in Action
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
