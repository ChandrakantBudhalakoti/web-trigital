import Section from '@/components/Section';

export default function DigitalCommerce() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Digital Commerce</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Streamline your e-commerce operations with unified commerce solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-secondary to-primary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">💳</div>
                <p>Unified Commerce</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Omnichannel Solutions</h2>
                <p className="text-base-content/70 leading-relaxed">
                  We streamline complex business challenges in e-commerce by unifying online and offline channels,
                  inventory management, and customer experiences.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Multi-channel inventory management</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Real-time order synchronization</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Unified customer view</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Analytics and personalization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['Online Store', 'Physical Stores', 'Marketplaces'].map((channel) => (
              <div key={channel} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary">{channel}</h3>
                  <p className="text-base-content/70 text-sm">
                    {channel === 'Online Store'
                      ? 'Full e-commerce capabilities'
                      : channel === 'Physical Stores'
                      ? 'Point of sale integration'
                      : 'Multi-marketplace management'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Unify Your Commerce Operations</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Connect all your sales channels and provide a seamless shopping experience
            </p>
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
