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
    </div>
  );
};

export default Hero;
