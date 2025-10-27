import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div
        className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-20 relative overflow-hidden rounded-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-main.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="text-center relative z-10">
          <div className="flex items-center justify-center space-x-4">
            <Image
              src="/happy-logo.png"
              alt="Happy YEG Logo"
              width={300}
              height={300}
            />
          </div>
          <h1 className="mt-6 text-2xl font-semibold leading-tight text-zinc-200">
            Your Ultimate Guide to the Best Happy Hour Deals in Edmonton
          </h1>
          <p>Go out, have fun, and save money without the hassle.</p>
        </div>
      </div>
      {/* Welcome Text  */}
      <div id="top" className="flex flex-col justify-center px-8 mt-4">
        <h2 className="text-3xl flex items-center justify-center mt-16 py-4">
          Welcome!
        </h2>
        <p className="mb-4 text-xl leading-tight text-gray-800">
          These days, it&apos;s getting harder to spend money going out when
          food and drink prices keep getting higher, but it doesn&apos;t have to
          mean you can&apos;t go out and celebrate without breaking the bank!
          Take advantage of happy hours specials to save money while still being
          able to go out and enjoy a nice night out.
        </p>
        <p className="mb-4 text-xl leading-tight text-gray-800">
          Don&apos;t know what the happy hour specials are in the restaurants in
          your area? Happy YEG has you covered! Here&apos;s a list of happy
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
      {/* Explaination text on how the site works. */}
      <div className="flex flex-col justify-center px-8 mt-1">
        <h2 className="text-3xl flex items-center justify-center mt-16 py-4">
          How This Site Works
        </h2>
        <p className="mb-4 text-xl leading-tight text-gray-800">
          I&apos;ll give you the rundown on how this site works. First, you will
          see the Location Selector below. There, you can filter restaurants,
          bars, and pubs based on which side of hte city you searching in.
          Whether you&apos;re visiting someone on the South side, stopping by
          somewhere on the Norht side on your way home, or you&apos;re sticking
          around downtown after work. This can help you narrow down your search
          criteria. There&apos;s also a search bar in the nav bar if you&apos;re
          looking for somewhere in particular.
        </p>
        <p className="mb-4 text-xl leading-tight text-gray-800">
          Once you found a restaurnat, or a pub you&apos;re interested in, go
          ahead and select it and you will see all the daily food specials,
          drink specials, and business information such as their address and
          their business hours.
        </p>
      </div>
      {/* Promise to the city */}
      <div className="flex flex-col justify-center px-8 mt-1">
        <h2 className="text-3xl flex items-center justify-center mt-16 py-4">
          My Promise
        </h2>
        <p className="mb-4 text-xl leading-tight text-gray-800">
          As I mentioned earlier, I will try my best to keep everything as up to
          date as much as possible, but if you do see something that needs
          updating, want to suggest a restaurant, or you couldn&apos;t find a
          place that you&apos;re looking for and would like me to adding it,
          feel free to reach out, and I&apos;ll do my best to update the list to
          help everyone out as much as possible.
        </p>
        <p className="mb-4 text-xl leading-tight text-gray-800">
          I&apos;ll update this as often as I can, so keep checking to see if
          there&apos;s something that comes up that peaks your interest. Enjoy a
          well deserved drink, please do so responsibly, and stay happy
          Edmonton!
        </p>
      </div>
    </div>
  );
};

export default Hero;
