import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Trinovo Core Modules | Trigital Tech",
  description:
    "Trinovo enterprise modules: Finance & Accounting, Procurement, Inventory, CRM, HRMS, Asset Management. Comprehensive ERP suite.",
  keywords:
    "Trinovo modules, ERP modules, finance and accounting, procurement, inventory management, CRM, HRMS, asset management, enterprise modules",
  path: "/products/trinovo/modules",
});

const schema = createWebPageSchema({
  name: "Trinovo Core Modules | Trigital Tech",
  description: "Explore Trinovo's enterprise modules: Finance & Accounting, Procurement, Inventory, CRM, HRMS, Asset Management.",
  path: "/products/trinovo/modules",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Products", url: "/products/trinovo" }, { name: "Trinovo Modules", url: "/products/trinovo/modules" }],
});

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
    outcome: "Improved financial transparency, faster closing cycles, and stronger compliance.",
    icon: CurrencyDollarIcon,
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
    icon: ShoppingBagIcon,
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
    icon: BuildingOfficeIcon,
  },
  {
    title: "CRM & Ticketing",
    description:
      "Enhance customer engagement and internal service management.",
    features: [
      "Lead & opportunity management",
      "Customer lifecycle tracking",
      "Service ticket automation",
      "SLA monitoring",
      "Integrated communication workflows",
    ],
    outcome: "Improved customer satisfaction and faster issue resolution.",
    icon: UserGroupIcon,
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
    icon: BriefcaseIcon,
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
    icon: ChartBarIcon,
  },
];

export default function TrinovoModules() {
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
                Core Modules
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Trinovo offers a comprehensive suite of enterprise modules that
                work independently or together as a unified ecosystem. Each
                module is designed to streamline specific business functions
                while seamlessly integrating with others for complete operational
                visibility.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/trinovo-logo.svg"
                  alt="Trinovo Core Modules"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Intro */}
      <section className="w-full bg-gray-50 dark:bg-slate-800/40 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Comprehensive Enterprise Modules
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
            Choose the modules you need, when you need them. Trinovo&apos;s modular
            architecture allows you to start small and expand as your business
            grows.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {coreModules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-16 h-16 text-primary" />
                    </div>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Ready to Explore Trinovo Modules?
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
