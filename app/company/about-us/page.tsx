import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  CubeIcon,
  DocumentTextIcon,
  StarIcon,
  BoltIcon,
  HeartIcon,
  AcademicCapIcon,
  UserPlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import JsonLd from "@/components/JsonLd";
import {
  getAboutPageSchema,
  getOrganizationSchema,
  getFAQPageSchema,
} from "@/lib/structured-data";
import { PAGE_FAQS } from "@/lib/page-faqs";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About Us | Trigital Tech – Mission, Values & Digital Solutions",
  description:
    "Learn about Trigital Technologies: our mission, values, and team. Software development, digital transformation, and NIPIGE platform expertise.",
  keywords:
    "about Trigital, Trigital Technologies, software development company, technology company, IT services company, digital transformation company, company mission, company values, technology team",
  path: "/company/about-us",
});

const coreValues = [
  {
    name: "Excellence",
    description:
      "Delivering outstanding solutions consistently. We strive for excellence in all that we do.",
    icon: StarIcon,
  },
  {
    name: "Courage",
    description:
      "Taking bold action with ownership. We are courageous and take pride in our commitment and results.",
    icon: BoltIcon,
  },
  {
    name: "People First",
    description:
      "Empathy and meaningful experiences. We care, we are courteous and we put people at the heart of everything.",
    icon: HeartIcon,
  },
  {
    name: "Continuous Learning",
    description:
      "Grow continuously with curiosity. A culture of humility and continuous learning is a bedrock principle of our success.",
    icon: AcademicCapIcon,
  },
  {
    name: "Collaboration",
    description:
      "Work together to create exponential impact. When people work together, they can create something greater than themselves.",
    icon: UserPlusIcon,
  },
  {
    name: "Innovation",
    description:
      "Push boundaries through creativity. We exceed expectations by delivering unparalleled service and driving innovation.",
    icon: SparklesIcon,
  },
];

const stats = [
  {
    number: "250+",
    label: "Apps Developed",
    icon: ComputerDesktopIcon,
  },
  {
    number: "1,500+",
    label: "Customers",
    icon: UserGroupIcon,
  },
  {
    number: "1,000+",
    label: "Service Offered",
    icon: CubeIcon,
  },
  {
    number: "500+",
    label: "Projects",
    icon: DocumentTextIcon,
  },
];

const sectors = [
  "E-commerce & Marketplace",
  "Media & Entertainment",
  "Telecommunications",
  "Utilities & Essential Services",
  "Financial Services",
  "Healthcare",
  "Education & E-Learning",
  "Government & Public Sector",
];

const specialties = [
  "Revenue Management & Assurance",
  "Subscription Billing & CRM",
  "IoT & M2M Metering",
  "Cloud Platforms & Architecture",
  "Data Migration & Integration",
  "AI & Machine Learning Automation",
  "Big Data Processing",
  "End-to-End Digital Transformation",
];

const testimonials = [
  {
    quote:
      "Trigital delivered scalable, secure solutions that accelerated our digital transformation. Their team acted as an extension of ours.",
    author: "Enterprise Client",
    role: "CTO",
  },
  {
    quote:
      "Outstanding technology solutions and commitment to customer success. We partner with Trigital for mission-critical platforms.",
    author: "Technology Leader",
    role: "VP Engineering",
  },
  {
    quote:
      "From strategy to execution, Trigital brings expertise and innovation. A trusted partner for digital growth.",
    author: "Product Leader",
    role: "Head of Product",
  },
];

export default function AboutUs() {
  return (
    <>
      <JsonLd data={[getAboutPageSchema(), getOrganizationSchema(), getFAQPageSchema(PAGE_FAQS["/company/about-us"])]} />
      <section
        className="relative bg-[#0B3C91] text-white py-16 md:py-24"
        style={{
          backgroundImage: "url('/assets/images/Nipige/about_banner.svg')",
          backgroundPosition: "right center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0B3C91] via-[#0B3C91]/95 to-transparent md:via-[#0B3C91]/80"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">About Trigital</h1>
              <p className="text-lg mt-4 text-blue-100">
                Empowering organizations since 2013 with innovative digital
                solutions.
              </p>
              <p className="mt-4 max-w-xl text-blue-100 mx-auto md:mx-0">
                We provide the most responsive, functional, and innovative
                technology solutions helping businesses accelerate their
                transformation journey. Our vision is to become a global leader
                delivering scalable, secure, and value-driven digital platforms
                to power growth.
              </p>
            </div>
            <div className="hidden md:block" aria-hidden />
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          2. WHO WE ARE SECTION
          ————————————————————————————————————————————————————————————— */}
      <section id="who-we-are" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-sm font-medium mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                We specialize in helping our customers digitize their business
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                Headquartered in Hyderabad, Trigital has served enterprises in e-commerce, media, telecom, utilities, and IoT since 2013. Our NIPIGE billing platform and Trinovo ERP help clients streamline operations, reduce costs, and scale digitally.
              </p>
              <div className="mt-4 space-y-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Trigital Technologies Pvt Ltd. is a SaaS Product based
                    company based out of Hyderabad, India. Established in 2013
                    Trigital strives to lead the race in terms of providing
                    services and solutions that are resilient, top notch and
                    value-based adhering to the shortest possible time frames
                    using the most relevant and recent platforms of innovative
                    technology which evolved to be robust and flexible. Trigital
                    has implemented several systems for various applicable
                    industries pertaining e-commerce, Marketplace, Media,
                    Entertainment, Telecom, Utility and IoT.
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Nipige Billing & CRM enterprise having Diverse Experience
                    providing end-to-end e-business solutions and services to
                    Media, Data & Voice segments. Trigital specializes in
                    Revenue Management and Assurance, Billing and payment
                    processing services, IOT (M2M) Metering & Charging using
                    open-source service platforms. Mobile App services form to
                    be a core priority here at Trigital.
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Nipige – A Multitenant, SAAS based B2B & B2C multiple
                    business delivery platform. Nipige, a multitenant, SAAS
                    based multiple business delivery platform helps entities and
                    enterprises build and configure online businesses, providing
                    the much-needed online interface and digital space.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-10 md:mt-0">
              <div className="relative w-full h-[350px] mb-8 md:mb-0">
                <Image
                  src="/assets/images/Nipige/about_right.svg"
                  alt="Trigital platform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="stats" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center md:text-left text-gray-800 dark:text-gray-200 mb-8">
            Our Success in Numbers
          </h2>
          <div className="bg-[#1E3A8A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center">
            {/* Left: descriptive text */}
            <div className="md:min-w-[200px] lg:min-w-[240px] text-white text-center md:text-left">
              <p className="text-lg md:text-xl font-medium leading-snug">
                Our success rate is shown by numbers.
              </p>
            </div>
            {/* Right: white stat cards */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-gray-400 mb-4">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          4. CORE VALUES SECTION
          ————————————————————————————————————————————————————————————— */}
      <section id="values" className="py-20 bg-blue-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm md:shadow-md p-6 md:p-8 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 pt-1">
                      {value.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          5. TEAM SECTION
          ————————————————————————————————————————————————————————————— */}
      <section id="team" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Meet our awesome and professional team
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                Welcome to the heart of Trigital, where innovation thrives and
                excellence is our standard. Take a moment to meet the brilliant
                minds who drive our success. Each member of our team embodies a
                unique blend of creativity, expertise, and dedication. Together,
                we form a dynamic force, collaborating seamlessly to transform
                ideas into reality.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                With a shared vision and relentless determination, we push
                boundaries, challenge conventions, and pursue excellence in
                everything we do. Get to know us, and discover the passion and
                commitment that fuel our journey towards achieving and exceeding
                expectations. Together, we’re not just building a company; we’re
                shaping the future.
              </p>
              <Link
                href="/company/our-team"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 font-medium transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
            <div className="flex justify-center md:justify-end mt-10 md:mt-0">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/Nipige/professional_team.svg"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          6. OUR EXPERIENCE (Sectors & Specialties)
          ————————————————————————————————————————————————————————————— */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Our Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Sectors We Serve
              </h3>
              <ul className="space-y-3">
                {sectors.map((sector, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {sector}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Our Specialties
              </h3>
              <ul className="space-y-3">
                {specialties.map((specialty, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {specialty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          7. TESTIMONIALS SECTION
          ————————————————————————————————————————————————————————————— */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-slate-700"
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
                  {t.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          8. CTA BANNER (Ready to Experience Nipige)
          ————————————————————————————————————————————————————————————— */}
      <section id="cta" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-indigo-900 rounded-2xl py-16 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left overflow-hidden">
            {/* Left: text + button */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                Ready to experience
                <br />
                Nipige for yourself? Go for it.
              </h2>
              <Link
                href="/contact-us?source=demo"
                className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 font-medium transition-colors"
              >
                Get a Demo
              </Link>
            </div>
            {/* Right: decorative illustration */}
            <div className="relative z-0 hidden md:block md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-64 lg:w-80 xl:w-96 h-48 md:h-64 opacity-90">
              <Image
                src="/assets/images/Nipige/get_Demo.svg"
                alt=""
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
