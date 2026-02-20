import { buildPageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema, getFAQPageSchema } from "@/lib/structured-data";
import { PAGE_FAQS } from "@/lib/page-faqs";
import { SITE_URL } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Our Partners | Trigital Tech – Technology & Strategic Partnerships",
  description:
    "Explore Trigital's partnerships with AWS, Google Cloud, Microsoft Azure, Stripe, and more. Join our partner ecosystem for technology and growth.",
  keywords:
    "Trigital partners, technology partners, AWS partner, Google Cloud partner, Microsoft Azure partner, Shopify partner, Stripe partner, Salesforce partner, partner ecosystem, strategic partnerships",
  path: "/company/partners",
});

const partnersSchemas = [
  createWebPageSchema({
  name: "Our Partners | Trigital Tech",
  description: "Explore Trigital's partnerships with AWS, Google Cloud, Microsoft Azure, Stripe, and more. Join our partner ecosystem for technology and growth.",
  path: "/company/partners",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Company", url: "/company/about-us" }, { name: "Partners", url: "/company/partners" }],
}),
  getFAQPageSchema(PAGE_FAQS["/company/partners"]),
];

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={partnersSchemas} />
      {children}
    </>
  );
}
