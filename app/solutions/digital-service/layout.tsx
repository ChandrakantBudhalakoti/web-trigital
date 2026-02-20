import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Digital Service | Trigital Tech",
  description:
    "Digital service solutions: logistics, transport aggregator, healthcare, tour & travel, home service platforms. Build with NIPIGE.",
  path: "/solutions/digital-service",
});

const schema = createWebPageSchema({
  name: "Digital Service | Trigital Tech",
  description: "Digital service solutions: logistics, transport aggregator, healthcare, tour & travel, home service platforms.",
  path: "/solutions/digital-service",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Solutions", url: "/solutions/subscription-monetization" }, { name: "Digital Service", url: "/solutions/digital-service" }],
});

export default function DigitalServiceLayout({
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
