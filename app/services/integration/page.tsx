import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Integration Services | Trigital Tech",
  description:
    "Connect systems, apps, data pipelines. API integration, legacy modernization, enterprise connectivity. Trigital integration experts.",
  keywords:
    "integration services, API integration, system integration, data integration, ETL services, legacy system integration, enterprise integration, cloud integration, payment gateway integration, message queue integration, REST API, GraphQL, microservices integration",
  path: "/services/integration",
});

const schema = getServiceSchema({
  name: "Integration Services",
  description: "Connect systems, applications, data pipelines. API integration, legacy modernization, enterprise connectivity.",
  url: `${SITE_URL}/services/integration`,
});

const services = [
  {
    title: "System Integration",
    description:
      "Trigital is your strategic partner in System Integration services, offering tailored solutions to enhance the efficiency and agility of your business operations by integrating diverse IT systems for seamless communication and data flow. Partnering with Trigital brings the following benefits:",
    bullets: [
      "Custom Solutions: Tailored system integration solutions to meet your specific business needs.",
      "Technology Agnostic Approach: Integration across various systems and technologies for flexibility.",
      "Security Measures: Robust security implementations to protect sensitive data and ensure compliance.",
      "Ongoing Support: Continuous support and maintenance services for sustained operational excellence.",
    ],
    image: "/assets/images/Nipige/system_Integration_.svg",
  },
  {
    title: "Data Integration",
    description:
      "Trigital’s Data Integration services empower businesses with a holistic, real-time, and scalable approach to data management, fostering agility and competitiveness in today’s dynamic business landscape. Through its innovative solutions, Trigital’s benefits:",
    bullets: [
      "Unified Data Ecosystems: Facilitates the cohesive data ecosystems, ensuring seamless integration across various platforms & formats.",
      "Real-time Data Access: Real-time access to critical information, enabling quicker response to market changes and opportunities.",
      "Enhanced Data Quality: Robust data cleansing & validation processes ensure accuracy, reliability, and consistency in the integrated datasets.",
      "Scalable Architecture: To grow with the evolving needs of businesses, we design a scalable architecture to handle increasing volumes of data.",
    ],
    image: "/assets/images/Nipige/data_Integration_.svg",
  },
  {
    title: "Cloud Integration",
    description:
      "Trigital excels in delivering Cloud Integration services that empower businesses to harness the full potential of cloud technologies. With a focus on seamless connectivity and optimized operations, Trigital’s Cloud Integration services benefits:",
    bullets: [
      "Scalable Cloud Solutions : To scale business operations effortlessly we design and implement cloud integration solutions that align to growth trajectory.",
      "Data Synchronization : We ensure real-time data synchronization across various cloud platforms, promoting consistency and accuracy in information.",
      "Cost-Efficiency : By leveraging cloud resources efficiently, we help businesses optimize costs associated to infrastructure, maintenance, and operations.",
      "Security and Compliance : Trigital ensures secure, compliant cloud systems with robust measures for data protection and industry regulations.",
    ],
    image: "/assets/images/Nipige/cloud_Integration_.svg",
  },
  {
    title: "API Integration",
    description:
      "Trigital stands out in API Integration services, we empower businesses with a tailored, real-time, and user-centric approach to system connectivity and data flow, Trigital’s API Integration services benefits:",
    bullets: [
      "Customized API Solutions : Trigital tailors API integrations to meet specific business needs, promoting flexibility and scalability.",
      "Enhanced User Experience : By optimizing API interactions, we contribute to an improved user experience for both internal and external stakeholders.",
      "Real-time Data Flow : Businesses benefit from real-time data access and synchronization across applications, enhancing operational agility.",
      "Error Handling and Monitoring : Trigital implements robust error handling mechanisms and monitoring tools to ensure the reliability of API integrations.",
    ],
    image: "/assets/images/Nipige/api_Integration_.svg",
  },
  {
    title: "Enterprise Resource Planning (ERP) Integration",
    description:
      "Trigital’s Enterprise Resource Planning(ERP) Integration services enable businesses to maximize the potential of their ERP systems, promoting efficiency, accuracy, and agility in their day-to-day operations. Trigital’s ERP Integration services benefits:",
    bullets: [
      "Seamless Integration : Trigital seamlessly integrates any ERP systems, fostering harmonious data flow and collaboration across departments.",
      "Customized Solutions : We tailor ERP integrations to suit the unique requirements of each business, ensuring a perfect fit for their operations.",
      "Real-time Insights : ERP Integration by Trigital provides real-time insights, empowering businesses with up-to-the-minute information for strategic decision-making.",
      "Automation and Efficiency : By automating workflows and processes, Trigital boosts operational efficiency, reducing manual efforts and minimizing errors.",
    ],
    image:
      "/assets/images/Nipige/enterprise_Resource_Planning_Integration_.svg",
  },
  {
    title: "Middleware Solutions Integration",
    description:
      "Trigital’s Middleware Solutions Integration services empower businesses with a flexible, efficient, and future-ready IT infrastructure, enabling seamless communication and data exchange across their systems. Trigital’s middleware integration benefits:",
    bullets: [
      "Seamless Communication : Trigital facilitates smooth communication between diverse middleware software applications and systems.",
      "Efficient Data Exchange : Businesses benefit from optimized data exchange, ensuring timely and accurate information flow across the organization.",
      "Customized Middleware Architecture : Trigital tailors middleware solutions to align with the specific needs of each business, promoting flexibility and scalability.",
      "Improved System Performance : By integrating middleware, Trigital enhances overall system performance, reducing latency and ensuring responsive applications.",
    ],
    image: "/assets/images/Nipige/middleware_Solutions_Integration_.svg",
  },
  {
    title: "Business Process Integration",
    description:
      "Trigital’s Business Process Integration services empower businesses with a streamlined, efficient, and scalable approach to their operations, promoting collaboration and real-time insights for informed decision-making. Trigital’s business process integration benefits:",
    bullets: [
      "End-to-End Process Integration : Trigital seamlessly connects and automates diverse business processes, fostering a cohesive workflow.",
      "Enhanced Efficiency : Businesses benefit from increased operational efficiency as Trigital optimizes workflows, reducing manual interventions and improving resource utilization.",
      "Cross-Functional Collaboration : Trigital facilitates improved collaboration among different departments, ensuring a synchronized approach to business processes.",
      "Real-time Visibility : By integrating business processes, Trigital provides real-time visibility into operations, enabling data-driven decision-making.",
    ],
    image: "/assets/images/Nipige/business_Process_Integration_.svg",
  },
  {
    title: "Security Integration",
    description:
      "Trigital excels in Security Integration services, fortifying businesses a customized, multi-layered defense strategy, providing peace of mind and robust protection against a dynamic threat landscape. Trigital’s security integration benefits:",
    bullets: [
      "Comprehensive Security Solutions : Trigital offers end-to-end security integration, ensuring a holistic approach to safeguarding business assets through real-time monitoring & threat detection.",
      "Multi-Layered Defence : Businesses benefit from robust security layers, including firewalls, encryption, and intrusion detection, enhancing overall resilience.",
      "Customized Security Architecture : Trigital tailors security solutions to the unique needs of each business, providing a personalized defence strategy.",
      "Compliance Assurance : Trigital ensures businesses meet industry and regulatory security standards, mitigating legal and reputational risks.",
    ],
    image: "/assets/images/Nipige/security_Integration_.svg",
  },
  {
    title: "Mobile Integration",
    description:
      "Trigital’s Mobile Integration services provide businesses with a seamless, user-friendly, and secure mobile experience, facilitating enhanced connectivity and accessibility in today’s mobile-centric landscape. Trigital’s mobile integration benefits:",
    bullets: [
      "Seamless App Integration : Trigital ensures smooth integration of mobile applications with existing systems, enhancing overall operational efficiency.",
      "Cross-Platform Compatibility : Businesses benefit from Trigital’s expertise in creating mobile solutions compatible with various platforms, reaching a broader audience.",
      "Real-time Data Accessibility : Mobile Integration by Trigital enables businesses to access critical data on the go, fostering agility and informed decision-making.",
      "Security and Compliance : Trigital prioritizes mobile security, implementing measures to protect sensitive data and ensuring compliance with industry regulations.",
    ],
    image: "/assets/images/Nipige/mobile_Integration_.svg",
  },
  {
    title: "Customer Relationship Management (CRM) Integration",
    description:
      "Trigital’s CRM Integration services empower businesses with a unified, efficient, and customized approach to managing and leveraging customer relationships for enhanced business success. Trigital’s mobile integration benefits:",
    bullets: [
      "Unified Customer Data : Trigital integrates CRM systems with various data sources, ensuring a centralized and up-to-date customer database.",
      "Seamless Communication : Businesses benefit from enhanced communication channels as Trigital integrates CRM platforms with other business applications.",
      "360° Customer View : Trigital enables businesses to gain a comprehensive view of customer interactions, preferences, and history, facilitating personalized engagement.",
      "Automation for Efficiency : By automating CRM processes, Trigital increases operational efficiency, reducing manual tasks and enhancing productivity.",
    ],
    image:
      "/assets/images/Nipige/customer_Relationship_Management_Integration_.svg",
  },
  {
    title: "Supply Chain Integration",
    description:
      "Trigital’s Supply Chain Integration services empower businesses with enhanced visibility, collaboration, and efficiency, fostering a responsive and resilient supply chain ecosystem. Trigital’s supply chain integration benefits:",
    bullets: [
      "End-to-End Visibility : Trigital provides comprehensive visibility across the supply chain, enabling businesses to track and manage inventory in real-time.",
      "Efficient Collaboration : By integrating supply chain systems, Trigital facilitates seamless communication and collaboration among suppliers, manufacturers, and distributors.",
      "Automated Workflows : Trigital automates key supply chain processes, reducing manual interventions, minimizing errors, and enhancing operational efficiency.",
      "Data-driven Decision Making : Businesses benefit from data-driven insights, enabling informed decision-making and strategic planning in the supply chain.",
    ],
    image: "/assets/images/Nipige/supply_Chain_Integration_.svg",
  },
  {
    title: "Analytics Integration",
    description:
      "Trigital’s Analytics Integration services empower businesses with unified, real-time, and AI/ML enable analytics solutions, facilitating data-driven decision-making for enhanced business performance. Trigital’s analytics integration benefits:",
    bullets: [
      "Unified Data Sources : Trigital integrates diverse data sources, ensuring a consolidated and comprehensive dataset for analytics.",
      "Real-time Data Access : Businesses benefit from real-time access to data, empowering quick and informed decision-making.",
      "Customized Analytics Solutions : Trigital tailors analytics integrations to suit specific business needs, providing personalized and relevant insights.",
      "Advanced Reporting and Visualization : Trigital enhances data presentation through advanced reporting and visualization tools, making complex information easily understandable.",
    ],
    image: "/assets/images/Nipige/analytics_Integration_.svg",
  },
];
export default function Integration() {
  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trigital Integrations
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Seamlessly connect your systems and streamline operations with
                Trigital’s Integration Services. Our expertise ensures a
                cohesive tech ecosystem, enhancing efficiency and data flow.
                From API integrations to system unification, trust us to
                optimize your business processes through seamless connectivity
                and interoperability. Elevate your integration experience with
                Trigital.
              </p>
            </div>

            <div className="relative w-full h-[400px] md:h-[450px]">
              <Image
                src="/assets/images/Nipige/trigital_Integration.svg"
                alt="Integration Services"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          2️⃣ SERVICE CONTENT SECTIONS
          Alternating background bands
          ============================================ */}
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

      {/* ============================================
          3️⃣ CTA SECTION
          ============================================ */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white">
              Unify Your Systems
            </h2>
            <p className="text-gray-200 max-w-2xl leading-relaxed">
              Break silos, create real-time visibility, and power enterprise
              automation.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact-us"
                className="px-10 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold text-white"
              >
                Assess Integration Needs
              </a>

              <a
                href="/contact-us?source=demo"
                className="px-10 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold text-white"
              >
                See Examples
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
