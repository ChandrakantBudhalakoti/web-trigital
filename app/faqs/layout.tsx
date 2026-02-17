import JsonLd from "@/components/JsonLd";
import { getFAQPageSchema } from "@/lib/structured-data";
import { getFAQListForSchema } from "@/lib/faqs-data";

export const metadata = {
  title: "FAQs | Trigital Tech",
  description:
    "Find answers to frequently asked questions about Trigital's software development services, NIPIGE platform, cloud hosting, and digital transformation solutions.",
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={getFAQPageSchema(getFAQListForSchema())} />
      {children}
    </>
  );
}
