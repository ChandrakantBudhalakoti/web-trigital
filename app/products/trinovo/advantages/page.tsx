import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  BoltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  EyeIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "The Trinovo Advantage | Trigital Tech",
  description:
    "Trinovo advantages: rapid implementation, modular scalability, enterprise security, real-time visibility, lower TCO, future-ready architecture.",
  keywords:
    "Trinovo advantages, ERP benefits, rapid implementation, modular ERP, enterprise security, real-time visibility, TCO reduction, scalable ERP",
  path: "/products/trinovo/advantages",
});

const schema = createWebPageSchema({
  name: "The Trinovo Advantage | Trigital Tech",
  description: "Discover why Trinovo stands out: rapid implementation, modular scalability, enterprise-grade security, real-time visibility, lower TCO.",
  path: "/products/trinovo/advantages",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Products", url: "/products/trinovo" }, { name: "Trinovo Advantage", url: "/products/trinovo/advantages" }],
});

const advantages = [
  {
    title: "Rapid Implementation",
    description:
      "Get up and running faster than traditional ERP systems. Trinovo's cloud-ready architecture and modular design enable quick deployment, reducing time-to-value significantly.",
    icon: BoltIcon,
  },
  {
    title: "Modular Scalability",
    description:
      "Start with what you need and scale as you grow. Add new modules and capabilities without disrupting existing operations. Perfect for businesses at any stage.",
    icon: ChartBarIcon,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Built with security-first principles, Trinovo includes end-to-end encryption, role-based access control, audit trails, and compliance-ready features to protect your data.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Real-Time Operational Visibility",
    description:
      "Make informed decisions with real-time dashboards and analytics. Monitor KPIs, track performance, and gain insights across all business functions instantly.",
    icon: EyeIcon,
  },
  {
    title: "Lower Total Cost of Ownership",
    description:
      "Reduce infrastructure costs, minimize maintenance overhead, and eliminate the need for extensive IT resources. Cloud deployment and automated updates keep costs low.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Future-Ready Architecture",
    description:
      "Built on modern technology that evolves with your business. Regular updates, API-driven integrations, and flexible customization ensure your ERP stays current.",
    icon: RocketLaunchIcon,
  },
];

const keyDifferentiators = [
  "No vendor lock-in - flexible deployment options",
  "Upgrade-safe customizations - no technical debt",
  "Comprehensive API ecosystem for integrations",
  "Multi-entity and multi-currency support",
  "Industry-specific configurations available",
  "Dedicated support and training resources",
];

export default function TrinovoAdvantages() {
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
                The Trinovo Advantage
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Why choose Trinovo? Our platform delivers rapid implementation,
                modular scalability, enterprise-grade security, and real-time
                visibility - all while reducing your total cost of ownership.
                Experience the difference of a modern ERP built for today&apos;s
                enterprises.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/trinovo-logo.svg"
                  alt="The Trinovo Advantage"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Intro */}
      <section className="w-full bg-gray-50 dark:bg-slate-800/40 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Six Key Advantages
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
            Trinovo combines the best of modern ERP technology with practical
            business benefits that drive real value for your organization.
          </p>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-4 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="w-full bg-gray-50 dark:bg-slate-800/40 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Key Differentiators
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {keyDifferentiators.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm"
              >
                <CheckIcon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 dark:text-gray-200">
                  {item}
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
            Experience the Trinovo Advantage
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
