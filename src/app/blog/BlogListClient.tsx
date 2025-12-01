"use client";

import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

// Use a client-safe type (number for timestamp)
interface ClientBlogPost {
  id: string;
  title: string;
  slug: string;
  content: string; // Used for snippet
  imageUrl?: string | null;
  createdAt: number; // Unix timestamp in milliseconds
}

interface BlogListClientProps {
  posts: ClientBlogPost[];
}

// Helper to get a short snippet (first 200 characters)
const getSnippet = (content: string) => {
  const text = content.replace(/<[^>]+>/g, ""); // Basic HTML tag stripping
  return text.substring(0, 200) + (text.length > 200 ? "..." : "");
};

const BlogCard = ({ post }: { post: ClientBlogPost }) => {
  const dateString = format(new Date(post.createdAt), "MMMM d, yyyy");
  const snippet = getSnippet(post.content);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      {post.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <p className="text-sm text-blue-700 font-medium mb-1">{dateString}</p>
        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-3 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 line-clamp-3">{snippet}</p>
      </div>
    </Link>
  );
};

// --- Main List Component ---
const BlogListClient = ({ posts }: BlogListClientProps) => {
  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10 text-lg">
        No blog posts have been published yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogListClient;
