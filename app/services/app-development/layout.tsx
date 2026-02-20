import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "App Development | Trigital Tech",
  description:
    "Android, iOS, and POS app development. Mobile apps, cross-platform solutions, deployment. Trigital app development experts.",
  keywords:
    "app development, mobile app development, Android app development, iOS app development, POS app development, cross-platform apps",
  path: "/services/app-development",
});

const schema = getServiceSchema({
  name: "App Development",
  description: "Android, iOS, and POS app development. Mobile apps, cross-platform solutions, deployment.",
  url: `${SITE_URL}/services/app-development`,
});

export default function AppDevelopmentLayout({
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
