import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Trigital Tech | Best Software Development Company',
  description:
    'Trigital Technologies is a leading SaaS-based software development company providing custom software, cloud consulting, AI/ML solutions, and digital transformation services.',
  keywords:
    'software development, web development, mobile app development, cloud consulting, SaaS, billing software, CRM, NGB, NIPIGE',
  authors: [{ name: 'Trigital Technologies Pvt Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trigitaltech.com',
    title: 'Trigital Tech | Best Software Development Company',
    description:
      'Trigital Technologies is a leading SaaS-based software development company providing custom software, cloud consulting, AI/ML solutions, and digital transformation services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trigital Tech | Best Software Development Company',
    description:
      'Trigital Technologies is a leading SaaS-based software development company providing custom software, cloud consulting, AI/ML solutions, and digital transformation services.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
