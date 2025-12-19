import Section from '@/components/Section';

export default function PreBuiltIntegration() {
  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'SAP', category: 'ERP' },
    { name: 'Oracle', category: 'Database' },
    { name: 'Microsoft Dynamics', category: 'CRM' },
    { name: 'NetSuite', category: 'ERP' },
    { name: 'Workday', category: 'HCM' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'Stripe', category: 'Payment' },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Pre-Built Integrations</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Connect with your existing systems seamlessly
            </p>
          </div>

          <div className="bg-base-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Available Integrations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {integrations.map((integration) => (
                <div key={integration.name} className="card bg-base-100 shadow">
                  <div className="card-body p-4">
                    <h3 className="card-title text-lg">{integration.name}</h3>
                    <p className="text-sm text-base-content/60">{integration.category}</p>
                    <div className="card-actions mt-3">
                      <a href="#" className="text-primary text-sm hover:underline">
                        Integration details →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Custom Integration Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary">API Documentation</h3>
                  <p className="text-base-content/70 mb-4">
                    Comprehensive API documentation with code examples and SDKs
                  </p>
                  <a href="/resources/documentation" className="btn btn-outline btn-sm">
                    View Documentation
                  </a>
                </div>
              </div>
              <div className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary">Integration Services</h3>
                  <p className="text-base-content/70 mb-4">
                    Our team can help you integrate with custom systems
                  </p>
                  <a href="/services/integration" className="btn btn-outline btn-sm">
                    Integration Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Need More Integrations?</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Our integration team can build custom connectors for your specific needs
            </p>
            <a href="/contact-us" className="btn btn-primary">
              Contact Our Integration Team
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
