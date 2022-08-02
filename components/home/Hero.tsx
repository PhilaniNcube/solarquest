import Image from "next/future/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const Hero : FunctionComponent = () => {
  return (
    <header className="bg-slate-500">
      <div className="max-h-screen overflow-hidden relative">
        <Image
          width={1920}
          height={1080}
          className="h-full object-cover"
          alt="background"
          src="/images/solar_landscape.jpg"
        />
        <div className="absolute inset-0 z-30 px-4 bg-slate-600/80">
          <div className="max-w-7xl mx-auto px-6 md:px-4 h-full">
            <div className="h-full w-full flex flex-col py-8 md:py-16 justify-center">
              <p className="text-white uppercase text-sm md:text-md">
                Human Innovation
              </p>
              <h1 className="text-2xl md:text-3xl font-serif font-bold lg:text-6xl text-white tracking-wide">
                Limitless power <br /> from the sun
              </h1>

              <Link href="/contact" passHref>
                <button className="max-w-[200px] mt-3 border rounded-full border-white bg-white hover:bg-red-600 hover:border-red-600 text-red-500 font-bold hover:text-white uppercase text-lg py-3 transition-all duration-300">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
