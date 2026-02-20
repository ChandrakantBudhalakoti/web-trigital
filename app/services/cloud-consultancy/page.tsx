import Image from "next/image";

import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Cloud Consultancy | Trigital Tech",
  description:
    "AWS, Azure, Google Cloud consulting. Cloud readiness, architecture design, migration, and cost optimization. Trigital cloud experts.",
  keywords:
    "cloud consultancy, cloud consulting, AWS consulting, Azure consulting, Google Cloud consulting, cloud migration, cloud architecture, cloud strategy, DevOps, cloud security, multi-cloud, cloud native, API management, cloud monitoring, cost optimization",
  path: "/services/cloud-consultancy",
});

const schema = getServiceSchema({
  name: "Cloud Consultancy",
  description: "AWS, Azure, Google Cloud consulting. Cloud readiness, architecture, migration, cost optimization.",
  url: `${SITE_URL}/services/cloud-consultancy`,
});

const services = [
  {
    title: "Cloud Strategy & Road Map",
    description:
      "Trigital’s Cloud Strategy Consulting enables businesses with strategic, cost-effective, and secure cloud adoption, fostering agility and innovation in the evolving digital landscape. Trigital’s cloud strategy benefits:",
    bullets: [
      "Strategic Roadmaps: Trigital develops tailored cloud strategies aligned with business objectives, outlining a clear path for migration and optimization.",
      "Cost Optimization: Businesses benefit from Trigital’s expertise in optimizing cloud resources, ensuring cost-effectiveness without compromising performance.",
      "Security and Compliance: Trigital prioritizes cloud security, implementing robust measures to protect data and ensure compliance with industry regulations.",
      "Scalability: Trigital designs cloud strategies that scale with business growth, providing an adaptable and responsive infrastructure.",
    ],
    image: "/assets/images/Nipige/service_Cloud_Strategy_Roadmap.svg",
  },
  {
    title: "Application Portfolio Rationalization",
    description:
      "Trigital specializes in Application Portfolio Rationalization Consulting, assisting businesses in optimizing and modernizing their application landscape to ensure optimal alignment with organizational objectives. Trigital’s application portfolio rationalisation benefits:",
    bullets: [
      "Comprehensive Assessment: Trigital conducts a thorough evaluation of the existing application portfolio, identifying redundancies and inefficiencies.",
      "Strategic Prioritization: Through strategic planning, Trigital helps businesses prioritize applications based on alignment with organizational goals and objectives.",
      "Cost Reduction: Trigital guides the removal of redundant or obsolete applications, optimizing costs and resource utilization.",
      "Technology Modernization: Businesses benefit from Trigital’s expertise in recommending modernization strategies to align the application portfolio with evolving technologies.",
    ],
    image: "/assets/images/Nipige/service_App_Portfolio_Rationalisation.svg",
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
    image: "/assets/images/Nipige/service_Cloud_migration.svg",
  },
  {
    title: "Cloud Engineering",
    description:
      "Trigital’s Cloud Engineering Consulting empower businesses with expertly designed, implemented, and optimized cloud solutions, fostering innovation, efficiency, and security in their digital transformation journey. Trigital’s cloud engineering benefits:",
    bullets: [
      "Architectural Design : Trigital designs scalable and resilient cloud architectures tailored to meet specific business needs.",
      "DevOps Integration : Trigital integrates DevOps practices into cloud engineering, ensuring seamless collaboration and continuous improvement.",
      "Performance Optimization : Through ongoing monitoring and optimization, Trigital enhances the performance and efficiency of cloud-based systems.",
      "Security and Compliance : Trigital prioritizes the security and compliance of cloud environments, implementing robust measures to safeguard data and meet industry regulations.",
    ],
    image: "/assets/images/Nipige/service_Cloud_Engineering.svg",
  },
  {
    title: "API Management",
    description:
      "Trigital excels in API Management Consulting, providing businesses with strategic planning, efficient integration, performance monitoring, security, and collaborative development, ensuring a well-orchestrated and secure API ecosystem. Trigital’s API management benefits:",
    bullets: [
      "Strategic API Planning : Trigital develops tailored API strategies aligned with business objectives, ensuring a cohesive and scalable API landscape.",
      "Efficient API Integration : Businesses benefit from Trigital’s expertise in seamlessly integrating APIs with diverse systems, promoting smooth data flow and communication.",
      "Performance Monitoring : Trigital implements robust monitoring tools to ensure the ongoing performance and reliability of APIs, minimizing downtime and latency.",
      "Security Measures : Trigital prioritizes API security, implementing authentication and authorization protocols to safeguard sensitive data.",
    ],
    image: "/assets/images/Nipige/service_Api_Management.svg",
  },
  {
    title: "Cloud Monitoring",
    description:
      "Trigital’s Cloud Monitoring Consulting empowers businesses with proactive, efficient, and secure management of their cloud environments, ensuring optimal performance and minimizing risks. Trigital’s cloud monitoring benefits:",
    bullets: [
      "Proactive Monitoring : Trigital employs advanced tools to monitor cloud infrastructure, applications, and services in real-time.",
      "Performance Optimization : Businesses benefit from ongoing analysis and optimization recommendations, ensuring efficient resource utilization.",
      "Incident Response : Trigital provides rapid incident detection and response, minimizing downtime and mitigating potential disruptions.",
      "Security Surveillance : Trigital enhances cloud security through continuous monitoring, identifying and addressing potential vulnerabilities promptly.",
    ],
    image: "/assets/images/Nipige/service_Cloud_Monitoring.svg",
  },
  {
    title: "DevOps",
    description:
      "Trigital’s DevOps Engineering Consulting empowers businesses with a streamlined, automated, and collaborative approach to software development and infrastructure management, fostering agility and innovation. Trigital’s DevOps engineering benefits:",
    bullets: [
      "Continuous Integration/Continuous Deployment (CI/CD) : Trigital implements CI/CD pipelines for automated and efficient software delivery.",
      "Infrastructure as Code (IaC) : Businesses benefit from Trigital’s IaC expertise, enabling automated and consistent infrastructure provisioning and management.",
      "Collaborative Culture : Trigital fosters a culture of collaboration between development and operations teams, breaking down silos and promoting transparency.",
      "Monitoring and Feedback Loops : With robust monitoring tools, Trigital establishes feedback loops for continuous improvement and quick issue resolution.",
    ],
    image: "/assets/images/Nipige/service_Devops.svg",
  },
  {
    title: "Cloud Security",
    description:
      "Trigital’s Cloud Security Consulting empowers businesses with a proactive, compliant, and responsive approach to safeguarding their cloud environments and critical data. Trigital’s cloud security benefits:",
    bullets: [
      "Comprehensive Risk Assessment : Trigital conducts thorough risk assessments to identify and address potential security vulnerabilities.",
      "Security Architecture Design : Tailoring security architectures to specific business needs, Trigital establishes robust measures for data protection.",
      "Continuous Incident Monitoring : Implementing advanced monitoring tools, Trigital ensures real-time surveillance, incident response, and recovery strategies to detect security threats promptly, and minimize the potential damage.",
      "Regulatory Compliance : Trigital helps businesses adhere to industry regulations, ensuring their cloud operations comply with data protection and privacy standards.",
    ],
    image: "/assets/images/Nipige/service_Cloud_Security.svg",
  },
  {
    title: "Multi-Cloud Engineering",
    description:
      "Trigital’s Multi-Cloud Engineering Consulting empowers businesses with a strategic, cost-efficient, and secure approach to managing workloads and data across multiple cloud platforms. Trigital’s multi-cloud engineering benefits:",
    bullets: [
      "Strategic Multi-Cloud Architecture : Trigital designs customized architectures, ensuring seamless integration and collaboration across multiple cloud platforms.",
      "Efficient Workload Management : Businesses benefit from optimized workload distribution, enhancing performance and resource utilization.",
      "Cost Optimization : Trigital provides strategies to optimize costs across multiple cloud providers, ensuring a cost-effective and efficient multi-cloud setup.",
      "Interoperability Solutions : Facilitating interoperability between diverse cloud platforms, Trigital ensures smooth data flow and communication.",
    ],
    image: "/assets/images/Nipige/service_Multi_Cloud_Engineering.svg",
  },
  {
    title: "Cloud Native Engineering",
    description:
      "Trigital’s Cloud Native Engineering Consulting empowers businesses with modern, scalable, and efficient solutions, facilitating a smooth transition to cloud-native architectures. Trigital’s cloud-native engineering benefits:",
    bullets: [
      "Micro-services Architecture : Trigital designs and implements micro-services architectures for enhanced flexibility and agility.",
      "Container Orchestration : Leveraging container orchestration tools, Trigital ensures efficient deployment, scaling, and management of applications.",
      "Server-less Computing : Trigital helps businesses embrace server-less computing, optimizing resource utilization and reducing operational overhead.",
      "Continuous Integration/Continuous Deployment (CI/CD) : Implementing CI/CD pipelines, Trigital enables automated and rapid software delivery.",
    ],
    image: "/assets/images/Nipige/service_Cloud_Native_Engineering.svg",
  },
  {
    title: "Cost Optimization Engineering",
    description:
      "Trigital’s Cost Optimization Engineering Consulting empowers businesses with strategic analysis, infrastructure rationalization, and continuous monitoring, ensuring sustained cost-effectiveness in their operations. Trigital’s cost optimization engineering benefits:",
    bullets: [
      "Comprehensive Cost Analysis : Trigital conducts in-depth assessments to identify cost drivers and opportunities for optimization.",
      "Infrastructure Rationalization : Helping businesses right-size their infrastructure, Trigital ensures optimal resource utilization to avoid unnecessary costs.",
      "Cloud Resource Optimization : Leveraging cloud cost management tools, Trigital optimizes cloud resources to minimize expenditure while maintaining performance.",
      "Process Automation : Implementing automation for routine tasks, Trigital reduces manual efforts, streamlining processes and minimizing labour costs.",
    ],
    image: "/assets/images/Nipige/service_Cost_Optimization_Engineering_.svg",
  },
  {
    title: "Digital Transformation Advisory",
    description:
      "Trigital’s Cloud Native Engineering Consulting empowers businesses with modern, scalable, and efficient solutions, facilitating a smooth transition to cloud-native architectures. Trigital’s cloud-native engineering benefits:",
    bullets: [
      "Strategic Roadmaps : Developing customized plans aligned with business objectives, Trigital ensures a clear path for digital transformation.",
      "Technology Assessment : Evaluating existing systems, Trigital identifies opportunities for technological improvement and innovation.",
      "Change Management: Facilitating organizational change, Trigital supports businesses in adopting new technologies and processes seamlessly.",
      "Data-Driven Insights : Leveraging data analytics, Trigital empowers businesses with actionable insights for informed decision-making.",
    ],
    image: "/assets/images/Nipige/service_Digital_Transformation_Advisory_.svg",
  },
];

export default function CloudConsultancy() {
  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Consultancy
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Trigital optimizes operations with seamless cloud solutions,
                from migration strategies to scalable architectures. Trust us to
                navigate the cloud for your success, embracing efficiency,
                security, and innovation with expert guidance.
              </p>
            </div>

            <div className="relative w-full h-[400px] md:h-[450px]">
              <Image
                src="/assets/images/Nipige/service_Cloud_Consultancy.svg"
                alt="Cloud Consultancy"
                fill
                className="object-contain rounded-2xl"
                priority
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
          <h2 className="text-3xl font-bold text-primary">
            Start Your Cloud Journey Today
          </h2>

          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="/contact-us?source=demo"
              className="
                  px-10 py-3 rounded-xl border border-primary text-primary
                  text-lg font-semibold hover:bg-primary  hover:-translate-y-1 transition
                "
            >
              Schedule Consultation
            </a>

            <a
              href="/contact-us"
              className="
                  px-10 py-3 rounded-xl border border-primary text-primary
                  text-lg font-semibold hover:bg-primary  hover:-translate-y-1 transition
                "
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
