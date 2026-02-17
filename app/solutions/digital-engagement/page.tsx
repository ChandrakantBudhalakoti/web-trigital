"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = ["e-Auction Platform", "Buying-Selling Platform"];

type CategoryContent = {
  title: string;
  description: string;
  benefits: string[];
  sections: {
    title: string;
    description: string;
    image: string;
    benefits: string[];
  }[];
  ctaHighlight?: {
    text: string;
    image?: string;
    features?: {
      title: string;
      description: string;
    }[];
  };
};

const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  "e-Auction Platform": {
    title: "e-Auction Platform",
    description:
      "Online auction platforms in India are not used to their full potential yet. Only a few applications allow users to bid for registered items. This new concept can be applied to any market as a big USP boosting your brand’s online presence. Nipige is the one platform that has this exceptional feature and provides a smooth experience to you, as a business, and to your customers. Explore this feature and boost your brand online.",
    benefits: [] as string[],
    sections: [
      {
        title: "Bidders App",
        description:
          "Right place to find and bid for goods at competitive prices.",
        image: "/assets/images/Nipige/eauction_Bidders_App.svg",
        benefits: [
          "Extensive Search Mechanism – Allows bidders to search for products based on category, price, and other search criteria.",
          "Multiple Payment Options – Easy purchase with debit, credit, UPI, net banking, cash on delivery methods.",
          "Real-time Delivery Tracking – Delivery management system that allows customers to view and track the delivery agent on google maps similar to uber like app",
        ],
      },
      {
        title: "Sellers App",
        description: "Display and promote products to propel sales.",
        image: "/assets/images/Nipige/eauction_Sellers_App.svg",
        benefits: [
          "Dynamic Catalog – Upload product details by picking appropriate category from dynamic catalog to facilitate easy search.",
          "Live Chat – Option to interact live with buyers or bidderson price, quality of products, and more.",
          "Delivery Mechanism – Manage in-house delivery system or integrate with platform’s pre-existing third-party delivery agents for hassle-free experience.",
        ],
      },
      {
        title: "Delivery Agents App",
        description:
          "Flexible app to assist at every step of delivery process.",
        image: "/assets/images/Nipige/eauction_Delivery_Agent_App.svg",
        benefits: [
          "Notification/ Alert – Receives notification/ alert regarding next nearest delivery.",
          "Accept/ Reject Delivery – Option to accept/ reject based on availability.",
          "GPS tracking – Provides shortest possible routes for smooth product delivery.",
          "Digital Signature – Confirmation on delivery of products.",
        ],
      },
    ],
    ctaHighlight: {
      text: "Our transformative features & integrations assist you to enhance your bidding processes with agility",
      image: "/assets/images/Nipige/bidding_Process.svg",
      features: [
        {
          title: "Multi-Merchant-Marketplace",
          description:
            "Assists aggregators to manage multiple sellers, orders, shipping, and commissions using the dashboard",
        },
        {
          title: "Dynamic Product Catalogue",
          description:
            "Create catalogue at market level, category level or product level attributes and help customers identify them with ease",
        },
        {
          title: "Simple Search Mechanism",
          description:
            "Assists buyers in finding needed products with appealing deals easily",
        },
        {
          title: "Online Quotation",
          description:
            "Allows customers to quote or bid for an item at a discounted price which can be further accepted or re-quoted by the seller",
        },
        {
          title: "Ad Set-Up Mechanism",
          description:
            "Create banners, offer promo codes, highlight any product via advertisement through the admin panel or the seller app",
        },
        {
          title: "Bulk Upload",
          description:
            "Upload products in bulk to avoid wastage of time & effort",
        },
      ],
    },
  },
  "Buying-Selling Platform": {
    title: "Buying-Selling Platform",
    description:
      "Online buying and selling platform has brought millions of prospective buyers and sellers onto one platform. Many user-friendly applications allow buyers and sellers to trade daily. These platforms help sellers to sell items that are no longer useful to them to buyers who need them at a discounted price. If you have a similar business idea, nipige could be the perfect platform to showcase its capabilities and meet your business objectives. ",
    benefits: [] as string[],
    sections: [
      {
        title: "Buyers App",
        description:
          "Right place to find and bid for goods at competitive prices.",
        image: "/assets/images/Nipige/buyer_App.svg",
        benefits: [
          "Extensive Search Mechanism – Allows bidders to search for products based on category, price, and other search criteria.",
          "Multiple Payment Options – Easy purchase with debit, credit, UPI, net banking, cash on delivery methods.",
          "Real-time Delivery Tracking – Delivery management system that allows customers to view and track the delivery agent on google maps similar to uber like app",
        ],
      },
      {
        title: "Sellers App",
        description: "Display and promote products to propel sales.",
        image: "/assets/images/Nipige/sellers_App.svg",
        benefits: [
          "Dynamic Catalog – Upload product details by picking appropriate category from dynamic catalog to facilitate easy search.",
          "Live Chat – Option to interact live with buyers or bidderson price, quality of products, and more.",
          "Delivery Mechanism – Manage in-house delivery system or integrate with platform’s pre-existing third-party delivery agents for hassle-free experience.",
        ],
      },
      {
        title: "Delivery Agents App",
        description:
          "Flexible app to assist at every step of delivery process.",
        image: "/assets/images/Nipige/deliver_Agent_App.svg",
        benefits: [
          "Notification/ Alert – Receives notification/ alert regarding next nearest delivery.",
          "Accept/ Reject Delivery – Option to accept/ reject based on availability.",
          "GPS tracking – Provides shortest possible routes for smooth product delivery.",
          "Digital Signature – Confirmation on delivery of products.",
        ],
      },
    ],
    ctaHighlight: {
      text: "Buy & Sell is made easy like never before with features that adhere to the need and need based demands of emerging market places",
      image: "/assets/images/Nipige/buy_Sell_Features.svg",
      features: [
        {
          title: "Multi-Merchant-Marketplace",
          description:
            "Assists aggregators to manage multiple sellers, orders, shipping, and commissions using the dashboard",
        },
        {
          title: "Dynamic Product Catalogue",
          description:
            "Create catalogue at market level, category level or product level attributes and help customers identify them with ease",
        },
        {
          title: "Simple Search Mechanism",
          description:
            "Assists buyers in finding needed products with appealing deals easily",
        },
        {
          title: "Online Quotation",
          description:
            "Allows customers to quote or bid for an item at a discounted price which can be further accepted or re-quoted by the seller",
        },
        {
          title: "Ad Set-Up Mechanism",
          description:
            "Create banners, offer promo codes, highlight any product via advertisement through the admin panel or the seller app",
        },
        {
          title: "Bulk Upload",
          description:
            "Upload products in bulk to avoid wastage of time & effort",
        },
      ],
    },
  },
};

export default function DigitalEngagement() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <main className="min-h-screen">
      {/* —————————————————————————————————————————————————————————————
          1. HERO SECTION — Full-width dark blue/indigo, title + description left, illustration right
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Digital Engagement
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Trigital elevates digital engagement by developing interactive
                and personalized solutions. Through user-centric applications,
                optimize customer experiences, foster increased interaction, and
                contribute to the overall success of digital engagement
                initiatives.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/digital_Engagement.svg"
                  alt="Digital engagement"
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
          2. MAIN CONTENT LAYOUT — Sidebar + dynamic content area
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* ——— SIDEBAR (Categories) ——— */}
            <aside className="lg:col-span-1">
              <div className="bg-[#EBF7FF] dark:bg-slate-800/50 rounded-2xl p-6 space-y-3 lg:sticky lg:top-24">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-4">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap overflow-x-auto lg:overflow-x-visible">
                  {CATEGORIES.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setSelectedCategory(name)}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg cursor-pointer transition duration-200
                        lg:w-full whitespace-nowrap
                        ${
                          selectedCategory === name
                            ? "bg-blue-600 text-white font-medium shadow-md"
                            : "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm"
                        }
                      `}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* ——— RIGHT CONTENT AREA (driven by selected category) ——— */}
            <div className="lg:col-span-3 space-y-16">
              {(() => {
                const content = CATEGORY_CONTENT[selectedCategory];
                if (!content) return null;
                return (
                  <>
                    {/* Intro block */}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                        {content.title}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                        {content.description}
                      </p>
                      {content.benefits.length > 0 && (
                        <>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">
                            Key Features
                          </h3>
                          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                            {content.benefits.map((benefit) => (
                              <li key={benefit}>{benefit}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    {/* Image + text sections (alternating) */}
                    {content.sections.map(
                      ({ title, description, image, benefits }, index) => {
                        const imageLeft = index % 2 === 1;
                        return (
                          <div
                            key={title}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 last:mb-0"
                          >
                            {imageLeft ? (
                              <>
                                <div className="relative w-full aspect-[4/3] min-h-[220px] order-2 md:order-1">
                                  <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="rounded-2xl shadow-md w-full object-contain"
                                  />
                                </div>
                                <div className="order-1 md:order-2">
                                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                                    {title}
                                  </h3>
                                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                                    {description}
                                  </p>
                                  {benefits.length > 0 && (
                                    <>
                                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">
                                        Benefits
                                      </h4>
                                      <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                                        {benefits.map((benefit) => (
                                          <li key={benefit}>{benefit}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                              </>
                            ) : (
                              <>
                                <div>
                                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                                    {title}
                                  </h3>
                                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                                    {description}
                                  </p>
                                  {benefits.length > 0 && (
                                    <>
                                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">
                                        Benefits
                                      </h4>
                                      <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                                        {benefits.map((benefit) => (
                                          <li key={benefit}>{benefit}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                                <div className="relative w-full aspect-[4/3] min-h-[220px]">
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
                        );
                      },
                    )}

                    {/* CTA Highlight Block - Features Section */}
                    {content.ctaHighlight && (
                      <div className="bg-[#EBF7FF] dark:bg-slate-800/50 rounded-2xl p-10 mt-20">
                        {/* Features Title and Image - Same Line */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                          {/* Features Description Text */}
                          <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
                            {content.ctaHighlight.text}
                          </p>

                          {/* Features Image - Right */}
                          {content.ctaHighlight.image && (
                            <div className="relative w-full aspect-[4/3] min-h-[200px]">
                              <Image
                                src={content.ctaHighlight.image}
                                alt="Features"
                                fill
                                className="rounded-2xl shadow-md w-full object-contain"
                              />
                            </div>
                          )}
                        </div>

                        {/* Feature Cards Grid */}
                        {content.ctaHighlight.features &&
                          content.ctaHighlight.features.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                              {content.ctaHighlight.features.map(
                                ({ title, description }) => (
                                  <div
                                    key={title}
                                    className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                                  >
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                                      {title}
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center leading-relaxed">
                                      {description}
                                    </p>
                                  </div>
                                ),
                              )}
                            </div>
                          )}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          3. CTA SECTION
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20 bg-[#EBF7FF] dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Engage More, Earn More
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Build meaningful relationships with your customers across digital
            channels. Personalize interactions, automate campaigns, and measure
            impact with advanced analytics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us?source=demo"
              className="inline-flex items-center justify-center px-10 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              See Demo
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-10 py-3 rounded-xl border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
