import { Metadata } from "next";
import { getBlogPosts } from "../lib/firebaseAdmin";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "HappyYEG Blog | Edmontot Happy Hour Tips and Reviews",
  description:
    "Read the latest articles, tips, and revies on the best happy hour specials, food, and drink spots in Edmonton.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const serializedPosts = posts.map((post) => ({
    ...post,
    createdAt: post.createdAt.toMillis(),
  }));

  return (
    <>
      <Nav searchQuery="" onSearchChange={() => {}} />
      <main className="bg-zinc-50 pt-20 min-h-screen">
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-08 text-center">
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
