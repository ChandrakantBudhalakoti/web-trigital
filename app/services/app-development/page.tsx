"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = ["Android", "iOS", "POS"];

type CategoryContent = {
  sections: {
    title: string;
    description: string;
    image: string;
    benefits: string[];
  }[];
};

const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  Android: {
    sections: [
      {
        title: "Android Apps Development Service",
        description:
          "Welcome to Trigital, your Android App Development partner for unparalleled mobile experiences. Our expert developers craft innovative and user-friendly Android applications tailored to your business needs. From concept to deployment, Trigital ensures seamless development, delivering high-performance apps that engage users and amplify your brand presence. Elevate your mobile strategy with Trigital’s Android App Development services, where creativity meets functionality. Explore the possibilities and redefine your mobile presence with us.",
        image: "/assets/images/Nipige/android_Apps_Development_Service_.svg",
        benefits: [] as string[],
      },
      {
        title: "Deploy In Android App Development",
        description:
          "Welcome to Trigital, your expert partner in deploying Android App Development solutions. Our seasoned developers ensure smooth and efficient deployment, bringing your Android applications to a global audience. From optimizing for diverse devices to ensuring compatibility, Trigital handles the intricacies of deployment, guaranteeing a seamless user experience. Elevate your app’s reach and impact with Trigital’s proficient Android App Deployment services. Explore the possibilities of widespread success with our deployment expertise.",
        image: "/assets/images/Nipige/deploy_In_Android_App_Development_.svg",
        benefits: [] as string[],
      },
      {
        title: "Benefits Of Android App Development",
        description:
          "Unlock a world of possibilities with Android App Development from Trigital. Benefit from a vast user base, flexible customization, and seamless integration with popular Google services. Our expert developers ensure a dynamic and scalable solution, amplifying your brand presence and engaging users on the versatile Android platform. Elevate your business with us.",
        image: "/assets/images/Nipige/benefits_Of_Android_App_Development_.svg",
        benefits: [] as string[],
      },
    ],
  },
  iOS: {
    sections: [
      {
        title: "iOS Apps Development Service",
        description:
          "Discover excellence in iOS app development with Trigital. Our skilled developers bring your ideas to life, creating sleek and intuitive iOS applications tailored to elevate your brand. From concept to App Store deployment, Trigital ensures a seamless development journey, delivering high-quality apps that captivate users. Embrace innovation and redefine your mobile presence with Trigital’s iOS App Development services. Explore the possibilities and set new standards in user experience with us.",
        image: "/assets/images/Nipige/iOS_Apps_Development_Service.svg",
        benefits: [] as string[],
      },
      {
        title: "Deploy In iOS App Development",
        description:
          "Welcome to Trigital, your iOS App Development deployment expert. Trust us to seamlessly deploy your iOS applications, ensuring a flawless entry into the App Store. From rigorous testing to App Store compliance, our seasoned developers handle every aspect. Elevate your iOS app’s reach and impact with Trigital’s proficient deployment services. Explore the possibilities with us.",
        image: "/assets/images/Nipige/deploy_iOS_App_.svg",
        benefits: [] as string[],
      },
      {
        title: "Benefits Of iOS App Development",
        description:
          "Discover the exclusive advantages of iOS App Development with Trigital. Benefit from a premium user experience, robust security features, and seamless integration across Apple devices. Reach a discerning audience on the App Store, enhancing brand visibility. Elevate your business with the sophistication and performance of iOS App Development.",
        image: "/assets/images/Nipige/benefits_Of_iOS_App_Development_.svg",
        benefits: [] as string[],
      },
    ],
  },
  POS: {
    sections: [
      {
        title: "POS Apps Development Service",
        description:
          "Welcome to Trigital, your destination for cutting-edge Point of Sale (POS) App Development services. Streamline your business transactions with our tailor-made POS applications. Our expert developers create intuitive and secure solutions to enhance your customer experience and optimize sales operations. Trust Trigital to revolutionize your POS system, providing you with a seamless and efficient platform. Elevate your business with our POS App Development services, where innovation meets transaction excellence. Explore the possibilities with Trigital and transform your point of sale experience.",
        image: "/assets/images/Nipige/benefits_Ios_App_Development_.svg",
        benefits: [] as string[],
      },
      {
        title: "Deploy In POS App Development",
        description:
          "Welcome to Trigital, your POS App Development deployment specialist. Trust us to seamlessly deploy your Point of Sale applications, ensuring smooth and secure operations. From comprehensive testing to real-world implementation, our experienced developers handle every aspect. Elevate your business transactions with Trigital’s proficient POS App Deployment services. Explore the possibilities with us.",
        image: "/assets/images/Nipige/deploy_Pos_App_Development_.svg",
        benefits: [] as string[],
      },
      {
        title: "Benefits Of POS App Development",
        description:
          "Welcome to Trigital, your destination for cutting-edge Point of Sale (POS) App Development services. Streamline your business transactions with our tailor-made POS applications. Our expert developers create intuitive and secure solutions to enhance your customer experience and optimize sales operations. Trust Trigital to revolutionize your POS system, providing you with a seamless and efficient platform. Elevate your business with our POS App Development services, where innovation meets transaction excellence. Explore the possibilities with Trigital and transform your point of sale experience.",
        image: "/assets/images/Nipige/benefits_Pos_App_Development.svg",
        benefits: [] as string[],
      },
    ],
  },
};

export default function AppDevelopment() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <main className="min-h-screen">
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                App Development
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Revolutionize your business presence with Trigital’s Mobile App
                Development. From sleek iOS and Android applications to
                cross-platform solutions, we craft user-friendly and scalable
                apps tailored to your brand. Elevate user experiences, boost
                engagement, and stay ahead in the mobile-centric landscape with
                our expert development services.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/android.svg"
                  alt="App Development"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* ——— SIDEBAR (Categories) ——— */}
            <aside className="lg:col-span-1">
              <div className="bg-[#EBF7FF] dark:bg-slate-800/50 rounded-2xl p-6 space-y-3 lg:sticky lg:top-24">
                <div className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap overflow-x-auto lg:overflow-x-visible">
                  {CATEGORIES.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setSelectedCategory(name)}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg cursor-pointer transition duration-200
                        break-words
                        ${
                          selectedCategory === name
                            ? "bg-blue-600 text-white font-medium shadow-md"
                            : "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm"
                        }
                      `}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* ——— RIGHT CONTENT AREA (driven by selected category) ——— */}
            <div className="lg:col-span-3 space-y-16">
              {(() => {
                const content = CATEGORY_CONTENT[selectedCategory];
                if (!content) return null;
                return (
                  <>
                    {/* Image + text sections (alternating) */}
                    {content.sections.map(
                      ({ title, description, image, benefits }, index) => {
                        const imageLeft = index % 2 === 1;
                        return (
                          <div
                            key={title}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 last:mb-0"
                          >
                            {imageLeft ? (
                              <>
                                <div className="relative w-full aspect-[4/3] min-h-[220px] order-2 md:order-1">
                                  <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="rounded-2xl shadow-md w-full object-contain"
                                  />
                                </div>
                                <div className="order-1 md:order-2">
                                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                                    {title}
                                  </h3>
                                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                                    {description}
                                  </p>
                                  {benefits.length > 0 && (
                                    <>
                                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">
                                        Benefits
                                      </h4>
                                      <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                                        {benefits.map((benefit) => (
                                          <li key={benefit}>{benefit}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                              </>
                            ) : (
                              <>
                                <div>
                                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                                    {title}
                                  </h3>
                                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                                    {description}
                                  </p>
                                  {benefits.length > 0 && (
                                    <>
                                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">
                                        Benefits
                                      </h4>
                                      <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                                        {benefits.map((benefit) => (
                                          <li key={benefit}>{benefit}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                                <div className="relative w-full aspect-[4/3] min-h-[220px]">
                                  <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="rounded-2xl shadow-md w-full object-contain"
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        );
                      },
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          3. CTA SECTION
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20 bg-[#EBF7FF] dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Build Something Great
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Transform your ideas into powerful applications that drive business
            growth. Our expert development team delivers scalable, secure, and
            high-performance solutions tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us?source=demo"
              className="inline-flex items-center justify-center px-10 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-10 py-3 rounded-xl border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
