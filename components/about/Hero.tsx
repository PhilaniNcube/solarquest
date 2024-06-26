import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-slate-500 px-4">
      <div className="max-h-screen overflow-hidden relative">
        <Image
          width={1920}
          height={1080}
          className="h-full object-cover"
          alt="background"
          src="/images/solar_landscape.jpg"
        />
        <div className="absolute inset-0 z-30 px-4 bg-slate-600/80">
          <div className="max-w-7xl mx-auto py-12 h-full flex flex-col justify-center">
            <h1 className="text-white font-bold text-2xl md:text-5xl">
              Our Experience is your guarantee
            </h1>
            <p className="text-white text-md md:text-lg max-w-[50ch] mt-3">
              We provide the technology. As solar providers, we deliver the top
              technology in the industry. For systems, needs, and projects of
              all sizes on and beyond the grid.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

