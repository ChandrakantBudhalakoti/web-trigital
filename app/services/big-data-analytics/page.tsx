import Section from '@/components/Section';

export default function BigDataAnalytics() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Big Data Analytics</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Turn massive data into actionable business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-secondary to-primary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">📊</div>
                <p>Data Intelligence</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Data-Driven Decisions</h2>
                <p className="text-base-content/70 leading-relaxed">
                  We help enterprises process and analyze massive datasets to uncover insights that drive
                  strategic decisions. Our solutions scale to handle petabytes of data.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Capabilities</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Data warehouse design</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>ETL pipeline development</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Real-time analytics</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Business intelligence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['Hadoop', 'Spark', 'Snowflake'].map((tech) => (
              <div key={tech} className="card bg-base-100 shadow">
                <div className="card-body">
                  <h3 className="card-title text-primary">{tech}</h3>
                  <p className="text-base-content/70 text-sm">
                    {tech === 'Hadoop'
                      ? 'Distributed data processing at scale'
                      : tech === 'Spark'
                      ? 'Fast cluster computing framework'
                      : 'Cloud data warehouse platform'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Harness Your Data</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Transform raw data into strategic competitive advantage
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact-us" className="btn btn-primary">
                Discuss Your Data
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
