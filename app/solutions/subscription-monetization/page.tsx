import Section from '@/components/Section';

export default function SubscriptionMonetization() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Subscription Monetization</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Build recurring revenue streams with our comprehensive subscription platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">The Subscription Revolution</h2>
                <p className="text-base-content/70 leading-relaxed">
                  Transform your business model from one-time sales to recurring revenue. Our subscription platform
                  handles billing, payments, customer management, and analytics.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Predictable recurring revenue</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Flexible pricing tiers</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Automated billing</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Customer lifecycle management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">∞</div>
                <p>Recurring Revenue</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Flexible Pricing</h3>
                <p className="text-base-content/70 mb-4">
                  Create tiered pricing, usage-based billing, or hybrid models that work for your business
                </p>
                <a href="/contact-us" className="btn btn-outline btn-sm">
                  Learn More
                </a>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Payment Processing</h3>
                <p className="text-base-content/70 mb-4">
                  Support multiple payment methods with secure, PCI-compliant processing
                </p>
                <a href="/contact-us" className="btn btn-outline btn-sm">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Ready to Launch Your Subscription Business?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/demo" className="btn btn-primary">
                See Demo
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
