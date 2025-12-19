import Section from '@/components/Section';

export default function MigrationServices() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Migration Services</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Seamless migration to modern platforms with minimal disruption
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-secondary to-primary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">🔄</div>
                <p>Safe Migration</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">End-to-End Migration</h2>
                <p className="text-base-content/70 leading-relaxed">
                  We handle complex migrations from legacy systems to modern cloud platforms. Our proven
                  methodology ensures data integrity, minimal downtime, and a smooth transition.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Migration Types</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Application migration</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Database migration</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Infrastructure migration</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Data center relocation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-base-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary">Our Migration Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Assess & Plan</h3>
                <p className="text-base-content/70">
                  Comprehensive assessment of your current systems and environment
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Design & Build</h3>
                <p className="text-base-content/70">
                  Design new architecture and prepare target environments
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Test & Validate</h3>
                <p className="text-base-content/70">
                  Rigorous testing and validation before go-live
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Execute & Support</h3>
                <p className="text-base-content/70">
                  Controlled migration with 24/7 support during the cutover
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Ready to Migrate?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact-us" className="btn btn-primary">
                Start Assessment
              </a>
              <a href="/demo" className="btn btn-outline btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
