import Section from "@/components/Section";
import TestimonialCarousel from "@/components/TestimonialCard";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Customers | Trigital Tech",
  description:
    "Discover the success stories of our satisfied customers and how Trigital has transformed their businesses.",
};

const customers = [
  {
    name: "NXTDIGITAL Limited",
    country: "India",
    description:
      "The flagship media business of the global Hinduja Group with pan-India presence.",
    result:
      "Delivered television services platform with improved billing and customer management.",
    logo: "/assets/images/Nipige/nxt_logo.png",
  },
  {
    name: "Telkom South Africa",
    country: "India",
    description:
      "Leading telecommunications provider with operations in 38 African nations.",
    result: "Developed and deployed feature-rich Lions Mobile App Phase I.",
    logo: "/assets/images/Nipige/telkom_logo.svg",
  },
  {
    name: "Tayana Mobility Technologies",
    country: "India",
    description:
      "Leading telecom software products company serving communication service providers worldwide.",
    result: "3GPP-compliant digital BSS and network management solutions.",
    logo: "/assets/images/Nipige/tayana_logo.svg",
  },
  {
    name: "5Factors",
    country: "India",
    description:
      "Risk intelligence company dedicated to cyber and fraud risk management.",
    result:
      "AI-driven solutions with real-time visibility and threat detection.",
    logo: "/assets/images/Nipige/5factorsIcon.png",
  },
  {
    name: "Fastway Group",
    country: "India",
    description:
      "Pioneer in digital entertainment services and dominant market leader in the region.",
    result:
      "Enhanced platform for digital entertainment and internet services.",
    logo: "/assets/images/Nipige/fastway_logo.png",
  },
  {
    name: "AP State FiberNet Limited",
    country: "India",
    description:
      "Government of AP entity for telecom infrastructure development.",
    result: "Advanced network management and digital services platform.",
    logo: "/assets/images/Nipige/apsfl_logo.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Trigital revolutionized our IT landscape, cutting infrastructure costs by 40%. Their seamless systems boosted our revenue by 30%.",
    author: "CTO",
    company: "Digital Services Inc",
  },
  {
    quote:
      "Their scalable solutions improved subscription renewals by 30% and reduced collection costs by 70%.",
    author: "Finance Director",
    company: "Subscription Platform Co",
  },
  {
    quote:
      "Trigital reduced customer incidents by 40% and optimized network operations across distributors via decentralization.",
    author: "Operations Manager",
    company: "Distribution Network",
  },
];

export default function Customers() {
  return (
    <>
      {/* HERO SECTION — Same as key-features: title + paragraph left, banner image right */}
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Customers
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Empower your business with Trigital Platform. Say goodbye to
                time-consuming tasks and hello to data-based efficiency. Join
                our satisfied customers who have transformed their workflow with
                Trigital. Unleash success today.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/customer_top_banner.jpg"
                  alt="Our customers"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PLATFORM CUSTOMERS SECTION */}
      <Section
        id="platform-customers"
        className="bg-white dark:bg-slate-900 py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white text-center mb-4">
            Our Platform Customers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Discover the stories of our satisfied customers who have found
            success with our solutions. Hear firsthand how our products/services
            have transformed their businesses.
          </p>

          {/* Customer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((customer, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700"
              >
                {/* Logo and Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-slate-700 rounded-lg flex-shrink-0">
                    {customer.logo ? (
                      <Image
                        src={customer.logo}
                        alt={`${customer.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {customer.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {customer.name}
                    </h3>
                    <small>{customer.country}</small>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {customer.description}
                </p>

                {/* Result */}
                <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Result:
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {customer.result}
                  </p>
                </div>

                {/* View More Button */}
                <button className="w-full mt-4 border-2 border-orange-500 text-orange-500 bg-white dark:bg-slate-800 dark:text-orange-400 dark:border-orange-500 rounded-lg py-2 px-4 font-medium hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors">
                  View More
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* IMPACT METRICS SECTION */}
      <Section id="impact" className="bg-[#EBF7FF] dark:bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "50+", label: "Satisfied Customers" },
              { metric: "13+", label: "Years of Excellence" },
              { metric: "100+", label: "Projects Delivered" },
              { metric: "24/7", label: "Support Availability" },
            ].map((item, idx) => (
              <div key={idx} className="py-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {item.metric}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section id="testimonials" className="bg-white dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white text-center mb-4">
            Customer Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section
        id="cta"
        className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Trigital will help you accelerate growth and digital
              transformation.
            </p>

            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-xl bg-white text-blue-700 text-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
