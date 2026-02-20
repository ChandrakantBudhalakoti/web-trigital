import type { Metadata } from "next";
import { SITE_URL } from "./seo";

export type PageMetadataParams = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  keywords,
  path = "",
  image,
  type = "website",
  noIndex = false,
}: PageMetadataParams): Metadata {
  const canonicalPath = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const url = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;
  const imageUrl = image?.startsWith("http") ? image : image ? `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}` : `${SITE_URL}/assets/images/trigital_logo.svg`;

  const metadata: Metadata = {
    title,
    description,
    ...(keywords && { keywords: keywords.split(",").map((k) => k.trim()) }),
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Trigital Tech",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };

  return metadata;
}
