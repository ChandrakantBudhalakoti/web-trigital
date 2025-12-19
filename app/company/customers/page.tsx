import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import TestimonialCarousel from "@/components/TestimonialCard";
import Link from 'next/link';

export const metadata = {
  title: 'Our Customers | Trigital Tech',
  description:
    'Discover the success stories of our satisfied customers and how Trigital has transformed their businesses.',
};

const customers = [
  {
    name: 'NXTDIGITAL Limited',
    description:
      'The flagship media business of the global Hinduja Group with pan-India presence.',
    result: 'Delivered television services platform with improved billing and customer management.',
  },
  {
    name: 'Telkom South Africa',
    description:
      'Leading telecommunications provider with operations in 38 African nations.',
    result: 'Developed and deployed feature-rich Lions Mobile App Phase I.',
  },
  {
    name: 'Tayana Mobility Technologies',
    description:
      'Leading telecom software products company serving communication service providers worldwide.',
    result: '3GPP-compliant digital BSS and network management solutions.',
  },
  {
    name: '5Factors',
    description:
      'Risk intelligence company dedicated to cyber and fraud risk management.',
    result: 'Advanced AI-driven solutions with real-time visibility and threat detection.',
  },
  {
    name: 'Fastway Group',
    description:
      'Pioneer in digital entertainment services and dominant market leader in the region.',
    result: 'Enhanced platform for digital entertainment and internet services.',
  },
  {
    name: 'AP State FiberNet Limited',
    description: 'Government of AP entity for telecom infrastructure development.',
    result: 'Advanced network management and digital services platform.',
  },
];

const testimonials = [
  {
    quote:
      'I want to express my sincere gratitude to the Trigital team for their invaluable assistance in conceptualizing and bringing to life my passion project. The entire journey, from design to launch, was seamless and delightful. Their expertise and professionalism truly made the entire experience effortless and enjoyable.',
    author: 'Project Founder',
    company: 'Innovative Startup',
  },
  {
    quote:
      'Trigital has truly been an invaluable partner in our journey to success. Their unwavering dedication to quality and exceptional customer service sets them apart. I wholeheartedly recommend Trigital to anyone seeking a remarkable experience.',
    author: 'Business Director',
    company: 'Tech Solutions Ltd',
  },
  {
    quote:
      "Trigital's expertise propelled a 30% boost in supply chain speed, 20% waste reduction, and a remarkable 40% surge in online orders, elevating customer satisfaction. As our comprehensive IT partner, they seamlessly manage everything from development to cloud services.",
    author: 'Operations Head',
    company: 'E-Commerce Corp',
  },
  {
    quote:
      'Trigital revolutionized our IT landscape, cutting infrastructure costs by 40%. Serving as our one-stop IT provider, they manage everything from development to cloud services seamlessly. Their expertise halted revenue leakage and boosted our revenue by 30%.',
    author: 'CTO',
    company: 'Digital Services Inc',
  },
  {
    quote:
      "Trigital's expertise brought a significant 30% increase in our auto-renewal process and an impressive 70% reduction in collection costs. Their scalable solutions made launching new offerings effortless.",
    author: 'Finance Director',
    company: 'Subscription Platform Co',
  },
  {
    quote:
      'Partnering with Trigital transformed our operations by decentralizing IT to distributors, reducing customer incidents by 40%. This integration cut management costs and seamlessly incorporates SMS and network solutions.',
    author: 'Operations Manager',
    company: 'Distribution Network',
  },
];

export default function Customers() {
  return (
    <>
      <HeroSection
        title="Our Valued Customers"
        subtitle="Success stories from businesses we've transformed"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section
        id="customer-list"
        className="bg-white dark:bg-slate-800"
        title="Leading Organizations We Partner With"
        subtitle="From startups to Fortune 500 companies, we deliver excellence."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body">
                <h3 className="card-title text-lg">{customer.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{customer.description}</p>
                <div className="divider my-2"></div>
                <p className="text-sm font-semibold text-primary mb-1">Result:</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{customer.result}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="impact"
        className="bg-gray-50 dark:bg-slate-900"
        title="Our Impact"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { metric: '50+', label: 'Satisfied Customers' },
            { metric: '13+', label: 'Years of Excellence' },
            { metric: '100+', label: 'Projects Delivered' },
            { metric: '24/7', label: 'Customer Support' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{item.metric}</div>
              <p className="text-gray-700 dark:text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="testimonials"
        className="bg-white dark:bg-slate-800"
        title="Customer Testimonials"
        subtitle="What our clients say about working with us"
      >
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      <Section id="cta" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let Trigital help you achieve your business goals.
          </p>
          <Link href="/contact-us" className="btn btn-light btn-lg">
            Start Your Journey
          </Link>
        </div>
      </Section>
    </>
  );
}
