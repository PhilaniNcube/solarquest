import Image from "next/future/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const Hero : FunctionComponent = () => {
  return (
    <header className="px-4">
      <div className="max-w-7xl mx-auto h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="h-full w-full flex flex-col items-start justify-center p-8">
          <h1 className="text-3xl md:text-5xl font-semibold text-red-600">
            How does life without Load Shedding Sound?
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-slate-700 mt-3 font-medium">
            With more than enough backup power, with our packages you will always have electricity even if <span className="text-blue-600 font-bold">Eskom</span> dosen't!
          </p>

          <Link href="/contact">
            <a className="px-8 py-2 rounded-full bg-red-600 mt-4 text-white text-xl">Learn more</a>
          </Link>
        </div>
        <div className="w-full py-24 h-full">
          <Image src="/images/home_roof.jpg" alt="roof" width={1159} height={1500} priority quality={100}  className="rounded-lg h-[80%] my-auto w-10/12 mx-auto object-cover shadow-lg shadow-gray-800/40" />
        </div>
      </div>
    </header>
  );
};
export default Hero;
