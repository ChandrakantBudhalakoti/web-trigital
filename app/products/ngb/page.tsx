import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import Link from 'next/link';
import {
  CreditCardIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  LinkIcon,
  SparklesIcon,
  CloudIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'NGB - Next Generation Billing & CRM | Trigital Tech',
  description:
    'NGB is a comprehensive SaaS platform for subscription billing, CRM, and revenue management. Enterprise-grade solution with flexible deployment options.',
};

const features = [
  {
    icon: <CreditCardIcon className="w-12 h-12 text-primary" />,
    title: 'Subscription Management',
    description: 'Manage subscriptions, billing cycles, and recurring payments with ease.',
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-primary" />,
    title: 'Revenue Management',
    description: 'Track and optimize revenue streams with advanced analytics.',
  },
  {
    icon: <UserGroupIcon className="w-12 h-12 text-primary" />,
    title: 'Customer Lifecycle',
    description: 'Manage customer journey from acquisition to retention and growth.',
  },
  {
    icon: <Cog6ToothIcon className="w-12 h-12 text-primary" />,
    title: 'Gateway Integration',
    description: 'Seamless integration with popular payment gateways and processors.',
  },
  {
    icon: <LinkIcon className="w-12 h-12 text-primary" />,
    title: 'CRM Integration',
    description: 'Synchronize customer data with leading CRM platforms.',
  },
  {
    icon: <SparklesIcon className="w-12 h-12 text-primary" />,
    title: 'Billing Automation',
    description: 'Automate billing processes, invoicing, and payment collection.',
  },
  {
    icon: <CloudIcon className="w-12 h-12 text-primary" />,
    title: 'Flexible Deployment',
    description: 'Deploy on SaaS, on-premise, or private cloud infrastructure.',
  },
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-primary" />,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance with industry standards.',
  },
];

export default function NGBProduct() {
  return (
    <>
      <HeroSection
        title="NGB - Next Generation Billing & CRM"
        subtitle="Empower your business with advanced subscription management and customer intelligence"
        ctaText="Request a Demo"
        ctaLink="/demo"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section
        id="overview"
        className="bg-white dark:bg-slate-800"
        title="What is NGB?"
      >
        <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
          <p>
            NGB (Next Generation Billing) is a comprehensive SaaS platform designed for businesses
            that need robust subscription management, customer relationship management, and revenue
            assurance capabilities. Built with enterprise-grade architecture, NGB helps you
            streamline operations, automate billing, and enhance customer retention.
          </p>
          <p>
            Whether you're in media, telecommunications, utilities, or e-commerce, NGB provides
            the flexibility and power to manage complex billing scenarios while maintaining
            exceptional customer experiences.
          </p>
        </div>
      </Section>

      <Section
        id="features"
        className="bg-gray-50 dark:bg-slate-900"
        title="Core Features"
        subtitle="Everything you need to manage subscriptions and drive revenue"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </Section>

      <Section
        id="industries"
        className="bg-white dark:bg-slate-800"
        title="Industries We Serve"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              industry: 'Media & Entertainment',
              description: 'Manage subscriber access, content rights, and revenue streams',
            },
            {
              industry: 'Telecommunications',
              description: 'Handle complex billing for voice, data, and value-added services',
            },
            {
              industry: 'Utilities & Energy',
              description: 'Meter-to-cash billing and customer management',
            },
            {
              industry: 'E-Learning',
              description: 'Manage course subscriptions, memberships, and learner data',
            },
            {
              industry: 'SaaS Platforms',
              description: 'Subscription management and usage-based billing',
            },
            {
              industry: 'Digital Services',
              description: 'Flexible billing for digital products and services',
            },
          ].map((item, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{item.industry}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="deployment"
        className="bg-gray-50 dark:bg-slate-900"
        title="Flexible Deployment Options"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              option: 'SaaS',
              description: 'Cloud-hosted solution with automatic updates and scalability',
              icon: <CloudIcon className="w-16 h-16 text-primary" />,
            },
            {
              option: 'On-Premise',
              description: 'Deploy on your own infrastructure for complete control',
              icon: <ShieldCheckIcon className="w-16 h-16 text-primary" />,
            },
            {
              option: 'Private Cloud',
              description: 'Dedicated cloud environment tailored to your needs',
              icon: <LockClosedIcon  className="w-16 h-16 text-primary" />,
            },
          ].map((option, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md">
              <div className="card-body text-center">
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h4 className="card-title justify-center text-lg">{option.option}</h4>
                <p className="text-gray-600 dark:text-gray-300">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="integration"
        className="bg-white dark:bg-slate-800"
        title="Integrations & Extensions"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Payment Gateway Support</h3>
            <ul className="space-y-2">
              {['Stripe', 'PayPal', 'Razorpay', 'Square', 'Authorize.net', 'Ingenico'].map(
                (gateway) => (
                  <li key={gateway} className="flex items-center gap-2">
                    <Cog6ToothIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{gateway}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">CRM & Business Systems</h3>
            <ul className="space-y-2">
              {['Salesforce', 'HubSpot', 'NetSuite', 'SAP', 'Oracle', 'Microsoft Dynamics'].map(
                (system) => (
                  <li key={system} className="flex items-center gap-2">
                    <LinkIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{system}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="cta" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Billing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how NGB can streamline your operations and grow your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn btn-light btn-lg">
              Request a Demo
            </Link>
            <Link href="/contact-us" className="btn btn-outline btn-light btn-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
