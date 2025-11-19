import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div
        className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-20 relative overflow-hidden rounded-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-main.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        {/* Content */}
        <div className="text-center relative z-10 px-4">
          <div className="flex items-center justify-center space-x-4">
            <Image
              src="/happy-logo.png"
              alt="Happy YEG Logo"
              width={300}
              height={300}
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="mt-6 text-2xl sm:text-3xl font-semibold leading-tight text-zinc-100 drop-shadow-md">
            Your Ultimate Guide to the Best Happy Hour Deals in Edmonton
          </h1>
          <p className="mt-4 text-lg text-zinc-200 drop-shadow-sm">
            Go out, have fun, and save money without the hassle.
          </p>
          <div className="mt-8">
            <Link
              href="/#location"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Find a Deal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
