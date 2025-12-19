export const metadata = {
  title: "Custom Software Development | Trigital Tech",
  description:
    "Get tailored software solutions built to your specific business needs. Full-stack development, web and mobile applications, and enterprise solutions.",
};

export default function CustomDevelopment() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Custom Software Development</h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          At Trigital Technologies, we specialize in creating custom software solutions tailored to your specific business needs. 
          Our experienced development team works closely with you to understand your requirements and deliver solutions that drive 
          your business forward.
        </p>
        <p>
          Whether you need a full-stack web application, a mobile app, or an enterprise-level solution, we have the expertise 
          and technology stack to bring your vision to life. Our custom development services encompass everything from initial 
          consultation and requirements gathering to design, development, testing, and ongoing maintenance.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Custom Development Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full-stack development for web and mobile platforms</li>
            <li>Enterprise software solutions</li>
            <li>API development and integration</li>
            <li>Legacy system modernization</li>
            <li>Custom CRM and business management tools</li>
            <li>E-commerce platforms and marketplaces</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

