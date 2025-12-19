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
      {/* HERO */}
      <HeroSection
        title="About Trigital"
        subtitle="Empowering organizations since 2013 with innovative digital solutions."
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-32 md:py-44"
      />

      {/* MISSION VISION */}
      <Section
        id="mission"
        className="bg-white dark:bg-slate-900 py-20"
        title="Our Mission & Vision"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-white/10">
            <h3 className="text-xl font-bold mb-3 text-primary">Mission</h3>
            <p className="text-base-content/70 leading-relaxed">
              Provide the most responsive, functional, and innovative technology solutions
              helping businesses accelerate their transformation journey.
            </p>
          </div>

          <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-white/10">
            <h3 className="text-xl font-bold mb-3 text-primary">Vision</h3>
            <p className="text-base-content/70 leading-relaxed">
              Become a global leader delivering scalable, secure, and value-driven digital
              platforms to power growth.
            </p>
          </div>
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section
        id="values"
        className="bg-gray-50 dark:bg-slate-800 py-20"
        title="Our Core Values"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Excellence',
            'Courage',
            'People First',
            'Continuous Learning',
            'Collaboration',
            'Innovation',
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-8 bg-base-100 rounded-xl shadow-lg border border-white/10 hover:shadow-xl transition"
            >
              <h4 className="font-bold text-lg text-primary mb-2">{value}</h4>
              <p className="text-base-content/70">
                {value === 'Excellence'
                  ? 'Delivering outstanding solutions consistently.'
                  : value === 'Courage'
                  ? 'Taking bold action with ownership.'
                  : value === 'People First'
                  ? 'Empathy and meaningful experiences.'
                  : value === 'Continuous Learning'
                  ? 'Grow continuously with curiosity.'
                  : value === 'Collaboration'
                  ? 'Work together to create exponential impact.'
                  : 'Push boundaries through creativity.'}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM SECTION */}
      <Section
        id="team"
        className="bg-white dark:bg-slate-900 py-20"
        title="Our Team"
        subtitle="Meet the brilliant minds driving our success"
      >
        <div className="max-w-3xl mx-auto prose dark:prose-invert text-center">
          <p>
            Each member brings expertise, creativity, and relentless drive to help businesses
            succeed. Our culture nurtures innovation, collaboration, and excellence.
          </p>
          <p>
            Customer success is our priority—we act as an extension of your team ensuring
            meaningful transformation.
          </p>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" className="bg-gray-50 dark:bg-slate-800 py-20" title="Our Experience">
        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">Sectors We Serve</h3>
            <ul className="space-y-3">
              {[
                'E-commerce & Marketplace',
                'Media & Entertainment',
                'Telecommunications',
                'Utilities & Essential Services',
                'Financial Services',
                'Healthcare',
                'Education & E-Learning',
                'Government & Public Sector',
              ].map((sector, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span className="text-base-content/80">{sector}</span>
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
                'Cloud Platforms & Architecture',
                'Data Migration & Integration',
                'AI & Machine Learning Automation',
                'Big Data Processing',
                'End-to-End Digital Transformation',
              ].map((specialty, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  <span className="text-base-content/80">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="bg-gradient-to-tr from-blue-600 to-blue-800 text-white py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-lg max-w-xl mx-auto mb-10 opacity-90">
            Partner with Trigital and experience scalable, secure and future-ready solutions.
          </p>

          <Link
            href="/contact-us"
            className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </>
  );
}
