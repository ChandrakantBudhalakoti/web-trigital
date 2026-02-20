import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Digital Engagement | Trigital Tech",
  description:
    "Digital engagement solutions: e-auction platforms, buying-selling marketplaces. Interactive, personalized experiences for customer engagement.",
  path: "/solutions/digital-engagement",
});

const schema = createWebPageSchema({
  name: "Digital Engagement | Trigital Tech",
  description: "Digital engagement solutions: e-auction platforms, buying-selling marketplaces. Interactive, personalized experiences.",
  path: "/solutions/digital-engagement",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Solutions", url: "/solutions/subscription-monetization" }, { name: "Digital Engagement", url: "/solutions/digital-engagement" }],
});

export default function DigitalEngagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
