/** Shared FAQ list for FAQs page and FAQPage JSON-LD */
export const FAQS = [
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

/** Flattened list for FAQPage schema (question + answer only) */
export function getFAQListForSchema(): { question: string; answer: string }[] {
  return FAQS.flatMap((c) => c.items);
}
