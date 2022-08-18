import Image from "next/future/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const Hero : FunctionComponent = () => {
  return (
    <header className="">
      <div className="max-h-screen overflow-hidden relative">
        <Image
          width={1500}
          height={690}
          className="h-full w-full opacity-30 blur object-right object-cover"
          quality={80}
          alt="background"
          priority={true}
          src="/images/family-house.jpg"
        />
        <div className="absolute inset-0 z-30 px-4">
          <div className="max-w-7xl mx-auto px-6 md:px-4 h-full">
            <div className="h-full w-full flex flex-col py-3 md:py-16 justify-center">

              <h1 className="text-xl md:text-3xl font-serif font-bold lg:text-6xl text-red-600 tracking-wide">
                Don't get caught <br/>in the dark!
              </h1>
              <p className="text-xl md:text2xl font-extrabold mt-2">Our packages ensure that <br /> will be a thing of the past.</p>

              <Link href="/contact" passHref>
                <button className="max-w-[200px] hidden md:block mt-3 border rounded-full bg-red-600 text-red-50 font-bold hover:text-white uppercase text-lg py-3 transition-all duration-300">
                  Lets Talk
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
