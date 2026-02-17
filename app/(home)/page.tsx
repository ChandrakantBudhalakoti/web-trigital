"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cog6ToothIcon,
  CloudIcon,
  CreditCardIcon,
  SparklesIcon,
  ChartBarIcon,
  LinkIcon,
  CheckIcon,
  BoltIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  CubeIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import Section from "@/components/Section";

const services = [
  {
    icon: <Cog6ToothIcon className="w-12 h-12 text-primary" />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built to your specific business needs.",
    features: [
      "Full-stack development",
      "Web and mobile applications",
      "Enterprise solutions",
      "API development",
    ],
    link: "/services/custom-development",
  },
  {
    icon: <CloudIcon className="w-12 h-12 text-primary" />,
    title: "Cloud Consulting Services",
    description:
      "Maximize your business potential with tailored cloud solutions.",
    features: [
      "IaaS, PaaS, SaaS optimization",
      "Cloud migration",
      "Infrastructure management",
      "Cost optimization",
    ],
    link: "/services/cloud-consulting",
  },
  {
    icon: <CreditCardIcon className="w-12 h-12 text-primary" />,
    title: "Billing & CRM Solutions",
    description:
      "Enterprise billing and customer relationship management platforms.",
    features: [
      "Subscription management",
      "Payment processing",
      "Revenue assurance",
      "Customer lifecycle management",
    ],
    link: "/products/nipige",
  },
  {
    icon: <SparklesIcon className="w-12 h-12 text-primary" />,
    title: "AI & Machine Learning",
    description: "Transformative AI and ML solutions for your business.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Data mining",
      "Intelligent automation",
    ],
    link: "/services/ai-ml",
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-primary" />,
    title: "Big Data Analytics",
    description: "Extract actionable insights from complex datasets.",
    features: [
      "Data warehouse solutions",
      "Business intelligence",
      "Real-time analytics",
      "Data visualization",
    ],
    link: "/services/big-data",
  },
  {
    icon: <LinkIcon className="w-12 h-12 text-primary" />,
    title: "Integration Services",
    description: "Seamlessly connect your systems and streamline operations.",
    features: [
      "System integration",
      "API management",
      "Legacy modernization",
      "Data synchronization",
    ],
    link: "/services/integration",
  },
];

const features = [
  {
    icon: <CheckIcon className="w-12 h-12 text-primary" />,
    title: "Proven Expertise",
    description: "Over a decade of experience delivering enterprise solutions.",
  },
  {
    icon: <BoltIcon className="w-12 h-12 text-primary" />,
    title: "Fast Delivery",
    description: "Rapid go-to-market with agile development methodologies.",
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-primary" />,
    title: "Quality Assured",
    description: "Rigorous testing and quality assurance processes.",
  },
  {
    icon: <GlobeAltIcon className="w-12 h-12 text-primary" />,
    title: "Global Support",
    description: "24/7 technical support and customer service worldwide.",
  },
  {
    icon: <BriefcaseIcon className="w-12 h-12 text-primary" />,
    title: "Strategic Partnership",
    description: "We work as an extension of your team towards shared goals.",
  },
  {
    icon: <ArrowTrendingUpIcon className="w-12 h-12 text-primary" />,
    title: "Scalable Solutions",
    description: "Solutions that grow with your business needs.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "Nipige" | "Solutions" | "Services"
  >("Nipige");

  return (
    <>
      {/* Hero Section with Three Cards */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-4 sm:py-32 overflow-hidden">
        {/* Background geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Hero Title and Subtitle */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              We are technology enablers and rapid digital enablement is our
              forte.
            </h1>
            <p className="text-xl sm:text-2xl mb-6 opacity-90">
              We transform businesses and help grow on par with the present day
              techno landscapes with future ready empowerment.
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Card 1: Product - Other Our Service */}
            <div className="group relative">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  Product – Other Our Service
                </h3>
              </div>
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-8 h-[400px] flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/assets/images/Nipige/Product_NGB.svg"
                    alt="Product - Other Our Service"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Platform - NIPIGE */}
            <div className="group relative">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  Platform – NIPIGE
                </h3>
              </div>
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-8 h-[400px] flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/assets/images/Nipige/Platform_NIPIGE.svg"
                    alt="Platform - NIPIGE"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Consulting Service */}
            <div className="group relative">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  Consulting Service
                </h3>
              </div>
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-8 h-[400px] flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/assets/images/Nipige/Cloud_Service.svg"
                    alt="Consulting Service"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/contact-us"
              aria-label="Navigate to Get Started"
              className="inline-flex items-center px-6 py-3 mt-6 text-lg font-semibold rounded-md 
                 bg-white/10 hover:bg-white/20 text-white backdrop-blur 
                 transition gap-2"
            >
              <span>Get Started</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <Section
        id="about-preview"
        className="bg-white dark:bg-slate-800"
        title="About Trigital"
        subtitle="Established in 2013, Trigital strives to lead the race in providing resilient, top-notch, and value-based solutions."
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Trigital Technologies Pvt Ltd. is a SaaS Product based company
              headquartered in Hyderabad, India. We specialize in Revenue
              Management, Billing, Payment Processing, and IoT solutions.
            </p>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Our diverse experience spans e-commerce, Media, Entertainment,
              Telecom, Utilities, and IoT sectors, providing end-to-end
              e-business solutions.
            </p>
            <Link href="/company/about-us" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 text-white text-center">
            <div className="text-6xl font-bold mb-4">13+</div>
            <p className="text-xl mb-4">Years of Industry Experience</p>
            <p className="text-sm opacity-90">
              Serving enterprise clients across multiple sectors globally
            </p>
          </div>
        </div>
      </Section>

      {/* Explore Our Offerings Section */}
      <Section
        id="explore-offerings"
        className="bg-white dark:bg-slate-800 py-20"
      >
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Explore Our Offerings
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {/* Nipige Tab */}
            <button
              onClick={() => setActiveTab("Nipige")}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer
                ${
                  activeTab === "Nipige"
                    ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <span>Nipige</span>
            </button>

            {/* Solutions Tab */}
            <button
              onClick={() => setActiveTab("Solutions")}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer
                ${
                  activeTab === "Solutions"
                    ? "bg-yellow-100 text-yellow-700 border-2 border-yellow-300"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              <LightBulbIcon className="w-6 h-6 text-yellow-600" />
              <span>Solutions</span>
            </button>

            {/* Services Tab */}
            <button
              onClick={() => setActiveTab("Services")}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer
                ${
                  activeTab === "Services"
                    ? "bg-gray-100 text-gray-700 border-2 border-gray-300"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
              <span>Services</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {/* Nipige Content */}
            {activeTab === "Nipige" && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                  Platform NIPIGE
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Platform Overview */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <ComputerDesktopIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Platform Overview
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      A no-code & lowcode SaaS Platform to build ready to launch
                      digital products for Digital Commerce, Digital Engagement
                      and Digital Experience. Level up your business...
                    </p>
                    <Link
                      href="/products/nipige"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Nipige <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Working Mechanism */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <Cog6ToothIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Working Mechanism
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Simple step by step procedure to be followed from sign up
                      with nipige, configure and test as per requirements,
                      leading to beta launch and ultimately grow...
                    </p>
                    <Link
                      href="/platform/how-it-works"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Nipige Working Mechanism{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Key Features */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <MagnifyingGlassIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Key Features
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Nipige offers arrays of features and capabilities
                      targeting different segments of different markets and
                      business. Features are primarily focused on bringing...
                    </p>
                    <Link
                      href="/platform/key-features"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Nipige Key Features <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Market & Solutions */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <ChartBarIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Market & Solutions
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Nipige is a configurable solution addressing diverse
                      markets such as healthcare, property management, retail,
                      logistics, agri-tech, fleet management, and many more...
                    </p>
                    <Link
                      href="/platform/market-solution"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Nipige Market & Solutions{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Deployment Model */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <CloudIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Deployment Model
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Nipige provides a versatile deployment strategy,
                      accommodating both on-premise and cloud models. This
                      flexibility enables businesses to select the
                      infrastructure...
                    </p>
                    <Link
                      href="/platform/deployment-model"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Nipige Deployment Model{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Solutions Content */}
            {activeTab === "Solutions" && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                  Solution
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Subscription Monetization */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <CreditCardIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Subscription Monetization
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Trigital empowers businesses in subscription monetization
                      by streamlining processes. We automate billing, enhance
                      management, and optimize growth, ensuring efficient
                      revenue...
                    </p>
                    <Link
                      href="/solutions/subscription-monetization"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Subscription Monetization{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Digital Commerce */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <CreditCardIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Digital Commerce
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Trigital revolutionizes digital commerce with a
                      user-friendly platform, optimizing transactions, and
                      enhancing customer experiences. Tailored solutions cater
                      to diverse industries...
                    </p>
                    <Link
                      href="/solutions/digital-commerce"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Digital Commerce{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Digital Engagement */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <SparklesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Digital Engagement
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Trigital elevates digital engagement by developing
                      interactive and personalized solutions. Through
                      user-centric applications, optimize customer experiences,
                      foster increased...
                    </p>
                    <Link
                      href="/solutions/digital-engagement"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Digital Engagement{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Digital Service */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow md:col-start-2">
                    <WrenchScrewdriverIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Digital Service
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Trigital enhance digital services by developing innovative
                      solutions, ensuring seamless user experiences, optimizing
                      processes, and providing support. Customized software...
                    </p>
                    <Link
                      href="/solutions/digital-service"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Digital Service{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Services Content */}
            {activeTab === "Services" && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                  Services
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Cloud Consultancy */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <CloudIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Cloud Consultancy
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Expert cloud consulting services to help you migrate,
                      optimize, and manage your cloud infrastructure
                      efficiently.
                    </p>
                    <Link
                      href="/services/cloud-consulting"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Cloud Consultancy{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Migration Services */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <ArrowTrendingUpIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Migration Services
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Seamless migration of your applications and data to modern
                      platforms with minimal downtime and maximum efficiency.
                    </p>
                    <Link
                      href="/services/migration-services"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Migration Services{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* AI/ML Consulting */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <SparklesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      AI/ML Consulting
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Transform your business with AI and machine learning
                      solutions tailored to your specific needs and objectives.
                    </p>
                    <Link
                      href="/services/ai-ml-consulting"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore AI/ML Consulting{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Big Data & Analytics */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <ChartBarIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Big Data & Analytics
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Unlock insights from your data with advanced analytics and
                      big data solutions that drive informed decision-making.
                    </p>
                    <Link
                      href="/services/big-data-analytics"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Big Data & Analytics{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* App Development */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <ComputerDesktopIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      App Development
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Custom mobile and web applications built with cutting-edge
                      technologies to meet your business requirements.
                    </p>
                    <Link
                      href="/services/app-development"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore App Development{" "}
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Blockchain */}
                  <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <CubeIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
                      Blockchain
                    </h4>
                    <p className="text-gray-700 text-center mb-4">
                      Leverage blockchain technology to enhance security,
                      transparency, and efficiency in your business processes.
                    </p>
                    <Link
                      href="/services/blockchain"
                      className="text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline"
                    >
                      Explore Blockchain <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section
        id="why-choose-us"
        className="bg-white dark:bg-slate-800 py-20"
        title="Why Choose Trigital?"
        subtitle="Proven expertise and commitment to excellence in digital transformation."
      >
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </Section>

      {/* Our Valuable Customers Section */}
      <Section
        id="valuable-customers"
        className="bg-white dark:bg-slate-800 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Our Valuable Customers
          </h2>
          <p className="text-lg text-center mb-12 text-gray-700 dark:text-gray-300">
            Embark on a journey of excellence with us – where our valuable
            customers are the heartbeat of our success.
          </p>

          {/* Customer Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 5Factors Card */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/assets/images/Nipige/5factorsIcon.png"
                    alt="5Factors Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">5Factors</h3>
                  <p className="text-sm text-gray-600">USA</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 line-clamp-4">
                5Factors is a pioneering risk intelligence company dedicated to
                unifying cyber and fraud risk management for enterprises through
                a single, end-to-end platform. Its advanced, AI-driven solutions
                provide complete, real-time visibility...
              </p>
            </div>

            {/* Tayana Card */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/assets/images/Nipige/tayana_logo.svg"
                    alt="Tayana Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Tayana</h3>
                  <p className="text-sm text-gray-600">Bengaluru, India</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 line-clamp-4">
                Tayana Mobility Technologies Pvt Ltd, founded in 1999 in
                Bangalore, is a leading telecom software products company
                serving communication service providers (CSPs) worldwide. Its
                3GPP-compliant solutions span digital BSS, network
                management....
              </p>
            </div>

            {/* TELKOM Card */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/assets/images/Nipige/telkom_logo.svg"
                    alt="TELKOM Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">TELKOM</h3>
                  <p className="text-sm text-gray-600">South Africa</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 line-clamp-4">
                Telkom South Africa, the country&apos;s leading
                telecommunications provider with operations in 38 African
                nations, engaged us to deliver Phase I of the Lions Mobile App.
                We developed and deployed a feature-rich platform including...
              </p>
            </div>
          </div>

          {/* View All Customers Button */}
          <div className="text-center">
            <Link
              href="/company/customers"
              className="inline-block bg-[#0B62FF] text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Customers
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        id="cta"
        className="
    relative overflow-hidden text-white 
    bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900
    py-24 sm:py-32
  "
      >
        {/* soft glow light effect */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg sm:text-xl mb-10 text-blue-200">
            Let&apos;s discuss how Trigital can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="
          px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold
          bg-white text-blue-700 shadow-lg
          hover:shadow-2xl hover:scale-105 
          transition-all duration-300
        "
            >
              Contact Us
            </Link>

            <Link
              href="/contact-us?source=demo"
              className="
          px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold
          border border-white/60 text-white 
          backdrop-blur-sm bg-white/10
          hover:bg-white/20 hover:border-white
          hover:shadow-xl hover:scale-105
          transition-all duration-300
        "
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
