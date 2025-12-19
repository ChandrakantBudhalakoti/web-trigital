import Section from "@/components/Section";
import {
  CalendarIcon,
  TagIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Blogs() {
  const blogPosts = [
    {
      title: "The Future of Cloud Computing",
      category: "Technology",
      date: "December 15, 2024",
      excerpt:
        "Exploring emerging trends and technologies shaping the cloud landscape",
    },
    {
      title: "Digital Transformation Success Stories",
      category: "Business",
      date: "December 10, 2024",
      excerpt: "How enterprises are successfully transforming their operations",
    },
    {
      title: "AI/ML Best Practices",
      category: "Technology",
      date: "December 5, 2024",
      excerpt:
        "Industry best practices for implementing artificial intelligence",
    },
    {
      title: "Subscription Economy Guide",
      category: "Business",
      date: "November 30, 2024",
      excerpt: "Building sustainable recurring revenue models",
    },
    {
      title: "Cybersecurity in 2024",
      category: "Security",
      date: "November 25, 2024",
      excerpt: "Essential security practices for modern enterprises",
    },
    {
      title: "Data Strategy Framework",
      category: "Technology",
      date: "November 20, 2024",
      excerpt: "Developing a data-driven organization",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <Section>
        <div className="space-y-20 py-16">
          {/* HEADER */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-extrabold text-primary tracking-tight">
              Blog
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Insights and best practices from our experts
            </p>
          </div>

          {/* BLOG GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="
                  bg-base-100 rounded-xl p-6 border border-base-300 
                  shadow-md hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-3 text-sm text-base-content/60 mb-3">
                  <TagIcon className="w-4 h-4 text-primary" />
                  <span>{post.category}</span>
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-2">
                  {post.title}
                </h3>

                <p className="text-base-content/70 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4">
                  <a
                    href="#"
                    className="
                      inline-flex items-center gap-1 text-primary font-medium
                      hover:text-secondary transition
                    "
                  >
                    Read More <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* NEWSLETTER
          <div className="text-center space-y-6 bg-base-300 rounded-xl p-10 border border-base-300">
            <h2 className="text-3xl font-bold text-primary">Stay Updated</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights and updates
            </p>

            <div className="max-w-lg mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  input input-bordered flex-1 rounded-xl
                  focus:outline-none focus:ring-2 ring-primary
                "
              />
              <button
                className="
                  btn btn-primary rounded-xl shadow-lg 
                  hover:shadow-xl transition
                "
              >
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </Section>
    </main>
  );
}
