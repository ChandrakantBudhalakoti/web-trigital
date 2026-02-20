import Image from "next/image";
import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Deployment Model | Trigital Tech",
  description:
    "NIPIGE deployment: SaaS, on-premise, private cloud. Infrastructure for your security, compliance, and scalability needs.",
  keywords:
    "deployment model, SaaS deployment, on-premise deployment, private cloud deployment, cloud infrastructure, deployment options, platform deployment",
  path: "/platform/deployment-model",
});

const schema = createWebPageSchema({
  name: "Deployment Model | Trigital Tech",
  description: "NIPIGE deployment options: SaaS, on-premise, and private cloud. Choose infrastructure for security, compliance, and scalability.",
  path: "/platform/deployment-model",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Platform", url: "/platform/our-platform-nipige" }, { name: "Deployment Model", url: "/platform/deployment-model" }],
});

export default function DeploymentModel() {
  const deployments = [
    {
      title: "SaaS",
      paragraphs: [
        "Selecting the Software as a Service (SaaS) deployment model for a subscription billing platform brings significant advantages. It minimizes upfront infrastructure costs, as the service provider manages hosting and maintenance. This cost-effectiveness is crucial for businesses aiming to allocate resources efficiently.",
        "SaaS also offers scalability, accommodating fluctuating workloads and business growth. Accessibility is enhanced, enabling users to access the platform from anywhere with an internet connection. Automatic updates and patches ensure continuous access to the latest features and security measures, reducing the burden on internal IT teams. Overall, SaaS streamlines implementation, allowing businesses to focus on core operations and customer service.",
      ],
      image: "/assets/images/Nipige/SaaS.svg",
    },
    {
      title: "On-Premise",
      paragraphs: [
        "Opting for the on-premise deployment model for a subscription billing platform provides businesses with heightened control and security over their data. This model allows organizations to host the billing system within their own infrastructure, ensuring compliance with specific regulatory requirements and data privacy standards.",
        "On-premise is particularly beneficial for industries with stringent security protocols or those handling sensitive customer information. On-premise deployment grants businesses the autonomy to customize and configure the system to meet unique needs. While it may involve higher upfront costs and increased responsibility for maintenance, this model offers a tailored solution with direct oversight, critical for businesses prioritizing data control and regulatory adherence.",
      ],
      image: "/assets/images/Nipige/On-Premise.svg",
    },
    {
      title: "Private Cloud",
      paragraphs: [
        "Opting for the private cloud deployment model for a subscription billing platform combines the advantages of cloud technology with enhanced control and security. This approach leverages dedicated cloud resources, ensuring a scalable and flexible infrastructure tailored to the business’s specific needs.",
        "Private cloud solutions provide robust security measures, making them suitable for industries with strict compliance requirements and data privacy concerns. This deployment model allows businesses to enjoy the efficiency of cloud computing while maintaining a higher degree of control over their environment. It is an ideal choice for organizations seeking a balance between scalability, customization, and heightened data security in their subscription billing operations.",
      ],
      image: "/assets/images/Nipige/Private_Cloud.svg",
    },
  ];

  const whyNipige = [
    { title: "Quick Setup", desc: "Deploy in days, not months" },
    { title: "Cost Efficient", desc: "Pay for what you use" },
    { title: "Secure", desc: "Enterprise-grade protection" },
    { title: "Reliable", desc: "99.99% uptime SLA" },
  ];

  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      {/* —————————————————————————————————————————————————————————————
          1. HERO SECTION — Full-width dark blue/indigo, title + description left, image right
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Deployment Models
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Nipige provides businesses with a flexible deployment approach,
                supporting SaaS, on-premise, and private cloud options. This
                adaptability empowers businesses to choose the infrastructure
                that aligns perfectly with their preferences and specific
                requirements.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/deploymentModelTopBanner.png"
                  alt="Deployment models"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          2. DEPLOYMENT SECTIONS — SaaS (image left), On-Premise (text left), Private Cloud (image left)
          ————————————————————————————————————————————————————————————— */}
      {deployments.map(({ title, paragraphs, image }, index) => {
        const imageLeft = index % 2 === 0;
        const bgClass =
          index === 0
            ? "bg-white dark:bg-slate-900/30"
            : index === 1
              ? "bg-[#EBF7FF] dark:bg-slate-800/40"
              : "bg-white dark:bg-slate-900/30";

        return (
          <section key={title} className={`w-full py-20 ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {imageLeft ? (
                  <>
                    <div className="relative w-full aspect-[4/3] min-h-[240px] order-2 md:order-1">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="rounded-2xl shadow-md w-full object-contain"
                      />
                    </div>
                    <div className="order-1 md:order-2 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                        {title}
                      </h2>
                      {paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                        {title}
                      </h2>
                      {paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="relative w-full aspect-[4/3] min-h-[240px] mt-8 md:mt-0">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="rounded-2xl shadow-md w-full object-contain"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* —————————————————————————————————————————————————————————————
          3. WHY NIPIGE DEPLOYMENT
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20 bg-[#EBF7FF] dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
            Why Nipige Deployment?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {whyNipige.map(({ title, desc }) => (
              <div key={title} className="space-y-3">
                <p className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                  {title}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          4. CTA SECTION
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20 bg-white dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Our team can help recommend the best deployment path for your
            business.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-10 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
