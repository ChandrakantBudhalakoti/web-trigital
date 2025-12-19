import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import {
  Cog6ToothIcon,
  CloudIcon,
  ArrowPathIcon,
  SparklesIcon,
  ChartBarIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Services | Trigital Tech',
  description:
    'Explore our comprehensive range of software development and technology services.',
};

const services = [
  {
    icon: <Cog6ToothIcon className="w-12 h-12 text-primary" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your unique business requirements.',
    features: [
      'Full-stack development',
      'Web application development',
      'Mobile app development (iOS & Android)',
      'Enterprise software solutions',
      'API development and integration',
      'Software maintenance and support',
    ],
    link: '/services/custom-development',
  },
  {
    icon: <CloudIcon className="w-12 h-12 text-primary" />,
    title: 'Cloud Consulting & Services',
    description: 'Leverage cloud technology to scale your business with optimal efficiency.',
    features: [
      'Cloud strategy & assessment',
      'IaaS, PaaS, SaaS implementation',
      'Cloud migration services',
      'Infrastructure as Code',
      'Cloud cost optimization',
      'Multi-cloud management',
    ],
    link: '/services/cloud-consulting',
  },
  {
    icon: <ArrowPathIcon className="w-12 h-12 text-primary" />,
    title: 'Data Migration & Integration',
    description: 'Seamlessly migrate and integrate your systems with minimal downtime.',
    features: [
      'Database migration',
      'Application migration',
      'Cloud-to-cloud migration',
      'Legacy system modernization',
      'Data synchronization',
      'Change management support',
    ],
    link: '/services/migration',
  },
  {
    icon: <SparklesIcon className="w-12 h-12 text-primary" />,
    title: 'AI & Machine Learning',
    description: 'Transform your business with intelligent automation and predictive analytics.',
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Computer vision solutions',
      'Recommendation engines',
      'Chatbot development',
      'ML model training & deployment',
    ],
    link: '/services/ai-ml',
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-primary" />,
    title: 'Big Data Analytics',
    description: 'Extract valuable insights from complex data to drive informed decisions.',
    features: [
      'Data warehouse design',
      'Real-time analytics',
      'Business intelligence',
      'Data visualization',
      'Predictive modeling',
      'Data pipeline automation',
    ],
    link: '/services/big-data',
  },
  {
    icon: <LinkIcon className="w-12 h-12 text-primary" />,
    title: 'System Integration',
    description: 'Connect your disparate systems into a unified, efficient tech ecosystem.',
    features: [
      'Enterprise integration',
      'API management',
      'Middleware solutions',
      'Message queuing',
      'Data synchronization',
      'System orchestration',
    ],
    link: '/services/integration',
  },
];

export default function Services() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive technology solutions tailored to your business needs"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section
        id="all-services"
        className="bg-white dark:bg-slate-800"
        title="What We Offer"
        subtitle="A complete range of services to transform your business"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </Section>

      <Section
        id="approach"
        className="bg-gray-50 dark:bg-slate-900"
        title="Our Approach"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: 'Discovery',
              description:
                'We understand your business, goals, and challenges through detailed consultation.',
            },
            {
              num: '02',
              title: 'Strategy',
              description:
                'We develop a comprehensive strategy and roadmap tailored to your needs.',
            },
            {
              num: '03',
              title: 'Implementation',
              description:
                'Our expert team executes the plan with agile methodologies and best practices.',
            },
            {
              num: '04',
              title: 'Support',
              description:
                'We provide ongoing support and optimization to ensure continued success.',
            },
          ].map((step, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="text-4xl font-bold text-primary mb-2">{step.num}</div>
                <h4 className="card-title text-lg">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="technologies"
        className="bg-white dark:bg-slate-800"
        title="Technologies We Use"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Languages</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {['JavaScript/TypeScript', 'Python', 'Java', 'C#', 'Go', 'Kotlin', 'Swift'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary">▸</span> {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Frameworks & Tools</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {['React', 'Next.js', 'Node.js', 'Django', 'FastAPI', 'Spring Boot', 'Vue.js'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary">▸</span> {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Cloud & Databases</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {['AWS', 'Azure', 'GCP', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary">▸</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="cta" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your business objectives.
          </p>
          <Link href="/contact-us" className="btn btn-light btn-lg">
            Schedule a Consultation
          </Link>
        </div>
      </Section>
    </>
  );
}
