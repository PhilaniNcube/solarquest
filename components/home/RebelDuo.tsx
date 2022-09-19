import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import analytics from "../../utils/analytics";

function RebelDuo() {
  return (
    <>
      <div className="">
        <div className="px-4 py-12">
          <div className=" md:max-w-7xl relative shadow max-w-[375px] mx-auto bg-gray-100 lg:px-10 md:px-6 px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <Image
                  width={1200}
                  height={1200}
                  quality={100}
                  src="https://sjvyommxrwhabvkjpwpn.supabase.co/storage/v1/object/public/products/solar_pro.png"
                  alt="rebel Max"
                  className="h-full object-cover block"
                />
              </div>
              <div className="">
                <p className="lg:text-4xl md:text-3xl text-3xl text-red-600 font-semibold md:text-left">
                  Super Summer Sale
                </p>
                <p className="text-2xl text-gray-600 font-semibold md:text-left">
                  Solar Pro
                </p>

                <p className="text-xl font-bold text-gray-600 line-through">
                  R167 000
                </p>
                <p className="text-2xl absolute -top-10 shadow-xl shadow-gray-800 right-[60%] mt-4  font-bold rounded-full text-center flex flex-col justify-center items-center h-36  w-36 text-white bg-red-600">
                  <small className="text-sm font-light">Now</small>
                  <span>R149 995</span>
                </p>

                <Link href="/contact" passHref>
                  <button
                    onClick={() => analytics.track("Goal - 1")}
                    className="bg-red-600 text-base font-medium rounded-full lg:max-w-[205px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden blocl"
                  >
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
