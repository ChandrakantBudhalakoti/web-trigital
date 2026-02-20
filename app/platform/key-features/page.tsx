import Image from "next/image";
import Link from "next/link";
import {
  PuzzlePieceIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  CheckCircleIcon,
  Squares2X2Icon,
  SparklesIcon,
  DocumentTextIcon,
  BanknotesIcon,
  TruckIcon,
  UserGroupIcon,
  SwatchIcon,
  BellIcon,
  LockClosedIcon,
  CreditCardIcon,
  MapIcon,
  CubeIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  LanguageIcon,
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  WalletIcon,
  BuildingStorefrontIcon,
  ShoppingBagIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Key Features | Trigital Tech",
  description:
    "NIPIGE key features: customized workflows, product catalogue, multi-channel integration, POS, localization, role management, billing.",
  keywords:
    "NIPIGE features, key features, platform features, customized workflows, product catalogue, multi-channel integration, POS integration, localization, role management, billing features, subscription features",
  path: "/platform/key-features",
});

const schema = createWebPageSchema({
  name: "Key Features | Trigital Tech",
  description: "Explore NIPIGE key features: customized workflows, product catalogue, multi-channel integration, POS, localization, role management, billing.",
  path: "/platform/key-features",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Platform", url: "/platform/our-platform-nipige" }, { name: "Key Features", url: "/platform/key-features" }],
});

export default function KeyFeatures() {
  const features = [
    {
      title: "Customized Workflow",
      description:
        "Facilitates creation of multiple sub-accounts to manage orders, edit catalogue, run promotions, manage customer queries, etc.",
      icon: PuzzlePieceIcon,
    },
    {
      title: "Exclusive Product Catalogue",
      description:
        "Create catalogue at market level, category level or product level attributes and help customers identify them with ease.",
      icon: Squares2X2Icon,
    },
    {
      title: "AI / ML-based Recommendation Engine",
      description:
        "Nipige is driven by AI/ ML recommendation engine which allows the platform to identify the user activity and highlight recommendations as per user digital print.",
      icon: SparklesIcon,
    },
    {
      title: "Partner Billing & Invoicing",
      description:
        "Bring Agriculture to mainstream Ecommerce with Innovative Agritech Solutions. Allow online access to agricultural products, lands, etc. directly.",
      icon: DocumentTextIcon,
    },
    {
      title: "Real-time Settlement",
      description:
        "Nipige offers a real-time payments rail - the digital infrastructure that facilitates real-time payments 24X7X365 to process transfers any time.",
      icon: BanknotesIcon,
    },
    {
      title: "Order Fulfilment Management",
      description:
        "Manage customer details, order details, status, agent assignment, ETA, payment mode, tracking, etc., from the Order Management section under the Admin panel.",
      icon: TruckIcon,
    },
    {
      title: "Role Management",
      description:
        "Create and provide varied types of roles to business providers as per need. Assign privileges to the extent required.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Customer Management",
      description:
        "Assists in customer management. Fetches customer details such as name, number, order details, email, etc. for further analysis of purchase trends.",
      icon: UserGroupIcon,
    },
    {
      title: "Analytics",
      description:
        "Nipige provides analytics like orders, payments, partners, refunds, service requests, inventory, invoices, etc.",
      icon: ChartBarIcon,
    },
    {
      title: "Theme Selection",
      description:
        "Choose a suitable theme that best fits your business requirements from our themes gallery.",
      icon: SwatchIcon,
    },
    {
      title: "Live Notifications",
      description:
        "Allows the user to be on top of the order process with real-time alerts.",
      icon: BellIcon,
    },
    {
      title: "Data Privacy & Data Security",
      description:
        "Extend data security & data privacy to your online store powered by Nipige.",
      icon: LockClosedIcon,
    },
    {
      title: "Delivery Management",
      description:
        "Handle your own delivery setup or third-party integration with Nipige platform. Set up delivery agent login, order details, total earnings, delivery charges, and users, and know delivery status via the admin panel.",
      icon: TruckIcon,
    },
    {
      title: "Online Payment Gateway",
      description:
        "Offer multiple payment options to customers and eliminate payment downtime issues. Choose from noted payment gateways like Razorpay, Cashfree, PayU, etc. that are simpler and safer.",
      icon: CreditCardIcon,
    },
    {
      title: "GPS Navigation Support",
      description:
        "Nipige platform provides Geotagging option that assists customers to find the best possible options near them. GPS navigation tracks the order adding more transparency to the delivery process.",
      icon: MapIcon,
    },
    {
      title: "Product Variants",
      description:
        "Multiple product variants such as item name, category, stock availability, tax code, quantity, discount, shelf life, price, etc.",
      icon: CubeIcon,
    },
    {
      title: "Quick Search",
      description:
        "Any store, item or category can be easily identified via quick search bar allowing the customer to save time.",
      icon: MagnifyingGlassIcon,
    },
    {
      title: "Promotion & Ad Support",
      description:
        "Create banners, offer promo codes, highlight products or services via advertisement.",
      icon: MegaphoneIcon,
    },
    {
      title: "Multi Language & Multi Currency",
      description:
        "Merchants and customers can choose from multiple languages and make payments in 100+ currencies.",
      icon: LanguageIcon,
    },
    {
      title: "Online Bidding",
      description:
        "Allows customers to quote or bid for an item at a discounted price which can be accepted or re-quoted by the merchant.",
      icon: ArrowsRightLeftIcon,
    },
    {
      title: "Live Chat with Sellers",
      description:
        "Customers can directly chat with vendors for queries related to products or orders.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: "IOS, Android, Web Support",
      description:
        "Supported on IOS, Android and Web platforms, broadening user accessibility.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Omni Channel Integration",
      description:
        "Unified feed and order management across multiple channels to boost discoverability and revenue.",
      icon: GlobeAltIcon,
    },
    {
      title: "App Wallet",
      description:
        "Offer store wallets to store loyalty rewards, cashbacks, credits and manage transactions.",
      icon: WalletIcon,
    },
    {
      title: "Multi-Merchant Market",
      description:
        "Manage multiple vendors, orders, shipping and commissions via dashboard.",
      icon: BuildingStorefrontIcon,
    },
    {
      title: "One Platform for e-Commerce",
      description:
        "Set up B2B, B2C, B2B2C & D2C business models with dynamic expansion features.",
      icon: ShoppingBagIcon,
    },
    {
      title: "On-demand SaaS Platform",
      description:
        "Acquire prospects, convert trials and reduce churn with a scalable SaaS solution.",
      icon: CloudIcon,
    },
  ];
  const securityBullets = [
    "End-to-end encryption",
    "Multi-factor authentication",
    "Compliance ready",
  ];

  const scalabilityBullets = [
    "Auto-scaling capabilities",
    "Global presence",
    "High availability",
  ];

  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      {/* —————————————————————————————————————————————————————————————
          1. HERO SECTION — Full-width dark blue, title + paragraph left, SVG right
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Key Features
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Our forte lies in revolutionizing businesses across diverse
                sectors with robust digital solutions meticulously crafted to
                address current demands. We specialize in tailoring our
                offerings to precisely fit the evolving needs of modern
                enterprises, ensuring optimal performance and efficiency.
                Through our dedication to innovation and adaptability, we
                empower organizations to thrive in today’s dynamic landscape,
                driving growth and success.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/keyFeature_top_banner_img.svg"
                  alt="Key features of Nipige"
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
          2. FEATURES INTRO — Light background, centered heading + subtext
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gray-50 dark:bg-slate-800/40 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Exclusive Features of Nipige Platform
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
            Host of unique features that make your digitalization journey
            exciting.
          </p>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          3. FEATURES GRID — Main feature cards
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="h-full flex flex-col justify-between bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-3">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                    {description}
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex text-blue-600 dark:text-blue-400 mt-4 text-sm font-medium hover:underline transition"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          4. FEATURE HIGHLIGHTS — Security & Scalability
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gray-50 dark:bg-slate-800/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="flex gap-2 items-center text-3xl font-bold text-gray-800 dark:text-gray-200">
                  <ShieldCheckIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
                  Advanced Security
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Enterprise-grade protection with encryption, role-based
                  access, and audit logs
                </p>
                <ul className="space-y-2">
                  {securityBullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 items-center text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800/50 flex items-center justify-center min-h-[220px]">
                <ShieldCheckIcon className="w-24 h-24 text-blue-200 dark:text-blue-800" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800/50 flex items-center justify-center min-h-[220px] order-2 md:order-1">
                <ArrowsPointingOutIcon className="w-24 h-24 text-blue-200 dark:text-blue-800" />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="flex items-center gap-2 text-3xl font-bold text-gray-800 dark:text-gray-200">
                  <ArrowsPointingOutIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
                  Scalability
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Grow without limits with elastic infrastructure
                </p>
                <ul className="space-y-2">
                  {scalabilityBullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 items-center text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          5. CTA SECTION
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Experience These Features Today
          </h2>
          <Link
            href="/contact-us?source=demo"
            className="inline-block px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
