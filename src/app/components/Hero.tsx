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
          <h1 className="mt-6 text-2xl font-semibold leading-tight text-zinc-200">
            Your Ultimate Guide to the Best Happy Hour Deals in Edmonton
          </h1>
          <p>Go out, have fun, and save money without the hassle.</p>
        </div>
      </div>
      <div id="top" className="flex flex-col justify-center px-8 mt-24">
        <p className="mb-4 text-xl leading-tight text-gray-800">
          These days, it&apos;s getting harder to spend money going out when
          food and drink prices keep getting higher, but it doesn&apos;t have to
          mean you can&apos;t go out and celebrate without breaking the bank!
          Take advantage of happy hours to save money while still being able to
          go out.
        </p>
        <p className="mb-4 text-xl leading-tight text-gray-800">
          Don&apos;t know what the happy hour specials are in the restaurants in
          your area? Happy YEG has you covered! Here&apos;s a list of happy
          hours throughout the city of Edmonton. This list will grow as more
          research is done and more restaurants are discovered. I will try my
          best to keep things up to date as best as I can. Have a look, and I
          hope you find a great place close to you!
        </p>
      </div>
    </div>
  );
};

export default Hero;
