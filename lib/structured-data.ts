import { SITE_URL } from "./seo";

/** Base organization data reused across Organization, WebSite, LocalBusiness */
export const ORGANIZATION = {
  name: "Trigital Technologies Pvt Ltd",
  legalName: "Trigital Technologies Private Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/trigital_logo.svg`,
  foundingDate: "2013",
  description:
    "Trigital Technologies is a leading SaaS-based software development company providing custom software, cloud consulting, AI/ML solutions, and digital transformation services.",
  sameAs: [
    "https://www.linkedin.com/company/trigitaltech/",
    "https://x.com/trigitaltech",
    "https://www.instagram.com/trigital_technologies/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7013870575",
    contactType: "customer service",
    email: "info@trigital.in",
    areaServed: "IN",
    availableLanguage: "English",
    url: `${SITE_URL}/contact-us`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha, Hyderabad Knowledge City, Serilingampally",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
} as const;

export type JsonLd = Record<string, unknown>;

/** Organization schema (site-wide) */
export function getOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    foundingDate: ORGANIZATION.foundingDate,
    description: ORGANIZATION.description,
    sameAs: ORGANIZATION.sameAs,
    contactPoint: ORGANIZATION.contactPoint,
    address: ORGANIZATION.address,
  };
}

/** WebSite schema with optional search action */
export function getWebSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Trigital Tech",
    alternateName: "Trigital Technologies",
    url: SITE_URL,
    description: ORGANIZATION.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/resources/blogs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** WebPage schema for any page */
export function getWebPageSchema(params: {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; url: string }[];
}): JsonLd {
  const { name, description, url, breadcrumbs } = params;
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
  if (breadcrumbs && breadcrumbs.length > 0) {
    schema.breadcrumb = getBreadcrumbSchema(breadcrumbs);
  }
  return schema;
}

/** BreadcrumbList schema */
export function getBreadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/** LocalBusiness schema (contact page, with opening hours) */
export function getLocalBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: ORGANIZATION.name,
    image: ORGANIZATION.logo,
    url: ORGANIZATION.url,
    telephone: "+91-7013870575",
    email: "info@trigital.in",
    address: ORGANIZATION.address,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
    ],
    contactPoint: ORGANIZATION.contactPoint,
  };
}

/** ContactPage schema */
export function getContactPageSchema(): JsonLd {
  return getWebPageSchema({
    name: "Contact Us | Trigital Tech",
    description:
      "Contact Trigital Technologies for software development, cloud consulting, AI/ML solutions, and digital transformation. Hyderabad office, phone, email.",
    url: `${SITE_URL}/contact-us`,
    breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Contact Us", url: `${SITE_URL}/contact-us` }],
  });
}

/** FAQPage schema */
export function getFAQPageSchema(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Product schema (e.g. NIPIGE) */
export function getProductSchema(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
  brand?: string;
}): JsonLd {
  const { name, description, url, image, brand } = params;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image: image ?? ORGANIZATION.logo,
    brand: {
      "@type": "Brand",
      name: brand ?? ORGANIZATION.name,
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/** Service schema for services/solutions pages */
export function getServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}): JsonLd {
  const { name, description, url, provider } = params;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@id": `${SITE_URL}/#organization`,
      "@type": "Organization",
      name: provider ?? ORGANIZATION.name,
    },
  };
}

/** AboutPage / Organization (about us) */
export function getAboutPageSchema(): JsonLd {
  return getWebPageSchema({
    name: "About Us | Trigital Tech",
    description: "Learn about Trigital Technologies, our mission, values, and team. Empowering organizations since 2013 with digital solutions.",
    url: `${SITE_URL}/company/about-us`,
    breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Company", url: `${SITE_URL}/company/about-us` }, { name: "About Us", url: `${SITE_URL}/company/about-us` }],
  });
}

/** Homepage WebPage schema */
export function getHomePageSchema(): JsonLd {
  return getWebPageSchema({
    name: "Trigital Tech | Best Software Development Company",
    description:
      "Trigital Technologies is a leading SaaS-based software development company providing custom software, cloud consulting, AI/ML solutions, and digital transformation services. Transform your business with our innovative NIPIGE platform.",
    url: SITE_URL,
  });
}

/** WebPage schema factory - use for any content page. path e.g. "/services" or "/company/about-us" */
export function createWebPageSchema(params: {
  name: string;
  description: string;
  path: string;
  breadcrumbs?: { name: string; url: string }[];
}): JsonLd {
  const p = params.path.startsWith("/") ? params.path : `/${params.path}`;
  const url = `${SITE_URL}${p}`;
  const breadcrumbs = params.breadcrumbs?.map((b) => ({
    name: b.name,
    url: b.url.startsWith("http") ? b.url : `${SITE_URL}${b.url.startsWith("/") ? b.url : `/${b.url}`}`,
  }));
  return getWebPageSchema({ name: params.name, description: params.description, url, breadcrumbs });
}

/** Article schema for blog posts */
export function getArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}): JsonLd {
  const {
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    authorName = ORGANIZATION.name,
  } = params;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    image: image ?? ORGANIZATION.logo,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
