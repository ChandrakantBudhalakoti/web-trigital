import Section from "@/components/Section";
import {
  ChartBarIcon,
  ServerStackIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CloudArrowDownIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export default function BigDataAnalytics() {
  const capabilities = [
    { label: "Data warehouse design", icon: ServerStackIcon },
    { label: "ETL pipeline development", icon: CloudArrowDownIcon },
    { label: "Real-time analytics", icon: CpuChipIcon },
    { label: "Business intelligence", icon: Squares2X2Icon },
  ];

  const stack = [
    {
      title: "Hadoop",
      desc: "Distributed compute + storage for massive datasets",
    },
    {
      title: "Spark",
      desc: "High-performance distributed cluster computing",
    },
    {
      title: "Snowflake",
      desc: "Cloud-native modern data warehouse platform",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HERO */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl text-primary font-extrabold tracking-tight">
              Big Data Analytics
            </h1>

            <p className="text-xl max-w-2xl mx-auto text-base-content/70 leading-relaxed">
              Turn massive enterprise data into actionable intelligence and
              business value.
            </p>
          </div>

          {/* TOP GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="
                rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl
                shadow-xl p-12 min-h-[260px] flex flex-col items-center justify-center
              "
            >
              <ChartBarIcon className="w-28 h-28 text-primary opacity-90" />
              <p className="text-white/80 mt-4 text-xl font-semibold">
                Data Intelligence
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">
                  Data-Driven Decisions
                </h2>

                <p className="text-base-content/70 leading-relaxed text-lg">
                  We help enterprises process, unify and analyze large datasets
                  to uncover insights that enable strategic decision-making and
                  innovation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-secondary text-lg">
                  Capabilities
                </h3>

                <ul className="space-y-3">
                  {capabilities.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-3 text-base-content"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="grid md:grid-cols-3 gap-8">
            {stack.map(({ title, desc }) => (
              <div
                key={title}
                className="
                  rounded-xl bg-base-100 border border-base-300 p-8 shadow
                  hover:shadow-xl hover:-translate-y-1 transition duration-300
                "
              >
                <ServerStackIcon className="w-8 h-8 text-primary" />

                <h3 className="text-lg font-bold text-primary mt-3">{title}</h3>
                <p className="text-base-content/70 mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Harness Your Data
            </h2>

            <p className="text-base-content/70 max-w-2xl mx-auto leading-relaxed">
              Transform raw enterprise data into competitive advantage through
              predictive analytics and real-time insight generation.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-xl border border-primary bg-primary text-white shadow-lg 
                  hover:shadow-xl hover:-translate-y-1 transition font-semibold
                "
              >
                Discuss Your Data
              </a>

              <a
                href="/demo"
                className="
                  px-10 py-3 rounded-xl border border-primary text-primary font-semibold
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition
                "
              >
                See Examples
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
