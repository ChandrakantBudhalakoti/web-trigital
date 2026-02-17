
export interface BlogPost {
    slug: string;
    title: string;
    excerpt?: string;
    content?: string;
    author?: string;
    publishDate?: string;
    featuredImage?: string;
    category?: string;
    readTime?: string;
    seoTitle?: string;
    seoDescription?: string;
    tags?: string[];
    [key: string]: any;
}

interface ApiBlogResponse {
    status: number;
    data: ApiBlogItem | ApiBlogItem[];
}

interface ApiBlogItem {
    _id: string;
    title: string;
    content: string;
    media?: Array<{
        type: string;
        value: string;
        _id?: string;
    }>;
    meta?: {
        extraDetails?: {
            slug?: string;
            excerpt?: string;
            author?: string;
            publishDate?: string;
            seoTitle?: string;
            seoDescription?: string;
            tags?: string[];
        };
        [key: string]: any;
    };
    [key: string]: any;
}

class BlogService {
    private baseUrl: string;
    private encryptedKey: string;

    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_BLOG_API_BASE_URL || 'https://dev.app.nipige.com';
        this.encryptedKey = process.env.NEXT_PUBLIC_BLOG_API_ENCRYPTED_KEY || '6953cd86745c6d41b94fc7ff';
    }

    private transformApiBlogToBlogPost(apiBlog: ApiBlogItem): BlogPost {
        const extraDetails = apiBlog.meta?.extraDetails || {};

        const featuredImage = apiBlog.media?.find(m => m.type === 'IMAGE')?.value;

        const blogPost: BlogPost = {
            slug: extraDetails.slug || apiBlog._id,
            title: apiBlog.title,
            excerpt: extraDetails.excerpt,
            content: apiBlog.content,
            author: extraDetails.author,
            publishDate: extraDetails.publishDate,
            featuredImage: featuredImage,
            seoTitle: extraDetails.seoTitle,
            seoDescription: extraDetails.seoDescription,
            tags: extraDetails.tags || [],
        };

        const { title, content, _id, ...rest } = apiBlog;
        return {
            ...blogPost,
            ...rest,
        };
    }

    async getAllBlogs(): Promise<BlogPost[]> {
        try {
            const url = `${this.baseUrl}/social/post/list`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-encrypted-key': this.encryptedKey,
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
            }

            const apiResponse: ApiBlogResponse = await response.json();

            if (apiResponse.status !== 1) {
                console.warn('API returned non-success status:', apiResponse.status);
                return [];
            }

            if (!apiResponse.data) {
                console.warn('API response missing data field');
                return [];
            }

            const blogs = Array.isArray(apiResponse.data)
                ? apiResponse.data
                : [apiResponse.data];

            const transformedBlogs = blogs.map(blog => this.transformApiBlogToBlogPost(blog));

            return transformedBlogs;
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error;
        }
    }

    async getBlogBySlug(slug: string): Promise<BlogPost> {
        try {
            const url = `${this.baseUrl}/social/post/details/${slug}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-encrypted-key': this.encryptedKey,
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
            });

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Blog post not found');
                }
                throw new Error(`Failed to fetch blog: ${response.status} ${response.statusText}`);
            }

            const apiResponse: ApiBlogResponse = await response.json();

            if (apiResponse.status !== 1) {
                throw new Error(`API returned non-success status: ${apiResponse.status}`);
            }

            if (!apiResponse.data) {
                throw new Error('API response missing data field');
            }

            const apiBlog = Array.isArray(apiResponse.data)
                ? apiResponse.data[0]
                : apiResponse.data as ApiBlogItem;

            const transformedBlog = this.transformApiBlogToBlogPost(apiBlog);

            return transformedBlog;
        } catch (error) {
            console.error('Error fetching blog by slug:', error);
            throw error;
        }
    }
}

export const blogService = new BlogService();

