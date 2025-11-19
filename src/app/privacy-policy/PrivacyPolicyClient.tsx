"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const PrivacyPolicyClient = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Nav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="bg-zinc-50 pt-20">
        <main className="container mx-auto max-w-3xl px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Privacy Policy for HappyYEG
          </h1>

          <p className="mb-4">
            At HappyYEG, accessible from https://happyyeg.com, one of our top
            priorities is the privacy of our visitors. This Privacy Policy
            outlines the types of information that may be collected and how we
            use it.
          </p>
          <p className="mb-4">
            If you have any questions or need more information, feel free to
            contact us at any time.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Log Files
          </h2>
          <p className="mb-4">
            HappyYEG follows standard procedures for using log files. These
            files may log visitors when they access the site. Information
            collected may include IP addresses, browser type, Internet Service
            Provider (ISP), date and time stamp, referring/exit pages, and
            potentially the number of clicks. This information is not linked to
            any personally identifiable data and is used for site performance
            monitoring and analytics.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Cookies and Web Beacons
          </h2>
          <p className="mb-4">
            Like most websites, HappyYEG uses cookies to improve user
            experience. These cookies store information such as visitor
            preferences and the pages visited. This helps us customize content
            and enhance usability based on browser type and other information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Google AdSense and DART Cookies
          </h2>
          <p className="mb-4">
            We use Google AdSense to serve ads. Google uses DART cookies to
            deliver personalized advertisements based on your visit to
            https://happyyeg.com and other sites on the internet. You may opt
            out of the use of DART cookies by visiting the Google Ads Privacy
            Policy at:{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Our Advertising Partners
          </h2>
          <p className="mb-4">
            Some advertisers on our site may use cookies and web beacons. Each
            advertising partner has its own Privacy Policy regarding user data.
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 space-y-1">
            <li>
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Contact Form
          </h2>
          <p className="mb-4">
            If you choose to contact us through our contact form, you will be
            asked to provide your name and email address. We collect this
            information solely for the purpose of responding to your inquiry.
            Your personal information will not be stored for marketing purposes,
            sold, or shared with any third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Firebase Hosting
          </h2>
          <p className="mb-4">
            Our website is hosted on Firebase (a service by Google). Firebase
            may collect technical information such as IP addresses and browser
            types for security, reliability, and performance monitoring. We do
            not use this information to identify or track individual users.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Consent
          </h2>
          <p className="mb-4">
            By using our website, you consent to this Privacy Policy and agree
            to its terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy occasionally. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyClient;
