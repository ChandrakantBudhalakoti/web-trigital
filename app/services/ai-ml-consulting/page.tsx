import Section from '@/components/Section';

export default function AIMLConsulting() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">AI/ML Consulting</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Leverage artificial intelligence and machine learning to drive business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Intelligent Solutions</h2>
                <p className="text-base-content/70 leading-relaxed">
                  Our AI and ML experts help you identify opportunities where intelligent systems can drive
                  competitive advantage. We design, build, and deploy custom AI/ML solutions tailored to your needs.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Services</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>AI strategy & roadmap</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Natural language processing</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Computer vision</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">🤖</div>
                <p>AI Intelligence</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Machine Learning</h3>
                <p className="text-base-content/70 mb-4">
                  Custom ML models for classification, regression, and clustering tasks
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Deep Learning</h3>
                <p className="text-base-content/70 mb-4">
                  Neural networks for complex pattern recognition and analysis
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Data Science</h3>
                <p className="text-base-content/70 mb-4">
                  Advanced analytics and data-driven insights
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">LLM Applications</h3>
                <p className="text-base-content/70 mb-4">
                  Custom applications using large language models
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Unlock AI Potential</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact-us" className="btn btn-primary">
                Consult Our Experts
              </a>
              <a href="/demo" className="btn btn-outline btn-primary">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
