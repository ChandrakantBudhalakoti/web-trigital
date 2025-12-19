'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import Link from 'next/link';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Services',
      items: [
        {
          question: 'What kind of software development services do you offer?',
          answer:
            'We offer a comprehensive range of services including custom software development, web application development, mobile app development (iOS and Android), enterprise software solutions, e-commerce development, UI/UX design, and software maintenance & support.',
        },
        {
          question: 'What technologies and platforms do you specialize in?',
          answer:
            'We have expertise in various technologies including programming languages (Java, Python, JavaScript, C#, Swift, Kotlin), frameworks (React.js, Angular, Node.js, Django, Flask), databases (MySQL, PostgreSQL, MongoDB), mobile platforms (iOS, Android, React Native, Flutter), and cloud platforms (AWS, Azure, GCP).',
        },
        {
          question: 'Do you provide post-launch support and maintenance?',
          answer:
            'Yes, we offer comprehensive post-launch support and maintenance services to ensure smooth operation of your software solution. Our support team is available to address issues, implement updates, and provide ongoing optimization.',
        },
      ],
    },
    {
      category: 'Products',
      items: [
        {
          question: 'What is NGB?',
          answer:
            'NGB (Next Generation Billing) is our flagship subscription billing and CRM platform. It provides a ready-made, highly flexible solution for managing subscriptions, billing, customer relationships, and revenue operations. NGB is designed with industry best practices, reducing errors and ensuring compliance.',
        },
        {
          question: 'What is NIPIGE?',
          answer:
            'NIPIGE is a versatile low-code/no-code platform designed for digital business enablement. It offers scalable, multi-tenancy SaaS solutions with end-to-end capabilities using a 100% microservices architecture. It supports B2B, B2C, and B2B2C scenarios with rapid go-to-market capabilities.',
        },
        {
          question: 'Why should I use NGB instead of building my own billing system?',
          answer:
            'Choosing NGB over building your own billing system offers significant advantages: it saves time and development costs, reduces the risk of errors, ensures compliance with industry standards, provides pre-built features for various business models, and allows you to focus on your core business activities.',
        },
      ],
    },
    {
      category: 'Cloud & Hosting',
      items: [
        {
          question: 'Is Trigital hosted securely?',
          answer:
            'Yes, Trigital is hosted on Amazon Web Services (AWS) across multiple locations with various security measures implemented to guarantee uninterrupted service accessibility and data security.',
        },
        {
          question: 'What cloud services do you offer?',
          answer:
            'We offer comprehensive cloud consulting services including IaaS, PaaS, and SaaS optimization, cloud migration, infrastructure management, cost optimization, and multi-cloud strategy development.',
        },
      ],
    },
    {
      category: 'Project Management',
      items: [
        {
          question: 'What methodologies do you use for project management?',
          answer:
            'We follow agile methodologies for project management, ensuring transparency, flexibility, and continuous improvement throughout the development process. Our team conducts regular meetings, maintains open communication, and uses project management tools to keep clients updated.',
        },
        {
          question: 'How do you handle communication with clients?',
          answer:
            'We maintain regular meetings and open communication channels with our clients. We schedule consultations to discuss project requirements, goals, and timelines, and provide detailed proposals and development roadmaps upfront.',
        },
      ],
    },
    {
      category: 'Billing & Subscriptions',
      items: [
        {
          question: 'What is subscription billing?',
          answer:
            'Subscription billing is a business model where customers pay regular, recurring fees for ongoing access to products or services. It provides continuous access to services as long as subscriptions are maintained and helps ensure revenue predictability and customer retention.',
        },
        {
          question: 'How does CRM integration help with subscriptions?',
          answer:
            'CRM integration helps businesses track customer interactions, manage customer lifecycles, and enhance overall customer experiences. It provides insights into customer behavior, improves retention, and enables personalized engagement.',
        },
      ],
    },
    {
      category: 'General',
      items: [
        {
          question: 'How long has Trigital been in business?',
          answer:
            'Trigital Technologies Pvt Ltd was established in 2013, giving us over a decade of experience in providing innovative technology solutions to businesses across various sectors.',
        },
        {
          question: 'What industries do you serve?',
          answer:
            'We have experience serving diverse industries including e-commerce, marketplace, media, entertainment, telecommunications, utilities, IoT, financial services, healthcare, and education.',
        },
        {
          question: 'How can I get started with Trigital?',
          answer:
            'To get started, you can contact us through our website, email, or phone. We will schedule a consultation to discuss your project requirements, goals, and timeline, and provide you with a detailed proposal and roadmap.',
        },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and solutions"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section id="faqs" className="bg-white dark:bg-slate-800">
        <div className="max-w-3xl mx-auto">
          {faqs.map((category, categoryIdx) => (
            <div key={categoryIdx} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">{category.category}</h2>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const globalIdx = faqs
                    .slice(0, categoryIdx)
                    .reduce((sum, cat) => sum + cat.items.length, 0) + itemIdx;

                  return (
                    <div
                      key={globalIdx}
                      className="collapse collapse-plus bg-base-100 border border-base-300"
                    >
                      <input
                        type="radio"
                        name="faq-accordion"
                        checked={openIndex === globalIdx}
                        onChange={() =>
                          setOpenIndex(openIndex === globalIdx ? null : globalIdx)
                        }
                      />
                      <div className="collapse-title text-lg font-semibold">
                        {item.question}
                      </div>
                      <div className="collapse-content">
                        <p className="text-gray-700 dark:text-gray-300 pt-4">{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="still-have-questions"
        className="bg-gray-50 dark:bg-slate-900"
        title="Still Have Questions?"
        subtitle="We're here to help"
      >
        <div className="text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            If you didn't find the answer you're looking for, feel free to reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="btn btn-primary">
              Contact Us
            </Link>
            <a href="mailto:contact@trigitaltech.com" className="btn btn-outline btn-primary">
              Send an Email
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
