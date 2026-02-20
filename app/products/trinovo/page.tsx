import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import JsonLd from "@/components/JsonLd";
import { getProductSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import {
  CheckIcon,
  CubeIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Trinovo - Modern Modular ERP Platform | Trigital Tech",
  description:
    "Trinovo: next-generation modular ERP. Streamline operations, improve visibility, scale with confidence. Finance, procurement, inventory, CRM, HRMS.",
  keywords:
    "Trinovo, ERP platform, modular ERP, enterprise resource planning, cloud ERP, finance and accounting, procurement, inventory management, CRM, HRMS, asset management, enterprise software",
  path: "/products/trinovo",
});

const whyTrinovo = [
  {
    icon: <CubeIcon className="w-12 h-12 text-primary" />,
    title: "Modular by Design",
    description:
      "Adopt only what you need, when you need it. Trinovo's modular architecture allows organizations to start small and expand seamlessly as their operations grow.",
  },
  {
    icon: <BoltIcon className="w-12 h-12 text-primary" />,
    title: "Faster Deployment, Lower TCO",
    description:
      "Trinovo enables rapid implementation with minimal infrastructure overhead. Its cloud-ready architecture reduces hardware dependency, lowers maintenance costs, and ensures long-term cost efficiency.",
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-primary" />,
    title: "Built for Scale",
    description:
      "From SMEs to large enterprises, Trinovo supports multi-location, multi-department, and multi-entity operations with ease.",
  },
  {
    icon: <WrenchScrewdriverIcon className="w-12 h-12 text-primary" />,
    title: "Highly Customizable & Upgrade-Friendly",
    description:
      "The platform is built to accommodate unique business processes. Customizations remain upgrade-safe, ensuring continuous innovation without technical debt.",
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-primary" />,
    title: "Secure & API-Driven",
    description:
      "Designed with security-first principles and open API architecture, Trinovo integrates seamlessly with CRM, billing systems, payment gateways, third-party tools, and external platforms.",
  },
];

const coreModules = [
  {
    title: "Finance & Accounting",
    description:
      "Gain complete control over financial operations with real-time reporting and compliance-ready workflows.",
    features: [
      "General Ledger & Chart of Accounts",
      "Accounts Payable & Receivable",
      "Budgeting & Forecasting",
      "Taxation & Compliance",
      "Multi-entity & multi-currency support",
      "Financial dashboards & analytics",
    ],
    outcome:
      "Improved financial transparency, faster closing cycles, and stronger compliance.",
    icon: <CurrencyDollarIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "Procurement & Vendor Management",
    description:
      "Streamline procurement workflows and build strong vendor relationships.",
    features: [
      "Vendor onboarding & performance tracking",
      "Purchase requisitions & approvals",
      "RFQ management",
      "Contract & rate management",
      "Automated purchase orders",
    ],
    outcome: "Reduced procurement cycle time and optimized supplier costs.",
    icon: <ShoppingBagIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "Inventory & Warehouse Management",
    description:
      "Real-time inventory tracking across locations and warehouses.",
    features: [
      "Stock monitoring & alerts",
      "Batch & serial number tracking",
      "Multi-warehouse management",
      "Automated replenishment",
      "Demand forecasting insights",
    ],
    outcome:
      "Minimized stock-outs, reduced carrying costs, and improved supply chain efficiency.",
    icon: <BuildingOfficeIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "CRM & Ticketing",
    description: "Enhance customer engagement and internal service management.",
    features: [
      "Lead & opportunity management",
      "Customer lifecycle tracking",
      "Service ticket automation",
      "SLA monitoring",
      "Integrated communication workflows",
    ],
    outcome: "Improved customer satisfaction and faster issue resolution.",
    icon: <UserGroupIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "HRMS & Payroll",
    description:
      "Simplify workforce management with automation and compliance-ready processes.",
    features: [
      "Employee onboarding & records",
      "Attendance & leave management",
      "Payroll automation",
      "Performance tracking",
      "Statutory compliance support",
    ],
    outcome:
      "Reduced administrative overhead and improved workforce productivity.",
    icon: <BriefcaseIcon className="w-16 h-16 text-primary" />,
  },
  {
    title: "Asset Management & Analytics",
    description: "Track, manage, and optimize enterprise assets.",
    features: [
      "Asset lifecycle management",
      "Maintenance scheduling",
      "Depreciation tracking",
      "Performance analytics dashboards",
    ],
    outcome: "Extended asset lifespan and improved ROI visibility.",
    icon: <ChartBarIcon className="w-16 h-16 text-primary" />,
  },
];

const technologyFeatures = [
  "Cloud-ready (Public or Private Cloud)",
  "Microservices-based backend",
  "Secure API integrations",
  "Multi-language & multi-currency capability",
  "Role-based access control",
  "Data-driven dashboards & reporting",
];

const advantages = [
  "Rapid Implementation",
  "Modular Scalability",
  "Enterprise-Grade Security",
  "Real-Time Operational Visibility",
  "Lower Total Cost of Ownership",
  "Future-Ready Architecture",
];

const industries = [
  "Telecom",
  "Government",
  "Entertainment",
  "Services",
  "SaaS",
  "Marketplaces",
  "AI-led platforms",
];

const TRINOVO_URL = `${SITE_URL}/products/trinovo`;

export default function TrinovoProduct() {
  return (
    <>
      <JsonLd
        data={getProductSchema({
          name: "Trinovo - Modern Modular ERP Platform",
          description:
            "Trinovo is a next-generation, modular ERP platform designed to help growing businesses and enterprises streamline operations, improve visibility, and scale with confidence.",
          url: TRINOVO_URL,
          image: `${SITE_URL}/assets/images/Nipige/trinovo-logo.svg`,
          brand: "Trigital Technologies",
        })}
      />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Trinovo
              </h1>
              <p className="text-xl text-gray-200 mt-4 mb-2">
                Modern Modular ERP Platform
              </p>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Simplifying ERP. Strengthening Enterprises. Trinovo is a
                next-generation, modular ERP platform designed to help growing
                businesses and enterprises streamline operations, improve
                visibility, and scale with confidence.
              </p>
              <Link
                href="/contact-us?source=demo"
                className="inline-flex items-center px-6 py-3 mt-6 text-lg font-semibold rounded-md bg-white/10 hover:bg-white/20 text-white backdrop-blur transition gap-2"
              >
                <span>Request a Demo</span>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/trinovo-logo.svg"
                  alt="Trinovo ERP Platform"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <Section
        id="overview"
        className="bg-white dark:bg-slate-800"
        title="What is Trinovo?"
      >
        <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Trinovo is a next-generation, modular ERP platform designed to help
            growing businesses and enterprises streamline operations, improve
            visibility, and scale with confidence. Built with a cloud-first,
            API-driven architecture, Trinovo combines flexibility, performance,
            and security to deliver a powerful yet intuitive enterprise
            management solution.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Whether you are a fast-growing SME or a large enterprise managing
            complex workflows, Trinovo adapts to your business — not the other
            way around.
          </p>
        </div>
      </Section>

      {/* Why Trinovo Section */}
      <Section
        id="why-trinovo"
        className="bg-gray-50 dark:bg-slate-900"
        title="Why Trinovo?"
        subtitle="Five key advantages that set Trinovo apart"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyTrinovo.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Modules Section */}
      <Section
        id="modules"
        className="bg-white dark:bg-slate-800"
        title="Core Modules"
        subtitle="Trinovo offers a comprehensive suite of enterprise modules that work independently or together as a unified ecosystem"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {coreModules.map((module, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">{module.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {module.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {module.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {module.features.map((feature, featureIdx) => (
                  <li
                    key={featureIdx}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800">
                <p className="text-sm font-semibold text-primary dark:text-blue-300">
                  Outcome: {module.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Built for Modern Enterprises */}
      <Section
        id="industries"
        className="bg-gray-50 dark:bg-slate-900"
        title="Built for Modern Enterprises"
        subtitle="Trinovo is ideal for organizations operating across industries such as:"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 rounded-full font-medium text-lg"
            >
              {industry}
            </span>
          ))}
        </div>
        <p className="text-center text-gray-700 dark:text-gray-300 mt-8 max-w-3xl mx-auto">
          Its scalable architecture supports complex enterprise workflows while
          maintaining ease of use for day-to-day users.
        </p>
      </Section>

      {/* Technology Architecture */}
      <Section
        id="technology"
        className="bg-white dark:bg-slate-800"
        title="Technology Architecture"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyFeatures.map((tech, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <CloudIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {tech}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Trinovo Advantage */}
      <Section
        id="advantages"
        className="bg-gray-50 dark:bg-slate-900"
        title="The Trinovo Advantage"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {advantages.map((advantage, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-slate-700"
            >
              <CheckIcon className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                {advantage}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        id="cta"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Enterprise Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how Trinovo can streamline your business processes and
            drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us?source=demo"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
