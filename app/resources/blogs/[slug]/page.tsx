import ShareButton from '@/components/ShareButton';
import Link from 'next/link';
import Section from '@/components/Section';
import { blogService, BlogPost } from '@/app/lib/api/blog-service';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import type { Metadata } from 'next';

// Force dynamic rendering to ensure API calls are made on each request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString?: string): string {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

function getImageUrl(post: BlogPost): string {
  if (post.featuredImage) {
    return post.featuredImage;
  }
  return '/assets/images/trigital-icon.png';
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await blogService.getBlogBySlug(slug);
    
    const title = post.seoTitle || post.title || 'Blog Post';
    const description = post.seoDescription || post.excerpt || 'Read our latest blog post';
    const tags = post.tags || [];
    
    return {
      title: `${title} | Trigital Tech Blog`,
      description,
      keywords: tags.length > 0 ? tags.join(', ') : undefined,
      openGraph: {
        title,
        description,
        type: 'article',
        images: post.featuredImage ? [post.featuredImage] : [],
        tags: tags.length > 0 ? tags : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: post.featuredImage ? [post.featuredImage] : [],
      },
      other: tags.length > 0 ? {
        'article:tag': tags.join(', '),
      } : {},
    };
  } catch (error) {
    return {
      title: 'Post Not Found | Trigital Tech',
      description: 'The blog post you are looking for could not be found.',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  let post: BlogPost;
  let relatedPosts: BlogPost[] = [];
  
  try {
    post = await blogService.getBlogBySlug(slug);
    
    // Fetch related posts (excluding current post)
    try {
      const allPosts = await blogService.getAllBlogs();
      relatedPosts = allPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 3);
    } catch (err) {
      // If fetching related posts fails, just continue without them
      console.warn('Failed to fetch related posts:', err);
    }
  } catch (error) {
    // If the blog post is not found, show 404
    notFound();
  }

  // Construct the full URL for sharing
  const headersList = await headers();
  const host = headersList.get('host') || 'trigitaltech.com';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
  const shareUrl = `${baseUrl}/resources/blogs/${slug}`;

  // Render content - handle both HTML and plain text
  const renderContent = () => {
    if (!post.content) {
      return (
        <div className="text-gray-700 dark:text-gray-300 text-center py-8">
          <p>Content not available.</p>
        </div>
      );
    }

    // Check if content is HTML - more reliable detection
    const htmlTagPattern = /<\/?[a-z][\s\S]*>/i;
    const hasCommonTags = /<(p|h[1-6]|ul|ol|li|div|span|strong|em|a|img|br|hr)[\s>]/i.test(post.content);
    const isHTML = htmlTagPattern.test(post.content) || hasCommonTags || (post.content.includes('<') && post.content.includes('>'));

    if (isHTML) {
      return (
        <div
          className="blog-content max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      );
    }

    // Otherwise, treat as plain text/markdown-like
    return (
      <article className="prose prose-lg max-w-none leading-relaxed space-y-6 dark:prose-invert">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.trim() === '') return null;
          
          if (paragraph.startsWith('##')) {
            return (
              <h2
                key={index}
                className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-300 mt-12 mb-6 leading-tight"
              >
                {paragraph.replace(/^##\s*/, '')}
              </h2>
            );
          }
          if (paragraph.startsWith('###')) {
            return (
              <h3
                key={index}
                className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300 mt-8 mb-4 leading-tight"
              >
                {paragraph.replace(/^###\s*/, '')}
              </h3>
            );
          }
          if (paragraph.startsWith('-') || paragraph.startsWith('*')) {
            const items = paragraph
              .split('\n')
              .filter((item) => item.trim().startsWith('-') || item.trim().startsWith('*'));
            return (
              <ul key={index} className="list-disc list-outside space-y-3 text-gray-700 dark:text-gray-300 ml-6">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg leading-relaxed">
                    {item.replace(/^[-*]\s*/, '')}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={index} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </article>
    );
  };

  return (
    <>
      {/* Breadcrumb */}
      <Section className="border-b border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-7xl mx-auto ">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link
              href="/resources/blogs"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Blogs
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-700 dark:text-gray-300 line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </Section>

      {/* Article Header */}
      <Section className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent">
        <div className="mx-auto">
          {(post.category || post.readTime) && (
            <div className="mb-6 flex items-center gap-3 flex-wrap">
              {post.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {post.category}
                </span>
              )}
              {post.readTime && (
                <span className="text-sm text-gray-700 dark:text-gray-300">{post.readTime}</span>
              )}
            </div>
          )}
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300">
            {post.title}
          </h1>
          {(post.author || post.publishDate) && (
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-6">
              {post.author && (
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">{post.author}</p>
                  {post.publishDate && (
                    <p className="text-gray-700 dark:text-gray-300">{formatDate(post.publishDate)}</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </Section>

      {/* Featured Image */}
      {post.featuredImage && (
        <Section>
          <div className="mx-auto">
            <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src={getImageUrl(post)}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>
      )}

      {/* Article Content */}
      <Section>
        <div className="mx-auto max-w-4xl">
          {renderContent()}

          {/* Article Footer */}
          {(post.author || post.publishDate) && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {post.author && (
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">About the Author</p>
                    <p className="font-medium text-gray-700 dark:text-gray-300">{post.author}</p>
                  </div>
                )}
                <div className="flex gap-2">
                  <ShareButton
                    title={post.title}
                    url={shareUrl}
                    description={post.excerpt}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <Section className="bg-gray-50 dark:bg-slate-800">
          <h2 className="mb-12 text-3xl font-bold text-gray-700 dark:text-gray-300">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.slug}
                className="bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-lg hover:border-blue-500 transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center border-b border-gray-200 dark:border-gray-600 overflow-hidden">
                  {relatedPost.featuredImage ? (
                    <img
                      src={getImageUrl(relatedPost)}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-16 h-16 text-blue-600 dark:text-blue-400"
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
                <div className="p-6 flex flex-col">
                  {relatedPost.category && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-3">
                      {relatedPost.category}
                    </span>
                  )}
                  <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-2 line-clamp-2 text-xl">
                    {relatedPost.title}
                  </h3>
                  {relatedPost.excerpt && (
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4 flex-grow line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  )}
                  <Link
                    href={`/resources/blogs/${relatedPost.slug}`}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* Back to Blog CTA */}
      <Section className="text-center border-t border-gray-200 dark:border-gray-700">
        <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300">
          Explore More Articles
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Discover more insights and best practices from our blog.
        </p>
        <Link
          href="/resources/blogs"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Back to Blogs
        </Link>
      </Section>
    </>
  );
}

