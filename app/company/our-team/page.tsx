import Image from "next/image";
import Section from "@/components/Section";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      expertise: "Digital Transformation",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      expertise: "Cloud Architecture",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Michael Chen",
      role: "VP Product",
      expertise: "Product Strategy",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Emily Davis",
      role: "VP Sales",
      expertise: "Enterprise Solutions",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Alex Rodriguez",
      role: "VP Engineering",
      expertise: "Software Development",
      image: "/assets/images/teams/user.svg",
    },
    {
      name: "Lisa Anderson",
      role: "VP Customer Success",
      expertise: "Client Relations",
      image: "/assets/images/teams/user.svg",
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-16">
          {/* heading */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold text-primary">Our Team</h1>
            <p className="text-lg text-base-content/70">
              Expert professionals dedicated to your success
            </p>
          </div>

          {/* team section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">
              Leadership Team
            </h2>

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
                      <h3 className="text-lg font-bold text-base-content">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {member.role}
                      </p>
                      <p className="text-sm text-base-content/60">
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
                  <p className="text-sm text-base-content/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-4 py-8">
            <h2 className="text-2xl font-bold text-primary">
              Join Our Growing Team
            </h2>
            <p className="text-base-content/70 max-w-xl mx-auto">
              We're always looking for talented professionals to join us
            </p>

            <a
              href="/contact-us"
              className="px-10 py-3 rounded-xl border border-primary text-primary text-lg
                  hover:bg-primary hover:text-white hover:-translate-y-1 transition-all font-semibold"
            >
              View Open Positions
            </a>
          </section>
        </div>
      </Section>
    </main>
  );
}
