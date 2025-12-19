"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";

const partnerSections = {
  Cloud: [
    { name: "AWS", logo: "/assets/images/partners/aws.svg" },
    { name: "Google Cloud", logo: "/assets/images/partners/google-cloud.svg" },
    { name: "Microsoft Azure", logo: "/assets/images/partners/azure.svg" },
    { name: "IONOS", logo: "/assets/images/partners/ionos.svg" },
  ],
  Ecommerce: [
    { name: "Shopify", logo: "/assets/images/partners/shopify.svg" },
    { name: "GoDaddy", logo: "/assets/images/partners/godaddy.svg" },
    { name: "WordPress", logo: "/assets/images/partners/wordpress.svg" },
  ],
  Payments: [
    { name: "Stripe", logo: "/assets/images/partners/stripe.svg" },
    { name: "PayPal", logo: "/assets/images/partners/PayPal.svg" },
    { name: "Paytm", logo: "/assets/images/partners/paytm.svg" },
  ],
  CRM: [
    { name: "Salesforce", logo: "/assets/images/partners/salesforce.svg" },
    { name: "SAP", logo: "/assets/images/partners/sap.svg" },
    { name: "Oracle", logo: "/assets/images/partners/oracle.svg" },
  ],
};

// 👉 extract union of keys
type PartnerSectionKey = keyof typeof partnerSections;

export default function Partners() {
  const [selected, setSelected] = useState<PartnerSectionKey>("Cloud");

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary">Our Partners</h1>
            <p className="text-xl text-base-content/70 mt-2">
              We collaborate with industry leaders to deliver end-to-end
              solutions
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 flex-wrap border-b pb-4">
            {Object.keys(partnerSections).map((section) => (
              <button
                key={section}
                className={`text-lg px-4 py-2 border-b-4 transition ${
                  selected === section
                    ? "border-primary font-bold text-primary"
                    : "border-transparent text-base-content/60 hover:text-primary"
                }`}
                onClick={() => setSelected(section as PartnerSectionKey)}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Partner Logos */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerSections[selected].map((partner) => (
              <div
                key={partner.name}
                className="card bg-base-100 shadow hover:shadow-lg transition p-6 flex items-center justify-center rounded-xl border border-base-200"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition"
                  />
                  <p className="text-sm text-base-content/70">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Opportunities */}
          <div className="space-y-6 bg-base-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary text-center">
              Partnership Opportunities
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Technology Partners
                </h3>
                <p className="text-base-content/70">
                  Integrate your platform or service with Trigital to expand
                  your reach.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Integration Partners
                </h3>
                <p className="text-base-content/70">
                  Become a certified partner and serve customers globally.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Consulting Partners
                </h3>
                <p className="text-base-content/70">
                  Partner with us to deliver consulting and digital
                  transformation solutions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Reseller Partners
                </h3>
                <p className="text-base-content/70">
                  Resell Trigital solutions with attractive margins and support.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">
              Ready to Partner With Us?
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Join our trusted partner ecosystem and unlock new opportunities.
            </p>

            <a
              href="/contact-us"
              className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all font-semibold"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
