import Section from '@/components/Section';

export default function OurProductNGB() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Our Product NGB©</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Next Generation Business platform designed to transform your digital operations and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">What is NGB?</h2>
              <p className="text-base-content/70 leading-relaxed">
                NGB© is a comprehensive, enterprise-grade digital enablement platform built to help organizations rapidly
                transition to modern business models. It provides a complete suite of tools for digital transformation,
                integrating cutting-edge technologies with proven business practices.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-base-content">
                  <span className="text-secondary">✓</span>
                  <span>Enterprise-grade scalability</span>
                </li>
                <li className="flex gap-2 text-base-content">
                  <span className="text-secondary">✓</span>
                  <span>Rapid deployment and integration</span>
                </li>
                <li className="flex gap-2 text-base-content">
                  <span className="text-secondary">✓</span>
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex gap-2 text-base-content">
                  <span className="text-secondary">✓</span>
                  <span>24/7 dedicated support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">NGB©</div>
                <p>Next Generation Business Platform</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['Scalability', 'Security', 'Integration'].map((feature) => (
              <div key={feature} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary">{feature}</h3>
                  <p className="text-base-content/70">
                    {feature === 'Scalability'
                      ? 'Grow your business without worrying about platform limitations'
                      : feature === 'Security'
                      ? 'Enterprise-grade security with compliance certifications'
                      : 'Seamless integration with existing systems and tools'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">Ready to Transform Your Business?</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Join hundreds of enterprises using NGB© to accelerate their digital transformation journey
            </p>
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
