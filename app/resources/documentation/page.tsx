import Section from "@/components/Section";
import {
  BookOpenIcon,
  CodeBracketIcon,
  LinkIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  VideoCameraIcon,
  UsersIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

type DocSectionKey =
  | "Getting Started"
  | "API Reference"
  | "Integration Guides"
  | "Deployment"
  | "Security"
  | "Troubleshooting";

const docSections: { title: DocSectionKey; icon: any }[] = [
  { title: "Getting Started", icon: BookOpenIcon },
  { title: "API Reference", icon: CodeBracketIcon },
  { title: "Integration Guides", icon: LinkIcon },
  { title: "Deployment", icon: CloudArrowUpIcon },
  { title: "Security", icon: ShieldCheckIcon },
  { title: "Troubleshooting", icon: WrenchScrewdriverIcon },
];

const docDataMap: Record<DocSectionKey, string[]> = {
  "Getting Started": ["Installation Guide", "Configuration", "First Steps"],
  "API Reference": ["Authentication", "Endpoints", "Webhooks", "SDK Reference"],
  "Integration Guides": [
    "Salesforce Integration",
    "SAP Integration",
    "Custom APIs",
  ],
  Deployment: ["Cloud Deployment", "On-Premise Setup", "Hybrid Models"],
  Security: ["Authentication", "Data Protection", "Compliance"],
  Troubleshooting: ["FAQ", "Error Codes", "Performance Tuning"],
};

export default function Documentation() {
  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <Section>
        <div className="space-y-24 py-16">
          {/* HERO */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-black tracking-tight text-primary">
              Documentation
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Explore our guides, tutorials, and API documentation.
            </p>
          </div>

          {/* DOC GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="
                  rounded-xl p-8 bg-white/5 border border-white/10
                  backdrop-blur-xl shadow-[0_0_15px_-4px_rgba(0,0,0,.5)]
                  hover:bg-white/10 hover:shadow-[0_0_25px_-2px_rgba(0,0,0,.6)]
                  hover:-translate-y-1 transition-all duration-300
                "
              >
                <Icon className="w-10 h-10 text-blue-400" />

                <h3 className="text-xl font-bold text-blue-300 mt-4">
                  {title}
                </h3>

                <div className="space-y-2 mt-6">
                  {docDataMap[title].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="flex items-center gap-1 text-sm text-primary hover:text-secondary transition"
                    >
                      ↳ {link}
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* HELP SECTION */}
          <div
            className="
              bg-white/5 border border-white/10 rounded-2xl p-12 
              backdrop-blur-xl shadow-xl space-y-10
            "
          >
            <h2 className="text-3xl font-bold text-center text-primary">
              Need Help?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="
                  rounded-xl bg-white/5 border border-white/10 p-6
                  shadow-md hover:shadow-xl hover:-translate-y-1 transition-all
                "
              >
                <VideoCameraIcon className="w-8 h-8 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300 mt-3">
                  Video Tutorials
                </h3>
                <p className="text-white/70 mt-2">
                  Step-by-step tutorials for faster learning.
                </p>
                <a href="#" className="btn btn-outline btn-primary mt-4">
                  Watch Videos
                </a>
              </div>

              <div
                className="
                  rounded-xl bg-white/5 border border-white/10 p-6
                  shadow-md hover:shadow-xl hover:-translate-y-1 transition-all
                "
              >
                <UsersIcon className="w-8 h-8 text-blue-400" />
                <h3 className="text-lg font-bold text-blue-300 mt-3">
                  Community Forum
                </h3>
                <p className="text-white/70 mt-2">
                  Ask questions and collaborate with developers.
                </p>
                <a href="#" className="btn btn-outline btn-primary mt-4">
                  Join Forum
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Can’t find what you're looking for?
            </h2>

            <div className="flex gap-6 justify-center flex-wrap pt-2">
              <a
                href="/contact-us"
                className="
                  px-10 py-3 rounded-full text-white bg-blue-600 
                  
                  hover:bg-blue-500 hover:-translate-y-1 
                  transition-all duration-300 font-semibold
                "
              >
                Contact Support
              </a>

              <a
                href="/resources/blogs"
                className="
                  px-10 py-3 rounded-full border border-white/30 text-white 
                  hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 
                  transition-all duration-300
                "
              >
                Read Blog Posts
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
