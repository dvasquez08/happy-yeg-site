import { Metadata } from "next";
import { getBlogPosts } from "@/app/lib/firebaseAdmin";
import BlogNav from "./BlogNav";
import Footer from "@/app/components/Footer";
import BlogListClient from "./BlogListClient"; // Component we create next

export const metadata: Metadata = {
  title: "HappyYEG Blog | Edmonton Happy Hour Tips & Reviews",
  description:
    "Read the latest articles, tips, and reviews on the best happy hour specials, food, and drink spots in Edmonton (YEG).",
};

// Next.js will pre-render this page and re-fetch data every hour
export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Convert Firestore Timestamp to a serializable number for the client component
  const serializedPosts = posts.map((post) => ({
    ...post,
    createdAt: post.createdAt.toMillis(),
  }));

  return (
    <>
      <BlogNav />
      <main className="bg-zinc-50 pt-20 min-h-screen">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Happy Hour Blog
          </h1>
          <p className="text-xl text-center text-gray-600 mb-10">
            Your source for Edmonton happy hour tips, reviews, and featured
            spots.
          </p>

          <BlogListClient posts={serializedPosts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
