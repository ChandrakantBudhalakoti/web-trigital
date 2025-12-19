import Section from '@/components/Section';

export default function DigitalEngagement() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Digital Engagement</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Connect with your customers on every digital touchpoint
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Customer-Centric Engagement</h2>
                <p className="text-base-content/70 leading-relaxed">
                  Build meaningful relationships with your customers across digital channels. Personalize
                  interactions, automate campaigns, and measure impact with advanced analytics.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Engagement Channels</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Email marketing automation</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Social media management</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Mobile push notifications</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Personalized content</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent to-primary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">👥</div>
                <p>Engaged Customers</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Personalization</h3>
                <p className="text-base-content/70 mb-4">
                  Deliver personalized experiences based on customer behavior and preferences
                </p>
                <a href="/contact-us" className="btn btn-outline btn-sm">
                  Learn More
                </a>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Analytics</h3>
                <p className="text-base-content/70 mb-4">
                  Measure engagement effectiveness with comprehensive analytics
                </p>
                <a href="/contact-us" className="btn btn-outline btn-sm">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Engage More, Earn More</h2>
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
