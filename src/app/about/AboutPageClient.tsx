"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const AboutPageClient = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Nav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="bg-zinc-50 pt-20">
        <main className="container mx-auto max-w-3xl px-6 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            About HappyYEG
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
                {/* You can replace this with a relevant image, maybe the logo or a generic happy hour pic */}
                <Image
                  src="/happy-logo.png"
                  alt="Happy YEG"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Cheers to Good Deals! 🍻
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At HappyYEG, we believe great times shouldn’t break the bank.
                Our mission is simple: to help you discover the best happy hour
                deals across Edmonton.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From cozy pubs to trendy cocktail bars, we round up the city’s
                top food and drink specials so you can make the most of every
                hour.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why We Do It
            </h3>
            <p className="text-gray-700 mb-4">
              Whether you’re planning after-work drinks, a night out with
              friends, or just exploring new spots, HappyYEG keeps you in the
              know, fresh, local, and always up to date.
            </p>
            <p className="text-xl font-medium text-blue-900 text-center mt-8">
              Cheers to good deals and even better vibes.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AboutPageClient;
