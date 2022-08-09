import Image from "next/future/image";
import Link from "next/link";
import React from "react";

function RebelDuo() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-12">
          <div className=" md:max-w-7xl shadow max-w-[375px] mx-auto bg-white lg:px-10 md:px-6 px-4 py-12">
            <div className="md:flex justify-around gap-8 items-center">
              <div className="flex justify-center">
                <Image
                width={800}
                height={1314}
                quality={100}
                  src="/images/Rebel-EO-MAX.png"
                  alt="rebel Max"
                  className="w-44 object-cover block"
                />
              </div>
              <div>
                <p className="lg:text-4xl md:text-3xl text-3xl text-red-600 font-semibold md:text-left">
                  Rebel Max
                </p>
                <small className="text-sm text-black mt-2">Hybrid Inverter</small>
                <div className="flex items-center space-x-4 mt-3">
                  <Image width={512} height={512} src="/images/timer.png" alt="timer" className="h-8 w-8" />
                  <p className="text-lg text-gray-600 font-bold">3 - 5 Hours Backup </p>
                </div>
                <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left">
                  We have the solution to your <span className="text-black font-bold">Load shedding</span> woes. Free yourself from the unpredicatble Eskom electricity supply. The <span className="font-bold text-red-600">Rebel Max</span> is a great solution for you.
                </p>
                <Link href="/contact" passHref>
                  <button className="bg-red-600 text-base font-medium rounded-full lg:max-w-[205px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden blocl">
                    Get in touch
                  </button>
                </Link>
              </div>
            </div>
            <Link href="/contact" passHref>
              <button className="bg-red-600 text-base font-medium rounded-full w-full px-3 py-2 text-white mt-6 hover:bg-gray-700 transition duration-300 ease-in-out lg:hidden md:block hidden">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RebelDuo;
