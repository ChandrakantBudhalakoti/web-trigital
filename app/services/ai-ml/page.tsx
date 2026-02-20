import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "AI & Machine Learning | Trigital Tech",
  description:
    "AI and ML solutions: predictive analytics, NLP, computer vision, intelligent automation. Transform your business with Trigital.",
  keywords:
    "AI services, machine learning services, artificial intelligence, predictive analytics, natural language processing, NLP, computer vision, deep learning, ML solutions, AI consulting",
  path: "/services/ai-ml",
});

const schema = getServiceSchema({
  name: "AI & Machine Learning",
  description: "Transform your business with AI and ML solutions. Predictive analytics, NLP, computer vision, intelligent automation.",
  url: `${SITE_URL}/services/ai-ml`,
});

export default function AIML() {
  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">AI & Machine Learning</h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Harness the power of artificial intelligence and machine learning to transform your business operations. At Trigital 
          Technologies, we develop cutting-edge AI and ML solutions that drive innovation, improve efficiency, and unlock new 
          possibilities for your organization.
        </p>
        <p>
          Our AI and ML consulting services help you leverage advanced technologies to gain actionable insights from your data, 
          automate complex processes, and create intelligent systems that learn and adapt. From predictive analytics to natural 
          language processing, we bring AI capabilities that matter to your business.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our AI & ML Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Predictive analytics and forecasting</li>
            <li>Natural language processing (NLP)</li>
            <li>Data mining and pattern recognition</li>
            <li>Intelligent automation and process optimization</li>
            <li>Computer vision and image recognition</li>
            <li>Chatbots and conversational AI</li>
            <li>Machine learning model development and deployment</li>
          </ul>
        </div>
      </div>
    </main>
    </>
  );
}

