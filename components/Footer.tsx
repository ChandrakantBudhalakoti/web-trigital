import Link from "next/link";
import Image from "next/image";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  // FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { label: "Our Product NGB", href: "/products/our-product-ngb" },
      { label: "NGB Features", href: "/products/features" },
      { label: "Market & Solution", href: "/products/market-solution" },
      {
        label: "Pre-Built Integration",
        href: "/products/pre-built-integration",
      },
      { label: "Deployment Model", href: "/products/deployment-model" },
    ],
    Platform: [
      { label: "Nipige", href: "/platform/our-platform-nipige" },
      { label: "How It Works", href: "/platform/how-it-works" },
      { label: "Key Features", href: "/platform/key-features" },
      { label: "Market & Solution", href: "/platform/market-solution" },
      { label: "Deployment Model", href: "/platform/deployment-model" },
    ],
    Solutions: [
      {
        label: "Subscription Monetization",
        href: "/solutions/subscription-monetization",
      },
      { label: "Digital Commerce", href: "/solutions/digital-commerce" },
      { label: "Digital Engagement", href: "/solutions/digital-engagement" },
      { label: "Digital Service", href: "/solutions/digital-service" },
    ],
    Services: [
      { label: "Cloud Consultancy", href: "/services/cloud-consultancy" },
      { label: "Migration Services", href: "/services/migration-services" },
      { label: "AI/ML Consulting", href: "/services/ai-ml-consulting" },
      { label: "Big Data Analytics", href: "/services/big-data-analytics" },
      { label: "App Development", href: "/services/app-development" },
      { label: "Blockchain", href: "/services/blockchain" },
      { label: "Integration", href: "/services/integration" },
    ],
    Resources: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Documentation", href: "/resources/documentation" },
      { label: "Events & News", href: "/resources/events-news" },
    ],
    Company: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Customers", href: "/company/customers" },
      { label: "Partners", href: "/company/partners" },
      { label: "Our Team", href: "/company/our-team" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "FAQs", href: "/faqs" },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/images/trigital_logo.svg"
                alt="Trigital"
                width={120}
                height={40}
                className="hover:opacity-90 cursor-pointer mb-2"
              />
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Empowering businesses with innovative digital solutions since
              2013.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/trigitaltech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-orange-600 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/trigitaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-orange-600 transition"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              {/* <a
                href="https://facebook.com/trigitaltech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-orange-600 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a> */}

              <a
                href="https://www.instagram.com/trigital_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-orange-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-slate-100">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-orange-600 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-700 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold mb-1 flex items-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              Address
            </p>
            <p className="text-slate-400 text-sm">
              Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha,
              <br />
              Hyderabad, Telangana 500081, India
            </p>
          </div>
          <div>
            <p className="font-semibold mb-1 flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5" />
              Email
            </p>
            <a
              href="mailto:contact@trigitaltech.com"
              className="text-slate-400 hover:text-orange-600 transition text-sm"
            >
              contact@trigitaltech.com
            </a>
          </div>
          <div>
            <p className="font-semibold mb-1 flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              Phone
            </p>
            <a
              href="tel:+919876543210"
              className="text-slate-400 hover:text-orange-600 transition text-sm"
            >
              +91 (555) 123 123-4567
            </a>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Trigital Technologies Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-orange-600 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-slate-400 hover:text-orange-600 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-slate-400 hover:text-orange-600 text-sm"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
