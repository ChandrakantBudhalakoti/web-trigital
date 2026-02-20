import Image from "next/image";
import Section from "@/components/Section";

import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Our Team | Trigital Tech",
  description:
    "Meet the Trigital team driving digital transformation. Experts in software development, cloud, AI/ML, and enterprise solutions committed to your success.",
  keywords:
    "Trigital team, technology team, software development team, IT professionals, technology experts, digital transformation team, development team",
  path: "/company/our-team",
});

const schema = createWebPageSchema({
  name: "Our Team | Trigital Tech",
  description: "Meet the Trigital team driving digital transformation. Experts in software development, cloud, AI/ML, enterprise solutions.",
  path: "/company/our-team",
  breadcrumbs: [{ name: "Home", url: SITE_URL }, { name: "Company", url: "/company/about-us" }, { name: "Our Team", url: "/company/our-team" }],
});

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Hemanth Kumar",
      role: "CEO & Founder",
      expertise: "",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Venkat Akula",
      role: "Managing Director",
      expertise: "",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Baishali Samanta",
      role: "President - Operations & Strategy",
      expertise: "",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Ritesh Khanna",
      role: "Human Resources Director",
      expertise: "",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Debasish Das",
      role: "Business Analytics",
      expertise: "",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Shanti Roy",
      role: "Backend Team Lead",
      expertise: "",
      image: "/assets/images/teams/user.svg",
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
    <main className="min-h-screen">
      <section className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Our Team
              </h1>
              <p className="text-gray-200 mt-4 max-w-xl leading-relaxed">
                We’re a group of fun-loving individuals, each with our own
                passions and goals, but united by a shared journey and mission.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3]">
                <Image
                  src="/assets/images/partners/ourTeamImg.svg"
                  alt="Our Team"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="space-y-16">
          {/* team section */}
          <section>
            <h2 className="text-3xl font-bold text-primary text-center">
              Our Leadership Team
            </h2>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-10">
              As we continue to evolve and innovate, our leadership team remains
              committed to delivering excellence, empowering businesses to
              thrive in the subscription economy. Join us on this exciting
              journey as we redefine the landscape of subscription management,
              one satisfied client at a time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group rounded-lg p-6 bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* avatar */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-base-300 shadow-sm flex items-center justify-center bg-base-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {member.expertise}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* benefits */}
          <section className="bg-base-200 rounded-lg p-10 space-y-8">
            <h2 className="text-3xl font-bold text-primary text-center">
              Why Join Our Team?
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Cutting-Edge Projects",
                  desc: "Work on innovative technology projects with leading enterprises",
                },
                {
                  title: "Growth Opportunities",
                  desc: "Continuous learning and professional development programs",
                },
                {
                  title: "Collaborative Culture",
                  desc: "Work with talented professionals in a supportive environment",
                },
                {
                  title: "Competitive Benefits",
                  desc: "Comprehensive compensation and benefits package",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-primary text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-4 py-8">
            <h2 className="text-2xl font-bold text-primary">
              Join Our Growing Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
              We&apos;re always looking for talented professionals to join us
            </p>

            <a
              href="/contact-us"
              className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:-translate-y-1 transition-all font-semibold"
            >
              View Open Positions
            </a>
          </section>
        </div>
      </Section>
    </main>
    </>
  );
}
