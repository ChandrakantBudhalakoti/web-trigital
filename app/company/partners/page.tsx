import Section from '@/components/Section';

export default function Partners() {
  const partners = [
    { name: 'AWS', category: 'Cloud Provider', logo: '☁️' },
    { name: 'Microsoft Azure', category: 'Cloud Provider', logo: '☁️' },
    { name: 'Google Cloud', category: 'Cloud Provider', logo: '☁️' },
    { name: 'Salesforce', category: 'CRM', logo: '🤝' },
    { name: 'SAP', category: 'ERP', logo: '🤝' },
    { name: 'Oracle', category: 'Database', logo: '🤝' },
    { name: 'Stripe', category: 'Payments', logo: '💳' },
    { name: 'Shopify', category: 'E-commerce', logo: '🛒' },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Our Partners</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              We work with industry leaders to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="card bg-base-100 shadow hover:shadow-lg transition">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-2">{partner.logo}</div>
                  <h3 className="card-title text-lg">{partner.name}</h3>
                  <p className="text-sm text-base-content/60">{partner.category}</p>
                  <div className="card-actions mt-4">
                    <a href="#" className="btn btn-ghost btn-sm">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 bg-base-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary">Partnership Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Technology Partners</h3>
                <p className="text-base-content/70">
                  Integrate your platform or service with Trigital to expand your reach
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Integration Partners</h3>
                <p className="text-base-content/70">
                  Become a certified implementation partner and serve customers globally
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Consulting Partners</h3>
                <p className="text-base-content/70">
                  Partner with us to deliver consulting services to enterprise customers
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Reseller Partners</h3>
                <p className="text-base-content/70">
                  Resell Trigital solutions with attractive margins and support
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Ready to Partner With Us?</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Join our growing network of partners and unlock new opportunities
            </p>
            <a href="/contact-us" className="btn btn-primary">
              Become a Partner
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
