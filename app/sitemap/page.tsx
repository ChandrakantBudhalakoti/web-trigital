import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Sitemap | Trigital Tech',
  description:
    'Explore the complete sitemap of Trigital Technologies website. Find all our products, services, solutions, and company information.',
};

export default function Sitemap() {
  const sitemapLinks = {
    'Products': [
      { label: 'Our Product NGB', href: '/products/our-product-ngb' },
      { label: 'NGB Features', href: '/products/features' },
      { label: 'Market & Solution', href: '/products/market-solution' },
      { label: 'Pre-Built Integration', href: '/products/pre-built-integration' },
      { label: 'Deployment Model', href: '/products/deployment-model' },
      { label: 'NGB', href: '/products/ngb' },
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
      { label: 'Sitemap', href: '/sitemap' },
    ],
  };

  return (
    <>
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
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            Use this sitemap to quickly find and access any section of our website.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(sitemapLinks).map(([category, links]) => (
              <div key={category} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
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
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
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

