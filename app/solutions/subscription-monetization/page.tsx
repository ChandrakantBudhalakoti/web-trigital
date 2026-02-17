import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Subscription Monetization | Trigital Tech",
  description:
    "Boost subscriber acquisition and retention with Trigital's subscription monetization solutions. Advanced analytics, flexible billing, and revenue optimization for digital media and retail.",
};

export default function SubscriptionMonetization() {
  const sections = [
    {
      title:
        "Subscription & Online Payment Solution For Digital & Entertainment Market",
      description:
        "Nipige Company specializes in boosting subscriber acquisition and retention for global digital media and entertainment firms through advanced analytics, personalized marketing, and innovative content experiences, ensuring sustainable growth.",
      bullets: [
        "Trusted Partner: Global digital media and entertainment companies rely on nipige Company for tailored subscriber acquisition and retention solutions.",
        "Advanced Analytics: Leveraging cutting-edge analytics and personalized marketing strategies to optimize acquisition efforts.",
        "Personalized Content Experiences: nipige’s innovative platform delivers tailored content experiences, fostering strong subscriber connections and loyalty.",
        "Data-Driven Insights: Anticipating subscriber needs and reducing churn through actionable data insights.",
        "Maximizing Revenue: Robust monetization tools and flexible billing options to maximize revenue while enhancing subscriber satisfaction.",
        "Expert Guidance: Navigating subscriber dynamics with confidence for sustainable global growth with nipige’s expertise.",
      ],
      image: "/assets/images/Nipige/trigital_Digital_Media_Entertainment.svg",
    },
    {
      title:
        "Inventory Control, Promotions & Offers Management, and Revenue Optimization for Consumer Goods and Retail Business",
      description:
        "Nipige Company empowers goods and retail businesses with innovative subscription-based solutions, leveraging advanced market analysis and personalized recommendations to anticipate and adapt to consumer trends, driving increased engagement, loyalty, and recurring revenue.",
      bullets: [
        "Specialized Assistance: nipige Company assists goods and retail businesses in anticipating and adapting to consumer trends through subscription-based offerings.",
        "Advanced Market Analysis: Leveraging advanced market analysis and consumer insights to tailor subscription plans.",
        "Increased Engagement: Tailored subscription plans foster increased engagement and loyalty among consumers.",
        "Customizable Plans: nipige’s platform offers customizable plans and personalized recommendations to meet diverse consumer needs effectively.",
        "Streamlined Subscription Management: nipige streamlines subscription management through automated billing and responsive support.",
        "Recurring Revenue: Automated billing and responsive support drive recurring revenue and sustainable growth.",
        "Empowering Businesses: nipige empowers businesses to stay competitive with innovative subscription-based solutions catering to evolving consumer demands.",
      ],
      image: "/assets/images/Nipige/consumer_Goods.svg",
    },
    {
      title:
        "Flexible Subscription Models, Automated Billing Processes and Customizable Plans and Pricing for Software as a Service Providers",
      description:
        "nipige Company’s SaaS solutions revolutionize business operations, offering cloud-based software accessible over the internet to streamline processes, enhance customer experiences, and drive growth with scalable subscription models.",
      bullets: [
        "Revolutionary SaaS Solutions: nipige Company transforms business operations with cloud-based SaaS offerings.",
        "Hassle-Free Technology: Access cutting-edge technology without managing complex infrastructure through nipige’s SaaS.",
        "Streamlined Operations: From CRM to billing solutions, nipige’s SaaS platform streamlines operations and enhances customer experiences.",
        "Scalable Subscription Models: Flexible subscription models cater to startups, SMEs, and enterprises, enabling agility and competitiveness.",
        "Enhanced Growth: nipige’s SaaS empowers businesses to drive growth by staying agile and competitive in the fast-paced market.",
      ],
      image: "/assets/images/Nipige/trigital_Softwareasa_Service.svg",
    },
    {
      title:
        "Content Access Control, Flexible Subscription Models, and user-friendly mobile interface for E-Learning Businesses",
      description:
        "Nipige Company optimizes eLearning brands’ revenue and subscriber engagement through tailored subscription packages, streamlined processes, and advanced analytics, fostering loyalty and competitiveness in the market.",
      bullets: [
        "Specialized Assistance: nipige Company specializes in assisting eLearning brands with diverse subscription packages and revenue growth.",
        "Tailored Packages: Leveraging advanced analytics to tailor packages to suit audience preferences and streamline subscriber processes.",
        "Automated Billing and Support: nipige enhances subscriber experience with automated billing and personalized support, driving satisfaction and loyalty.",
        "Revenue Optimization: Identifying upsell opportunities and analyzing subscription metrics to optimize revenue for eLearning brands.",
        "Competitive Edge: Equipping eLearning brands with tools and insights to thrive in the competitive market.",
      ],
      image: "/assets/images/Nipige/E-Learning.svg",
    },
    {
      title:
        "Easy Customer Management, Dynamic Service Catalogue, and Appointment Scheduling for Professional Service Providers",
      description:
        "Professional services organizations rely on nipige for streamlined subscription management, optimized revenue streams, and enhanced customer satisfaction through tailored solutions and robust analytics.",
      bullets: [
        "Nipige provides effective subscription management and recurring revenue models for professional services organizations.",
        "Tailored solutions streamline subscription processes and optimize revenue streams.",
        "Ensures consistent cash flow by offering flexible billing options.",
        "Empowers organizations with robust analytics for data-driven decisions.",
        "Enhances customer satisfaction through personalized solutions.",
        "Automated workflows simplify complex subscription models.",
        "Enables organizations to focus on delivering high-quality services and achieving sustainable growth.",
      ],
      image: "/assets/images/Nipige/trigital_Professional_Services.svg",
    },
    {
      title:
        "Efficient Warranty Management, Multi-Channel Service Request Portal, and Automated Billing Processes for Warranty and Support Service Provider",
      description:
        "Nipige revolutionizes warranty and support services by integrating them seamlessly into subscription models, enhancing affordability, convenience, and customer satisfaction while promoting loyalty and retention.",
      bullets: [
        "Nipige integrates warranty and support services into subscription models, boosting affordability and convenience for customers.",
        "Bundling these services directly into subscription packages eliminates additional costs and complexities.",
        "This transparent and seamless approach provides ongoing value to customers, fostering loyalty and retention.",
        "Businesses are empowered to enhance customer satisfaction, drive retention, and fuel growth through comprehensive solutions within subscription models.",
      ],
      image: "/assets/images/Nipige/warranty_Support.svg",
    },
    {
      title:
        "Automated Billing Management, Usage Monitoring and Analytics, and Smart Meters Integration for Utility Service Providers",
      description:
        "Nipige provides utility providers with comprehensive CRM, subscription, billing, and payment management solutions, driving operational efficiency and customer satisfaction in the industry.",
      bullets: [
        "Comprehensive CRM, subscription, billing, and payment management solutions",
        "Advanced CRM capabilities for efficient customer relationship management and personalized communication",
        "Streamlined subscription management enabling tailored plans and diverse billing cycle accommodation",
        "Simplified billing and payment processes through automation and online payment facilitation",
        "Ensures accuracy and improves cash flow with automated invoicing",
        "Empower utility providers to enhance operational efficiency, and customer satisfaction, and drive growth in the utility industry.",
      ],
      image: "/assets/images/Nipige/trigital_Utility_Services.svg",
    },
    {
      title:
        "Flexible Billing Models, Automated Billing Processes, and Subscription Management for Communications Service Providers (CSPs)",
      description:
        "Nipige empowers CSPs in telecommunications by managing the entire subscriber journey, optimizing operations, and enhancing customer experience through streamlined onboarding, automated billing, and flexible subscription management.",
      bullets: [
        "Assists CSPs including Telco, MVNOs, and Broadband providers in managing the entire subscriber journey",
        "Advanced platform streamlines subscriber onboarding, reduces errors, and improves turnaround times",
        "Automated recurring billing and payment processes ensure accurate invoicing and seamless transactions",
        "Flexible subscription management allows customization of plans to meet subscriber needs",
        "Empowers CSPs to optimize operations, enhance customer experience, and drive growth in the telecommunications sector.",
      ],
      image: "/assets/images/Nipige/communication_Service_Providers.svg",
    },
    {
      title:
        "Device Lifecycle Management, Flexible Pricing Models, Real-time Usage Analytics and Seamless Integration for Internet of Things (IoT) Market",
      description:
        "Nipige specializes in seamlessly integrating efficient billing systems tailored for IoT and M2M applications, enabling businesses to monetize revenue streams and capitalize on the full potential of interconnected technologies.",
      bullets: [
        "IoT reshapes automation across industries by leveraging internet connectivity for seamless system integration and control",
        "Data plays a crucial role, empowering automated processes to make informed decisions and take actions",
        "The interconnected landscape creates numerous opportunities, transforming industries and businesses",
        "Billing becomes pivotal for monetizing revenue streams, particularly with diverse customer bases",
        "nipige excels in seamlessly integrating efficient billing systems tailored for IoT and M2M applications",
        "From metering to charging and managing subscription-based services, nipige ensures a holistic billing experience",
        "Nipige’s expertise enables precision in monetizing various services, allowing businesses to capitalize on IoT and M2M technologies while delivering exceptional value to customers.",
      ],
      image: "/assets/images/Nipige/internet_Of_Things.svg",
    },
    {
      title:
        "Flexible Billing Models, Automated Billing Processes and Seamless Integration for Cloud Service Business",
      description:
        "Nipige aids cloud providers in transitioning to usage-based billing models, ensuring fair pricing and optimized revenue through precise resource consumption tracking, flexible payment options, and robust revenue management analytics.",
      bullets: [
        "Nipige aids cloud providers in transitioning to usage-based billing models for various cloud solutions",
        "Its advanced platform enables precise tracking and monetization of resource consumption, ensuring fair pricing and optimized revenue",
        "Flexible payment options and automated invoicing streamline billing processes, enhancing cash flow management and reducing revenue risks",
        "The robust revenue management suite offers insightful analytics, empowering providers to optimize pricing and drive growth",
        "Nipige’s tailored suite empowers cloud providers to effectively manage billing, payment, and revenue processes, maximizing customer value and revenue potential in a competitive market",
      ],
      image: "/assets/images/Nipige/cloud_Provider.svg",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* —————————————————————————————————————————————————————————————
          1. HERO SECTION — Full-width dark blue/indigo, title + paragraph left, illustration right
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Subscription Monetization
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Trigital empowers businesses in subscription monetization by
                streamlining processes. We automate billing, enhance management,
                and optimize growth, ensuring efficient revenue generation
                across diverse market segments and company sizes.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/subscription_Monitization.svg"
                  alt="Subscription monetization"
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
          2. CONTENT SECTIONS — Alternating layout and background banding
          ————————————————————————————————————————————————————————————— */}
      {sections.map(({ title, description, bullets, image }, index) => {
        const textLeft = index % 2 === 0;
        const bgClass =
          index % 2 === 0
            ? "bg-white dark:bg-slate-900/30"
            : "bg-[#EBF7FF] dark:bg-slate-800/40";

        return (
          <section key={title} className={`w-full py-20 ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {textLeft ? (
                  <>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                        {title}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                        {description}
                      </p>
                      {bullets.length > 0 && (
                        <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                          {bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {(index === 1 || index === 2) && (
                        <Link
                          href="/contact-us"
                          className="mt-6 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                        >
                          Learn More →
                        </Link>
                      )}
                    </div>
                    <div className="relative w-full aspect-[4/3] min-h-[240px] mt-8 md:mt-0">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="rounded-2xl shadow-md w-full object-contain"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative w-full aspect-[4/3] min-h-[240px] order-2 md:order-1">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="rounded-2xl shadow-md w-full object-contain"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                        {title}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                        {description}
                      </p>
                      {bullets.length > 0 && (
                        <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                          {bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {(index === 1 || index === 2) && (
                        <Link
                          href="/contact-us"
                          className="mt-6 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                        >
                          Learn More →
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* —————————————————————————————————————————————————————————————
          3. CTA SECTION
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20 bg-[#EBF7FF] dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Ready to Launch Your Subscription Business?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us?source=demo"
              className="inline-flex items-center justify-center px-10 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              See Demo
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-10 py-3 rounded-xl border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
