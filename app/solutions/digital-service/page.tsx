"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  "Logistics & Delivery Management",
  "Transport Aggregator Platfrom",
  "Online Healthcare Solutions",
  "Tour & Travel Platform",
  "Home Service",
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
  "Logistics & Delivery Management": {
    title: "Logistics & Delivery Management",
    description:
      "Want to start a logistics and delivery management online business? You are on the right path. With many foods and other aggregator platforms having a booming business, logistics and delivery management cannot be left behind. The right idea and unique platform like Nipige would be a deadly combination to encash this happening business opportunity. Take a step now to build your logistics and delivery management platform!",
    benefits: [] as string[],
    sections: [
      {
        title: "Customer App",
        description: "Make delivery of any product a hassle-free affair.",
        image: "/assets/images/Nipige/logistics_Delivery_Customer_App.svg",
        benefits: [
          "Real-time Delivery Tracking – Track the delivery of ordered items from the time of order to delivery through an Uber-like delivery management system that allows tracking on Google Maps and chat with assigned delivery agents.",
          "Multiple Device Support – Customers can request for certain items delivery through mobile or web apps.",
        ],
      },
      {
        title: "Manager Dashboard",
        description:
          "Dig into data at your fingertips for better business decisions.",
        image: "/assets/images/Nipige/logistics_Delivery_Manager_Dashboard.svg",
        benefits: [
          "Delivery Reports – Detailed reports on number of deliveries made day-wise, week-wise, month-wise, or year-wise for further analysis.",
          "Analytics – Assists in tracking delivery performance and evaluates the performance of delivery agents as well.",
          "Commission & Settlements – Calculate and process commissions and settlements to the delivery agents on time.",
        ],
      },
      {
        title: "Delivery Agents App",
        description:
          "Flexible app to assist at every step of the delivery process.",
        image: "/assets/images/Nipige/logistics_Delivery_Agent_App.svg",
        benefits: [
          "Notification/ Alert – Receives notification/ alert regarding next nearest delivery.",
          "Accept/ Reject Delivery – Option to accept/ reject based on availability.",
          "GPS tracking – Provides shortest possible routes for smooth product delivery.",
          "Digital Signature – Confirmation on delivery of products.",
        ],
      },
    ],
    ctaHighlight: {
      text: "Customizable workflows and other techno propositions bring about a transformative change in managing logistics businesses",
      image: "/assets/images/Nipige/customizable_Workflows.svg",
      features: [
        {
          title: "Geo-Tracking Service Mechanism",
          description:
            "Monitor and track the location of vehicles/ agents, which improves the overall security, and increases the efficiency of operations",
        },
        {
          title: "Report & Analytics",
          description:
            "Exhaustive reports and analytics to evaluate driver performance and more for better future planning",
        },
        {
          title: "GPS Navigation Support",
          description:
            "Analyze and assign shortest routes possible for on-time deliveries and enhanced customer experience",
        },
        {
          title: "Third Party Integration",
          description:
            "Allows for all third-party integrations for smooth delivery process",
        },
        {
          title: "Vehicle Management",
          description:
            "Monitor the vehicles and ensure timely maintenance to avoid any kind of last-minute delivery cancellations or breakdown",
        },
        {
          title: "Customizable Workflow",
          description:
            "One logistics and delivery management app workflow that can be customized to suit the needs of different industries such as food delivery, pick-up and delivery, courier delivery, etc.",
        },
      ],
    },
  },
  "Transport Aggregator Platfrom": {
    title: "Transport Aggregator Platfrom",
    description:
      "Do you want to start an online platform to meet transportation needs with your revolutionary online aggregator platform? Nipige can help you with it. Your unique transport business idea can become a reality with exclusive features like live navigation, online payments, toggle driver availability, surge pricing, etc. Our expertise will not only digitize your operations but also make the customer happy with an easy-to-use app.",
    benefits: [] as string[],
    sections: [
      {
        title: "Customer App",
        description:
          "Book instantly and reach your destination on time every time",
        image: "/assets/images/Nipige/customizable_Workflows.svg",
        benefits: [
          "Simple Booking – Book cab, auto, and other modes of transport with an easy booking process instantly or schedule in advance for convenience",
          "Multiple Payment Integration – Option to pay using different modes of payment like debit, credit, UPI, net banking, and others.",
          "Reviews & Rating – Provide review and rate the transport service or the driver that benefits other commuters.",
        ],
      },
      {
        title: "Aggregator Dashboard",
        description:
          "Robust dashboard with relevant details to thrust your business to the next level.",
        image: "/assets/images/Nipige/transport_Aggregator_Platform.svg",
        benefits: [
          "Booking updates – detailed information about the number of bookings, specific zones where the number of bookings is more assists in taking crucial business decisions.",
          "Driver Partner Onboarding – Onboarding driver-partner and providing login and other details of the tie-up.",
          "Reports & Analytics – Availability of reports and analytics quickly that helps to know the drivers’ or business performance.",
          "Promotion & Coupon Set-up – Attract customers by providing discount coupons, promotional coupons while booking vehicles",
        ],
      },
      {
        title: "Driver partner App",
        description: "Simple app to keep track of trips and hard work.",
        image: "/assets/images/Nipige/drive_Partner_App.svg",
        benefits: [
          "Registration – Easy and simple registration process to become a partner of the aggregator platform.",
          "Accept/ Reject Booking – Option to accept or reject customer booking based on availability.",
          "GPS Navigation – Assists in taking the shortest routes to reach the customer’s destination and enhance customer satisfaction.",
        ],
      },
    ],
    ctaHighlight: {
      text: "State of the art features & integrations assist you to manage your fleets with ease and dexterity",
      image: "/assets/images/Nipige/arterstic_Features.svg",
      features: [
        {
          title: "Geo-Tracking Service Mechanism",
          description:
            "Monitor and track the location of vehicles/ agents, which improves the overall security, and increases the efficiency of operations",
        },
        {
          title: "Report & Analytics",
          description:
            "Exhaustive reports and analytics to evaluate driver performance and more for better future planning",
        },
        {
          title: "Promotion & Discount Set-Up",
          description:
            "Provide discount coupons and promotional discounts on instant vehicle booking to attract customers",
        },
        {
          title: "GPS Navigation Support",
          description:
            "Allows customers to quote or bid for an item at a discounted price which can be further accepted or re-quoted by the seller",
        },
        {
          title: "Payment Gateways Integration",
          description:
            "Multiple payment options – debit, credit, UPI, net banking, app wallet, and more for customer’s convenience.",
        },
        {
          title: "Commission & Settlement",
          description:
            "Easily calculate and process commissions and settlements to driver partners ensuring transparency in transactions and mutual benefit",
        },
      ],
    },
  },
  "Online Healthcare Solutions": {
    title: "Online Healthcare Solutions",
    description:
      "Nothing is better than avoiding the long queues at hospitals and engaging with the doctor from the comfort of our homes. Many noted hospitals and other companies have made this possible. They engage with the target audience and offer good quality healthcare services. Your business model may comprise booking doctor’s appointments or medicines at single/multiple pharmacies or other healthcare services. Digitalize these and more healthcare services under one Nipige platform that allows you to connect with customers and brand your enterprise.",
    benefits: [],
    sections: [
      {
        title: "Patient App",
        description:
          "Simple and quick way to connect with doctors, book medicines, and manage health records.",
        image: "/assets/images/Nipige/patient_App.svg",
        benefits: [
          "Online Consultation – Users/ patients can easily search for doctors based on specialization, look for medicines, and lab tests, and book as per convenience.",
          "360 Degree App – One app – multiple solutions! Users can look for medicines, doctors, physiotherapists, and health & wellness programs all on a single platform.",
          "Time Slot Booking – Patients can check for the availability of doctors and other service providers and book appointments, and lab tests at their convenience.",
        ],
      },
      {
        title: "Doctor App",
        description:
          "Connect with patients, check medical records, upload prescriptions in one go! ",
        image: "/assets/images/Nipige/doctor_App.svg",
        benefits: [
          "Patient Review – Connect with patients on call/ video/ audio chat and review patient history through pre-uploaded reports.",
          "Time Slot Booking – Doctors can choose the dates and time in the calendar and make themselves available for consultation.",
          "Upload Prescription – Doctors can upload prescription after/during consultation which can be downloaded by the patient/ user later.",
        ],
      },
      {
        title: "Hospital Dashboard",
        description:
          "Exclusive dashboard with complete details of billing, hospital staff, and more.",
        image: "/assets/images/Nipige/hospital_Dashboard.svg",
        benefits: [
          "Hospital Staff Management – Provides details about hospital staff, their availability, shifts, and other details.",
          "Billing Information – Saves billing data for future reference; provides easy billing mechanism, assists in reducing costs.",
          "Reports & Analytics – Gives complete reports of the hospital admissions, equipment, etc., and helps in making informed decisions.",
        ],
      },
      {
        title: "Pharmacy App",
        description:
          "Efficiently manage medicines stock, and sales, and reach out to a wider audience.",
        image: "/assets/images/Nipige/pharmacy_app.svg",
        benefits: [
          "Medicines Stock Management – Helps in having complete control of the medicines stock, buying and keeping stocks as needed.",
          "Local to Global – Instead of limiting to specific areas, reach out to patients/ users in other areas effortlessly.",
          "Promotion & Ad Set-up – Allows pharmacies to promote certain brand medicines or provide discounts to app users through a promotion & discount mechanism.",
        ],
      },
    ],
    ctaHighlight: {
      text: "From consultation to pharmacy, comprehensive doctor –patient medical functions enabled by noteworthy features & integrations backed by cutting edge technology",
      image: "/assets/images/Nipige/medical_Functions.svg",
      features: [
        {
          title: "User Management",
          description:
            "Administrators can create, edit, and delete user accounts; assign roles and permissions to determine the level of access to the platform.",
        },
        {
          title: "Products & Services",
          description:
            "Provides multiple services in one platform – doctor booking, pharmacy, lab testing, fitness & wellness services like yoga, meditation, etc.",
        },
        {
          title: "In-app Chat Support",
          description:
            "Allows patients to access support and receive assistance, attach files and images, for improved overall customer satisfaction and retention.",
        },
        {
          title: "Upload Reports & Prescription",
          description:
            "Easy to upload medical reports and prescriptions in various formats such as PDF, JPG, PNG, etc., directly from devices or cloud.",
        },
        {
          title: "In-app Notification",
          description:
            "Provides immediate alerts on critical updates, changes, or events happening within the platform to keep patients/users informed in real-time.",
        },
        {
          title: "Commission & Settlement",
          description:
            "Calculate and process commissions and settlements, access comprehensive performance reports, and improve overall operational efficiency.",
        },
      ],
    },
  },
  "Tour & Travel Platform": {
    title: "Tour & Travel Platform",
    description:
      "Travelers vouch for online travel booking platforms that make their travel bookings hassle-free. These apps not only lure customers with discounts and offers but also create an enormous impact on the brand value of the enterprise. Nipige helps you set up a similar platform personalized to accommodate all your operational needs. It gives you a competitive advantage and assists in reaching new heights in no time.",
    benefits: [],
    sections: [
      {
        title: "Customer App",
        description: "Experience convenience at the click of a button.",
        image: "/assets/images/Nipige/travel_Customer_App.svg",
        benefits: [
          "Extensive Search – Search for destinations with relevant travel packages and schedule tours easily.",
          "Customize Packages – Negotiate and request modifications in packages to meet budget and preferences.",
          "Real-time Booking – Get instant booking confirmation without delays.",
          "Multiple Payment Gateways – Pay through debit card, credit card, UPI, net banking, and more.",
          "Review & Feedback – Share reviews and feedback after completing the tour to help other travelers.",
        ],
      },
      {
        title: "Travel Merchant App",
        description:
          "A powerful tool to digitize travel businesses and expand reach.",
        image: "/assets/images/Nipige/travel_Customer_App.svg",
        benefits: [
          "Discount Mechanism – Attract customers with coupons, promotional discounts, and special instant booking offers.",
          "iOS & Android Compatible – Accessible across devices, enabling seamless travel management anytime, anywhere.",
          "Manage Travel Itineraries – Efficiently manage hotel bookings, rentals, car/flight bookings, and complete tour plans with ease.",
        ],
      },
    ],
    ctaHighlight: {
      text: "Tours and travel operators applying our cutting-edge features & integrations can grow their business multifolds",
      image: "/assets/images/Nipige/cutting_Edge_Features.svg",
      features: [
        {
          title: "Geo-Tracking Service Mechanism",
          description:
            "Monitor and track the location of vehicles or agents to enhance overall security and improve operational efficiency.",
        },
        {
          title: "Role Management",
          description:
            "Assign specific roles and permissions to different users, limiting access to sensitive information and ensuring compliance with safety norms.",
        },
        {
          title: "In-App Notification",
          description:
            "Provides immediate alerts on critical updates, changes, or events happening within the platform to keep businesses informed in real-time.",
        },
        {
          title: "Subscription & Billing",
          description:
            "Manage subscription plans and billing information, enable automatic billing, and send notifications for upcoming or due payments.",
        },
        {
          title: "App Wallet",
          description:
            "Allows customers to add funds to their account, track transactions, and view payment history, secured with the latest encryption protocols.",
        },
        {
          title: "Commission & Settlement",
          description:
            "Businesses can easily calculate and process commissions and settlements, access comprehensive performance reports, and improve overall efficiency and revenue.",
        },
      ],
    },
  },
  "Home Service": {
    title: "Home Service",
    description:
      "Are you planning to offer commercial home services like plumbing, electrical works, online or home-based beauty services, and more? Having a customer-friendly and innovative online platform is a must! At Nipige, we bring your out-of-the-box idea to life. We provide personalized digital experiences to enamour your customers and establish a distinct identity for your enterprise.",
    benefits: [] as string[],
    sections: [
      {
        title: "Customer App",
        description:
          "Convenient on-demand service booking for the best customer experience.",
        image: "/assets/images/Nipige/home_Service_Customer-_App.svg",
        benefits: [
          "Simple Search Mechanism – Easily search for service providers by service category and filter results by price, ratings, and other criteria.",
          "Simple Login and Scheduling – Login through registration or using social IDs and schedule service provider by choosing the date & time in the calendar effortlessly.",
          "Live Tracking Service – Track the service professional and calculate the arrival time",
        ],
      },
      {
        title: "Aggregator Dashboard",
        description: "Extensive dashboard for hassle-free business management.",
        image: "/assets/images/Nipige/home_Service_Aggregator_Dashboard.svg",
        benefits: [
          "Featured List – Display the list of service providers based on the user’s previous service orders and preferences.",
          "Competitive Price – Calculate and share the price for service professionals based on category to make it easy for customers to book.",
          "Promotion & Ad Set-up – Option to add promotions in app banner, setting up advertisements for specific services.",
        ],
      },
      {
        title: "Service Professional App",
        description: "Dynamic mobile app for service professionals.",
        image: "/assets/images/Nipige/service_Professional_App.svg",
        benefits: [
          "Task Notification – In-app notifications as reminders to ensure all appointments are met.",
          "Easily Operable – User-friendly app that is simple to use for any service professional with a clear task assignment process.",
          "Completely Digital – No need for paper-based notes or confirmations; maintain digital notes, upload images and digital signatures as required.",
        ],
      },
    ],
    ctaHighlight: {
      text: "State-of-the-art features that help consolidate and manage home services from the convenience of your palm",
      image: "/assets/images/Nipige/advance_Features.svg",
      features: [
        {
          title: "On-demand Home Service",
          description:
            "Allows users to book and schedule services on-demand without the need for advanced planning or complex scheduling.",
        },
        {
          title: "Time Slot Booking",
          description:
            "Businesses can create and manage their availability, enabling customers to book appointments at their convenience.",
        },
        {
          title: "Review Ratings",
          description:
            "Helps customers make informed decisions when choosing service providers, while enabling providers to improve their services based on user feedback.",
        },
        {
          title: "Multi-Language / Currency",
          description:
            "Provides access to the app in multiple languages and supports payments in multiple currencies to help businesses operate in global markets.",
        },
        {
          title: "Real-time Settlement",
          description:
            "Empowers businesses to process and settle payments in real-time, delivering a seamless and efficient experience for both businesses and customers.",
        },
        {
          title: "Live Notification",
          description:
            "Provides immediate alerts on critical updates, changes, or events within the platform to keep businesses informed in real-time.",
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
                Digital Service
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Trigital enhance digital services by developing innovative
                solutions, ensuring seamless user experiences, optimizing
                processes, and providing support. Customized software
                applications contribute to efficiency, security, and overall
                digital service excellence.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/logistics_Delivery_Management.svg"
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
                        break-words
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
