import Section from '@/components/Section';

export default function AppDevelopment() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">App Development</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Custom applications built for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Full-Stack Development</h2>
                <p className="text-base-content/70 leading-relaxed">
                  Our expert development team builds robust, scalable applications using the latest technologies.
                  From mobile apps to enterprise platforms, we deliver solutions that drive business value.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Services</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Web application development</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Mobile app development</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>API development</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Enterprise solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">💻</div>
                <p>Custom Apps</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Frontend</h3>
                <p className="text-base-content/70 mb-4">
                  React, Vue, Angular expertise for engaging user experiences
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Backend</h3>
                <p className="text-base-content/70 mb-4">
                  Node.js, Python, Java for scalable server architecture
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Mobile</h3>
                <p className="text-base-content/70 mb-4">
                  iOS and Android native and cross-platform development
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">DevOps</h3>
                <p className="text-base-content/70 mb-4">
                  CI/CD, containerization, and cloud deployment
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Build Something Great</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact-us" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="/demo" className="btn btn-outline btn-primary">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
