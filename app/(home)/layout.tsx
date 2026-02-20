import { buildPageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { getHomePageSchema, getFAQPageSchema } from "@/lib/structured-data";
import { PAGE_FAQS } from "@/lib/page-faqs";

export const metadata = buildPageMetadata({
  title: "Trigital Tech | NIPIGE Platform & Digital Solutions",
  description:
    "Trigital Tech: NIPIGE platform, software, cloud & digital solutions. Management services, deployment model, key features. Transform your business.",
  keywords:
    "Trigital Tech, NIPIGE platform, software development, digital solutions, cloud consulting, management services, deployment model, key features, web development, mobile app, SaaS, billing software, CRM",
  path: "/",
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={[getHomePageSchema(), getFAQPageSchema(PAGE_FAQS["/"])]} />
      {children}
    </>
  );
}
