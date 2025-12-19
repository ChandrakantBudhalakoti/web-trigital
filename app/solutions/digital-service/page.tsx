import Section from '@/components/Section';

export default function DigitalService() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Digital Service</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Deliver exceptional customer service at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-primary to-secondary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">🎯</div>
                <p>Service Excellence</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Customer Service Platform</h2>
                <p className="text-base-content/70 leading-relaxed">
                  Manage customer inquiries across multiple channels with a unified service platform. Automate
                  routine tasks, reduce resolution time, and improve customer satisfaction.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Service Capabilities</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Multi-channel support</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>AI-powered chatbots</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Ticketing system</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Knowledge base</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['Support', 'Knowledge', 'Analytics'].map((service) => (
              <div key={service} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary">{service}</h3>
                  <p className="text-base-content/70 text-sm">
                    {service === 'Support'
                      ? 'Multi-channel customer support'
                      : service === 'Knowledge'
                      ? 'Self-service knowledge portal'
                      : 'Service metrics and insights'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Deliver Better Service, Faster</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Reduce support costs while improving customer satisfaction scores
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
