import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";
import {
  UserPlusIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export const metadata = buildPageMetadata({
  title: "How It Works | Trigital Tech",
  description:
    "Get started with NIPIGE: sign up, configure, beta launch, grow. How Trigital's platform accelerates digital product development.",
  keywords:
    "how NIPIGE works, platform setup, sign up, configure platform, beta launch, digital product development, platform onboarding, getting started",
  path: "/platform/how-it-works",
});

const schema = createWebPageSchema({
  name: "How It Works | Trigital Tech",
  description: "Get started with NIPIGE in four steps: sign up, configure, beta launch, and grow.",
  path: "/platform/how-it-works",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Platform", url: "/platform/our-platform-nipige" }, { name: "How It Works", url: "/platform/how-it-works" }],
});

export default function HowItWorks() {
  const processSteps = [
    {
      title: "Sign Up",
      description:
        "Create your account and get instant access to the Nipige platform.",
      icon: UserPlusIcon,
    },
    {
      title: "Configure",
      description:
        "Set up workflows, integrations, and business rules to match your needs.",
      icon: Cog6ToothIcon,
    },
    {
      title: "Beta Launch",
      description:
        "Launch your solution in a controlled environment and iterate with feedback.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Scale-up & Grow",
      description:
        "Scale your operations and grow with built-in analytics and optimization.",
      icon: ChartBarIcon,
    },
  ];

  const contentSections = [
    {
      title: "Quick & Scalable",
      description:
        "Nipige is quick and scalable in nature, characterized by the ability to rapidly deploy new solutions, easily integrate with existing systems, and scale seamlessly to meet growing demands. This agility is facilitated by a modular architecture, cloud-native capabilities, and automation, allowing organizations to adapt swiftly to evolving business needs. The platform’s user-friendly interfaces and continuous improvement mindset further contribute to its quick adoption and ongoing optimization. Overall, the platform’s agility empowers organizations to stay responsive, enhance operational efficiency, and achieve sustainable growth in today’s dynamic business environment.",
      image: "/assets/images/Nipige/Quick_Scalable.svg",
      imageLeft: false,
    },
    {
      title: "Simple to build",
      description:
        "Nipige is intricately composed of hundreds of microservices distributed across diverse domains, each contributing specialized functionalities. With thousands of REST endpoints, these microservices enable seamless communication and interoperability. This architecture promotes scalability, allowing the platform to efficiently handle varying workloads and adapt to changing requirements. The use of microservices facilitates modular development and maintenance, enabling agile updates to specific components without affecting the entire system. This distributed and highly interconnected structure enhances flexibility, resilience, and responsiveness, laying the foundation for an adaptive and efficient digital ecosystem.",
      image: "/assets/images/Nipige/Simple_to_build.svg",
      imageLeft: true,
    },
    {
      title: "Idea to Market",
      description:
        "Nipige introduces a groundbreaking feature known as the Dynamic Catalogue, a revolutionary tool empowering business owners to model their enterprises with unparalleled flexibility and precision. This innovative capability enables the creation of a dynamic business blueprint, allowing for the meticulous representation and orchestration of various business elements. From products and services to processes and customer interactions, the Dynamic Catalogue adapts in real-time to changes in the business environment, providing a living model that mirrors the evolving nature of the organization. This transformative approach empowers business owners to design, modify, and optimize their operational strategies with agility, ensuring that the digital transformation platform serves as a dynamic and responsive foundation for sustainable business growth.",
      image: "/assets/images/Nipige/Idea_to_Market.svg",
      imageLeft: false,
    },
    {
      title: "Solution on the GO!",
      description:
        "Nipige introduces a revolutionary Glue Engine, a groundbreaking innovation that empowers users to seamlessly create specific business workflows by intelligently stitching together microservices. This innovative feature acts as a cohesive force, allowing businesses to leverage the versatility of microservices while adhering to a carefully crafted design blueprint. The Glue Engine facilitates the integration and coordination of diverse microservices, enabling the construction of tailored workflows that align with specific business requirements. This approach streamlines the development process, providing a unified and efficient solution for orchestrating complex tasks. As a result, the platform empowers organizations to achieve a harmonious integration of microservices, maximizing agility and adaptability in their digital transformation journey.",
      image: "/assets/images/Nipige/Solution_on_the_GO.svg",
      imageLeft: true,
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      {/* —————————————————————————————————————————————————————————————
          1. HERO SECTION — Full-width dark blue, title + paragraph left, gears SVG right
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                How It Works
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Nipige provides businesses with a flexible deployment approach,
                supporting SaaS, on-premise, and private cloud options. This
                adaptability empowers businesses to choose the infrastructure
                that aligns perfectly with their preferences and specific
                requirements.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/howItWorks_top_banner_img.svg"
                  alt="How Nipige works - process steps"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          2. PROCESS STEPS SECTION — Light background, 4 cards in a row
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-[#EBF7FF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-700 dark:text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Tailor your workflow effortlessly with Nipige’s array of pre-built
            business solutions, catering to diverse industries. Request custom
            workflow modifications to align with your specific needs, ensuring a
            swift transition to operational efficiency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-600 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          3. CONTENT SECTIONS — Alternating image + text (Quick & Scalable, Simple to build, Idea to Market, Solution on the GO!)
          ————————————————————————————————————————————————————————————— */}
      {contentSections.map(({ title, description, image, imageLeft }) => (
        <section key={title} className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="md:grid md:grid-cols-2 gap-12 items-center">
              {imageLeft ? (
                <>
                  <div className="relative w-full aspect-[4/3] min-h-[240px] order-2 md:order-1">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-contain rounded-2xl shadow-md"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                      {title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
                      {title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <div className="relative w-full aspect-[4/3] min-h-[240px] mt-8 md:mt-0">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-contain rounded-2xl shadow-md"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* —————————————————————————————————————————————————————————————
          4. CTA SECTION — Ready to Get Started
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gray-50 dark:bg-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Ready to Get Started?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/platform/key-features"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors duration-200"
            >
              Explore Features
            </Link>
            <Link
              href="/contact-us?source=demo"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
            >
              See Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
