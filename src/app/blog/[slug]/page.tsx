import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";

import { getBlogPostBySlug, getBlogPosts } from "@/app/lib/firebaseAdmin";
import Footer from "@/app/components/Footer";

// --- Generate dynamic SEO Metadata ---
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found.",
      description: "This blog post could not be found.",
    };
  }

  // Use a snippet of the content for the description
  const contentSnippet =
    post.content.replace(/<[^>]+>/g, "").substring(0, 160) + "...";

  return {
    title: `${post.title} | HappyYEG Blog`,
    description: contentSnippet,
  };
}

// --- Generate static paths for pre-rendering ---
export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const revalidate = 3600;

// ----- Page Content -----
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const dateString = format(post.createdAt.toDate(), "MMMM d, yyyy");

  return (
    <>
      <main className="bg-zinc-50 pt-20 min-h-screen">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          {/* Back to Blog Button */}
          <Link
            href="/blog"
            className="flex items-center text-blue-700 hover:text-blue-800 transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Posts
          </Link>

          <article className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="text-sm text-gray-500 mb-8 border-b pb-4">
              Published on {dateString}
            </div>

            {/* Featured Image */}
            {post.imageUrl && (
              <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={post.imageUrl}
                  alt={`Featured image for ${post.title}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}

            {/* Content using dangerouslySetInnerHTML */}
            <div
              className="prose max-w-none text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
