import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { getServiceSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Blockchain Services | Trigital Tech",
  description:
    "Smart contracts, DApps, blockchain consulting. Ethereum, Hyperledger, supply chain traceability, tokenization. Trigital blockchain experts.",
  keywords:
    "blockchain services, smart contracts, DApps, blockchain consulting, Ethereum, Hyperledger, supply chain blockchain, tokenization, cryptocurrency, decentralized applications, blockchain development, blockchain integration, blockchain security, identity management blockchain",
  path: "/services/blockchain",
});

const schema = getServiceSchema({
  name: "Blockchain Services",
  description: "Smart contracts, DApps, blockchain consulting. Ethereum, Hyperledger, supply chain, tokenization.",
  url: `${SITE_URL}/services/blockchain`,
});

const services = [
  {
    title: "Blockchain Advisory Services",
    description:
      "Trigital excels in Blockchain Advisory Services, guiding businesses in harnessing strategic planning, expert guidance, and secure implementations, unlocking the benefits of blockchain technology for increased transparency, efficiency, and trust. Partnering with Trigital brings the following benefits:",
    bullets: [
      "Strategic Planning : Developing customized blockchain strategies aligned with business objectives.",
      "Technology Assessment : Evaluating existing systems and identifying opportunities for blockchain integration.",
      "Implementation Guidance : Providing expert advice on selecting suitable blockchain platforms and architectures.",
      "Security and Compliance : Ensuring secure and compliant blockchain implementations, adhering to industry regulations.",
    ],
    image: "/assets/images/Nipige/blockchain_Advisory_Services_.svg",
  },
  {
    title: "Blockchain Development",
    description:
      "Trigital’s Blockchain Development Services empower businesses with customized solutions, smart contract automation, integration capabilities, tokenization expertise, and stringent security protocols, facilitating innovation and efficiency in their operations. Trigital’s blockchain development service benefits:",
    bullets: [
      "Custom Blockchain Solutions : Developing tailored blockchain applications to meet specific business needs.",
      "Smart Contract Development : Crafting and deploying smart contracts to automate processes and enhance efficiency.",
      "Blockchain Integration : Seamlessly integrating blockchain technology with existing systems for enhanced functionality.",
      "Tokenization : Assisting businesses in tokenizing assets and creating custom tokens for various use cases.",
    ],
    image: "/assets/images/Nipige/blockchain_Development_.svg",
  },
  {
    title: "Smart Contract Development",
    description:
      "Trigital’s Smart Contract Development services empower businesses with customized, secure, and efficient automation solutions on blockchain platforms, ensuring transparent and reliable execution of contractual agreements. Trigital’s smart contract development consulting benefits:",
    bullets: [
      "Customized Smart Contracts : Crafting tailored smart contracts to meet specific business requirements and objectives.",
      "Code Audits : Conducting thorough audits to ensure the reliability, security, and efficiency of smart contract code.",
      "Integration with Blockchain Platforms : Seamlessly integrating smart contracts into various blockchain platforms for diverse use cases.",
      "Tokenization : Implementing tokenization strategies, Trigital enables businesses to create and manage custom tokens for specific purposes.",
    ],
    image: "/assets/images/Nipige/smart_Contract_Development_.svg",
  },
  {
    title: "Blockchain Integration",
    description:
      "Trigital’s Blockchain Integration Services empower businesses with strategic planning, seamless integration, interoperability, and enhanced security, fostering the adoption of blockchain technology for improved efficiency and transparency. Trigital’s blockchain integration service benefits:",
    bullets: [
      "Strategic Integration Planning : Developing customized strategies for the effective integration of blockchain with current business processes.",
      "Legacy System Integration : Ensuring smooth integration with legacy systems, preserving data integrity and enabling a phased transition.",
      "API Development : Creating APIs to facilitate communication and data exchange between blockchain networks and existing applications.",
      "Interoperability Solutions : Implementing interoperability protocols to connect diverse blockchain platforms for enhanced functionality.",
    ],
    image: "/assets/images/Nipige/blockchain_Integration_.svg",
  },
  {
    title: "Supply Chain Blockchain Solutions",
    description:
      "Trigital for cutting-edge Supply Chain Blockchain Solutions that bring efficiency, security, and transparency to your business operations. Elevate your supply chain management with our innovative and tailored blockchain solutions. Trigital’s supply chain blockchain services benefits:",
    bullets: [
      "Decentralized Transparency : Implement blockchain to enhance transparency and traceability across the supply chain.",
      "Smart Contracts : Utilize smart contracts for automated and secure execution of agreements, reducing delays and errors.",
      "Efficiency Enhancement : Streamline processes, reduce paperwork, and minimize delays with blockchain’s decentralized ledger.",
      "Real-time Visibility : Gain real-time insights into the movement of goods, fostering better decision-making and responsiveness.",
    ],
    image: "/assets/images/Nipige/supply_Chain_Blockchain_Solutions_.svg",
  },
  {
    title: "Cryptocurrency Payment Integration",
    description:
      "Trigital excels in Cryptocurrency Payment Integration that transforms your payment landscape, providing security, flexibility, and a modernized transaction experience for your business and customers. Trigital’s cryptocurrency payment integration services benefits:",
    bullets: [
      "Custom Integration : Tailor cryptocurrency payment solutions to seamlessly integrate with your existing payment systems.",
      "Secure Transactions : Implement robust security measures to ensure safe and secure cryptocurrency transactions.",
      "Diverse Cryptocurrencies : Support a wide range of cryptocurrencies, providing flexibility and choice for your customers.",
      "Regulatory Compliance : Ensure compliance with relevant regulations and standards for cryptocurrency transactions.",
    ],
    image: "/assets/images/Nipige/cryptocurrency_Payment_Integration_.svg",
  },
  {
    title: "Identity Management on Blockchain",
    description:
      "Trigital excels in Identity Management on Blockchain that prioritizes security, privacy, and efficiency, ensuring a modern and trusted approach to managing user identities for your business. Trigital’s identity management on blockchain service benefits:",
    bullets: [
      "Decentralized Identity : Implement decentralized identity solutions on blockchain, enhancing security and privacy.",
      "Immutable Records : Leverage the immutability of blockchain for tamper-resistant identity verification.",
      "Data Ownership : Empower users with greater control over their personal data, stored securely on the blockchain.",
      "Interoperability : Enable seamless identity verification across platforms and services through blockchain interoperability.",
      "Smart Contracts : Utilize smart contracts to automate and streamline identity verification processes.",
    ],
    image: "/assets/images/Nipige/identity_Management_Blockchain_.svg",
  },
  {
    title: "Blockchain Security Consulting",
    description:
      "Trigital is well-equipped to propel businesses in Blockchain Security Consulting that prioritizes the integrity and resilience of your blockchain-based systems, safeguarding your business against emerging threats and ensuring regulatory compliance. Trigital’s blockchain security consulting services benefits:",
    bullets: [
      "Risk Assessment : Conduct thorough risk assessments to identify potential vulnerabilities in your blockchain infrastructure.",
      "Smart Contract Audits : Ensure the security and reliability of smart contracts through meticulous audits.",
      "Encryption and Hashing : Implement robust encryption and hashing techniques to secure data on the blockchain.",
      "Regulatory Compliance : Ensure compliance with industry regulations and standards, fostering trust and legal adherence.",
    ],
    image: "/assets/images/Nipige/blockchain_Security_Consulting_.svg",
  },
];

export default function Blockchain() {
  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      {/* ============================================
          1️⃣ HERO SECTION
          ============================================ */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trigital Blockchain Offerings
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                Transform your business with Trigital’s Block chain Solutions.
                From secure transactions to smart contracts, we leverage
                decentralized technology for transparency and efficiency.
                Explore the potential of block chain to enhance security and
                streamline processes. Partner with us for innovative solutions
                in the rapidly evolving world of decentralized technologies.
              </p>
            </div>

            <div className="relative w-full h-[400px] md:h-[450px]">
              <Image
                src="/assets/images/Nipige/blockchain_Offerings_.svg"
                alt="Blockchain Services"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          2️⃣ SERVICE CONTENT SECTIONS
          Alternating background bands
          ============================================ */}
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

      {/* ============================================
          3️⃣ CTA SECTION
          ============================================ */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white">
              Build Trustless Systems
            </h2>

            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact-us"
                className="px-10 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold text-white"
              >
                Consult Our Experts
              </a>

              <a
                href="/contact-us?source=demo"
                className="px-10 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold text-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
