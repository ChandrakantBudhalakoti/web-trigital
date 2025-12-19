import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import Link from 'next/link';
import {
  BoltIcon,
  ArrowPathIcon,
  CubeTransparentIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  LanguageIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  CloudIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'NIPIGE - Digital Commerce Platform | Trigital Tech',
  description:
    'NIPIGE is a cutting-edge low-code/no-code platform for digital business enablement. Build B2B, B2C, and B2B2C solutions rapidly with microservices architecture.',
};

const features = [
  {
    icon: <BoltIcon className="w-12 h-12 text-primary" />,
    title: 'Low-Code/No-Code',
    description: 'Build solutions quickly without extensive coding expertise.',
  },
  {
    icon: <UsersIcon  className="w-12 h-12 text-primary" />,
    title: 'B2B, B2C, B2B2C',
    description: 'Support for multiple business models in a single platform.',
  },
  {
    icon: <CubeTransparentIcon className="w-12 h-12 text-primary" />,
    title: 'Microservices',
    description: '100% microservices architecture for scalability and flexibility.',
  },
  {
    icon: <UserGroupIcon className="w-12 h-12 text-primary" />,
    title: 'Multi-Tenant',
    description: 'Serve multiple customers with isolated data and configurations.',
  },
  {
    icon: <CurrencyDollarIcon className="w-12 h-12 text-primary" />,
    title: 'Multi-Currency',
    description: 'Support global commerce with multiple currency handling.',
  },
  {
    icon: <LanguageIcon className="w-12 h-12 text-primary" />,
    title: 'Multi-Language',
    description: 'Reach global audiences with multi-language support.',
  },
  {
    icon: <CircleStackIcon className="w-12 h-12 text-primary" />,
    title: 'Pre-Built Services',
    description: 'Leverage pre-built components to accelerate development.',
  },
  {
    icon: <RocketLaunchIcon className="w-12 h-12 text-primary" />,
    title: 'Rapid Deployment',
    description: 'Get to market faster with accelerated development cycles.',
  },
];

export default function NIPIGEProduct() {
  return (
    <>
      <HeroSection
        title="NIPIGE - Digital Commerce Platform"
        subtitle="Build, scale, and manage your digital business with a cutting-edge low-code platform"
        ctaText="Request a Demo"
        ctaLink="/demo"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section
        id="overview"
        className="bg-white dark:bg-slate-800"
        title="What is NIPIGE?"
      >
        <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
          <p>
            NIPIGE is a versatile, cutting-edge Software as a Service (SaaS) platform designed to
            empower businesses in the digital realm. Built with a 100% microservices architecture,
            NIPIGE enables organizations of all sizes—from startups to enterprises—to build,
            scale, and manage complex digital business solutions rapidly.
          </p>
          <p>
            The platform's low-code/no-code approach enables business users and developers to
            create sophisticated solutions without extensive coding, while its flexible deployment
            options and comprehensive feature set make it ideal for B2B, B2C, and B2B2C scenarios.
          </p>
        </div>
      </Section>

      <Section
        id="features"
        className="bg-gray-50 dark:bg-slate-900"
        title="Platform Capabilities"
        subtitle="Everything you need to build digital commerce solutions"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </Section>

      <Section
        id="use-cases"
        className="bg-white dark:bg-slate-800"
        title="Use Cases"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'E-Commerce Platforms',
              description: 'Build multi-vendor marketplaces with subscription and payment options',
            },
            {
              title: 'Digital Services',
              description: 'Create platforms for digital product delivery and customer engagement',
            },
            {
              title: 'B2B Portals',
              description: 'Enable business-to-business transactions with custom workflows',
            },
            {
              title: 'SaaS Applications',
              description: 'Rapidly develop and deploy SaaS applications for multiple tenants',
            },
            {
              title: 'Marketplace Solutions',
              description: 'Create dynamic marketplaces connecting buyers and sellers',
            },
            {
              title: 'Digital Communities',
              description: 'Build engagement platforms with social and interactive features',
            },
          ].map((useCase, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h4 className="card-title">{useCase.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="architecture"
        className="bg-gray-50 dark:bg-slate-900"
        title="Technical Architecture"
      >
        <div className="max-w-3xl mx-auto">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title mb-4">100% Microservices Design</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Scalability</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Scale individual services independently based on demand
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Resilience</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Isolate failures and maintain system availability
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Flexibility</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Update and deploy services without affecting the entire system
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Technology Diversity</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Use different technologies for different services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="deployment"
        className="bg-white dark:bg-slate-800"
        title="Deployment Options"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              option: 'Public Cloud',
              description: 'Deploy on AWS, Azure, or Google Cloud',
              icon: <CloudIcon className="w-16 h-16 text-primary" />,
            },
            {
              option: 'Private Cloud',
              description: 'Deploy in your own cloud infrastructure',
              icon: <ShieldCheckIcon className="w-16 h-16 text-primary" />,
            },
            {
              option: 'On-Premise',
              description: 'Install and run on your own servers',
              icon: <CircleStackIcon className="w-16 h-16 text-primary" />,
            },
            {
              option: 'Hybrid',
              description: 'Combine on-premise and cloud deployments',
              icon: <ArrowPathIcon className="w-16 h-16 text-primary" />,
            },
          ].map((option, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md">
              <div className="card-body text-center">
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h4 className="card-title justify-center">{option.option}</h4>
                <p className="text-gray-600 dark:text-gray-300">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="benefits"
        className="bg-gray-50 dark:bg-slate-900"
        title="Why Choose NIPIGE?"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Faster Time-to-Market',
              description: 'Launch new products and features in weeks, not months',
            },
            {
              title: 'Lower Development Costs',
              description: 'Reduce engineering effort with pre-built components',
            },
            {
              title: 'Future-Proof',
              description: 'Built on modern architecture that scales with your business',
            },
            {
              title: 'No Vendor Lock-in',
              description: 'Flexible deployment and data portability options',
            },
            {
              title: 'Enterprise-Grade',
              description: 'Security, compliance, and reliability you can trust',
            },
            {
              title: 'Comprehensive Support',
              description: 'Dedicated support team and extensive documentation',
            },
          ].map((benefit, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h4 className="card-title text-lg">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cta" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Digital Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start building powerful digital solutions with NIPIGE today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="btn btn-light btn-lg">
              Get Started
            </Link>
            <Link href="/contact-us" className="btn btn-outline btn-light btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
