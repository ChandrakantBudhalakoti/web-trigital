import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Big Data & Analytics | Trigital Tech",
  description:
    "Data warehouse design, ETL pipelines, real-time analytics, business intelligence. Hadoop, Spark, modern data stack. Trigital data experts.",
  keywords:
    "big data analytics, data analytics, data warehouse, ETL pipelines, real-time analytics, business intelligence, Hadoop, Spark, Snowflake, data processing, data visualization, predictive analytics, data science, data engineering",
  path: "/services/big-data-analytics",
});

const schema = getServiceSchema({
  name: "Big Data & Analytics",
  description: "Data warehouse design, ETL pipelines, real-time analytics, business intelligence. Hadoop, Spark expertise.",
  url: `${SITE_URL}/services/big-data-analytics`,
});

export default function BigDataAnalytics() {
  const services = [
    {
      title: "Big Data Strategy Consulting",
      description:
        "Trigital’s Big Data Strategy Consulting services empower businesses with strategic planning, optimized data landscapes, and scalable architectures, fostering a data-driven approach for informed decision-making and competitive advantage. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Strategic Roadmaps : Developing customized big data strategies aligned with business objectives, ensuring a clear and achievable path forward.",
        "Data Assessment : Conducting thorough evaluations of existing data landscapes to identify opportunities for optimization and improved insights.",
        "Technology Recommendations : Providing tailored technology recommendations and selecting suitable tools and platforms for effective big data processing.",
        "Scalable Architectures : Designing scalable architectures that allow big data solutions to grow alongside evolving business needs.",
      ],
      image: "/assets/images/Nipige/data_Strategy_Consulting.svg",
    },
    {
      title: "Big Data Architecture Design",
      description:
        "Trigital’s Big Data Architecture Design services empower businesses with scalable, efficient, and secure architectures, enabling optimal utilization of large datasets for actionable insights and strategic decision-making. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Customized Architectures : Designing tailored big data architectures aligned with specific business requirements to ensure optimal performance.",
        "Scalable Infrastructure : Building architectures that scale seamlessly to handle growing data volumes without compromising efficiency.",
        "Data Integration : Implementing efficient data integration strategies to ensure seamless connectivity and accessibility across diverse data sources.",
        "Security Measures : Prioritizing data security by implementing robust measures to safeguard sensitive information and maintain compliance with industry standards.",
      ],
      image: "/assets/images/Nipige/big_Data_Architecture_Design_.svg",
    },
    {
      title: "Data Governance & Compliance",
      description:
        "Trigital’s Data Governance & Compliance Consulting services empower businesses with effective policies, risk assessments, audits, and training programs to establish and maintain a secure, compliant, and well-governed data environment. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Policy Development : Creating comprehensive data governance policies aligned with industry regulations and organizational standards.",
        "Risk Assessments : Conducting thorough risk assessments to identify potential vulnerabilities in data processes and implementing mitigation strategies.",
        "Compliance Audits : Performing regular compliance audits to ensure data management practices align with legal and industry requirements.",
        "Data Quality Assurance : Implementing measures to ensure data quality and integrity, maintaining accuracy and reliability in compliance-related reporting.",
      ],
      image: "/assets/images/Nipige/data_Governance_Compliance_.svg",
    },
    {
      title: "Data Integration & ETL Services",
      description:
        "Trigital’s Data Integration & ETL Services empower businesses with a streamlined, automated, and quality-focused approach to data movement and transformation, enabling efficient analytics and informed decision-making. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Efficient Data Extraction : Streamlining the extraction of data from diverse sources to ensure readiness for processing and analysis.",
        "Transformative Processes : Leveraging ETL methodologies to transform data into required formats and structures for effective analysis and reporting.",
        "Automated Loading : Automating the loading of transformed data into target systems to reduce manual effort and improve operational efficiency.",
        "Data Quality Assurance : Implementing rigorous data quality checks to ensure accuracy, consistency, and reliability throughout the integration process.",
      ],
      image: "/assets/images/Nipige/data_Integration_Etl_Services_.svg",
    },
    {
      title: "Advanced Analytics & Predictive Modeling",
      description:
        "Trigital’s Advanced Analytics & Predictive Modeling services empower businesses with sophisticated insights, accurate predictions, and a competitive edge in making informed and proactive decisions. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Sophisticated Analytics : Leveraging advanced analytical techniques to provide deep insights into business data.",
        "Predictive Modeling : Developing robust predictive models to forecast trends, identify opportunities, and mitigate potential risks.",
        "Data Visualization : Utilizing powerful visualization tools to transform complex data into clear and actionable visual representations.",
        "Machine Learning Integration : Applying machine learning algorithms to enhance predictive capabilities and enable intelligent automation solutions.",
      ],
      image:
        "/assets/images/Nipige/advanced_Analytics_Predictive_Modeling_.svg",
    },
    {
      title: "Business Intelligence (BI) Consulting",
      description:
        "Trigital’s Business Intelligence (BI) Consulting services empower businesses with strategic planning, integrated data solutions, user-friendly dashboards, and ongoing support to build a comprehensive BI framework that enhances decision-making capabilities. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Strategic Planning : Developing tailored BI strategies aligned with business goals to ensure a clear and effective implementation roadmap.",
        "Data Integration : Connecting diverse data sources to provide a unified and comprehensive view of business performance.",
        "Interactive Dashboards : Creating intuitive and interactive dashboards that enable seamless data exploration and visualization.",
        "Custom Reports : Generating customized reports to deliver actionable insights tailored to specific business requirements.",
      ],
      image: "/assets/images/Nipige/business_Intelligence_Consulting_.svg",
    },
    {
      title: "Real-Time Data Processing",
      description:
        "Trigital’s Real-Time Data Processing services empower businesses with agile decision-making capabilities, enabling them to respond swiftly to changing conditions and gain a competitive edge. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Streamlined Data Pipelines : Designing efficient data pipelines to ensure the seamless flow of real-time information.",
        "Low-Latency Processing : Leveraging advanced technologies to minimize data processing delays and deliver quick, actionable insights.",
        "Integration with Systems : Facilitating seamless integration to ensure real-time data is effectively incorporated into existing business applications.",
        "Continuous Monitoring : Implementing robust monitoring mechanisms to ensure the reliability, accuracy, and performance of real-time data processing.",
      ],
      image: "/assets/images/Nipige//realtime_Data_Processing_.svg",
    },
    {
      title: "Data Ware Housing",
      description:
        "Trigital’s Data Warehousing services empower businesses with strategic planning, integrated data management, scalability, optimized performance, and robust security, creating a reliable foundation for data-driven decision-making and business intelligence. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Scalable Architectures : Designing scalable data warehouse architectures that accommodate growing data volumes and evolving business needs.",
        "Data Integration : Connecting disparate data sources to create a consolidated and holistic view of business information.",
        "Optimized Performance : Implementing measures to enhance query performance and ensure timely access to critical business insights.",
        "Security Measures : Prioritizing data security by implementing robust controls to safeguard sensitive information within the data warehouse environment.",
      ],
      image: "/assets/images/Nipige/data_Ware_Housing_.svg",
    },
    {
      title: "Cloud-Based Big Data Service",
      description:
        "Trigital’s Cloud-Based Big Data Services empower businesses with scalable, cost-effective, and efficient solutions, enabling them to unlock the full potential of their data in the cloud environment. Trigital’s cloud-based big data services benefits:",
      bullets: [
        "Cloud Integration : Seamless integration of big data solutions with leading cloud platforms for flexibility and scalability.",
        "Cost-Effective Storage : Leveraging cloud storage options, Trigital ensures businesses can efficiently store and access large volumes of data without unnecessary expenses.",
        "Scalable Processing : Utilizing cloud-based processing capabilities, Trigital ensures the ability to handle growing data volumes and complex analytical tasks.",
        "Managed Services : Leveraging cloud providers’ managed services, Trigital reduces operational complexities, ensuring reliable and optimized big data solutions.",
      ],
      image: "/assets/images/Nipige/cloud_Based_Big_Data_Service_.svg",
    },
    {
      title: "Data Quality & Master Data Management",
      description:
        "Trigital’s Data Quality & Master Data Management services empower businesses with accurate, consistent, and reliable data, supporting informed decision-making and enhancing overall operational efficiency. Trigital’s data quality & master data management services benefits:",
      bullets: [
        "Data Cleansing : Implementing processes to identify and rectify inaccuracies, duplicates, and inconsistencies in data.",
        "Master Data Governance : Establishing governance frameworks for maintaining and updating master data, ensuring consistency across the organization.",
        "Data Profiling : Conducting thorough data profiling to identify quality issues and areas for improvement.",
        "Automation : Leveraging automated tools and processes for continuous data quality monitoring and improvement.",
      ],
      image: "/assets/images/Nipige/data_Quality_Management_.svg",
    },
    {
      title: "Big Data Security Consulting",
      description:
        "Trigital’s Big Data Security Consulting services empower businesses with proactive risk management, robust security architectures, and compliance adherence, providing a secure foundation for big data operations. Trigital’s big data security consulting services benefits:",
      bullets: [
        "Risk Assessments : Conducting thorough risk assessments to identify vulnerabilities in big data environments.",
        "Security Architecture Design : Designing robust security architectures tailored to the specific challenges of big data processing.",
        "Encryption and Access Controls : Implementing encryption protocols and access controls to protect sensitive data from unauthorized access.",
        "Compliance Management : Ensuring big data security practices align with industry regulations and compliance standards.",
      ],
      image: "/assets/images/Nipige/big_Data_Security_Consulting_.svg",
    },
    {
      title: "Performance Optimization Services",
      description:
        "Trigital’s Performance Optimization services empower businesses with strategic insights, proactive monitoring, and efficient resource utilization, ensuring optimal performance across their operations. Trigital’s platform optimization services benefits:",
      bullets: [
        "Comprehensive Assessments : Conducting in-depth evaluations to identify performance bottlenecks and areas for improvement.",
        "Strategic Recommendations : Providing tailored recommendations to optimize systems, applications, and processes for peak performance.",
        "Advanced Monitoring : Implementing real-time monitoring tools to track performance metrics and identify issues proactively.",
        "Cost-Effective Scaling : Balancing performance and costs, Trigital optimizes resource utilization to ensure scalability without unnecessary expenditures.",
      ],
      image: "/assets/images/Nipige/performance_Optimization_Services_.svg",
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
                Big Data & Analytics
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Super charge your business insights with Trigital’s Big Data &
                Analytics solutions. We harness the potential of vast datasets,
                providing actionable intelligence for informed decision-making.
                From predictive modelling to real-time analytics, trust us to
                transform data into a strategic asset, propelling your business
                towards success in the digital era.
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="relative w-full h-[320px] md:h-[420px] mt-10 md:mt-0">
              <Image
                src="/assets/images/Nipige/big_Data_Analytics.svg"
                alt="Big Data Analytics"
                fill
                priority
                className="object-contain rounded-2xl"
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
            <h2 className="text-3xl font-bold text-white">Harness Your Data</h2>

            <p className="text-gray-200 max-w-2xl leading-relaxed">
              Transform raw enterprise data into competitive advantage through
              predictive analytics and real-time insight generation.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact-us"
                className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold text-white"
              >
                Discuss Your Data
              </a>

              <a
                href="/contact-us?source=demo"
                className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold text-white"
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
