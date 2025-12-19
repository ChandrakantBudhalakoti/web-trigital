"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Services",
      items: [
        {
          question: "What kind of software development services do you offer?",
          answer:
            "We offer custom software development, web & mobile apps, enterprise solutions, e-commerce platforms, UI/UX design, and long-term maintenance & support.",
        },
        {
          question: "What technologies do you specialize in?",
          answer:
            "Our expertise includes React, Next.js, Node.js, Java, Python, Flutter, AWS, Azure, GCP, SQL & NoSQL databases, and modern DevOps practices.",
        },
        {
          question: "Do you provide post-launch support?",
          answer:
            "Yes. We offer SLA-based support, monitoring, performance optimization, and continuous enhancements.",
        },
      ],
    },
    {
      category: "Products",
      items: [
        {
          question: "What is NGB?",
          answer:
            "NGB (Next Generation Billing) is our subscription billing and CRM platform designed to handle complex billing models with compliance and scalability.",
        },
        {
          question: "What is NIPIGE?",
          answer:
            "NIPIGE is a low-code / no-code digital enablement platform built on microservices architecture for rapid SaaS product development.",
        },
      ],
    },
    {
      category: "Cloud & Hosting",
      items: [
        {
          question: "Is Trigital hosted securely?",
          answer:
            "Yes. We use AWS infrastructure with industry-standard security, monitoring, backups, and high availability.",
        },
      ],
    },
  ];

  let counter = 0;

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our services & platforms"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section id="faqs" className="bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto space-y-16">
          {faqs.map((category, categoryIdx) => (
            <div key={categoryIdx}>
              {/* Category Header */}
              <h2 className="text-3xl font-semibold mb-8 text-slate-900 dark:text-white">
                {category.category}
              </h2>

              {/* FAQ Cards */}
              <div className="space-y-4">
                {category.items.map((item) => {
                  const index = counter++;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 transition-all"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left"
                      >
                        <span className="text-lg font-medium text-slate-900 dark:text-white">
                          {item.question}
                        </span>
                        <ChevronDownIcon
                          className={`h-5 w-5 text-slate-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="still-have-questions"
        className="bg-slate-50 dark:bg-slate-950"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4 text-slate-900 dark:text-white">
            Still have questions?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Our team is happy to help you with anything you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all font-semibold"
            >
              Contact Us
            </Link>
            <a
              href="mailto:contact@trigitaltech.com"
              className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
