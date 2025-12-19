import Section from "@/components/Section";
import {
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function OurProductNGB() {
  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-12">
          {/* Title Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
              Our Product NGB©
            </h1>
            <p className="text-xl text-base-content/70 leading-relaxed">
              Next Generation Business platform designed to transform your
              digital operations and drive growth.
            </p>
          </div>

          {/* What Is NGB section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">What is NGB?</h2>
              <p className="text-base-content/80 leading-relaxed">
                NGB© is a comprehensive, enterprise-grade digital enablement
                platform built to help organizations transition rapidly into
                modern business models. It integrates cutting-edge technology
                with proven business practices for end-to-end digital
                transformation.
              </p>

              <ul className="space-y-3">
                {[
                  "Enterprise-grade scalability",
                  "Rapid deployment and integration",
                  "Advanced analytics and reporting",
                  "24/7 dedicated support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 items-start text-base-content/90"
                  >
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gradient Info Block */}
            <div className="rounded-xl p-10 h-80 bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center">
              <div className="text-center text-white space-y-2">
                <div className="text-7xl font-black tracking-wider drop-shadow">
                  NGB©
                </div>
                <p className="opacity-90">Next Generation Business Platform</p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalability",
                Icon: ChartBarIcon,
                desc: "Scale effortlessly as your business grows.",
              },
              {
                title: "Security",
                Icon: ShieldCheckIcon,
                desc: "Enterprise-grade security + compliance.",
              },
              {
                title: "Integration",
                Icon: ArrowsRightLeftIcon,
                desc: "Connect with existing systems seamlessly.",
              },
            ].map(({ title, Icon, desc }) => (
              <div
                key={title}
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-300 p-3 rounded"
              >
                <div className="card-body space-y-3">
                  <Icon className="h-10 w-10 text-primary" />
                  <h3 className="card-title text-primary font-bold">{title}</h3>
                  <p className="text-base-content/70">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-6 justify-center flex-wrap mt-6">
            {/* Primary CTA */}
            <a
              href="/demo"
              className="
    px-10 py-3 rounded-xl font-semibold relative
    bg-blue-600 text-white
    hover:bg-blue-700
   ]
    hover:-translate-y-[2px]
    transition-all duration-300 ease-out
  "
            >
              Schedule Demo
            </a>

            {/* Secondary CTA */}
            <a
              href="/contact-us"
              className="
      px-10 py-3 rounded-xl font-semibold
      border border-white/30 text-white/90 
      hover:border-primary hover:text-primary 
      hover:bg-white/10
      hover:-translate-y-[2px]
      transition-all duration-300 ease-out
      backdrop-blur-sm
    "
            >
              Contact Sales
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
