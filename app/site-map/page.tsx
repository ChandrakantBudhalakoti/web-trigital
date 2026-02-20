import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { createWebPageSchema, getFAQPageSchema } from '@/lib/structured-data';
import { PAGE_FAQS } from '@/lib/page-faqs';
import { SITE_URL } from '@/lib/seo';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Sitemap | Trigital Tech - Products, Services & Navigation',
  description:
    'Explore the complete sitemap of Trigital Technologies. Find products, services, solutions, NIPIGE platform, and company information.',
  keywords:
    'sitemap, website map, site navigation, Trigital sitemap, website structure, page index',
  path: '/site-map',
});

const sitemapSchema = createWebPageSchema({
  name: 'Sitemap | Trigital Tech',
  description: 'Complete sitemap of Trigital Technologies. Products, services, solutions, NIPIGE platform, and company information.',
  path: '/site-map',
  breadcrumbs: [{ name: 'Home', url: SITE_URL }, { name: 'Sitemap', url: '/site-map' }],
});

const sitemapLinks = {
    'Products': [
      { label: 'Nipige', href: '/products/nipige' },
    ],
    'Platform': [
      { label: 'Our Platform Nipige', href: '/platform/our-platform-nipige' },
      { label: 'How It Works', href: '/platform/how-it-works' },
      { label: 'Key Features', href: '/platform/key-features' },
      { label: 'Market & Solution', href: '/platform/market-solution' },
      { label: 'Deployment Model', href: '/platform/deployment-model' },
    ],
    'Solutions': [
      { label: 'Subscription Monetization', href: '/solutions/subscription-monetization' },
      { label: 'Digital Commerce', href: '/solutions/digital-commerce' },
      { label: 'Digital Engagement', href: '/solutions/digital-engagement' },
      { label: 'Digital Service', href: '/solutions/digital-service' },
    ],
    'Services': [
      { label: 'All Services', href: '/services' },
      { label: 'Cloud Consultancy', href: '/services/cloud-consultancy' },
      { label: 'Migration Services', href: '/services/migration-services' },
      { label: 'AI/ML Consulting', href: '/services/ai-ml-consulting' },
      { label: 'Big Data Analytics', href: '/services/big-data-analytics' },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'Blockchain', href: '/services/blockchain' },
      { label: 'Integration', href: '/services/integration' },
    ],
    'Resources': [
      { label: 'Blogs', href: '/resources/blogs' },
      { label: 'Documentation', href: '/resources/documentation' },
      { label: 'Events & News', href: '/resources/events-news' },
    ],
    'Company': [
      { label: 'About Us', href: '/company/about-us' },
      { label: 'Customers', href: '/company/customers' },
      { label: 'Partners', href: '/company/partners' },
      { label: 'Our Team', href: '/company/our-team' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'FAQs', href: '/faqs' },
    ],
    'General': [
      { label: 'Home', href: '/' },
      { label: 'Demo', href: '/demo' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Sitemap', href: '/site-map' },
    ],
  };

export default function Sitemap() {
  return (
    <>
      <JsonLd data={[sitemapSchema, getFAQPageSchema(PAGE_FAQS["/site-map"])]} />
      <HeroSection
        title="Sitemap"
        subtitle="Navigate through all sections of our website"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section
        id="sitemap-content"
        className="bg-white dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-700 dark:text-gray-300 mb-4 text-lg max-w-3xl mx-auto leading-relaxed">
            Use this sitemap to quickly find and access any section of our website. Trigital Technologies offers the NIPIGE platform, Trinovo ERP, solutions for subscription monetization and digital commerce, and services including cloud consulting, AI/ML, migration, and integration.
          </p>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Browse by category below to explore our products, platform features, solutions, services, resources, and company information. Each link takes you directly to the relevant page. Products include Nipige for no-code digital commerce. Platform covers NIPIGE features, how it works, market solutions, and deployment models. Solutions span subscription monetization, digital commerce, engagement, and services. Our Services section lists cloud consultancy, migration, AI/ML, big data, app development, blockchain, and integration.
          </p>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            Resources include blogs, documentation, and events. Company pages cover about us, customers, partners, and our team. Contact, FAQs, privacy policy, and terms of service are under General. Can&apos;t find what you need? Contact us for assistance or visit our FAQs page for common questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(sitemapLinks).map(([category, links]) => (
              <div key={category} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">
                  {category}
                </h2>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                      >
                        <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-700 dark:text-gray-300">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you can't find what you're looking for, feel free to reach out to us. We're here to help!
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Contact Us
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
