import Image from "next/image";
import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Documentation | Trigital Tech",
  description:
    "Technical documentation, API reference, integration guides, deployment, and troubleshooting for Trigital products and platforms.",
  keywords:
    "documentation, API documentation, technical guides, integration guides, deployment guides, troubleshooting, developer documentation, API reference, Trigital documentation, product documentation, implementation guide, developer guide",
  path: "/resources/documentation",
});

const schema = createWebPageSchema({
  name: "Documentation | Trigital Tech",
  description: "Technical documentation, API reference, integration guides, deployment, troubleshooting for Trigital products and platforms.",
  path: "/resources/documentation",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Resources", url: "/resources/blogs" }, { name: "Documentation", url: "/resources/documentation" }],
});

const services = [
  {
    title: "Product Document",
    description:
      "As part of our product documentation strategy is a plan for creating, publishing, and maintaining user guides and other resources. It ensures that our documentation supports the product and business goals. Key elements include defining the audience and goals, choosing content formats, establishing development and maintenance processes, utilizing tools, and measuring and improving from time to time. Consider accessibility, localization, and search functionality for an optimal user experience.",
    bullets: [] as string[],
    image: "/assets/images/Nipige/product_Documentation.svg",
  },
  {
    title: "Developers Guide",
    description:
      "Our developer guidelines are a set of principles like Coding standards, Security best practices, Version control usage, testing guidelines, Documentation guidelines and finally API usage guidelines that help developers write high-quality, consistent, and maintainable code. They promote efficient development, collaboration, and a better product. By following these guidelines, developers can create code that is easier to understand, maintain, and test.",
    bullets: [] as string[],
    image: "/assets/images/Nipige/developers_Guide_.svg",
  },
  {
    title: "Implementation Guide",
    description:
      "Our implementation guide is a roadmap for achieving improved performance. It outlines the steps and methods for putting a plan into action by",
    bullets: [
      "Set clear and measurable goals and identify KPIs to track progress.",
      "Break down the overall strategy into actionable steps and assign ownership for each step.",
      "Develop a realistic timeline with regular checkpoints to track progress.",
      "Develop a communication plan and secure necessary resources for successful implementation.",
      "Continuously monitor progress, evaluate effectiveness, and make adjustments as needed.",
    ],
    image: "/assets/images/Nipige/implementation_Guide_.svg",
  },
];

export default function Documentation() {
  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      {/* ============================================
          1️⃣ HERO SECTION
          ============================================ */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentation
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Explore our comprehensive guides, tutorials, and API
                documentation. Find everything you need to get started,
                integrate our platforms, and troubleshoot issues with detailed
                technical documentation and best practices.
              </p>
            </div>

            <div className="relative w-full h-[400px] md:h-[450px]">
              <Image
                src="/assets/images/Nipige/documentation.svg"
                alt="Documentation"
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
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-gray-200 max-w-2xl leading-relaxed">
              Our support team is here to help. Contact us for assistance or
              explore our blog for additional resources and updates.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link
                href="/contact-us"
                className="px-10 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold text-white"
              >
                Contact Support
              </Link>

              <Link
                href="/resources/blogs"
                className="px-10 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold text-white"
              >
                Read Blog Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
