import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Digital Commerce | Trigital Tech",
  description:
    "Digital commerce solutions: hyperlocal markets, restaurant aggregators, farm-to-home, e-commerce, POS, real estate. Powered by NIPIGE platform.",
  path: "/solutions/digital-commerce",
});

const schema = createWebPageSchema({
  name: "Digital Commerce | Trigital Tech",
  description: "Digital commerce solutions: hyperlocal markets, restaurant aggregators, farm-to-home, e-commerce, POS, real estate.",
  path: "/solutions/digital-commerce",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Solutions", url: "/solutions/subscription-monetization" }, { name: "Digital Commerce", url: "/solutions/digital-commerce" }],
});

export default function DigitalCommerceLayout({
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
