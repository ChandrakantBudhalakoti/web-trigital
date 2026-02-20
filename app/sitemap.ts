import type { MetadataRoute } from "next";
import { blogService } from "@/app/lib/api/blog-service";
import { customers } from "@/lib/customers-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trigital.in";

/** Indexable static routes only. Excludes: thank-you, utility-only, filter/search, duplicate paths. */
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "contact-us", priority: 0.9, changeFrequency: "monthly" },
  { path: "faqs", priority: 0.8, changeFrequency: "monthly" },
  { path: "privacy-policy", priority: 0.5, changeFrequency: "yearly" },
  { path: "terms-of-service", priority: 0.5, changeFrequency: "yearly" },
  { path: "site-map", priority: 0.3, changeFrequency: "monthly" },
  { path: "company/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "company/customers", priority: 0.8, changeFrequency: "monthly" },
  { path: "company/partners", priority: 0.8, changeFrequency: "monthly" },
  { path: "company/our-team", priority: 0.8, changeFrequency: "monthly" },
  { path: "products/nipige", priority: 0.9, changeFrequency: "monthly" },
  { path: "products/trinovo", priority: 0.9, changeFrequency: "monthly" },
  { path: "products/trinovo/advantages", priority: 0.8, changeFrequency: "monthly" },
  { path: "products/trinovo/technology", priority: 0.8, changeFrequency: "monthly" },
  { path: "products/trinovo/modules", priority: 0.8, changeFrequency: "monthly" },
  { path: "platform/our-platform-nipige", priority: 0.9, changeFrequency: "monthly" },
  { path: "platform/how-it-works", priority: 0.8, changeFrequency: "monthly" },
  { path: "platform/key-features", priority: 0.8, changeFrequency: "monthly" },
  { path: "platform/market-solution", priority: 0.8, changeFrequency: "monthly" },
  { path: "platform/deployment-model", priority: 0.8, changeFrequency: "monthly" },
  { path: "services", priority: 0.9, changeFrequency: "weekly" },
  { path: "services/cloud-consultancy", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/cloud-consulting", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/migration-services", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/ai-ml-consulting", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/ai-ml", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/big-data-analytics", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/big-data", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/app-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/custom-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/blockchain", priority: 0.8, changeFrequency: "monthly" },
  { path: "services/integration", priority: 0.8, changeFrequency: "monthly" },
  { path: "solutions/subscription-monetization", priority: 0.9, changeFrequency: "monthly" },
  { path: "solutions/digital-commerce", priority: 0.9, changeFrequency: "monthly" },
  { path: "solutions/digital-engagement", priority: 0.9, changeFrequency: "monthly" },
  { path: "solutions/digital-service", priority: 0.9, changeFrequency: "monthly" },
  { path: "resources/blogs", priority: 0.8, changeFrequency: "weekly" },
  { path: "resources/documentation", priority: 0.8, changeFrequency: "monthly" },
  { path: "resources/events-news", priority: 0.8, changeFrequency: "weekly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL + "/",
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const customerEntries: MetadataRoute.Sitemap = customers.map((c) => ({
    url: `${BASE_URL}/company/customers/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await blogService.getAllBlogs();
    blogEntries = blogs.map((post) => ({
      url: `${BASE_URL}/resources/blogs/${post.slug}`,
      lastModified: post.publishDate ? new Date(post.publishDate) : now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (err) {
    console.error("Sitemap: failed to fetch blogs", err);
  }

  return [...staticEntries, ...customerEntries, ...blogEntries];
}
