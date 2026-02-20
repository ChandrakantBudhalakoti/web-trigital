import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "AI/ML Consulting | Trigital Tech",
  description:
    "AI and ML consulting: strategy, predictive analytics, NLP, computer vision, custom ML solutions. Transform with Trigital.",
  keywords:
    "AI consulting, machine learning consulting, ML consulting, artificial intelligence, predictive analytics, NLP, natural language processing, computer vision, deep learning, neural networks, AI strategy, machine learning solutions, AI implementation",
  path: "/services/ai-ml-consulting",
});

const schema = getServiceSchema({
  name: "AI/ML Consulting",
  description: "AI and ML consulting: strategy, predictive analytics, NLP, computer vision, custom ML solutions.",
  url: `${SITE_URL}/services/ai-ml-consulting`,
});

export default function AIMLConsulting() {
  const services = [
    {
      title: "AI Strategy Consulting",
      description:
        "Trigital specializes in AI Strategy Consulting, empowering businesses with a strategic, customized, and adaptive approach to leverage the transformative capabilities of artificial intelligence. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Strategic Planning : Developing AI strategies aligned with business goals, Trigital ensures a roadmap for successful AI adoption.",
        "Technology Assessment : Evaluating existing capabilities, Trigital identifies AI opportunities to enhance processes and decision-making.",
        "Customized Solutions : Tailoring AI applications to meet specific business needs, Trigital ensures practical and impactful implementations.",
        "Continuous Improvement : Implementing iterative approaches, Trigital supports businesses in adapting AI strategies to evolving technologies and market dynamics.",
      ],
      image: "/assets/images/Nipige/aiml_Strategy_Consulting_.svg",
    },
    {
      title: "AI/ML / DL Modeler",
      description:
        "Trigital’s expertise in Machine Learning and Deep Learning modeling empowers businesses with advanced, tailored, and continuously evolving AI solutions for predictive analysis, automation, and informed decision-making. Trigital’s ML & DL modeling consulting benefits:",
      bullets: [
        "Advanced Algorithms : Trigital leverages state-of-the-art ML and deep learning algorithms, ensuring sophisticated model development tailored to business needs.",
        "Data Pre-processing : Conducting comprehensive data pre-processing, Trigital ensures high-quality data inputs for accurate and meaningful model outcomes.",
        "Model Training and Tuning : Trigital employs rigorous training processes, fine-tuning models for optimal performance and predictive accuracy.",
        "Continuous Learning : Implementing mechanisms for ongoing learning, Trigital supports businesses in adapting models to changing data patterns and evolving requirements.",
      ],
      image: "/assets/images/Nipige/aiml_Dl_Modular.svg",
    },
    {
      title: "Open AI Consulting",
      description:
        "Trigital’s Open AI Consulting empowers businesses with strategic planning, customized applications, and ethical AI practices, ensuring a successful and responsible integration of OpenAI technologies. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Strategic Integration : Trigital aligns OpenAI solutions with business objectives, identifying opportunities for seamless integration.",
        "Customized Applications : Developing tailored applications, Trigital harnesses the power of OpenAI to address specific business challenges and enhance user experiences.",
        "Algorithmic Enhancements : Leveraging OpenAI algorithms, Trigital ensures sophisticated and effective models for diverse applications.",
        "Ethical AI Practices : Prioritizing ethical considerations, Trigital ensures responsible and fair use of AI technologies in alignment with industry standards.",
      ],
      image: "/assets/images/Nipige/aiml_Consulting.svg",
    },
    {
      title: "Tensor Flow Specialist Services",
      description:
        "Trigital’s Tensor Flow Specialist Services empower businesses with expert model development, optimization, and integration, providing a competitive edge in implementing cutting-edge machine learning and deep learning solutions. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Expert Model Development : Trigital excels in developing sophisticated machine learning and deep learning models using TensorFlow, tailored to specific business needs.",
        "Optimized Model Training : Leveraging TensorFlow capabilities, Trigital ensures efficient and optimized model training processes for enhanced performance.",
        "Continuous Model Optimization : Implementing iterative approaches, Trigital supports businesses in refining and optimizing TensorFlow models based on evolving data patterns and requirements.",
        "Integration with Applications : Facilitating seamless integration, Trigital ensures TensorFlow models work efficiently within business applications, enhancing automation and decision-making.",
      ],
      image: "/assets/images/Nipige/aiml_Tensor_Flow.svg",
    },
    {
      title: "GCP AI Platform Services",
      description:
        "Trigital excels in propelling businesses forward through the utilization of GCP AI Platform Services, enabling businesses with specialized expertise, scalability, and end-to-end solutions for successful AI implementations on the Google Cloud Platform. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Custom Model Development : Trigital specializes in crafting customized machine learning and deep learning models on Google Cloud AI Platform, tailored to unique business requirements.",
        "Scalable Deployments : Trigital facilitates seamless deployment and scaling of AI models, ensuring efficient integration with existing business systems on the Google Cloud Platform.",
        "Managed Services : Leveraging Google Cloud’s managed services, Trigital assists businesses in reducing operational overhead and ensuring the reliability of AI solutions.",
        "End-to-End AI Solutions : From model development to deployment, Trigital provides comprehensive and effective artificial intelligence implementations.",
      ],
      image: "/assets/images/Nipige/aiml_Gcp_Platform.svg",
    },
    {
      title: "Azure AI Platform Services",
      description:
        "Trigital excels in offering tailored solutions through its expertise in Azure AI Platform Services. Our services help businesses unlock new insights and drive innovation by leveraging the capabilities of Azure AI. Partnering with Trigital brings the following benefits:",
      bullets: [
        "Custom AI Solutions : We specialize in developing bespoke AI solutions aligned with your business needs.",
        "Azure AI Integration : Seamless integration of Azure AI capabilities into existing systems for enhanced functionality.",
        "Computer Vision Applications : Leveraging Azure AI for advanced image and video analysis, unlocking innovation across industries.",
        "Scalable and Cost-Effective Solutions : Architecting scalable AI solutions that ensure optimal performance as your business grows while optimizing costs.",
      ],
      image: "/assets/images/Nipige/aiml_Azure_Platform_Service.svg",
    },
    {
      title: "AWS AI Platform Services",
      description:
        "Trigital is well-equipped to propel businesses forward by harnessing the capabilities of AWS AI Platform Services. Our tailored solutions are designed to maximize the potential of artificial intelligence and drive business innovation. Partnering with Trigital brings the following benefits:",
      bullets: [
        "AWS AI Integration : Seamlessly integrating AWS AI capabilities into your existing systems for enhanced functionality.",
        "Machine Learning Models : Developing and deploying machine learning models to extract valuable insights and generate accurate predictions.",
        "Natural Language Processing (NLP) : Implementing NLP solutions to improve comprehension, sentiment analysis, and interaction with textual data.",
        "Expert Guidance : Offering proven expertise and strategic guidance throughout the entire AI journey, from strategy development to implementation and ongoing support.",
      ],
      image: "/assets/images/Nipige/aiml_Aws_Platform.svg",
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      <section className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                AI/ML Consulting
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Unlock the power of AI/ML with Trigital. Our cutting-edge
                solutions leverage artificial intelligence and machine learning
                to drive innovation. From predictive analytics to automated
                insights.
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="relative w-full h-[320px] md:h-[420px] mt-10 md:mt-0">
              <Image
                src="/assets/images/Nipige/aiml_Specilist.svg"
                alt="Migration Services"
                fill
                priority
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-white" : "bg-[#EBF7FF]";

        return (
          <section key={service.title} className={`${bgClass} py-20`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="md:grid md:grid-cols-2 gap-12 items-center">
                {!isEven && (
                  <div className="relative w-full h-[350px] mb-8 md:mb-0 order-2 md:order-1">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain rounded-2xl shadow-md"
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {service.description}
                  </p>
                  {service.bullets && service.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image - Right for even sections */}
                {isEven && (
                  <div className="relative w-full h-[350px] mt-8 md:mt-0 order-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain rounded-2xl shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">
            Unlock AI Potential
          </h2>

          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="/contact-us"
              className="
                  px-10 py-3 rounded-xl border border-primary text-primary font-semibold
                  hover:bg-primary  hover:-translate-y-1 transition
                "
            >
              Consult Our Experts
            </a>

            <a
              href="/contact-us?source=demo"
              className="
                  px-10 py-3 rounded-xl border border-primary text-primary font-semibold
                  hover:bg-primary  hover:-translate-y-1 transition
                "
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
