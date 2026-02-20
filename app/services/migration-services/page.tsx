import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Migration Services | Trigital Tech",
  description:
    "Application, database, infrastructure migration. Seamless cloud and data center migration with minimal downtime.",
  keywords:
    "migration services, cloud migration, application migration, database migration, infrastructure migration, data migration, legacy migration, ETL migration, enterprise migration, migration strategy, cloud infrastructure migration",
  path: "/services/migration-services",
});

const schema = getServiceSchema({
  name: "Migration Services",
  description: "Application, database, infrastructure migration. Seamless cloud and data center migration with minimal downtime.",
  url: `${SITE_URL}/services/migration-services`,
});

export default function MigrationServices() {
  const services = [
    {
      title: "Enterprise Level Migration Strategy",
      description:
        "Trigital specializes in building robust Enterprise Level Migration strategic planning, risk mitigation, and scalable solutions, ensuring a successful and efficient transition to new technological landscapes. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Comprehensive Assessment : Trigital conducts thorough evaluations of existing infrastructure, applications, and data to inform migration strategies.",
        "Strategic Road Mapping : Developing tailored migration roadmaps aligned with business objectives, Trigital ensures a phased and seamless transition.",
        "Risk Mitigation : Identifying potential challenges, Trigital implements risk mitigation strategies to minimize disruptions during migration.",
        "Scalable Solutions : Designing migration strategies that accommodate business growth, Trigital ensures adaptability to evolving needs.",
      ],
      image: "/assets/images/Nipige/migration_Service_Strategy.svg",
    },
    {
      title: "ETL for Easy Data Migration",
      description:
        "Trigital excels in ETL (Extract, Transform, Load) for Easy Data Migration, empowers businesses with a streamlined, automated, and quality-focused approach to data migration, facilitating a smooth transition between systems. Trigital’s ETL services benefits:",
      bullets: [
        "Efficient Data Extraction : Trigital streamlines the extraction process from various sources, ensuring data readiness for migration.",
        "Transformative Processes : Leveraging ETL methodologies, Trigital transforms data to meet the format and structure requirements of the target environment.",
        "Automated Loading : Trigital automates the loading of transformed data into the destination, minimizing manual efforts and reducing errors.",
        "Data Quality Assurance : Implementing rigorous data quality checks, Trigital ensures the accuracy and reliability of migrated data.",
      ],
      image: "/assets/images/Nipige/migration_Service_Data_Migration.svg",
    },
    {
      title: "Cloud Migration",
      description:
        "Trigital’s Cloud Migration Consulting empower businesses with strategic planning, risk mitigation, and efficient execution, ensuring a secure and successful transition to cloud-based operations. Trigital’s cloud migration benefits:",
      bullets: [
        "Strategic Planning : Trigital develops tailored cloud migration strategies aligned with business objectives, ensuring a smooth and efficient transition.",
        "Risk Assessment : Businesses benefit from Trigital’s comprehensive risk assessments, identifying potential challenges and mitigating risks associated with cloud migration.",
        "Data Migration Expertise : Trigital offers expertise in migrating data to the cloud, ensuring minimal downtime and preserving data integrity.",
        "Infrastructure Optimization : By optimizing cloud resources, Trigital helps businesses maximize cost-effectiveness and performance.",
      ],
      image: "/assets/images/Nipige/migration_Service_Cloud_Migration.svg",
    },
    {
      title: "Legacy Application Migration",
      description:
        "Trigital’s Legacy Application Migration services empower businesses to embrace innovation, improve agility, and unlock the full potential of their IT infrastructure in the modern digital landscape for a seamless transition from legacy systems to modern, scalable, and efficient platforms. Trigital’s legacy application migration services benefits:",
      bullets: [
        "Comprehensive Assessment : Trigital conducts a thorough evaluation of existing legacy applications, identifying areas for improvement and modernization.",
        "Strategic Road Mapping : Developing a customized migration roadmap, Trigital ensures a phased and smooth transition, minimizing disruptions.",
        "Technology Modernization : Leveraging contemporary technologies, Trigital updates and modernizes legacy applications to align with current industry standards.",
        "Data Migration Expertise : Ensuring a seamless transfer of data from legacy to modern systems, Trigital preserves data integrity throughout the migration process.",
      ],
      image: "/assets/images/Nipige/migration_Service_App_Migration.svg",
    },
    {
      title: "Cloud Infrastructure Migration",
      description:
        "Trigital’s Cloud Infrastructure Migration services empower businesses with strategic planning, efficient data migration, and optimized resource utilization, ensuring a smooth and secure transition to the cloud. Trigital’s cloud infrastructure migration benefits:",
      bullets: [
        "Strategic Planning : Trigital develops customized migration strategies aligned with business goals, ensuring a well-defined and efficient roadmap.",
        "Infrastructure Assessment : Conducting a thorough evaluation of existing infrastructure, Trigital identifies optimization opportunities for the cloud environment.",
        "Data Migration with Security Compliance : Utilizing advanced tools, facilitates the safeguard and efficient migration of data, preserving integrity & accessibility, and adhering to compliance requirements.",
        "Cost-Effective Resource Utilization : Trigital optimizes cloud resources, balancing performance with cost-effectiveness to maximize operational efficiency.",
      ],
      image: "/assets/images/Nipige/migration_Service_Cloud_Infra.svg",
    },
    {
      title: "Digital Transformation Advisory",
      description:
        "Trigital’s Digital Transformation Advisory services empower businesses with strategic planning, technological innovation, and organizational agility, ensuring a successful and sustainable digital transformation journey. Trigital’s digital transformation advisory benefits:",
      bullets: [
        "Strategic Roadmaps : Developing customized plans aligned with business objectives, Trigital ensures a clear path for digital transformation.",
        "Technology Assessment : Evaluating existing systems, Trigital identifies opportunities for technological improvement and innovation.",
        "Change Management : Facilitating organizational change, Trigital supports businesses in adopting new technologies and processes seamlessly.",
        "Data-Driven Insights : T Leveraging data analytics, Trigital empowers businesses with actionable insights for informed decision-making.",
      ],
      image:
        "/assets/images/Nipige/service_Digital_Transformation_Advisory_.svg",
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      {/* ============================================
          1️⃣ HERO SECTION
          ============================================ */}
      <section className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Title + Description */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Migration Services
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Trigital involve transitioning from one system, platform, or
                technology to another. This includes database, application,
                platform, cloud, operating system, and data migrations.
                Companies offering migration services help plan, execute, and
                manage the transition process, ensuring a smooth and efficient
                move with minimal disruptions.
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="relative w-full h-[320px] md:h-[420px] mt-10 md:mt-0">
              <Image
                src="/assets/images/Nipige/migration_Service.svg"
                alt="Migration Services"
                fill
                priority
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-white" : "bg-[#EBF7FF]";

        return (
          <section key={service.title} className={`${bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="md:grid md:grid-cols-2 gap-12 items-center">
                {!isEven && (
                  <div className="relative w-full h-[350px] mb-8 md:mb-0 order-2 md:order-1">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain rounded-2xl shadow-md"
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {service.description}
                  </p>
                  {service.bullets && service.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image - Right for even sections */}
                {isEven && (
                  <div className="relative w-full h-[350px] mt-8 md:mt-0 order-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain rounded-2xl shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="text-center space-y-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary">Ready to Migrate?</h2>

          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="/contact-us"
              className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold"
            >
              Start Assessment
            </a>

            <a
              href="/contact-us?source=demo"
              className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
