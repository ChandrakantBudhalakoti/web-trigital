import Section from '@/components/Section';

export default function DeploymentModel() {
  const deploymentOptions = [
    {
      type: 'Cloud (SaaS)',
      description: 'Multi-tenant cloud deployment',
      benefits: ['No infrastructure management', 'Automatic updates', 'High availability'],
      ideal: 'Best for rapid deployment and scalability',
    },
    {
      type: 'Private Cloud',
      description: 'Dedicated cloud infrastructure',
      benefits: ['Complete control', 'Enhanced security', 'Custom configurations'],
      ideal: 'Best for enterprises with strict compliance requirements',
    },
    {
      type: 'On-Premise',
      description: 'Self-hosted deployment',
      benefits: ['Maximum control', 'Data sovereignty', 'Legacy system integration'],
      ideal: 'Best for organizations with legacy infrastructure',
    },
    {
      type: 'Hybrid',
      description: 'Combination of cloud and on-premise',
      benefits: ['Flexibility', 'Optimal resource usage', 'Gradual migration'],
      ideal: 'Best for complex enterprise environments',
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Deployment Models</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Choose the deployment option that best fits your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deploymentOptions.map((option) => (
              <div key={option.type} className="card bg-base-100 shadow hover:shadow-lg transition">
                <div className="card-body">
                  <h3 className="card-title text-primary text-xl">{option.type}</h3>
                  <p className="text-base-content/70 mb-4">{option.description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-secondary mb-2 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {option.benefits.map((benefit) => (
                          <li key={benefit} className="text-sm text-base-content/70 flex gap-2">
                            <span className="text-secondary">→</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="badge badge-outline">{option.ideal}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Deployment Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-4 font-bold text-primary">Aspect</th>
                    <th className="text-center p-4 font-bold text-primary">Cloud</th>
                    <th className="text-center p-4 font-bold text-primary">Private</th>
                    <th className="text-center p-4 font-bold text-primary">On-Premise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-base-300">
                    <td className="p-4 font-medium">Setup Time</td>
                    <td className="text-center p-4">Days</td>
                    <td className="text-center p-4">Weeks</td>
                    <td className="text-center p-4">Months</td>
                  </tr>
                  <tr className="border-b border-base-300">
                    <td className="p-4 font-medium">Maintenance</td>
                    <td className="text-center p-4">Managed</td>
                    <td className="text-center p-4">Shared</td>
                    <td className="text-center p-4">Your Team</td>
                  </tr>
                  <tr className="border-b border-base-300">
                    <td className="p-4 font-medium">Cost</td>
                    <td className="text-center p-4">Low</td>
                    <td className="text-center p-4">Medium</td>
                    <td className="text-center p-4">High</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Customization</td>
                    <td className="text-center p-4">Medium</td>
                    <td className="text-center p-4">High</td>
                    <td className="text-center p-4">Very High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Not Sure Which Model to Choose?</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Our deployment specialists can help you select the perfect option for your organization
            </p>
            <a href="/contact-us" className="btn btn-primary">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
