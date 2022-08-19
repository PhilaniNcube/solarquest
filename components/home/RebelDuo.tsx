import Image from "next/future/image";
import Link from "next/link";
import React from "react";

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
                  src="/images/rebel_duo.png"
                  alt="rebel Max"
                  className="h-full object-cover block"
                />
              </div>
              <div>
                <p className="lg:text-4xl md:text-3xl text-3xl text-red-600 font-semibold md:text-left">
                  Rebel Duo
                </p>

                <div className="flex items-center space-x-4 mt-3">
                  <svg
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    className="h-8 w-8 text-gray-600 fill-gray-600 object-cover"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m241 91.767h30v32.567h-30z" />
                      <path d="m241 387.666h30v32.567h-30z" />
                      <path d="m387.667 243.8h32.567v30h-32.567z" />
                      <path d="m91.767 243.8h32.567v30h-32.567z" />
                      <path
                        d="m344.333 136.384h32.567v30h-32.567z"
                        transform="matrix(.707 -.707 .707 .707 -1.424 299.33)"
                      />
                      <path
                        d="m135.1 345.617h32.567v30h-32.567z"
                        transform="matrix(.707 -.707 .707 .707 -210.655 212.667)"
                      />
                      <path
                        d="m343.637 346.313h30v32.567h-30z"
                        transform="matrix(.707 -.707 .707 .707 -151.352 359.796)"
                      />
                      <path
                        d="m134.404 137.079h30v32.568h-30z"
                        transform="matrix(.707 -.707 .707 .707 -64.685 150.559)"
                      />
                      <path d="m482 256c0 60.367-23.508 117.12-66.194 159.806s-99.439 66.194-159.806 66.194c-39.685 0-78.713-10.427-112.865-30.153-25.164-14.535-47.33-33.869-65.197-56.685h28.082v-30h-80.214v83.909h30v-33.538c19.967 25.01 44.53 46.236 72.325 62.291 38.706 22.359 82.923 34.176 127.869 34.176 68.38 0 132.667-26.629 181.02-74.98 48.351-48.353 74.98-112.64 74.98-181.02z" />
                      <path d="m96.194 96.194c42.686-42.686 99.439-66.194 159.806-66.194 67.463 0 130.271 29.644 172.977 80.504l-28.9-.01-.01 30 81.104.027v-80.156h-30v29.925c-48.351-57.058-119.148-90.29-195.171-90.29-68.38 0-132.667 26.629-181.02 74.98-48.351 48.353-74.98 112.64-74.98 181.02h30c0-60.367 23.508-117.12 66.194-159.806z" />
                      <path d="m297.188 273.8h48.898v-30h-48.898c-4.429-12.123-14.065-21.759-26.188-26.188v-64.249h-30v64.249c-16.804 6.139-28.833 22.284-28.833 41.188 0 5.629 1.078 11.007 3.02 15.956l-42.37 42.369 21.213 21.213 41.037-41.036c6.224 3.397 13.357 5.331 20.934 5.331 18.902 0 35.048-12.029 41.187-28.833zm-41.188-1.167c-7.627 0-13.833-6.205-13.833-13.833s6.206-13.833 13.833-13.833 13.833 6.205 13.833 13.833-6.206 13.833-13.833 13.833z" />
                    </g>
                  </svg>
                  <p className="text-lg text-gray-600 font-bold">
                    8 - 10 Hours of backup power
                  </p>
                </div>
                <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left">
                  We have the solution to your{" "}
                  <span className="text-black font-bold">Load shedding</span>{" "}
                  woes. Free yourself from the unpredicatble Eskom electricity
                  supply. The{" "}
                  <span className="font-bold text-red-600">Rebel Duo</span> is a
                  great solution for you.
                </p>
                <p className="text-base text-gray-600 max-w-[624px] w-full mt-2 md:text-left">
                 Keep your devices powered up. No need to stop your favourite streaming services because you will have enough electricity.
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
