import Section from '@/components/Section';

export default function Integration() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Integration Services</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Connect all your systems and data seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">System Integration</h2>
                <p className="text-base-content/70 leading-relaxed">
                  We integrate disparate systems, applications, and data sources to create a unified digital
                  ecosystem. Our integration solutions ensure real-time data flow and process automation.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Integration Types</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>API integration</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Database integration</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Legacy system integration</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>ETL and data pipelines</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">🔗</div>
                <p>Connected Systems</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">REST APIs</h3>
                <p className="text-base-content/70 mb-4">
                  Modern API integration patterns and protocols
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Message Queues</h3>
                <p className="text-base-content/70 mb-4">
                  Asynchronous integration using Kafka, RabbitMQ, and more
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Enterprise Connectors</h3>
                <p className="text-base-content/70 mb-4">
                  Pre-built connectors for popular enterprise systems
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Custom Adapters</h3>
                <p className="text-base-content/70 mb-4">
                  Custom integration for unique business requirements
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Unify Your Systems</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Break down silos and enable seamless data flow across your organization
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact-us" className="btn btn-primary">
                Assess Integration Needs
              </a>
              <a href="/demo" className="btn btn-outline btn-primary">
                See Examples
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
