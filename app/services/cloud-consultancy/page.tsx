import Section from '@/components/Section';

export default function CloudConsultancy() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Cloud Consultancy</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Strategic guidance for your cloud transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Cloud Strategy & Planning</h2>
                <p className="text-base-content/70 leading-relaxed">
                  Our cloud experts help you design a cloud strategy aligned with your business goals. We assess
                  your current infrastructure, recommend optimal cloud platforms, and plan your migration journey.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Our Services</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Cloud readiness assessment</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Platform selection & evaluation</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Architecture design</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Cost optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">☁️</div>
                <p>Cloud Excellence</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">AWS</h3>
                <p className="text-base-content/70 mb-4">
                  Expert AWS consulting and implementation services
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Azure</h3>
                <p className="text-base-content/70 mb-4">
                  Microsoft Azure strategy and deployment
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Google Cloud</h3>
                <p className="text-base-content/70 mb-4">
                  GCP platform expertise and guidance
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Multi-Cloud</h3>
                <p className="text-base-content/70 mb-4">
                  Manage and optimize across multiple clouds
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Start Your Cloud Journey Today</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/demo" className="btn btn-primary">
                Schedule Consultation
              </a>
              <a href="/contact-us" className="btn btn-outline btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
