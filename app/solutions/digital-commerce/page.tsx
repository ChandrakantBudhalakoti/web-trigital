"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  "Hyperlocal Market",
  "Restaurant Aggregator Platform",
  "Farm to Home Online Platform",
  "E-Commerce Solution",
  "POS - Point of Sale",
  "Real State Solution",
];

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
};

const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  "Hyperlocal Market": {
    title: "Hyperlocal Market",
    description:
      "Engage with local businesses and make your presence felt. Bring multiple business such as grocery, fruits & vegetables, fish & meat, pharmacy, tour & travel, healthcare, homecare, etc., under one single online platform and connect them with local customers via delivery management. Many noted companies entered the local business sector and capitalized. Similarly, if you have a unique concept of a hyperlocal model, the Nipige platform will assist you in bringing it online.",
    benefits: [] as string[],
    sections: [
      {
        title: "Customer App",
        description:
          "Android & iOS supporting customer app for easy navigation and purchase.",
        image: "/assets/images/Nipige/hyperlocal_Customer_App.svg",
        benefits: [
          "Effortless Product Search – Users can easily search for products by name, category, locality, and filter results by stores near them option.",
          "Personalized Recommendation – Recommendation engine suggests products & services based on the user’s purchase history and browsing behavior.",
          "Review & Rating – Users can review the products & services purchased and share feedback to assist businesses improvise.",
        ],
      },
      {
        title: "Merchant App",
        description:
          "A smart solution with comprehensive dashboard and reports",
        image: "/assets/images/Nipige/hyperlocal_Merchant_App.svg",
        benefits: [
          "Inventory Management – Provides real-time visibility into inventory levels, allows vendors to quickly reorder products to avoid stock outs.",
          "Sales Reports – Detailed sales reports that show which products are selling well, and which are not to help merchants stock and promote.",
          "Customer Engagement – Allows vendors to engage with customers through personalized promotions & offers, and to gather feedback through survey.",
        ],
      },
      {
        title: "Online Buy",
        description:
          "Online buy and sell features with modern-day IT technology stack and architectures specifically tailored for the multi vendor and multi market local segments.",
        image: "/assets/images/Nipige/hyperlocal_Online_Buy.svg",
        benefits: [] as string[],
      },
    ],
  },
  "Restaurant Aggregator Platform": {
    title: "Restaurant Aggregator Platform",
    description:
      "Digitalization of the food business has given rise to many restaurant aggregator platforms. A couple of food aggregator platforms became market leaders in this field with their successful business models. They allow customers to select and buy their favorite food items from their favorite restaurants and get them door delivered. Food aggregator platforms are a highly lucrative and growing business. All you need is a unique business model and our team of experts to lay the foundation and get your business going.",
    benefits: [] as string[],
    sections: [
      {
        title: "Customer Experience",
        description: "Perfect tool to streamline dining experience.",
        image: "/assets/images/Nipige/restaurant_Customer_App.svg",
        benefits: [
          "Quick Search –Universal search options in every section making it simple and easy to find required product or restaurant.",
          "Coupons/ Discounts – Select from the available coupons or avail discounts from particular restaurants on particular menu items before payment.",
          "Multiple Payment Gateways – Choose the payment method – debit, credit, UPI, net banking, cash on delivery.",
          "Track order – Ability to track the order from the time of booking till delivery to know the exact status.",
          "Review & Feedback – Provide review & feedback on products ordered that helps in future purchases.",
        ],
      },
      {
        title: "Restaurant App",
        description:
          "Go digital and let your restaurant be seen by a wider audience.",
        image: "/assets/images/Nipige/restaurant_App.svg",
        benefits: [
          "Alert/ Notification – Receive alert/ notification on booking of an item from the respective restaurant.",
          "Accept/Reject Order – Option to accept or reject the booking order based on situation and availability of menu items.",
          "Assign Delivery Agent – Based on the area, can assign the delivery agent (in case of own delivery mechanism) and track the order.",
        ],
      },
      {
        title: "Aggregator Dashboard",
        description:
          "Exclusive dashboard to assist aggregator plan the next steps.",
        image: "/assets/images/Nipige/restaurant_Aggregator_Dashboard.svg",
        benefits: [
          "Register – Register and onboard restaurants and provide login details to them.",
          "Reports Analytics– Display of sales made by onboarded restaurants and other data for future decisions.",
          "CRM – Create, view, and manage customer relationships by providing quality information, discounts, etc.",
          "Delivery Management – Integrate and manage third-party delivery partners.",
        ],
      },
      {
        title: "Delivery Agent App",
        description:
          "Flexible app to assist at every step of delivery process.",
        image: "/assets/images/Nipige/restaurant_Delivery_Agent_App.svg",
        benefits: [
          "Notification/ Alert – Receives notification/ alert regarding next nearest delivery.",
          "Accept/ Reject Delivery – Option to accept/ reject based on availability.",
          "GPS tracking – Provides shortest possible routes for smooth product delivery.",
          "Digital Signature – Confirmation on delivery of products.",
        ],
      },
      {
        title: "Restaurant Aggregator Platform",
        description:
          "Our value added features can enable restaurant aggregators perform a range of functions that enable a hassle free service on finger tipsack and architectures specifically tailored for the multi vendor and multi market local segments.",
        image: "/assets/images/Nipige/restaurant_Aggregator_Platform.svg",
        benefits: [] as string[],
      },
    ],
  },
  "Farm to Home Online Platform": {
    title: "Farm to Home Online Platform",
    description:
      "Have any thoughts about bringing agricultural products, ancillary items, and agro realty to mainstream E-commerce? Agriculture-based applications have digitized agricultural businesses by bringing farm produce directly to the customer. If you have any engaging ideas to capitalize on this catching trend, we can help set up a ready-made online platform and build your enterprise brand at a global level.",
    benefits: [] as string[],
    sections: [
      {
        title: "Customer App",
        description:
          "Go beyond expectations; create a niche customer experience with Nipige.",
        image: "/assets/images/Nipige/farm_Customer_App.svg",
        benefits: [
          "Simple Search Mechanism – Users can easily search for agri-products by name, category, or brand and filter results by price, ratings, and other criteria.",
          "Product Variants – Products of various quantities can be made available to meet the customer requirements.",
          "Multiple Payment Methods – Option to pay through different payment modes – debit card, credit card, UPI, internet banking, and more.",
        ],
      },
      {
        title: "Aggregator Dashboard",
        description:
          "Comprehensive dashboard with detailed reports for smart business decisions.",
        image: "/assets/images/Nipige/farm_Aggregator_Dashboard.svg",
        benefits: [
          "Warehouse Management – Provides real-time visibility into stock levels at warehouse and allows aggregator to quickly reorder products from farmers.",
          "Sales Reports – Detailed sales reports of agri-products and other ancillary items to analyze sales and promote individual products.",
          "Promotion & Ad Set-up – Option to add product promotions in app banner, setting up advertisements for specific products/ categories.",
        ],
      },
      {
        title: "Farmer App",
        description:
          "Assists in stock-taking of all the agri-products sold individually at Nipige.",
        image: "/assets/images/Nipige/farm_App.svg",
        benefits: [
          "Stock Management – Provides real-time visibility into stock levels and allows farmers to understand the demand for produce.",
          "Reports & Analytics – Detailed sales reports and analytics to assist farmers know their profit margin, sales details, etc.",
          "Discount Mechanism – Manage discounts on individual agri-products or bulk discounts during festivals, special occasions, etc.",
        ],
      },
      {
        title: "Delivery App",
        description:
          "Option to have in-built delivery app or integrate with third-party apps.",
        image: "/assets/images/Nipige/restaurant_Delivery_Agent_App.svg",
        benefits: [
          "Driver Management – Store driver details, assign delivery tasks, track the delivery, real-time payment settlements.",
          "GPS Navigation Integration – Analyze and assign shortest routes possible for on-time deliveries and enhanced customer experience.",
          "Alerts & Notification Mechanism – Immediate alerts and in-app notifications to drivers with details of assigned tasks.",
        ],
      },
      {
        title: "Farm to Home Online Platform",
        description:
          "Our cutting-edge features & integrations assist you to grow your agro business with rapidity.",
        image: "/assets/images/Nipige/restaurant_Aggregator_Platform.svg",
        benefits: [] as string[],
      },
    ],
  },
  "E-Commerce Solution": {
    title: "E-Commerce Solution",
    description:
      "The online presence of a business entity through an app helps garner a large customer base for your business. It strengthens customer relationships and enhances brand value. Many top companies created a tremendous impact on consumers via their online presence. If you want to establish your brand presence, gain customers’ trust, and have a unique business idea, our expert team of Nipige can help you. We help you get the instant online recognition you deserve by creating a customized application according to your need.",
    benefits: [] as string[],
    sections: [
      {
        title: "Customer App",
        description:
          "Increase customer satisfaction with a simple& hassle-free order mechanism.",
        image: "/assets/images/Nipige/ecommerce_Customer_App.svg",
        benefits: [
          "Easy Product Search – Search for products by name, category, or brand and filter results by price, ratings, and other criteria.",
          "Personalized Recommendation – Recommendation engine suggests products based on the user’s purchase history and browsing behavior.",
          "Multiple Payment Methods – Option to pay through different payment modes – debit card, credit card, UPI, internet banking, and more.",
        ],
      },
      {
        title: "Merchant/ Vendor App",
        description:
          "Equip merchant with dashboard and reports for informed business decisions.",
        image: "/assets/images/Nipige/ecommerce_Vendor_App.svg",
        benefits: [
          "Registration – Moving from local to global by registering with E-Commerce platforms that provide right exposure and reach to vendors.",
          "Inventory Management – Provides real-time visibility into inventory levels allowing vendors to quickly reorder products when needed.",
          "Sales Reports – Detailed sales reports that depict fast selling products to help merchants stock and promote such products.",
          "Customer Engagement – Allows vendors to engage with customers through personalized promotions & offers.",
        ],
      },
      {
        title: "Aggregator Dashboard",
        description:
          "One dashboard with extensive features aimed for business growth.",
        image: "/assets/images/Nipige/ecommerce_Aggregator_Dashboard.svg",
        benefits: [
          "Vendor/ Merchant Onboarding – Provide signing in details and work for smooth onboarding of different vendors.",
          "Reports & Analytics – Instant reports and detailed analytics that assists aggregator to substantial steps for business continuity and growth.",
          "Promotion & Ad set-up – Allow vendors to promote products or their brands through promotions and advertisements in the app banner and other advertising slots.",
        ],
      },
      {
        title: "Delivery Agent App",
        description:
          "Option to have in-built delivery app or integrate with third-party apps.",
        image: "/assets/images/Nipige/ecommerce_Delivery_App.svg",
        benefits: [
          "Driver Management –Assign and manage drivers and delivery tasks, real-time payment settlements, track the delivery.",
          "GPS Navigation Integration – Analyze and assign shortest routes possible for on-time deliveries and enhanced customer experience.",
          "Alerts & Notification Mechanism – Immediate alerts and in-app notifications to drivers with details of assigned tasks.",
        ],
      },
      {
        title: "E-Commerce Solution",
        description:
          "Our cutting-edge features & integrations assist you to scale-up from local to global, single to multi-market & more.",
        image: "/assets/images/Nipige/ecommerce_Multi_Market.svg",
        benefits: [] as string[],
      },
    ],
  },
  "POS - Point of Sale": {
    title: "POS - Point of Sale",
    description:
      "Are you looking for a convenient POS system that is a one-stop solution for online/offline POS? Nipige Platform offers the best POS solution with absolutely no data loss and default automatic cloud backup. This solution also provides cloud-based accounting and CRM facilities. With no hardware requirement and upgradation cost, the solution offers clear steps from inventory to sales. With various features like offers & discount management, UPI QR code-based multiple payments, returns & refund management, dashboards & reports, and many more, the POS solution by Nipige will assist in reaching your target markets.",
    benefits: [] as string[],
    sections: [
      {
        title: "Merchant App",
        description:
          "One App with multiple features to propel business growth.",
        image: "/assets/images/Nipige/pos_Merchant_App.svg",
        benefits: [
          "Inventory Management – Assists in managing the stock, price details, and uploading new products.",
          "Reports & Analytics – Detailed information about business enabling better decisions.",
          "Multiple Payment Integrations – Any payment modes can be integrated.",
        ],
      },
      {
        title: "POS - Point of Sale",
        description:
          "Point of sale processes depend on crucial integrations & reports and we are here to do it all.",
        image: "/assets/images/Nipige/ecommerce_Multi_Market.svg",
        benefits: [] as string[],
      },
    ],
  },
  "Real State Solution": {
    title: "360° Real Estate Solutions",
    description:
      "Are you searching for an all-in-one solution to streamline your real estate operations both online and offline? We specialize in providing innovative, cloud-based solutions that redefine real estate management. Designed to cater to developers, agents, and property managers, our cutting-edge platform streamlines operations, enhances customer engagement, and drives business growth.",
    benefits: [] as string[],
    sections: [
      {
        title: "Persona-focused Solutions Real Estate Agent App",
        description:
          "Effortlessly manage property listings, client inquiries, and transactions on the go.",
        image: "/assets/images/Nipige/real_Estate_Agent_App.svg",
        benefits: [
          "Automated Property Matching – Uses AI/ML to match buyer preferences with available properties, streamlining the process.",
          "Lead Management Dashboard – Organize and track potential buyers and sellers with detailed analytics and lead scoring.",
          "Digital Document Signing – Secure e-signature integration for contracts and agreements, reducing paperwork delays.",
          "In-App Communication & Scheduling – Built-in chat and calendar tools for real-time client communication and appointment setting.",
        ],
      },
      {
        title: "Property Buyer App",
        description:
          "Find your dream home or investment property with personalized recommendations and insights.",
        image: "/assets/images/Nipige/property_Buyer_App.svg",
        benefits: [
          "Personalized Search Filters – AI-driven filters to refine search results by budget, location, amenities, and more.",
          "Virtual Property Tours – 360-degree video tours and AR features for immersive property exploration.",
          "Mortgage Calculator and Loan Pre-Approval – Built-in tools for budget estimation and loan pre-approval directly from the app.",
          "Real-Time Property Availability Updates – Instant notifications for price drops, new listings, or availability changes.",
        ],
      },
      {
        title: "Real Estate Developer App",
        description:
          "Optimize your property sales and customer engagement through data-driven insights.",
        image: "/assets/images/Nipige/real_Estate_Developer_App.svg",
        benefits: [
          "Project Showcase Platform – Create interactive portfolios with high-quality visuals and progress tracking.",
          "Customer Relationship Management (CRM) – Track inquiries, manage follow-ups, and analyze buyer behavior with integrated tools.",
          "Sales Funnel Analytics – Visualize lead conversions and sales performance with advanced analytics dashboards.",
          "Campaign Automation – AI-driven email and SMS campaigns targeting specific buyer personas to maximize reach.",
        ],
      },
      {
        title: "Tenant & Renter App",
        description:
          "Easily discover and rent properties with a seamless, transparent experience.",
        image: "/assets/images/Nipige/tenant_Renter_App.svg",
        benefits: [
          "Rental Agreements & Payments – Digitally sign agreements and pay rent securely within the app.",
          "Smart Property Search – AI-curated listings tailored to renter preferences for budget and location.",
          "Maintenance Request Management – Submit repair requests with tracking updates and direct communication with landlords.",
          "Rental History and Documentation – Maintain digital records of lease agreements, payments, and other documents for easy access.",
        ],
      },
      {
        title: "Admin App",
        description:
          "Centralize and streamline app operations with advanced tools for monitoring and management.",
        image: "/assets/images/Nipige/admin_App.svg",
        benefits: [
          "Role-Based Access Control – Manage permissions and access levels for agents, buyers, and developers securely.",
          "Advanced Analytics Dashboard – Comprehensive insights into user activity, property performance, and app engagement metrics.",
          "Automated Subscription and Billing Management – Seamlessly handle user subscriptions, payment plans, and invoicing with Trigital’s nipige platform.",
          "AI-Powered Fraud Detection – Real-time monitoring to detect and prevent suspicious activities like fake listings or transactions.",
        ],
      },
      {
        title: "Landlord App",
        description:
          "Manage your properties, tenants, and rental income with ease and transparency.",
        image: "/assets/images/Nipige/landlord_App.svg",
        benefits: [
          "Property Performance Tracker – Insights into occupancy rates, rental income trends, and maintenance history for each property.",
          "Tenant Onboarding Automation – Simplified tenant application process with integrated background checks and digital lease signing.",
          "Rental Income Management – Automated rent collection, reminders, and income reporting, integrated with payment gateways.",
          "Maintenance Request Workflow – Directly receive, assign, and track tenant maintenance requests with vendor integration.",
        ],
      },
      {
        title: "Investor App",
        description:
          "Identify high-yield properties and manage your portfolio with actionable data insights.",
        image: "/assets/images/Nipige/investor_App.svg",
        benefits: [
          "Investment Property Analytics – AI-driven insights into ROI, market trends, and rental potential for properties.",
          "Portfolio Management Dashboard – Consolidate and track property performance metrics across multiple investments.",
          "Market Trends Prediction – Use ML algorithms to forecast property value appreciation and market demand.",
          "Risk Assessment Tools – Evaluate risks with real-time alerts for legal, market, or tenant-related issues.",
        ],
      },
      {
        title: "Contractor & Service Provider App",
        description:
          "Streamline your work orders and client interactions within a unified platform.",
        image: "/assets/images/Nipige/contractor_Service_Provider_App.svg",
        benefits: [
          "Work Order Assignment & Tracking – Manage property repair requests, assign tasks, and track completion timelines.",
          "Payment & Invoicing System – Handle service payments and generate invoices directly within the app.",
          "Vendor Performance Insights – Track efficiency, response times, and client feedback for continuous improvement.",
          "Job Scheduling & Notifications – AI-driven scheduling and reminders for upcoming maintenance and repair tasks.",
        ],
      },
    ],
  },
};

export default function DigitalCommerce() {
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
                Digital Commerce
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Trigital revolutionizes digital commerce with a user-friendly
                platform, optimizing transactions, and enhancing customer
                experiences. Tailored solutions cater to diverse industries,
                boosting sales, streamlining operations, and providing
                scalability for business growth.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/Digital Commerce.png"
                  alt="Digital commerce"
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
              <div className="bg-[#EBF7FF] dark:bg-slate-800/50 rounded-2xl p-6 space-y-3">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-4">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
                  {CATEGORIES.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setSelectedCategory(name)}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg cursor-pointer transition
                        lg:w-full
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

                    {/* CTA text block */}
                    {/* <div className="text-center max-w-3xl mx-auto mt-20 pt-8">
                      <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Connect all sales channels and deliver seamless customer
                        experiences across the digital + physical commerce
                        ecosystem.
                      </p>
                    </div> */}
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
            Unify Your Commerce Operations
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Connect all sales channels and deliver seamless customer experiences
            across the digital + physical commerce ecosystem.
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
