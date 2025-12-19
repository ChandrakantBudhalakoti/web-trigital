"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navSections = [
    {
      label: "NGB",
      items: [
        { href: "/products/our-product-ngb", label: "Our Product NGB" },
        { href: "/products/features", label: "NGB Features" },
        { href: "/products/market-solution", label: "Market & Solution" },
        {
          href: "/products/pre-built-integration",
          label: "Pre-Built Integration",
        },
        { href: "/products/deployment-model", label: "Deployment Model" },
      ],
    },
    {
      label: "Nipige",
      items: [
        { href: "/platform/our-platform-nipige", label: "Our Platform Nipige" },
        { href: "/platform/how-it-works", label: "How It Works" },
        { href: "/platform/key-features", label: "Key Features" },
        { href: "/platform/market-solution", label: "Market & Solution" },
        { href: "/platform/deployment-model", label: "Deployment Model" },
      ],
    },
    {
      label: "Solutions",
      items: [
        {
          href: "/solutions/subscription-monetization",
          label: "Subscription Monetization",
        },
        { href: "/solutions/digital-commerce", label: "Digital Commerce" },
        { href: "/solutions/digital-engagement", label: "Digital Engagement" },
        { href: "/solutions/digital-service", label: "Digital Service" },
      ],
    },
    {
      label: "Services",
      items: [
        { href: "/services/cloud-consultancy", label: "Cloud Consultancy" },
        { href: "/services/migration-services", label: "Migration Services" },
        { href: "/services/ai-ml-consulting", label: "AI/ML Consulting" },
        { href: "/services/big-data-analytics", label: "Big Data Analytics" },
        { href: "/services/app-development", label: "App Development" },
        { href: "/services/blockchain", label: "Blockchain" },
        { href: "/services/integration", label: "Integration" },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "/resources/blogs", label: "Blogs" },
        { href: "/resources/documentation", label: "Documentation" },
        { href: "/resources/events-news", label: "Events & News" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "/company/about-us", label: "About Us" },
        { href: "/company/customers", label: "Customers" },
        { href: "/company/partners", label: "Partners" },
        { href: "/company/our-team", label: "Our Team" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-600 shadow-md">
      <nav className="px-4 py-4 max-w-7xl mx-auto" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/images/trigital_logo.svg"
              alt="Trigital"
              width={120}
              height={40}
              className="hover:opacity-90 cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navSections.map((section) => (
              <div key={section.label} className="relative group">
                <button className="px-4 py-2 text-base-content hover:bg-base-200 rounded-md transition-colors flex items-center gap-1">
                  {section.label}
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
                {/* Mega Menu */}
                <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-slate-800 shadow-lg rounded-md mt-0 min-w-max border border-base-200">
                  <div className="p-4 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-base-content hover:bg-base-200 rounded-md transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.fastforge.ai/"
              className="hidden lg:flex flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/fastforge_logo.svg"
                alt="FastForge Logo"
                width={120}
                height={40}
                className="hover:opacity-90 cursor-pointer"
              />
            </Link>

            <Link
              href="/demo"
              className="hidden lg:inline-flex items-center bg-[#0B62FF] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#0047d6] transition-all"
            >
              Demo
            </Link>
            <button
              className="lg:hidden btn btn-ghost btn-circle"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navSections.map((section) => (
              <div key={section.label}>
                <button
                  onClick={() => toggleDropdown(section.label)}
                  className="w-full text-left px-4 py-2 font-medium text-base-content hover:bg-base-200 rounded-md flex justify-between items-center"
                >
                  {section.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === section.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === section.label && (
                  <div className="pl-4 space-y-1 mt-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-base-content hover:bg-base-200 rounded-md"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/demo"
              onClick={() => setIsMobileOpen(false)}
              className="block w-full bg-[#0B62FF] text-white font-semibold text-center px-6 py-3 rounded-lg hover:bg-[#0047d6] transition-all mt-4"
            >
              Demo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
