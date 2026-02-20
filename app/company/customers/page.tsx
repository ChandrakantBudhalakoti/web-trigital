import Section from "@/components/Section";
import TestimonialCarousel from "@/components/TestimonialCard";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema, getFAQPageSchema } from "@/lib/structured-data";
import { PAGE_FAQS } from "@/lib/page-faqs";
import { SITE_URL } from "@/lib/seo";
import { customers } from "@/lib/customers-data";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Our Customers | Trigital Tech - Success Stories & Case Studies",
  description:
    "Customer success stories: see how Trigital has transformed businesses with software, NIPIGE platform, cloud, and digital transformation solutions.",
  keywords:
    "Trigital customers, customer success stories, client testimonials, satisfied customers, business transformation, customer case studies, client portfolio",
  path: "/company/customers",
});

const customersSchema = createWebPageSchema({
  name: "Our Customers | Trigital Tech",
  description: "Customer success stories: see how Trigital has transformed businesses with software, NIPIGE platform, cloud, and digital transformation solutions.",
  path: "/company/customers",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Company", url: "/company/about-us" }, { name: "Customers", url: "/company/customers" }],
});

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
      <JsonLd data={[customersSchema, getFAQPageSchema(PAGE_FAQS["/company/customers"])]} />
      {/* HERO SECTION — Dark blue with customer_top_Banner.svg as background (right) */}
      <section
        className="relative w-full bg-[#0B3C91] text-white py-16 md:py-24"
        style={{
          backgroundImage:
            "url('/assets/images/Nipige/customer_top_Banner.svg')",
          backgroundPosition: "right center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0B3C91] via-[#0B3C91]/95 to-transparent md:via-[#0B3C91]/85"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">Customers</h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed mx-auto md:mx-0">
                Empower your business with Trigital Platform. Say goodbye to
                time-consuming tasks and hello to streamlined efficiency. Join
                our satisfied customers who have transformed their workflows
                with Trigital. Unlock success today.
              </p>
            </div>
            <div className="hidden md:block" aria-hidden />
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
          <p className="text-gray-600 dark:text-gray-400 text-center mb-4 max-w-2xl mx-auto leading-relaxed">
            Discover the stories of our satisfied customers who have found
            success with our solutions. Hear firsthand how our products and services
            have transformed their businesses.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-center mb-12 max-w-2xl mx-auto text-sm leading-relaxed">
            From telecom and utilities to e-commerce and healthcare, our clients span multiple industries. Each case study highlights the challenges we addressed and the outcomes achieved with our NIPIGE platform and digital solutions.
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
                <Link
                  href={`/company/customers/${customer.slug}`}
                  className="block w-full mt-4 text-center border-2 border-orange-500 text-orange-500 bg-white dark:bg-slate-800 dark:text-orange-400 dark:border-orange-500 rounded-lg py-2 px-4 font-medium hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors"
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* IMPACT METRICS SECTION */}
      <Section id="impact" className="bg-[#EBF7FF] dark:bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Impact Metrics
          </h2>
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
