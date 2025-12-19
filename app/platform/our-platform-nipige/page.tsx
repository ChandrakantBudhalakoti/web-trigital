import Section from '@/components/Section';

export default function OurPlatformNipige() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Our Platform Nipige</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              The next-generation platform for seamless digital operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">What is Nipige?</h2>
              <p className="text-base-content/70 leading-relaxed">
                Nipige is a revolutionary platform that simplifies complex digital operations by providing an
                integrated, user-friendly environment. It connects all your business processes, tools, and teams
                into one seamless ecosystem.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-base-content">
                  <span className="text-secondary">✓</span>
                  <span>Unified workspace for all teams</span>
                </li>
                <li className="flex gap-2 text-base-content">
                  <span className="text-secondary">✓</span>
                  <span>Intelligent workflow automation</span>
                </li>
                <li className="flex gap-2 text-base-content">
                  <span className="text-secondary">✓</span>
                  <span>Real-time collaboration tools</span>
                </li>
                <li className="flex gap-2 text-base-content">
                  <span className="text-secondary">✓</span>
                  <span>Advanced analytics and insights</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent to-primary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">Nipige</div>
                <p>Platform for Digital Operations</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['Unified', 'Intelligent', 'Collaborative'].map((feature) => (
              <div key={feature} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary">{feature}</h3>
                  <p className="text-base-content/70">
                    {feature === 'Unified'
                      ? 'All your tools, systems, and data in one place'
                      : feature === 'Intelligent'
                      ? 'AI-powered insights and automation'
                      : 'Real-time collaboration across teams'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">Transform Your Operations</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Join leading organizations in streamlining their digital operations with Nipige
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
