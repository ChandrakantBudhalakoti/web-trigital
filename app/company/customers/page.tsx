import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import TestimonialCarousel from "@/components/TestimonialCard";
import Link from "next/link";

export const metadata = {
  title: "Our Customers | Trigital Tech",
  description:
    "Discover the success stories of our satisfied customers and how Trigital has transformed their businesses.",
};

const customers = [
  {
    name: "NXTDIGITAL Limited",
    description:
      "The flagship media business of the global Hinduja Group with pan-India presence.",
    result:
      "Delivered television services platform with improved billing and customer management.",
  },
  {
    name: "Telkom South Africa",
    description:
      "Leading telecommunications provider with operations in 38 African nations.",
    result: "Developed and deployed feature-rich Lions Mobile App Phase I.",
  },
  {
    name: "Tayana Mobility Technologies",
    description:
      "Leading telecom software products company serving communication service providers worldwide.",
    result: "3GPP-compliant digital BSS and network management solutions.",
  },
  {
    name: "5Factors",
    description:
      "Risk intelligence company dedicated to cyber and fraud risk management.",
    result:
      "AI-driven solutions with real-time visibility and threat detection.",
  },
  {
    name: "Fastway Group",
    description:
      "Pioneer in digital entertainment services and dominant market leader in the region.",
    result:
      "Enhanced platform for digital entertainment and internet services.",
  },
  {
    name: "AP State FiberNet Limited",
    description:
      "Government of AP entity for telecom infrastructure development.",
    result: "Advanced network management and digital services platform.",
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
      {/* HERO */}
      <HeroSection
        title="Our Valued Customers"
        subtitle="Success stories from businesses we've transformed"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-32 md:py-44"
      />

      {/* CUSTOMER CARDS */}
      <Section
        id="customer-list"
        className="bg-white dark:bg-slate-900 py-20"
        title="Leading Organizations We Partner With"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-base-100 border border-white/10 shadow hover:shadow-xl transition p-6"
            >
              <h3 className="font-bold text-primary text-lg">
                {customer.name}
              </h3>
              <p className="text-sm text-base-content/70 mt-2 mb-4">
                {customer.description}
              </p>

              <div className="text-sm font-semibold text-primary">Result:</div>
              <p className="text-sm text-base-content/80 mt-1">
                {customer.result}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* IMPACT METRICS */}
      <Section
        id="impact"
        className="bg-gray-50 dark:bg-slate-800 py-20"
        title="Our Impact"
      >
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { metric: "50+", label: "Satisfied Customers" },
            { metric: "13+", label: "Years of Excellence" },
            { metric: "100+", label: "Projects Delivered" },
            { metric: "24/7", label: "Support Availability" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-extrabold text-primary mb-2 leading-none">
                {item.metric}
              </div>
              <p className="text-base-content/80">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        id="testimonials"
        className="bg-white dark:bg-slate-900 py-20"
        title="Customer Testimonials"
        subtitle="What our clients say about working with us"
      >
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        className="bg-gradient-to-tr from-blue-600 to-blue-800 text-white py-24"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Trigital will help you accelerate growth and digital transformation.
          </p>

          <Link
            href="/contact-us"
            className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all font-semibold"
          >
            Start Your Journey
          </Link>
        </div>
      </Section>
    </>
  );
}
