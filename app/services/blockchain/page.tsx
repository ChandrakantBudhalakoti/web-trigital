import Section from '@/components/Section';

export default function Blockchain() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Blockchain Services</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Innovative blockchain solutions for trust and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-secondary to-primary/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">⛓️</div>
                <p>Blockchain Solutions</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Decentralized Solutions</h2>
                <p className="text-base-content/70 leading-relaxed">
                  Leverage blockchain technology to build transparent, secure, and decentralized applications.
                  Our experts have deep experience with multiple blockchain platforms and protocols.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary text-lg">Services</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Smart contract development</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>DApp development</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Blockchain consulting</span>
                  </li>
                  <li className="flex gap-2 text-base-content">
                    <span className="text-secondary">✓</span>
                    <span>Security audits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Ethereum</h3>
                <p className="text-base-content/70 mb-4">
                  Smart contracts and DApp development on Ethereum
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Hyperledger</h3>
                <p className="text-base-content/70 mb-4">
                  Enterprise blockchain solutions with Hyperledger Fabric
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Supply Chain</h3>
                <p className="text-base-content/70 mb-4">
                  Blockchain for supply chain transparency
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title text-primary">Crypto</h3>
                <p className="text-base-content/70 mb-4">
                  Cryptocurrency and token development
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Build Trustless Systems</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact-us" className="btn btn-primary">
                Consult Our Experts
              </a>
              <a href="/demo" className="btn btn-outline btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
