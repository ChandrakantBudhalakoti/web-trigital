export const metadata = {
  title: "Cloud Consulting | Trigital Tech",
  description:
    "Maximize your business potential with tailored cloud solutions. Expert guidance on IaaS, PaaS, SaaS optimization, cloud migration, and infrastructure management.",
};

export default function CloudConsulting() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Cloud Consulting</h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          Transform your business with strategic cloud consulting services from Trigital Technologies. Our cloud experts help 
          you navigate the complexities of cloud adoption and optimization to maximize your business potential.
        </p>
        <p>
          We provide comprehensive cloud consulting across all service models - Infrastructure as a Service (IaaS), Platform as 
          a Service (PaaS), and Software as a Service (SaaS). Our team works with you to assess your current infrastructure, 
          develop a strategic cloud roadmap, and implement solutions that align with your business objectives.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Cloud Consulting Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cloud strategy and planning</li>
            <li>IaaS, PaaS, SaaS optimization</li>
            <li>Cloud migration and deployment</li>
            <li>Infrastructure management and monitoring</li>
            <li>Cost optimization and resource management</li>
            <li>Multi-cloud and hybrid cloud solutions</li>
            <li>Cloud security and compliance</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

