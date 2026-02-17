"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FAQS } from "@/lib/faqs-data";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = FAQS;
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
              <h2 className="text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
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
                        <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                          {item.question}
                        </span>
                        <ChevronDownIcon
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
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
          <h3 className="text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Our team is happy to help you with anything you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:-translate-y-1 transition-all font-semibold"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@trigital.in"
              className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:-translate-y-1 transition-all font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
