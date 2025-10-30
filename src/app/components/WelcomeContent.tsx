"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const WelcomeContent = () => {
  // State to track which section is open. 'welcome' is open by default.
  const [openSection, setOpenSection] = useState<string | null>("welcome");

  // Toggles the clicked section. If it's already open, it closes it.
  const handleToggle = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    // Wrapper to control max width and center the content
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* --- Section 1: Welcome --- */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => handleToggle("welcome")}
          className="w-full flex justify-between items-center py-4"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Welcome!</h2>
          <ChevronDown
            className={`text-blue-700 transition-transform duration-300 ${
              openSection === "welcome" ? "rotate-180" : ""
            }`}
            size={28}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openSection === "welcome" ? "max-h-[1000px] pb-4" : "max-h-0"
          }`}
        >
          <p className="mb-4 text-xl leading-tight text-gray-800">
            These days, it&apos;s getting harder to spend money going out when
            food and drink prices keep getting higher, but it doesn&apos;t have
            to mean you can&apos;t go out and celebrate without breaking the
            bank! Take advantage of happy hours specials to save money while
            still being able to go out and enjoy a nice night out.
          </p>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            Don&apos;t know what the happy hour specials are in the restaurants
            in your area? Happy YEG has you covered! Here&apos;s a list of happy
            hours throughout the city of Edmonton. This list will grow as more
            research is done and more restaurants are discovered. I will try my
            best to keep things up to date as best as I can. Have a look, and I
            hope you find a great place close to you!
          </p>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            If there&apos;s something that needs updating, or if you&apos;d like
            to let me know about a restaurant that should be on the list let me
            know! Send me a message through the contact form in the menu. If
            there&apos;s a restaurant you want to look for, try a search in the
            search bar, also in the menu.
          </p>
        </div>
      </div>

      {/* --- Section 2: How This Site Works --- */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => handleToggle("how")}
          className="w-full flex justify-between items-center py-4"
        >
          <h2 className="text-3xl font-semibold text-gray-800">
            How This Site Works
          </h2>
          <ChevronDown
            className={`text-blue-700 transition-transform duration-300 ${
              openSection === "how" ? "rotate-180" : ""
            }`}
            size={28}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openSection === "how" ? "max-h-[1000px] pb-4" : "max-h-0"
          }`}
        >
          <p className="mb-4 text-xl leading-tight text-gray-800">
            I&apos;ll give you the rundown on how this site works. First, you
            will see the Location Selector below. There, you can filter
            restaurants, bars, and pubs based on which side of hte city you
            searching in. Whether you&apos;re visiting someone on the South
            side, stopping by somewhere on the Norht side on your way home, or
            you&apos;re sticking around downtown after work. This can help you
            narrow down your search criteria. There&apos;s also a search bar in
            the nav bar if you&apos;re looking for somewhere in particular.
          </p>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            Once you found a restaurnat, or a pub you&apos;re interested in, go
            ahead and select it and you will see all the daily food specials,
            drink specials, and business information such as their address and
            their business hours.
          </p>
        </div>
      </div>

      {/* --- Section 3: Updates --- */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => handleToggle("promise")}
          className="w-full flex justify-between items-center py-4"
        >
          <h2 className="text-3xl font-semibold text-gray-800">Updates</h2>
          <ChevronDown
            className={`text-blue-700 transition-transform duration-300 ${
              openSection === "promise" ? "rotate-180" : ""
            }`}
            size={28}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openSection === "promise" ? "max-h-[1000px] pb-4" : "max-h-0"
          }`}
        >
          <p className="mb-4 text-xl leading-tight text-gray-800">
            As I mentioned earlier, I will try my best to keep everything as up
            to date as much as possible, but if you do see something that needs
            updating, want to suggest a restaurant, or you couldn&apos;t find a
            place that you&apos;re looking for and would like me to adding it,
            feel free to reach out, and I&apos;ll do my best to update the list
            to help everyone out as much as possible.
          </p>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            I&apos;ll update this as often as I can, so keep checking to see if
            there&apos;s something that comes up that peaks your interest. Enjoy
            a well deserved drink, please do so responsibly, and stay happy
            Edmonton!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContent;
