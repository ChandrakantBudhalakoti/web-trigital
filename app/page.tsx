import Link from "next/link";
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
} from "@heroicons/react/24/outline";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCarousel from "@/components/TestimonialCard";
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
    link: "/products/ngb",
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

const testimonials = [
  {
    quote:
      "I want to express my sincere gratitude to the Trigital team for their invaluable assistance in conceptualizing and bringing to life my passion project. The entire journey, from design to launch, was seamless and delightful.",
    author: "Satisfied Client",
    company: "Tech Startup",
  },
  {
    quote:
      "Trigital has truly been an invaluable partner in our journey to success. Their unwavering dedication to quality and exceptional customer service sets them apart.",
    author: "Business Owner",
    company: "E-Commerce Platform",
  },
  {
    quote:
      "Trigital's expertise propelled a 30% boost in supply chain speed, 20% waste reduction, and a remarkable 40% surge in online orders, elevating customer satisfaction.",
    author: "Operations Director",
    company: "Retail Corporation",
  },
  {
    quote:
      "Working with Trigital was a game-changer for our digital transformation. Their strategic approach and technical excellence helped us scale faster than expected.",
    author: "Product Manager",
    company: "SaaS Company",
  },
  {
    quote:
      "The Trigital team delivered a robust, scalable solution tailored exactly to our business needs. Their communication and execution were top-notch.",
    author: "CTO",
    company: "FinTech Firm",
  },
  {
    quote:
      "From ideation to deployment, Trigital demonstrated professionalism and innovation at every step. We saw measurable growth within weeks of launch.",
    author: "Marketing Head",
    company: "Digital Agency",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="We are technology enablers and rapid digital enablement is our forte."
        subtitle="Transform businesses and help grow in par with the present day techno landscapes with future-ready empowerment."
        ctaText="Get Started"
        ctaLink="/contact-us"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
        isDark={true}
      />

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

      {/* Services Section */}
      <Section
        id="services"
        className="bg-gray-50 dark:bg-slate-900 py-20"
        title="Our Services & Solutions"
        subtitle="Comprehensive technology solutions designed to transform your business."
      >
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
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

      {/* Products Section */}
      <Section
        id="products"
        className="bg-gray-50 dark:bg-slate-900"
        title="Our Flagship Products"
        subtitle="Enterprise-grade solutions for modern business challenges."
      >
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Product 1 - NGB */}
          <section
            aria-labelledby="ngb-title"
            className="p-8 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 id="ngb-title" className="text-2xl font-semibold mb-3">
              NGB – Next Generation Billing
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
              A comprehensive SaaS platform for subscription billing, CRM, and
              revenue management.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                Subscription management & billing
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                Customer relationship management
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                Multi-tenancy SaaS architecture
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                Payment gateway integration
              </li>
            </ul>

            <Link
              href="/products/ngb"
              className="text-primary font-medium hover:underline"
            >
              Explore NGB →
            </Link>
          </section>

          {/* Product 2 - NIPIGE */}
          <section
            aria-labelledby="nipige-title"
            className="p-8 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 id="nipige-title" className="text-2xl font-semibold mb-3">
              NIPIGE – Digital Commerce Platform
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
              A cutting-edge low-code/no-code platform for digital business
              enablement.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                Low-code/no-code development
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                B2B, B2C, B2B2C solutions
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                Microservices architecture
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-primary" />
                Multi-tenant, multi-vendor, multi-currency
              </li>
            </ul>

            <Link
              href="/products/nipige"
              className="text-primary font-medium hover:underline"
            >
              Explore NIPIGE →
            </Link>
          </section>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        id="testimonials"
        className="bg-white dark:bg-slate-800"
        title="Customer Success Stories"
        subtitle="Hear from our satisfied clients about their experience with us."
      >
        <TestimonialCarousel testimonials={testimonials} />
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
      Let's discuss how Trigital can help you achieve your goals.
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
        href="/demo"
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
