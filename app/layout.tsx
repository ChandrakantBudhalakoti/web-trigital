import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotLazy from '@/components/ChatbotLazy';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/seo';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/structured-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Static metadata so meta tags render in <head> for crawlers (async generateMetadata can stream into body)
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Trigital Tech | NIPIGE Platform, Digital Solutions & Services',
  description:
    'Trigital Tech: NIPIGE platform, software, cloud & digital solutions. Management services, deployment model, key features. Transform your business.',
  keywords:
    'Trigital Tech, NIPIGE platform, software development, digital solutions, cloud consulting, management services, deployment model, key features, web development, mobile app, SaaS, billing software, CRM',
  authors: [{ name: 'Trigital Technologies Pvt Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Trigital Tech',
    title: 'Trigital Tech | NIPIGE Platform, Digital Solutions & Services',
    description:
      'Trigital Tech: NIPIGE platform, software, cloud & digital solutions. Management services, deployment model, key features. Transform your business.',
    images: [{ url: `${SITE_URL}/assets/images/trigital_logo.svg`, width: 1200, height: 630, alt: 'Trigital Tech' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trigital Tech | NIPIGE Platform, Digital Solutions & Services',
    description:
      'Trigital Tech: NIPIGE platform, software, cloud & digital solutions. Management services, deployment model, key features. Transform your business.',
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>
        <Navbar />
        <main
          id="main-content"
          role="main"
          aria-label="Primary page content"
          tabIndex={-1}
        >
          <article itemScope itemType="https://schema.org/WebPageElement">
            {children}
          </article>
        </main>
        <Footer />
        <ChatbotLazy />
      </body>
    </html>
  );
}
