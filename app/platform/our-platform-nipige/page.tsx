import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Our Platform NIPIGE | Trigital Tech",
  description:
    "Discover NIPIGE, Trigital's enterprise-wide no-code/low-code platform for rapid digital product development. Reduce costs by 90% and time to market by 70% with our innovative SaaS solution.",
};

export default function OurPlatformNipige() {
  const keyFeatures = [
    "Tailored Workflow",
    "Dynamic Catalogue",
    "Multi-Channel Integration",
    "Exclusive POS system",
    "Localization of Currency",
    "Role Management",
  ];

  const deploymentOptions = ["SaaS", "Private Cloud", "On Premise"];

  return (
    <main className="min-h-screen">
      {/* —————————————————————————————————————————————————————————————
          1. HERO SECTION — Full width blue gradient, title + paragraph left, SVG right
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Platform Overview
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Nipige is an enterprise wide platform that allows users to
                quickly create and launch their digital products and solutions
                through a no-code/low-code configuration. Streamlining
                development, reducing cost by 90% & time to market by 70%,
                eliminating the need for extensive coding expertise. Nipige
                enables an enterprise to focus on innovating, designing and
                quickly bringing them to market, driving innovation and success
                in the digital space.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/platform_overview_top_banner.svg"
                  alt="Nipige platform overview"
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
          2. PLATFORM NIPIGE SECTION — Light bg, centered heading, full-width architecture SVG
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-[#EBF7FF]">
        <div className="max-w-7xl mx-auto px-6">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 text-center mb-12">
            Platform NIPIGE
          </h2> */}
          <div className="relative w-full aspect-[2/1] min-h-[280px] md:min-h-[360px]">
            <Image
              src="/assets/images/Nipige/platform_nipige (1).svg"
              alt="Platform NIPIGE architecture"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          3. KEY PRODUCT FEATURES — Two column: left text + bullets, right image
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">
                Key Product Features
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You can trust us to simplify every step of your business journey
                better than anyone else.
              </p>
              <ul className="space-y-3 mt-6">
                {keyFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/platform/key-features"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 transition duration-200"
              >
                View Details
              </Link>
            </div>
            <div className="relative w-full aspect-[4/3] min-h-[240px] mt-8 md:mt-0 order-first md:order-none">
              <Image
                src="/assets/images/Nipige/Key_Product_Features.svg"
                alt="Key product features"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          4. MARKET SOLUTION — Reverse layout: left image, right text
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-[#EBF7FF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[4/3] min-h-[240px] order-first md:order-first">
              <Image
                src="/assets/images/Nipige/Market_Solution.svg"
                alt="Market solution"
                fill
                className="object-contain"
              />
            </div>
            <div className="md:order-last">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-600">
                Market Solution
              </h2>
              <p className="text-gray-700 dark:text-gray-600 mt-4 leading-relaxed">
                Nipige is a highly configurable low-code no-code platform that
                can efficiently help businesses (small, medium or large scale,
                start up or existing) realize their business objectives and
                achieve their goals. The platform is built with 100% micro
                service architecture to address the B2B, B2C, and B2B2C
                challenges and allows a quick go to market strategy.
              </p>
              <Link
                href="/platform/market-solution"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 transition duration-200"
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          5. DEPLOYMENT MODEL — Left text + bullets, right image
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">
                Deployment Model
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                Nipige offers businesses a versatile deployment approach,
                accommodating SaaS, on-premise, and private cloud options. This
                flexibility empowers businesses to select the infrastructure
                that best suits their preferences and requirements.
              </p>
              <ul className="space-y-3 mt-6">
                {deploymentOptions.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/platform/deployment-model"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 transition duration-200"
              >
                More Details
              </Link>
            </div>
            <div className="relative w-full aspect-[4/3] min-h-[240px] mt-8 md:mt-0">
              <Image
                src="/assets/images/Nipige/NIPIGE_Platform_Deployment_Model.svg"
                alt="Deployment model"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
