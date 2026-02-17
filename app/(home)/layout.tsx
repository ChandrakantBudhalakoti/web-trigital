import JsonLd from "@/components/JsonLd";
import { getHomePageSchema } from "@/lib/structured-data";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={getHomePageSchema()} />
      {children}
    </>
  );
}
