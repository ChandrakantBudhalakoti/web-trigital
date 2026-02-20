import Image from "next/image";
import Link from "next/link";
import {
  CloudIcon,
  CubeIcon,
  ShieldCheckIcon,
  LanguageIcon,
  LockClosedIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Trinovo Technology Architecture | Trigital Tech",
  description:
    "Trinovo cloud-first, API-driven architecture. Microservices, secure integrations, enterprise-grade security. Multi-language, multi-currency.",
  keywords:
    "Trinovo technology, ERP architecture, cloud ERP, microservices, API integration, multi-language, multi-currency, role-based access control, enterprise architecture",
  path: "/products/trinovo/technology",
});

const schema = createWebPageSchema({
  name: "Trinovo Technology Architecture | Trigital Tech",
  description: "Trinovo cloud-first, API-driven architecture with microservices, secure integrations, enterprise-grade security.",
  path: "/products/trinovo/technology",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Products", url: "/products/trinovo" }, { name: "Trinovo Technology", url: "/products/trinovo/technology" }],
});

const technologyFeatures = [
  {
    title: "Cloud-ready (Public or Private Cloud)",
    description:
      "Deploy Trinovo on your preferred cloud infrastructure - AWS, Azure, Google Cloud, or your private cloud. Flexible deployment options to meet your security and compliance requirements.",
    icon: CloudIcon,
  },
  {
    title: "Microservices-based backend",
    description:
      "Built on a modern microservices architecture that ensures scalability, resilience, and independent service updates without affecting the entire system.",
    icon: CubeIcon,
  },
  {
    title: "Secure API integrations",
    description:
      "Open API architecture enables seamless integration with CRM systems, billing platforms, payment gateways, and third-party tools. RESTful APIs with comprehensive documentation.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Multi-language & multi-currency capability",
    description:
      "Support for multiple languages and currencies, enabling global operations. Localize your ERP experience for different regions and markets.",
    icon: LanguageIcon,
  },
  {
    title: "Role-based access control",
    description:
      "Granular permission management ensures users only access what they need. Define custom roles and permissions aligned with your organizational structure.",
    icon: LockClosedIcon,
  },
  {
    title: "Data-driven dashboards & reporting",
    description:
      "Real-time analytics and customizable dashboards provide actionable insights. Generate comprehensive reports to support data-driven decision making.",
    icon: ChartBarIcon,
  },
];

const architectureBenefits = [
  "Scalable infrastructure that grows with your business",
  "High availability and disaster recovery capabilities",
  "Regular security updates and compliance certifications",
  "Continuous integration and deployment pipelines",
  "Comprehensive audit trails and logging",
  "Performance optimization and monitoring tools",
];

export default function TrinovoTechnology() {
  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Technology Architecture
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Trinovo is built with a cloud-first, API-driven architecture
                that combines flexibility, performance, and security. Our
                modern technology stack ensures your ERP platform is scalable,
                secure, and future-ready.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/trinovo-logo.svg"
                  alt="Trinovo Technology Architecture"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Intro */}
      <section className="w-full bg-gray-50 dark:bg-slate-800/40 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Built for Modern Enterprises
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
            Our technology architecture is designed to support complex
            enterprise workflows while maintaining ease of use for day-to-day
            users.
          </p>
        </div>
      </section>

      {/* Technology Features Grid */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Benefits */}
      <section className="w-full bg-gray-50 dark:bg-slate-800/40 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Architecture Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {architectureBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm"
              >
                <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 dark:text-gray-200">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Experience Trinovo&apos;s Technology
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us?source=demo"
              className="inline-block px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
            >
              Request a Demo
            </Link>
            <Link
              href="/products/trinovo"
              className="inline-block px-8 py-3 rounded-xl bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium transition-colors duration-200"
            >
              Back to Trinovo Overview
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
