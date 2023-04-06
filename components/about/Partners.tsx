import React from "react";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="md:py-12 py-8 px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-red-600">
            Our Trusted Partners
          </h1>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="flex justify-around items-center flex-wrap  mx-auto gap-6 w-full">
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/arco.jpg"
                width={688}
                height={321}
                alt="Arco"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/jinko.jpg"
                width={688}
                height={321}
                alt="Jinko"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/lorenz.jpg"
                width={688}
                height={321}
                alt="Lorenz"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/victron.jpg"
                width={688}
                height={321}
                alt="Victron Energy"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/troj.jpg"
                width={688}
                height={321}
                alt="Trojan Battery Company"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/rebel.jpg"
                width={688}
                height={321}
                alt="Rebel"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/phocos.jpg"
                width={688}
                height={321}
                alt="Phocos"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/trina.jpg"
                width={688}
                height={321}
                alt="Trina Solar"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <Image
                src="/images/solar.jpg"
                width={688}
                height={321}
                alt="Solarcom"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
