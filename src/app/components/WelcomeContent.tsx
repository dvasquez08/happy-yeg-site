"use client";

const WelcomeContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* --- Section 1: Welcome --- */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome!</h2>
        <div>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            These days, it is getting harder to spend money going out when food
            and drink prices keep getting higher, but that should not mean you
            should hold back on going out, or celebrating an event without
            breaking the bank! Take advantage of happy hour specials to save
            money while still being able to go out and enjoy a nice night out.
          </p>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            Not sure about what the happy hour specials are in the restaurants
            in your area? Happy YEG has you covered! Here is a list of happy
            hours throughout the city of Edmonton. This list will grow as more
            research is done and more restaurants are discovered. I will try my
            best to keep things up to date as best as I can. Have a look, and I
            hope you find a great place close to you!
          </p>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            If there is something that needs updating, or if you would like to
            let me know about a restaurant that should be on the list, let me
            know! Send me a message through the contact form in the menu. If
            there is a restaurant you want to look for, try a search in the
            search bar, also in the menu.
          </p>
        </div>
      </div>

      {/* --- Section 2: How This Site Works --- */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          How This Site Works
        </h2>
        <div>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            Here is a rundown on how this site works. First, you will see the
            Location Selector below. There, you can filter restaurants, bars,
            and pubs based on which side of the city you are searching in.
            Whether visiting someone on the South side, stopping by somewhere on
            the North side on your way home, or maybe sticking around downtown
            after work. This can help you narrow down your search criteria.
            There is also a search bar in the navigation bar at the top if you
            are looking for somewhere in particular.
          </p>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            Once you found a restaurant, or a pub you are interested in, go
            ahead and select it and you will see all the daily food specials,
            drink specials, and business information such as their address and
            their business hours.
          </p>
        </div>
      </div>

      {/* --- Section 3: Updates --- */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Updates</h2>
        <div>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            As I mentioned earlier, I will try my best to keep everything as up
            to date as much as possible, but if you do see something that needs
            updating, want to suggest a restaurant, or you did not find a place
            that you were looking for and would like me to add it, feel free to
            reach out. I will do my best to update the list to help everyone out
            as much as possible.
          </p>
          <p className="mb-4 text-xl leading-tight text-gray-800">
            I will update this as often as I can, so keep checking to see if
            there is something that comes up that piques your interest. Enjoy a
            well deserved drink, please do so responsibly, and stay happy
            Edmonton!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContent;
