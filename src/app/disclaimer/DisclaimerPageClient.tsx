"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const DisclaimerPageClient = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Nav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="bg-zinc-50 pt-20">
        <main className="container mx-auto max-w-3xl px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Disclaimer for HappyYEG
          </h1>
          <p className="mb-4 text-gray-600">
            <strong>Last updated:</strong> October 24, 2025
          </p>

          <p className="mb-4">
            The information provided by HappyYEG on https://happyyeg.com (the
            &quot;Site&quot;) is for general informational purposes only.
          </p>
          <p className="mb-4">
            Restaurant hours, prices, and happy hour specials are subject to
            change frequently and without notice. While we make every effort to
            ensure the accuracy and reliability of the information, we make no
            warranties or guarantees about the completeness, accuracy, or
            suitability of the information provided.
          </p>
          <p className="mb-4">
            HappyYEG is not responsible for any losses or damages in connection
            with the use of our content. Any action you take based on the
            information from this site is solely at your own risk.
          </p>
          <p className="mb-4">
            <strong>
              We strongly recommend contacting the restaurant directly to
              confirm current hours and specials before visiting.
            </strong>
          </p>
          <p className="mb-4">
            The inclusion of any restaurant on the Site does not constitute an
            endorsement or affiliation. We are not responsible for the services,
            quality, or conduct of any third-party establishment listed.
          </p>
          <p className="mb-4">
            By using our website, you hereby consent to this disclaimer and
            agree to its terms.
          </p>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default DisclaimerPageClient;
