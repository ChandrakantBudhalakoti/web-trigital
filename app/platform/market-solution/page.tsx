import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Market & Solution | Trigital Tech",
  description:
    "NIPIGE solutions: hyperlocal markets, restaurant aggregators, farm-to-home, e-commerce, logistics. Configurable low-code platform.",
  keywords:
    "market solutions, hyperlocal market, restaurant aggregator, food delivery solution, farm-to-home, e-commerce platform, logistics solution, digital commerce solutions, marketplace platform",
  path: "/platform/market-solution",
});

const schema = createWebPageSchema({
  name: "Market & Solution | Trigital Tech",
  description: "NIPIGE solutions for hyperlocal markets, restaurant aggregators, farm-to-home, e-commerce, logistics.",
  path: "/platform/market-solution",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Platform", url: "/platform/our-platform-nipige" }, { name: "Market & Solution", url: "/platform/market-solution" }],
});

export default function MarketSolution() {
  const solutions = [
    {
      title: "Hyperlocal Market (Super App Solution)",
      description:
        "Engage with local businesses and make your presence felt. Bring multiple businesses such as grocery, fruits & vegetables, fish & meat, pharmacy, tour & travel, healthcare, homecare, etc., under one single online platform and connect them with local customers via delivery management. Many noted companies entered the local business sector and capitalized. Similarly, if you have a unique concept of a hyperlocal model, the Nipige platform will assist you in bringing it online.",
      image: "/assets/images/Nipige/hyperlocal_market_immage.svg",
    },
    {
      title: "Restaurant Aggregator Platform (Food Delivery Solution)",
      description:
        "Digitalization of the food business has given rise to many restaurant aggregator platforms. A couple of food aggregator platforms became market leaders in this field with their successful business models. They allow customers to select and buy their favorite food items from their favorite restaurants and get them door-delivered. Food aggregator platforms are a highly lucrative and growing business. All you need is a unique business model and our team of experts to lay the foundation and get your business going.",
      image: "/assets/images/Nipige/Restaurant_Aggregator_Platform-1.svg",
    },
    {
      title: "Farm to Home Online Platform (Agri-tech Solution )",
      description:
        "Have any thoughts about bringing agricultural products, ancillary items, and agro realty to mainstream E-commerce? Agriculture-based applications have digitized agricultural businesses by bringing farm produce directly to the customer. If you have any engaging ideas to capitalize on this catching trend, we can help set up a ready-made online platform and build your enterprise brand at a global level.",
      image: "/assets/images/Nipige/Farm_to_Home_Online_Platform-1.svg",
    },
    {
      title: "Logistics & Delivery Management (Home Delivery Solution)",
      description:
        "Want to start a logistics and delivery management online business? You are on the right path. With many foods and other aggregator platforms having a booming business, logistics and delivery management cannot be left behind. The right idea and unique platform like Nipige would be a deadly combination to encash this happening business opportunity. Take a step now to build your logistics and delivery management platform!",
      image: "/assets/images/Nipige/Logistics-_Delivery_Management.svg",
    },
    {
      title: "Transport Aggregator Platform (Booking Services Solutions)",
      description:
        "Do you want to start an online platform to meet transportation needs with your revolutionary online aggregator platform? Nipige can help you with it. Your unique transport business idea can become a reality with exclusive features like live navigation, online payments, toggle driver availability, surge pricing, etc. Our expertise will not only digitize your operations but also make the customer happy with an easy-to-use app.",
      image: "/assets/images/Nipige/Transport_Aggregator_Platform-1.svg",
    },
    {
      title: "Online Healthcare Solutions (Hospitality Solutions)",
      description:
        "Nothing is better than avoiding the long queues at hospitals and engaging with the doctor from the comfort of our homes. Many noted hospitals and other companies have made this possible. They engage with the target audience and offer good quality healthcare services. Your business model may comprise booking doctor’s appointments or medicines at single/multiple pharmacies or other healthcare services. Digitalize these and more healthcare services under one Nipige platform that allows you to connect with customers and brand your enterprise.",
      image: "/assets/images/Nipige/Online_Healthcare_Solutions-1.svg",
    },
    {
      title: "E-Commerce Solutions (Digital Commerce)",
      description:
        "The online presence of a business entity through an app helps garner a large customer base for your business. It strengthens customer relationships and enhances brand value. Many top companies created a tremendous impact on consumers via their online presence. If you want to establish your brand presence, gain customers’ trust, and have a unique business idea, our expert team of Nipige can help you. We help you get the instant online recognition you deserve by creating a customized application according to your need.",
      image: "/assets/images/Nipige/ECommerce_Solution.svg",
    },
    {
      title: "Tour & Travel Platform (Travel Reservation Solution)",
      description:
        "Travelers vouch for online travel booking platforms that make their travel bookings hassle-free. These apps not only lure customers with discounts and offers but also create an enormous impact on the brand value of the enterprise. Nipige helps you set up a similar platform personalized to accommodate all your operational needs. It gives you a competitive advantage and assists in reaching new heights in no time.",
      image: "/assets/images/Nipige/Tour_Travel_Platform-1.svg",
    },
    {
      title: "E-Auction platform (Online Bidding Solution)",
      description:
        "Online auction platforms in India are not used to their full potential yet. Only a few applications allow users to bid for registered items. This new concept can be applied to any market as a big USP boosting your brand’s online presence. Nipige is the one platform that has this exceptional feature and provides a smooth experience to you, as a business, and to your customers. Explore this feature and boost your brand online.",
      image: "/assets/images/Nipige/EAuction_platform-1.svg",
    },
    {
      title: "POS – Point of Sale",
      description:
        "Are you looking for a convenient POS system that is a one-stop solution for online/offline POS? Nipige Platform offers the best POS solution with absolutely no data loss and default automatic cloud backup. This solution also provides cloud-based accounting and CRM facilities. With no hardware requirement and upgradation cost, the solution offers clear steps from inventory to sales. With various features like offers & discount management, UPI QR code-based multiple payments, returns & refund management, dashboards & reports, and many more, the POS solution by Nipige will assist in reaching your target markets.",
      image: "/assets/images/Nipige/Point_of_Sale.svg",
    },
    {
      title: "Buying - Selling Platform (Classifieds Solution)",
      description:
        "Online buying and selling platform has brought millions of prospective buyers and sellers onto one platform. Many user-friendly applications allow buyers and sellers to trade daily. These platforms help sellers to sell items that are no longer useful to them to buyers who need them at a discounted price. If you have a similar business idea, nipige could be the perfect platform to showcase its capabilities and meet your business objectives.",
      image: "/assets/images/Nipige/Buying_Selling_Platform-1.svg",
    },
    {
      title: "Home Service (On demand Service Solution)",
      description:
        "Are you planning to offer commercial home services like plumbing, electrical works, online or home-based beauty services, and more? Having a customer-friendly and innovative online platform is a must! At Nipige, we bring your out-of-the-box idea to life. We provide personalized digital experiences to enamor your customers and establish a distinct identity for your enterprise.",
      image: "/assets/images/Nipige/Home_Service-1.svg",
    },
  ];

  const stats = [
    { stat: "10,000+", label: "Active Organizations" },
    { stat: "1M+", label: "Active Users" },
    { stat: "100+", label: "Integrations" },
  ];

  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      {/* —————————————————————————————————————————————————————————————
          1. HERO SECTION — Full-width dark blue/indigo, title + description left, SVG right
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                One Platform Multi-Business Solution
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                We simplify intricate business challenges with straightforward
                solutions, allowing you to stay focused on your core priorities.
                Let us handle the routine project management tasks, ensuring
                smooth operations and freeing up your time for strategic
                decision-making.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/Nipige/marketSolution_top_banner_img.png"
                  alt="Market and solution"
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
          2. SOLUTION SECTIONS — Alternating layout and background
          ————————————————————————————————————————————————————————————— */}
      {solutions.map(({ title, description, image }, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven
          ? "bg-white dark:bg-slate-900/30"
          : "bg-[#EBF7FF] dark:bg-slate-800/40";
        const textLeft = isEven;

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
                      <Link
                        href="#"
                        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 transition duration-300 hover:-translate-y-1"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="relative w-full aspect-[4/3] min-h-[240px] mt-8 md:mt-0">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="rounded-2xl shadow-md object-contain w-full"
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
                        className="rounded-2xl shadow-md object-contain w-full"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                        {title}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                        {description}
                      </p>
                      <Link
                        href="#"
                        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 transition duration-300 hover:-translate-y-1"
                      >
                        View Details
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* —————————————————————————————————————————————————————————————
          3. STATS SECTION — Why Choose Nipige?
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20 bg-white dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
            Why Choose Nipige?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 dark:border-slate-700 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-slate-700">
            {stats.map(({ stat, label }) => (
              <div
                key={label}
                className="text-center py-8 md:py-6 first:pt-8 md:first:pt-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
                  {stat}
                </div>
                <div className="text-gray-700 dark:text-gray-300 mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* —————————————————————————————————————————————————————————————
          4. CTA SECTION
          ————————————————————————————————————————————————————————————— */}
      <section className="w-full py-20 bg-[#EBF7FF] dark:bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Join the Platform Revolution
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us?source=demo"
              className="inline-flex items-center justify-center px-10 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Start Free Trial
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
    </>
  );
}
