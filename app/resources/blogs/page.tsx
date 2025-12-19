import Section from '@/components/Section';

export default function Blogs() {
  const blogPosts = [
    {
      title: 'The Future of Cloud Computing',
      category: 'Technology',
      date: 'December 15, 2024',
      excerpt: 'Exploring emerging trends and technologies shaping the cloud landscape',
    },
    {
      title: 'Digital Transformation Success Stories',
      category: 'Business',
      date: 'December 10, 2024',
      excerpt: 'How enterprises are successfully transforming their operations',
    },
    {
      title: 'AI/ML Best Practices',
      category: 'Technology',
      date: 'December 5, 2024',
      excerpt: 'Industry best practices for implementing artificial intelligence',
    },
    {
      title: 'Subscription Economy Guide',
      category: 'Business',
      date: 'November 30, 2024',
      excerpt: 'Building sustainable recurring revenue models',
    },
    {
      title: 'Cybersecurity in 2024',
      category: 'Security',
      date: 'November 25, 2024',
      excerpt: 'Essential security practices for modern enterprises',
    },
    {
      title: 'Data Strategy Framework',
      category: 'Technology',
      date: 'November 20, 2024',
      excerpt: 'Developing a data-driven organization',
    },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Blog</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Insights and best practices from our experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <article key={index} className="card bg-base-100 shadow hover:shadow-lg transition">
                <div className="card-body">
                  <div className="flex gap-2 mb-2">
                    <span className="badge badge-primary">{post.category}</span>
                    <span className="text-sm text-base-content/60">{post.date}</span>
                  </div>
                  <h3 className="card-title text-lg text-primary">{post.title}</h3>
                  <p className="text-base-content/70">{post.excerpt}</p>
                  <div className="card-actions justify-end mt-4">
                    <a href="#" className="btn btn-ghost btn-sm">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Stay Updated</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights and updates
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
