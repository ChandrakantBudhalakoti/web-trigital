import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'About Us | Trigital Tech',
  description:
    'Learn about Trigital Technologies, our mission, values, and team of dedicated professionals.',
};

export default function AboutUs() {
  return (
    <>
      <HeroSection
        title="About Trigital"
        subtitle="Established in 2013, we've been empowering businesses with innovative digital solutions."
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section
        id="mission"
        className="bg-white dark:bg-slate-800"
        title="Our Mission & Vision"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide the most responsive, functional, and innovative technology solutions
                that help businesses achieve their digital transformation goals while maintaining
                the highest standards of quality and customer service.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be a global leader in providing resilient, top-notch, and value-based
                technology solutions that empower organizations to thrive in an ever-changing
                digital landscape.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="values"
        className="bg-gray-50 dark:bg-slate-900"
        title="Our Core Values"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Excellence',
              description: 'We strive for excellence in all that we do, delivering quality solutions consistently.',
            },
            {
              title: 'Courage',
              description:
                'We are courageous and take pride in our commitment and ownership of our actions and results.',
            },
            {
              title: 'People First',
              description: 'We love people, care deeply, and spread kindness and goodwill to all.',
            },
            {
              title: 'Continuous Learning',
              description:
                'We believe in humility and continuous learning as bedrock principles of success.',
            },
            {
              title: 'Collaboration',
              description: 'When people work together, they create something greater than themselves.',
            },
            {
              title: 'Innovation',
              description: 'We push boundaries, challenge conventions, and pursue innovation in everything we do.',
            },
          ].map((value, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h4 className="card-title text-lg">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="team"
        className="bg-white dark:bg-slate-800"
        title="Our Team"
        subtitle="Meet the brilliant minds driving our success"
      >
        <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
          <p>
            Each member of our team embodies a unique blend of creativity, expertise, and
            dedication. With a shared vision and relentless determination, we push boundaries,
            challenge conventions, and pursue excellence in everything we do.
          </p>
          <p>
            Our talented workforce of qualified professionals boosts innovation, creative
            thinking, and experimentation that gives Trigital an edge over competitors. We foster
            an environment of collaboration and innovation, where creativity is valued and
            excellence is the standard.
          </p>
          <p>
            Since our inception, customer satisfaction has been the best of our priorities. We
            work as an extension of your team, ensuring your success is our success.
          </p>
        </div>
      </Section>

      <Section
        id="experience"
        className="bg-gray-50 dark:bg-slate-900"
        title="Our Experience"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sectors We Serve</h3>
            <ul className="space-y-3">
              {[
                'E-commerce & Marketplace',
                'Media & Entertainment',
                'Telecommunications',
                'Utilities & Essential Services',
                'Professional Services',
                'Financial Services',
                'Healthcare',
                'Education & E-Learning',
              ].map((sector, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{sector}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Specialties</h3>
            <ul className="space-y-3">
              {[
                'Revenue Management & Assurance',
                'Subscription Billing & CRM',
                'IoT & M2M Metering',
                'Cloud Solutions (IaaS, PaaS, SaaS)',
                'Data Migration & Integration',
                'AI & Machine Learning',
                'Big Data Analytics',
                'Digital Transformation',
              ].map((specialty, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="cta" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Success Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with Trigital and experience the difference innovative technology can make.
          </p>
          <Link href="/contact-us" className="btn btn-light btn-lg">
            Get in Touch
          </Link>
        </div>
      </Section>
    </>
  );
}
