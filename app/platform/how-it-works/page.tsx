import Section from '@/components/Section';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect Your Systems',
      description: 'Link your existing applications, databases, and tools to Nipige in minutes',
    },
    {
      number: '2',
      title: 'Configure Workflows',
      description: 'Design automated workflows that match your business processes',
    },
    {
      number: '3',
      title: 'Enable Collaboration',
      description: 'Let your teams collaborate seamlessly with real-time updates',
    },
    {
      number: '4',
      title: 'Monitor & Optimize',
      description: 'Track performance with advanced analytics and continuously optimize',
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">How Nipige Works</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Simple steps to transform your digital operations
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-base-content/70 text-lg">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-8 w-1 h-20 bg-primary/20 -ml-16 mt-20" />
                )}
              </div>
            ))}
          </div>

          <div className="bg-base-200 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Key Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Integration Hub</h3>
                <p className="text-base-content/70">
                  Connects to 100+ applications with pre-built connectors and custom API support
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Workflow Engine</h3>
                <p className="text-base-content/70">
                  Powerful automation engine with drag-and-drop workflow builder
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Analytics Dashboard</h3>
                <p className="text-base-content/70">
                  Real-time insights with customizable dashboards and reports
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Collaboration Suite</h3>
                <p className="text-base-content/70">
                  Built-in messaging, task management, and team collaboration tools
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Ready to Get Started?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/platform/key-features" className="btn btn-outline btn-primary">
                Explore Features
              </a>
              <a href="/demo" className="btn btn-primary">
                See Demo
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
