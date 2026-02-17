import Section from "@/components/Section";
import Link from "next/link";
import { blogService, BlogPost } from "@/app/lib/api/blog-service";

export const metadata = {
  title: "Blogs | Trigital Tech - Digital Commerce Insights",
  description:
    "Explore articles, guides, and insights on digital commerce, e-enablement, and business growth strategies.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

function getImageUrl(post: BlogPost): string {
  if (post.featuredImage) {
    return post.featuredImage;
  }
  return "/assets/images/trigital-icon.png";
}

export default async function BlogsPage() {
  let blogs: BlogPost[] = [];
  let error: string | null = null;

  try {
    blogs = await blogService.getAllBlogs();
  } catch (err) {
    console.error("Error fetching blogs:", err);
    error = err instanceof Error ? err.message : "Failed to load blogs";
  }

  const featuredPost = blogs.length > 1 ? blogs[0] : null;
  const otherPosts = blogs.length > 1 ? blogs.slice(1) : blogs;

  return (
    <>
      {/* Page Title */}
      <Section>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-gray-300 mb-4">
            Blogs & Insights
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore articles, guides, and insights on digital commerce, e-enablement, and business growth strategies.
          </p>
        </div>
      </Section>

      {/* Error State */}
      {error && (
        <Section>
          <div className="max-w-2xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-red-600 shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-red-800">Failed to load blogs. Please try again later.</span>
            </div>
          </div>
        </Section>
      )}

      {/* Featured Post */}
      {featuredPost && !error && (
        <Section>
          <article className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="flex items-center justify-center p-8 sm:p-12 bg-gradient-to-br from-blue-100 to-indigo-100">
                {featuredPost.featuredImage ? (
                  <img
                    src={getImageUrl(featuredPost)}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-32 h-32 bg-blue-200 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                {featuredPost.category && (
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {featuredPost.category}
                    </span>
                    {featuredPost.readTime && (
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {featuredPost.readTime}
                      </span>
                    )}
                  </div>
                )}
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300">
                  {featuredPost.title}
                </h2>
                {featuredPost.excerpt && (
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  {featuredPost.author && (
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {featuredPost.author}
                      </p>
                      {featuredPost.publishDate && (
                        <p className="text-gray-700 dark:text-gray-300">
                          {formatDate(featuredPost.publishDate)}
                        </p>
                      )}
                    </div>
                  )}
                  <Link
                    href={`/resources/blogs/${featuredPost.slug}`}
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </Section>
      )}

      {/* Blog Posts Grid */}
      <Section className="bg-white dark:bg-slate-800">
        <h2 className="mb-12 text-3xl font-bold text-gray-700 dark:text-gray-300 text-center">
          Latest Articles
        </h2>

        {/* Empty State */}
        {blogs.length === 0 && !error && (
          <div className="text-center py-12">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 dark:text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              No blog posts available at the moment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Check back soon for new articles!
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {otherPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts
              .filter((post) => post && post.slug && post.title)
              .map((post) => {
                return (
                  <article
                    key={post.slug}
                    className="bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-lg hover:border-blue-500 transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-blue-500"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center border-b border-gray-200 dark:border-gray-600 overflow-hidden">
                      {post.featuredImage ? (
                        <img
                          src={getImageUrl(post)}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg
                          className="w-20 h-20 text-blue-600 dark:text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        {post.category && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {post.category}
                          </span>
                        )}
                        {post.readTime && (
                          <span className="text-xs text-gray-700 dark:text-gray-300">
                            {post.readTime}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-3 line-clamp-2 text-xl">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                      {(post.author || post.publishDate) && (
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-600 flex items-center justify-between">
                          <div className="text-xs text-gray-700 dark:text-gray-300">
                            {post.author && (
                              <p className="font-medium text-gray-700 dark:text-gray-300">
                                {post.author}
                              </p>
                            )}
                            {post.publishDate && (
                              <p className="text-gray-700 dark:text-gray-300">
                                {formatDate(post.publishDate)}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                      <Link
                        href={`/resources/blogs/${post.slug}`}
                        className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                );
              })}
          </div>
        )}
      </Section>
    </>
  );
}
