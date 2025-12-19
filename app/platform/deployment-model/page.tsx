import Section from '@/components/Section';

export default function DeploymentModel() {
  const models = [
    {
      name: 'Cloud Deployment',
      description: 'Fully managed cloud platform',
      benefits: ['Zero infrastructure management', 'Auto-scaling', 'Always up-to-date'],
    },
    {
      name: 'Hybrid Deployment',
      description: 'Mix of cloud and on-premise',
      benefits: ['Flexibility', 'Cost optimization', 'Data sovereignty'],
    },
    {
      name: 'Enterprise Deployment',
      description: 'Private cloud or on-premise',
      benefits: ['Complete control', 'Custom configurations', 'Legacy integration'],
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Deployment Models</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Choose the deployment option that works best for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {models.map((model) => (
              <div key={model.name} className="card bg-base-100 shadow hover:shadow-lg transition">
                <div className="card-body">
                  <h3 className="card-title text-primary text-lg">{model.name}</h3>
                  <p className="text-base-content/70 mb-4">{model.description}</p>
                  <div className="space-y-2">
                    {model.benefits.map((benefit) => (
                      <div key={benefit} className="flex gap-2 text-sm text-base-content">
                        <span className="text-secondary">✓</span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-base-200 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Deployment Comparison</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-primary mb-2">Quick Setup</h3>
                  <p className="text-base-content/70">
                    Get started in days with our cloud deployment option
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Cost Effective</h3>
                  <p className="text-base-content/70">
                    Pay only for what you use with flexible pricing
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Secure</h3>
                  <p className="text-base-content/70">
                    Enterprise-grade security across all deployment options
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Reliable</h3>
                  <p className="text-base-content/70">
                    99.99% uptime SLA with enterprise support
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Need Help Choosing?</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Our team can help you determine the best deployment model for your needs
            </p>
            <a href="/contact-us" className="btn btn-primary">
              Schedule Consultation
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
