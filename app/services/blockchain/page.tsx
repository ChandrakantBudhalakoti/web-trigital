import Section from "@/components/Section";
import {
  CubeTransparentIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function Blockchain() {
  const services = [
    "Smart contract development",
    "DApp development",
    "Blockchain consulting",
    "Security audits",
  ];

  const solutions = [
    { title: "Ethereum", desc: "Smart contracts and decentralized apps" },
    { title: "Hyperledger", desc: "Enterprise blockchain networks" },
    { title: "Supply Chain", desc: "Traceability and transparency" },
    { title: "Crypto & Tokens", desc: "Tokenization and digital assets" },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">

          {/* TITLE */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-extrabold text-primary tracking-tight">
              Blockchain Services
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade blockchain consulting and decentralized application development
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT visual */}
            <div className="rounded-2xl bg-gradient-to-br from-secondary/60 to-primary/40 p-12 min-h-[300px] flex items-center justify-center shadow-xl backdrop-blur">
              <CubeTransparentIcon className="w-32 h-32 text-white opacity-90" />
            </div>

            {/* RIGHT content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Decentralized Solutions</h2>
              <p className="text-base-content/70 text-lg leading-relaxed">
                Build secure and transparent decentralized applications using blockchain
                technology. We work with public and private blockchains to develop scalable,
                production-ready solutions.
              </p>

              <h3 className="font-bold text-secondary text-lg">Services</h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base-content">
                    <CheckBadgeIcon className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SOLUTIONS GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map(({ title, desc }) => (
              <div
                key={title}
                className="
                  p-6 bg-base-100 rounded-xl border border-base-300
                  shadow hover:shadow-xl hover:-translate-y-1 transition duration-300
                "
              >
                <h3 className="text-primary font-bold text-xl">{title}</h3>
                <p className="text-base-content/70 text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-6 space-y-6">
            <h2 className="text-3xl font-bold text-primary">Build Trustless Systems</h2>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact-us"
                className="
                  btn bg-primary border border-primary text-white px-8 py-3 shadow-md rounded-xl
                  hover:-translate-y-1 hover:shadow-xl transition
                "
              >
                Consult Our Experts
              </a>
              <a
                href="/demo"
                className="
                  btn border border-primary text-primary px-8 py-3 rounded-xl
                  hover:bg-primary hover:text-white transition
                "
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
