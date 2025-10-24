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
              width={400}
              height={400}
            />
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Your ultimate guide to the best happy hour deals across Edmonton. Go
            out, have fun, and save money without the hassle.
          </p>
        </div>
      </div>
      <div id="top" className="flex flex-col justify-center px-8 mt-8">
        <p className="mb-4 ">
          These days, it&apos;s getting harder to spend money going out when
          food prices keep getting higher, but it doesn&apos;t mean you
          can&apos;t go out and celebrate without breaking the bank! Take
          advantage of happy hours to save money while still being able to go
          out.
        </p>
        <p className="mb-4 ">
          Don&apos;t know what the happy hour specials are in the restaurants in
          your area? Don&apos;t sweat, that&apos;s what this site is for!
          Here&apos;s a list of happy hours throughout the city of Edmonton.
          This list will grow as more research is done and more restaurants are
          discovered. I will update as things change and will also be adding
          daily specials soon as some of these places have some really good
          ones. Have a look, and I hope you find a great place close to you!
        </p>
        <p className="">
          I&apos;ll try to keep everything as up to date as I can, but if
          there&apos;s something needs updating, or if you&apos;d like to let me
          know about a restaurant that should be on the list let me know! Send
          me a message through the contact form in the menu. If there&apos;s a
          restaurant you want to look for, try a search in the search bar, also
          in the menu.
        </p>
      </div>
    </div>
  );
};

export default Hero;
