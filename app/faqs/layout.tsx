import JsonLd from "@/components/JsonLd";
import { createWebPageSchema, getFAQPageSchema } from "@/lib/structured-data";
import { getFAQListForSchema } from "@/lib/faqs-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "FAQs | Trigital Tech – Software, NIPIGE Platform & Services",
  description:
    "Find answers to frequently asked questions about Trigital's software development services, NIPIGE platform, cloud hosting, and digital transformation solutions.",
  keywords:
    "FAQs, frequently asked questions, Trigital FAQ, software development FAQ, NIPIGE FAQ, cloud hosting FAQ, digital transformation FAQ",
  path: "/faqs",
});

const faqsSchemas = [
  createWebPageSchema({
    name: "FAQs | Trigital Tech",
    description:
      "Find answers to frequently asked questions about Trigital's software development services, NIPIGE platform, cloud hosting, and digital transformation solutions.",
    path: "/faqs",
    breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "FAQs", url: "/faqs" }],
  }),
  getFAQPageSchema(getFAQListForSchema()),
];

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqsSchemas} />
      {children}
    </>
  );
}
