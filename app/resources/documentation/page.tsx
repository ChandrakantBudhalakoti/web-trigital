import Section from '@/components/Section';

export default function Documentation() {
  const docSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and initial setup instructions',
      links: ['Installation Guide', 'Configuration', 'First Steps'],
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      links: ['Authentication', 'Endpoints', 'Webhooks', 'SDK Reference'],
    },
    {
      title: 'Integration Guides',
      description: 'How to integrate with popular platforms',
      links: ['Salesforce Integration', 'SAP Integration', 'Custom APIs'],
    },
    {
      title: 'Deployment',
      description: 'Deploy and manage your infrastructure',
      links: ['Cloud Deployment', 'On-Premise Setup', 'Hybrid Models'],
    },
    {
      title: 'Security',
      description: 'Security best practices and compliance',
      links: ['Authentication', 'Data Protection', 'Compliance'],
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      links: ['FAQ', 'Error Codes', 'Performance Tuning'],
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Documentation</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Comprehensive guides and API documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docSections.map((section, index) => (
              <div key={index} className="card bg-base-100 shadow hover:shadow-lg transition">
                <div className="card-body">
                  <h3 className="card-title text-primary text-lg">{section.title}</h3>
                  <p className="text-base-content/70 text-sm mb-4">{section.description}</p>
                  <div className="space-y-2">
                    {section.links.map((link) => (
                      <a key={link} href="#" className="text-primary hover:underline text-sm block">
                        → {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-base-200 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-primary">Video Tutorials</h3>
                  <p className="text-base-content/70 mb-4">
                    Step-by-step video guides for common tasks
                  </p>
                  <a href="#" className="btn btn-outline btn-sm">
                    Watch Videos
                  </a>
                </div>
              </div>
              <div className="card bg-base-100">
                <div className="card-body">
                  <h3 className="card-title text-primary">Community Forum</h3>
                  <p className="text-base-content/70 mb-4">
                    Connect with other users and get answers
                  </p>
                  <a href="#" className="btn btn-outline btn-sm">
                    Join Forum
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Can't Find What You're Looking For?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact-us" className="btn btn-primary">
                Contact Support
              </a>
              <a href="/resources/blogs" className="btn btn-outline btn-primary">
                Read Blog Posts
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
