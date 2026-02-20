import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact Us | Trigital Tech – Get in Touch for Software Solutions",
  description:
    "Contact Trigital Tech for software development, cloud consulting, AI/ML solutions & digital transformation. Phone, email, or visit our Hyderabad office.",
  keywords:
    "contact Trigital, contact us, Trigital Technologies contact, software development contact, IT services contact, Hyderabad IT company, technology consulting contact, get in touch, business inquiry",
  path: "/contact-us",
});

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
