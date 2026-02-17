import type { Metadata } from 'next';
import { headers } from 'next/headers';
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

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') ?? '';
  const canonical = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
  
  // Default metadata for homepage
  const defaultMetadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Trigital Tech | Best Software Development Company',
    description:
      'Trigital Technologies is a leading SaaS-based software development company providing custom software, cloud consulting, AI/ML solutions, and digital transformation services. Transform your business with our innovative NIPIGE platform and expert technology solutions.',
    keywords:
      'software development, web development, mobile app development, cloud consulting, SaaS, billing software, CRM, NIPIGE',
    authors: [{ name: 'Trigital Technologies Pvt Ltd' }],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_URL,
      title: 'Trigital Tech | Best Software Development Company',
      description:
        'Trigital Technologies is a leading SaaS-based software development company providing custom software, cloud consulting, AI/ML solutions, and digital transformation services. Transform your business with our innovative NIPIGE platform and expert technology solutions.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Trigital Tech | Best Software Development Company',
      description:
        'Trigital Technologies is a leading SaaS-based software development company providing custom software, cloud consulting, AI/ML solutions, and digital transformation services. Transform your business with our innovative NIPIGE platform and expert technology solutions.',
    },
    alternates: {
      canonical,
    },
  };
  
  return defaultMetadata;
}

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
        <Navbar />
        {children}
        <Footer />
        <ChatbotLazy />
      </body>
    </html>
  );
}
