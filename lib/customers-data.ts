/**
 * Customer list and case study data for /company/customers and /company/customers/[slug]
 */

export type CustomerCaseStudy = {
  industry: string;
  region: string;
  products: string[];
  favoriteFeatures: string[];
  companyFull: string;
  solutionBullets: string[];
  feedbackBullets: string[];
};

export type Customer = {
  slug: string;
  name: string;
  country: string;
  description: string;
  result: string;
  logo: string;
  caseStudy?: CustomerCaseStudy;
};

const customersData: Customer[] = [
  {
    slug: "nxtdigital-limited",
    name: "NXTDIGITAL Limited",
    country: "India",
    description:
      "NXTDIGITAL Limited (NDL) is the flagship media business of the global Hinduja Group. The media and communications company has a pan-India presence, NXTDIGITAL delivers television services through a dual delivery platform consisting…",
    result:
      "Delivered television services platform with improved billing and customer management.",
    logo: "/assets/images/Nipige/nxt_logo.png",
    caseStudy: {
      industry: "Media & Entertainment",
      region: "India",
      products: ["Television", "Broadband", "OTT", "DTH"],
      favoriteFeatures: ["Return Filing", "Customer Management", "Instant Payment"],
      companyFull:
        "NXTDIGITAL Limited (NDL) is the flagship media business of the global Hinduja Group. The media and communications company has a pan-India presence, NXTDIGITAL delivers television services through a dual delivery platform consisting of the terrestrial fibre route and the country’s only Headend-In-The-Sky (HITS) satellite platform, under the brand names INDigital and NXTDIGITAL respectively. Other than Television services, it’s subsidiary ONEOTT entertainment Limited has a strong presence in Broadband and Internet services in 40 cities. Its services under the brand “ONE Broadband” provide converged services of Video, Data and Voice to consumers by delivering high-speed internet and services across multiple cities in India. With “ONE Gigafiber”, the broadband company also provides FTTH (Fibre To The Home) services for consumers – providing speeds up to 1,000Mbps. The project is about rolling out unified end customer self care experience for various service offers, subscription, billing and payments. The solution is provided to NXTDIGITAL Distributor in multi-tenancy model to create local control of the customer engagement and collection process. A complete digital wallet solution to accelerate easy of payment and subscription management capabilities to 3.5 million customer active customer base.",
      solutionBullets: [
        "Built Architecture, Business Process Consultation.",
        "IT Platform with 25+ Micro Services, cross platform Mobile App and Webapp development and Management for end customer and Distributor.",
        "Cloud infrastructure and services selection, deployment and configuration (AWS Cloud) and management.",
        "Complex integration with legacy system, vendor interface, payment system. Architecture Governance and IT security management.",
        "Legacy system migration to cloud native architecture.",
      ],
      feedbackBullets: [
        "Increased 30% auto renewal process, Decrease cost of collection by 70%.",
        "One Stop IT solution provider for everything – Development and Management of application, cloud services.",
        "Reduced management cost, highly scalable solution for future focused offers.",
        "Zero IT headache",
      ],
    },
  },
  {
    slug: "telkom-south-africa",
    name: "Telkom South Africa",
    country: "South Africa",
    description:
      "Telkom South Africa, the country's leading telecommunications provider with operations in 38 African nations, engaged us to deliver Phase I of the Lions Mobile App. We developed and deployed a feature-rich platform including…",
    result: "Developed and deployed feature-rich Lions Mobile App Phase I.",
    logo: "/assets/images/Nipige/telkom_logo.svg",
    caseStudy: {
      industry: "Telecommunications",
      region: "South African",
      products: ["Home Internet", "Digital Services", "Mobile App"],
      favoriteFeatures: ["Return Filing", "Instant Payment"],
      companyFull:
        "Telkom South Africa, the country's leading telecommunications provider with operations in 38 African nations, engaged us to deliver Phase I of the Lions Mobile App. We developed and deployed a feature-rich platform including secure OTP-based sign-up, event and news sections, multimedia galleries, team stats, push notifications, CRM integration, and a web admin panel. The project was delivered successfully.",
      solutionBullets: [
        "Built Architecture, Business Process Consultation.",
        "IT Platform with 45+ Micro Services, 3 cross-platform Mobile App, 4 Webapp development and Management.",
        "IT infrastructure and services selection, deployment and configuration (On-Premise and Cloud) and management.",
        "Complex integration with 30+ vendor interface. Architecture Governance.",
        "Legacy system migration to cloud native architecture.",
      ],
      feedbackBullets: [
        "Choice of Technology assuring nearly Zero downtime.",
        "One Stop IT solution provider for everything - Development and Management of application, cloud services.",
        "Reduced management cost, highly scalable solution.",
        "Zero IT headache.",
      ],
    },
  },
  {
    slug: "tayana-mobility-technologies",
    name: "Tayana Mobility Technologies",
    country: "Bengaluru, India",
    description:
      "Tayana Mobility Technologies Pvt Ltd, founded in 1999 in Bangalore, is a leading telecom software products company serving communication service providers (CSPs) worldwide. Its 3GPP-compliant solutions span digital BSS, network management….",
    result: "3GPP-compliant digital BSS and network management solutions.",
    logo: "/assets/images/Nipige/tayana_logo.svg",
    caseStudy: {
      industry: "Telecom Software Products",
      region: "India",
      products: ["ERP", "Accounting Software", "BSS", "Network Management", "OSS"],
      favoriteFeatures: ["Network Solutions", "Software Consulting"],
      companyFull:
        "Tayana Mobility Technologies Pvt Ltd, founded in 1999 in Bangalore, is a leading telecom software products company serving communication service providers (CSPs) worldwide. Its 3GPP-compliant solutions span digital BSS, network management, analytics, value-added services, and advanced messaging for 2G–5G networks. Key offerings include UPCC, OCS, BI analytics, and campaign management, with seamless integration to major vendors like Ericsson, Nokia, and Huawei. In partnership with Trigital, Tayana delivers Digital BSS and self-care platforms, enhancing its ability to offer complete end-to-end B/OSS solutions, strengthening capabilities in the global telecom sector.",
      solutionBullets: [
        "Built Architecture, Business Process Consultation.",
        "IT Platform with 45+ Micro Services, 3 cross platform Mobile App, 4 Webapp development and Management.",
        "IT infrastructure and services selection, deployment and configuration (on-Premise and Cloud) and management.",
        "Complex integration with 30+ vendor interface. Architecture Governance.",
        "Legacy system migration to cloud native architecture.",
      ],
      feedbackBullets: [
        "Standards-compliant, scalable solutions.",
        "Strong technical partnership.",
        "Choice of Technology assuring nearly Zero downtime.",
        "One Stop IT solution provider for everything – Development and Management of application, cloud services.",
        "Reduced management cost, highly scalable solution.",
        "Zero IT headache",
      ],
    },
  },
  {
    slug: "5factors",
    name: "5Factors",
    country: "USA",
    description:
      "5Factors is a pioneering risk intelligence company dedicated to unifying cyber and fraud risk management for enterprises through a single, end-to-end platform. Its advanced, AI-driven solutions provide complete, real-time visibility…",
    result:
      "AI-driven solutions with real-time visibility and threat detection.",
    logo: "/assets/images/Nipige/5factorsIcon.png",
    caseStudy: {
      industry: "Cybersecurity & Risk Intelligence",
      region: "USA",
      products: ["5Factors Unified Intelligence Platform", "Risk Intelligence", "Fraud Detection"],
      favoriteFeatures: ["Unified Intelligence for Cyber & Fraud Risk", "End-to-End Platform", "Real-time Visibility", "AI-Driven Threat Response", "Custom Dashboards & Consolidated Analysis"],
      companyFull:
        "5Factors is a pioneering risk intelligence company dedicated to unifying cyber and fraud risk management for enterprises through a single, end-to-end platform. Its advanced, AI-driven solutions provide complete, real-time visibility, addressing critical vulnerabilities that stem from tool fragmentation, siloed operational teams, and data overload. Key offerings include autonomous threat response, continuous security hardening, and contextual threat investigation, all powered by a suite of Agentic, Adaptive, and Generative AI technologies. By providing a centralized platform with consolidated analytics, 5Factors streamlines security architecture to reduce costs and operational fatigue, strengthening the security posture and efficiency of modern enterprises.",
      solutionBullets: [
        "Trigital delivered 5Factors, an all-in-one cyber risk and fraud intelligence platform, providing a centralized, user-friendly interface for security operations.",
        "The platform caters to diverse personas across an organization, providing role-based insights and custom dashboards for security teams, business leaders, C-level executives, and auditors.",
        "The solution is built on an advanced data architecture that performs continuous data ingestion, normalization, and risk intelligence analysis, leveraging a powerful suite of Agentic, Adaptive, and Generative AI technologies.",
        "This streamlined architecture is designed for efficiency and resilience, reducing tool fatigue and integration gaps while delivering end-to-end visibility and actionable, real-time insights to lower total costs.",
      ],
      feedbackBullets: [
        "5Factors demonstrated a profound understanding of our complex security challenges, especially the risks posed by tool fragmentation and siloed teams, which they addressed directly.",
        "The execution was flawless in delivering a truly unified platform. They successfully consolidated our disparate data sources into a single, streamlined architecture that provides end-to-end visibility and makes risk analysis manageable.",
        "We have been extremely impressed with the platform’s AI-driven capabilities. The ability to get real-time threat visibility and achieve faster, more informed decision-making has fundamentally strengthened our security posture and operational efficiency.",
      ],
    },
  },
  {
    slug: "aza",
    name: "AZA",
    country: "Nigeria",
    description:
      "AZA is a revolutionary digital financial solution for the Nigerian market , offering a secure, wallet-based platform designed to simplify P2P payments and enhance financial inclusion. The platform's comprehensive solutions…",
    result:
      "Secure, wallet-based platform simplifying P2P payments and financial inclusion.",
    logo: "/assets/images/Nipige/aza_logo.svg",
    caseStudy: {
      industry: "Fin-Tech",
      region: "Nigeria",
      products: ["Wallet", "P2P Payments", "Digital Financial Solution"],
      favoriteFeatures: ["AI-Powered Credit Scoring", "Instant Payment", "Secure Wallet"],
      companyFull:
        "AZA is a revolutionary digital financial solution for the Nigerian market , offering a secure, wallet-based platform designed to simplify P2P payments and enhance financial inclusion. The platform’s comprehensive solutions enable users to perform seamless P2P transfers , access smart micro-loans with flexible repayment terms , and manage shared finances through an innovative Group Wallet for pooled community savings. Key features include instant onboarding for both users and merchants , secure KYC verification integrated with national ID APIs , QR code payments , and a gamified loyalty rewards system , supported by an AI-powered credit scoring engine for dynamic loan approvals. Built on a scalable, cloud-based architecture , AZA empowers individuals and small businesses with faster, secure transactions and simplified access to digital financial tools.",
      solutionBullets: [
        "Trigital developed a user-friendly and feature-rich digital financial solution, the AZA App , providing a secure, wallet-based model for P2P payments and other digital transaction needs.",
        "The application caters to different personas, including individual users seeking seamless money transfers and micro-loans , as well as merchants who can be onboarded via self-service and empowered to accept digital payments.",
        "Trigital implemented a scalable, cloud-based system , leveraging a microservices architecture with Kubernetes to ensure seamless expansion and growth.",
        "The system architecture is designed to be secure and compliant, featuring data encryption and transaction monitoring. Its use of an AI-powered credit scoring engine contributes to faster and more dynamic financial services.",
      ],
      feedbackBullets: [
        "Trigital exhibited a deep understanding of the need for financial inclusion in our market, translating the challenges of P2P payments and micro-loan access into a user-friendly and highly effective digital wallet solution.",
        "The development process was seamless. Trigital successfully implemented a complex set of features, from secure KYC verification and AI-powered credit scoring to a fully scalable cloud-based architecture, keeping our strategic goals at the forefront.",
        "We appreciate Trigital’s innovative solutions, particularly the Group Wallet feature which directly addresses community-based financial practices. Their work has provided us with a powerful platform to empower both individual users and merchants across Nigeria.",
      ],
    },
  },
  {
    slug: "lirs",
    name: "LIRS",
    country: "Nigeria",
    description:
      "This Nipige solution digitizes transactions initiated from the customer's outlets and also make provision for API integration to outlets with existing point of sale devices. The solution caters for all use cases provided for consumption tax collection…",
    result:
      "Digitized transactions and API integration for consumption tax collection.",
    logo: "/assets/images/Nipige/LIRS.svg",
    caseStudy: {
      industry: "Fiscalization",
      region: "Nigeria",
      products: ["Tax Collection", "POS Integration"],
      favoriteFeatures: ["Instant Payment", "Return Filing"],
      companyFull:
        "Nigeria Lagos State Government want to implement single system which connects all tax collecting Merchants / Agents to make sure that they collect the 5% Consumption tax from Hotels / Resorts, Event Centers, etc. Objective of this project is that all agents have to comply to govt TAX System and they need to Integrate to the Central System for the compliance and Payments. Various Agents use different POS / Sales System and it is challenge to make a Interface that can handle seamless Integrations. Over 70000 Merchants are targeted in initial phase of the project in Lagos state itself with over 35 million invoice upload each month. The scope of work is to design and implement and manage a robust consumption tax application that will assist the Agency to monitor, manage and collect the right amount of consumption taxes through collecting agents in Lagos State.",
      solutionBullets: [
        "Built Architecture, Business Process Consultation.",
        "IT Platform with 45+ Micro Services, 3 cross platform Mobile App, 4 Webapp development and Management.",
        "IT infrastructure and services selection, deployment and configuration (on-Premise and Cloud) and management.",
        "Complex integration with 30+ vendor interface. Architecture Governance.",
        "Legacy system migration to cloud native architecture.",
      ],
      feedbackBullets: [
        "Choice of Technology assuring nearly Zero downtime.",
        "One Stop IT solution provider for everything – Development and Management of application, cloud services.",
        "Reduced management cost, highly scannable solution.",
        "Zero IT headache",
      ],
    },
  },
  {
    slug: "teka",
    name: "TEKA",
    country: "India",
    description:
      "TEKA is a unique social engineering business with offline to online to offline B2B2C hybrid business model which is making offline merchants to go online and get sales from offline as well. It helps our business fraternity to become…",
    result:
      "Offline merchants go online and get sales from offline as well, transforming business fraternity.",
    logo: "/assets/images/Nipige/Teka_logo.svg",
    caseStudy: {
      industry: "Retail and E-commerce",
      region: "India",
      products: ["Groceries", "Essential Goods", "B2B2C"],
      favoriteFeatures: ["Multi-channel", "Merchant Onboarding", "One Platform for e-Commerce", "Exclusive Product Catalog"],
      companyFull:
        "Operating under the TEKA brand, Vedhaank Digital Private Limited pioneers a unique social engineering business model, bridging offline and online commerce. TEKA facilitates the transition of offline merchants to the online sphere, empowering various sectors to showcase and sell their offerings to TEKA’s clientele. With a groundbreaking cashback system at its core, TEKA enhances customer satisfaction and loyalty, setting it apart globally. Through community building and innovative programs, TEKA.",
      solutionBullets: [
        "Trigital served as the technical partner for TEKA, responsible for developing and managing the entire IT application, including e-commerce, sales, service, and channel partner systems.",
        "Trigital has built a comprehensive cloud-based system designed to scale seamlessly from the Indian market to the global arena, targeting a customer base of over a billion.",
        "Trigital employed a multi-cloud platform approach, utilizing both AWS (Amazon Web Services) and GCP (Google Cloud Platform) to ensure high scalability and reliability.",
        "The infrastructure is based on Kubernetes, utilizing a cluster setup and comprising over 120 Docker containers running within the platform.",
        "This setup ensures robustness, flexibility, and efficiency, enabling TEKA to effectively handle the demands of its growing user base while maintaining high levels of performance and trustworthiness.",
      ],
      feedbackBullets: [
        "Choice of Technology assuring nearly Zero downtime.",
        "One Stop IT solution provider for everything – Development and Management of application, cloud services.",
        "Reduced management cost, highly scannable solution.",
        "Zero IT headache.",
      ],
    },
  },
  {
    slug: "calonex",
    name: "CALONEX",
    country: "United States",
    description:
      "Empower your growth journey with our Leads and Quotes features. Effortlessly capture potential opportunities through streamlined lead generation. Create and send professional quotes with ease. Elevate your business with tools designed…",
    result:
      "Streamlined lead generation and professional quote creation for business growth.",
    logo: "/assets/images/Nipige/Calonex_logo.svg",
    caseStudy: {
      industry: "Property Management (Calonex LLC)",
      region: "United States",
      products: ["Rental Properties", "Tenant Management", "Broker/Agent System"],
      favoriteFeatures: ["User-Friendly Applications", "Cloud-Based System", "Scalable Architecture"],
      companyFull:
        "Calonex is a comprehensive property rental management platform that aims to streamline the entire process for both landlords and tenants. When I say rental management, I mean landlords creating their properties, adding their property and unit amenities and publishing it in the  rental search whereas the tenant can view the listed properties based on their location and create application, visit the property do their own screening and sharing the same with the landlord/project managers. The platform seems to provide a holistic solution for property management, covering various aspects from property listing and tenant interactions to financial tracking and communication. The inclusion of a broker/agent system adds an extra layer of flexibility for landlords to find tenants quickly.",
      solutionBullets: [
        "Trigital developed user-friendly and feature-rich applications for both mobile and web platforms, ensuring a seamless experience for users across various devices.",
        "The applications cater to different personas involved in property rental management, including landlords, tenants, brokers/agents, and management companies, providing tailored functionalities for each.",
        "Trigital implemented a cloud-based system, leveraging a multi-cloud platform approach. Both AWS (Amazon Web Services) and GCP (Google Cloud Platform) were employed to ensure high scalability, reliability, and global accessibility.",
        "He system architecture is designed to scale effortlessly to accommodate increasing user loads. The redundancy and reliability feature inherent in AWS and GCP contribute to a robust and resilient infrastructure.",
      ],
      feedbackBullets: [
        "Trigital exhibited a deep understanding of our business model and requirements, translating them into user-friendly applications tailored to the diverse personas in our property rental management ecosystem.",
        "Communication with the Trigital team has been seamless. They were responsive to our queries, provided regular updates, and ensured that we were informed at every stage of the development process.",
        "We appreciate Trigital’s adaptability to evolving requirements and their flexibility in accommodating changes.Their agility in responding to our dynamic needs has been commendable.",
      ],
    },
  },
  {
    slug: "polimeraas",
    name: "POLIMERAAS",
    country: "India",
    description:
      "Polimeraas is a leading Fruits & Vegitable retail chain with the Farm to home supply chain. It has around 150 stores in 5 states. It is also called farmers house which has network of 50000 plus farmers across five states. Polimeraas disrupted…",
    result:
      "Farm to home supply chain with 150 stores and a network of 50,000+ farmers, disrupting the retail landscape.",
    logo: "/assets/images/Nipige/Polimeraas_logo.svg",
    caseStudy: {
      industry: "Retail",
      region: "India",
      products: ["Farm to Home", "Retail", "Supply Chain"],
      favoriteFeatures: ["Inventory", "Multi-store"],
      companyFull:
        "Polimeraas is a leading Fruits & Vegetable retail chain with the Farm to home supply chain. It has around 150 stores in 5 states. It is also called farmers house which has network of 50000 plus farmers across five states. Polimeraas disrupted the Vegetable Mandi. All fruits and Vegetables are sourced directly from the farmers at above market price and sell at very fair price to the customers through its franchise stores and online. All stores are modern and part of a community which enabled to buy fresh produce without changing many hands reach customers at-least one day before compared to the conventional trade. Polimeraas Limited is committed to providing nutritious products, cultivated in an ethical & socially responsible manner, within a sustainable ecosystem that benefits everybody involved. The project is about building high performance and scalable online platform for Sales , Supply chain and Store management. Giving a simplified online system for farmers to sell to Polimerass, and a simplified solution for fulfilment / logistics team to pick and drop of the vegetables to increase process efficiency to reduce waste of fresh items. Also a simplified online order experience for end consumer for their door step delivery.",
      solutionBullets: [
        "Built Architecture, Business Process Consultation.",
        "IT Platform Development & Management with 45+ Micro Services, cross platform Mobile App, Webapp for customer, farmer, store, admin.",
        "Multi Cloud infrastructure and services selection, deployment and configuration (AWS & GCP) and management.",
        "Complex integration with legacy system, vendor interface, payment system, voucher printing , Network Signal.",
        "SME for Business development & operation.",
      ],
      feedbackBullets: [
        "30% Faster in supply chain management.",
        "20% Reduction in waste items by routing to the nearest stores in time.",
        "40% Increased traffic and online orders, more customer satisfaction.",
        "One Stop IT solution provider for everything – Development and Management of application, cloud services.",
        "Happy to focus on business growth with Zero IT headache.",
      ],
    },
  },
  {
    slug: "free-tv",
    name: "FREE TV",
    country: "Nigeria",
    description:
      "Free TV is a broadcasting platform offering a wide range of home Entertainment to Nigerians through highly entertaining and informative channels. Nigeria federal government has subsidized so that FreeTV brings to homes great choice…",
    result:
      "Wide range of home entertainment through subsidized broadcasting platform, providing great choice to Nigerian homes.",
    logo: "/assets/images/Nipige/free-red1.png",
    caseStudy: {
      industry: "Broadcasting",
      region: "Nigeria",
      products: ["Broadcasting", "Entertainment"],
      favoriteFeatures: ["Multi-channel", "Subsidized Access"],
      companyFull:
        "Free TV is a broadcasting platform offering a wide range of home Entertainment to Nigerians through highly entertaining and informative channels. Nigeria federal government has subsidized so that FreeTV brings to homes great choice of Free-to-Air (FTA) Channels with electronic programme guide (EPG). FreeTV covers the existing local, national, and selected international Free-to-Air channels.  Delivering Nigerian digital incentive channels with improved signal reception and picture quality directly to homes via Set top boxes. The project is about building and deploying highly scalable world class solution which encompasses 360 degree of the business process including Network digital Signal, CAS, Digital Content, Subscriber Management, Billing, Payment, Dealer/wholesaler, Voucher solution. The project involves complex legacy, monolithic, non scalable solution migration to the new platform with over 1 million prepaid active subscriber base and 500 plus dealer / wholesaler.",
      solutionBullets: [
        "Built Architecture, Business Process Consultation.",
        "IT Platform with 40 + Micro Services, cross platform Mobile App, Webapp development, middleware solution Development & Management.",
        "Cloud infrastructure and services selection, deployment and configuration(Digital Ocean) and management.",
        "Complex integration with legacy system, vendor interface, payment system, voucher printing, Network Signal.",
        "Migration including data from Legacy system migration to cloud native architecture.",
      ],
      feedbackBullets: [
        "Reduced IT infrastructure and operation cost by 40%.",
        "One Stop IT solution provider for everything – Development and Management of application, cloud services.",
        "Increase revenue by 30% by stopping revenue leakage and customer retention.",
        "High scalable to new offerings with Zero IT headache.",
      ],
    },
  },
  {
    slug: "fastway-group",
    name: "Fastway Group",
    country: "India",
    description:
      "Fastway group is pioneer in digital entertainment services and dominant market leader in this space. Fastway has an internet arm Netplus Broadband which is 100% subsidiary of Fastway group and Fastest growing ISP in the region providin…",
    result:
      "Enhanced platform for digital entertainment and internet services.",
    logo: "/assets/images/Nipige/fastway_logo.png",
    caseStudy: {
      industry: "Telecommunications",
      region: "India",
      products: ["Digital Entertainment", "Internet", "Broadband"],
      favoriteFeatures: ["Billing", "Content Management"],
      companyFull:
        "Fastway Group is a pioneer in digital entertainment services and a dominant market leader. Fastway has an internet arm Netplus Broadband, a 100% subsidiary and one of the fastest growing ISPs in the region. Trigital delivered an enhanced platform for digital entertainment and internet services.",
      solutionBullets: [
        "Digital entertainment and broadband platform.",
        "Billing and content management.",
      ],
      feedbackBullets: [
        "Unified platform for entertainment and internet.",
        "Scalable operations and customer experience.",
      ],
    },
  },
  {
    slug: "ap-state-fibernet-limited",
    name: "AP State FiberNet Limited",
    country: "India",
    description:
      "AP State FiberNet Limited (APSFL) has been incorporated under the Companies Act, 2013 in the month of October, 2015. It is a fully owned entity of the Government of AP under the control of Infrastructure & Investment (I&I) Department…",
    result: "Advanced network management and digital services platform.",
    logo: "/assets/images/Nipige/apsfl_logo.jpg",
    caseStudy: {
      industry: "FiberNet",
      region: "India",
      products: ["Fiber", "Network", "Digital Services"],
      favoriteFeatures: ["Network Management", "Monitoring"],
      companyFull:
        "AP State FiberNet Limited (APSFL) has been incorporated under the Companies Act, 2013 in the month of October, 2015. It is a fully owned entity of the Government of AP under the control of Infrastructure & Investment (I&I) Department. This Corporation is responsible for undertaking the works of AP Fiber Grid, its Operations & Maintenance and business activities duly partnering with various stakeholders for the benefit of all.",
      solutionBullets: [
        "Built Architecture, Business Process Consultation.",
        "Mediation, Rating and Usage Charging, Online Rating Engine for their Internet / Bandwidth Services, Integrated with AAA.",
        "Cloud infrastructure and services selection, deployment and configuration(AWS) and management.",
        "Complex integration with legacy SMS system, vendor interface, payment system.",
      ],
      feedbackBullets: [
        "Increased collaboration with partner & distribution.",
        "40% reduction in customer incident by decentralizing IT operation and support system to Distributor.",
        "Reduced management cost, highly scalable solution for our distributor.",
        "Seamlessly works with SMS and network solution without additional IT headache.",
      ],
    },
  },
];

export const customers = customersData;

export function getCustomerBySlug(slug: string): Customer | undefined {
  return customersData.find((c) => c.slug === slug);
}
