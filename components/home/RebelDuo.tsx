import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import analytics from "../../utils/analytics";

function RebelDuo() {
  return (
    <>
      <div className="">
        <div className="px-4 py-12">
          <div className=" md:max-w-7xl shadow max-w-[375px] mx-auto bg-gray-100 lg:px-10 md:px-6 px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <Image
                  width={1200}
                  height={1200}
                  quality={100}
                  src="https://sjvyommxrwhabvkjpwpn.supabase.co/storage/v1/object/public/products/ultimate_duo.png"
                  alt="rebel Max"
                  className="h-full object-cover block"
                />
              </div>
              <div>
                <p className="lg:text-4xl md:text-3xl text-3xl text-red-600 font-semibold md:text-left">
                  Ultimate Duo
                </p>

                <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left">
                  The perfect solution for apartments and small homes where
                  space is limited and roof space is not available for adding
                  solar panels.
                </p>
                <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left">
                  This system is designed to power essential items like
                  lighting, televisions, security systems and internet
                  connectivity up to full Stage 4 Load Shedding.
                </p>
                <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left">
                  As a <strong>modular system</strong>, it's also the perfect entry
                  point where you can add additional batteries and solar panels
                  over time.
                </p>

                <Link href="/contact" passHref>
                  <button onClick={() => analytics.track("Goal - 1") }
                          className="bg-red-600 text-base font-medium rounded-full lg:max-w-[205px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden blocl">
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
