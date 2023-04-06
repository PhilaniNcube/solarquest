import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"
import { FunctionComponent } from "react";
import {
  RiArrowDropRightFill,
  RiBatteryChargeFill,
  RiLayoutGridFill,
  RiPlug2Fill,
  RiRadio2Fill,
  RiTabletFill,
} from "react-icons/ri";

const BusinessSolutions: FunctionComponent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pt-16">
        <div className="w-full py-12">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="xl:w-4/5 w-11/12 mx-auto mb-12">
              <h1 className="lg:text-4xl text-3xl text-center text-blue-600 mb-4 font-extrabold">
                Total Business Power Solutions
              </h1>
              <p className="text-xl text-center text-gray-600 font-normal">
                Stop contsant load shedding from impacting you business
                opertations and focus on your business.
              </p>
            </div>
            <div className="flex flex-wrap mb-12 justify-between sm:justify-center">
              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4">
                <div className="py-8 px-10 bg-white mx-3 shadow rounded-lg text-center">
                  <Image
                    height={500}
                    width={500}
                    src="/images/arco.png"
                    alt="image"
                    className="mx-auto mb-8"
                  />
                  <h4 className="text-2xl md:text-3xl text-blue-600 font-extrabold pb-1">
                    Rebel Duo
                  </h4>
                  <p className="text-sm text-gray-600 pb-8 font-bold">
                    Up to 6 - 8 hours of backup run time
                  </p>

                  <p className="text-base text-blue-600 font-bold mb-8 relative pl-3">
                    <span className="absolute -ml-3 mt-2">R</span>
                    <span className="text-4xl pr-2 font-normal">67 000</span>
                  </p>

                  <p className="text-sm text-gray-800 font-bold mb-8 relative pl-3">
                    <span className="absolute text-sm -ml-3 mt-2">R</span>
                    <span className="text-lg pr-2 font-normal">2299</span>
                    <span className="text-gray-600">per month</span>
                  </p>

                  <article className="flex flex-col border-b border-blue-300 mb-4">
                    <h3 className="text-2xl text-blue-600 font-bold">
                      Equipment
                    </h3>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiRadio2Fill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          x 1 Rebel 5.6kW Inverter
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiBatteryChargeFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          1 x Rebel L3 Lithium Battery (3.1kWh/48v Wall
                          Mountable)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiTabletFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          Protection kit, mounting & installation charges
                        </p>
                      </span>
                    </div>
                  </article>

                  <article className="flex flex-col border-b border-blue-300 mb-4">
                    <h3 className="text-2xl text-blue-600 font-bold">
                      What can you power?
                    </h3>

                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Up to 5 laptops
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Lighting for up to 5 Offices
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Internet
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          1 x Inkjet/ Lazer Jet Printer
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          CCTV and Alarm System
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          POS and Retail Machinery
                        </p>
                      </span>
                    </div>
                  </article>
                  <div className="flex justify-center">
                    <Link href="/contact">
                      <button className="bg-white hover:bg-blue-600 transition duration-150 ease-in-out hover:border-blue-700 hover:text-blue-100 rounded border border-blue-600 text-blue-600 px-8 py-3 text-sm">
                        Enquire
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4">
                <div className="py-8 px-10 bg-white mx-3 shadow rounded-lg text-center">
                  <Image
                    height={500}
                    width={500}
                    src="/images/arco.png"
                    alt="image"
                    className="mx-auto mb-8"
                  />
                  <h4 className="text-2xl md:text-3xl text-blue-600 font-extrabold pb-1">
                    Rebel Duo Plus
                  </h4>
                  <p className="text-sm text-gray-600 pb-8 font-bold">
                    Up to 6 - 8 hours of backup run time
                  </p>

                  <p className="text-base text-blue-600 font-bold mb-8 relative pl-3">
                    <span className="absolute -ml-3 mt-2">R</span>
                    <span className="text-4xl pr-2 font-normal">95 700</span>
                  </p>

                  <p className="text-sm text-gray-800 font-bold mb-8 relative pl-3">
                    <span className="absolute text-sm -ml-3 mt-2">R</span>
                    <span className="text-lg pr-2 font-normal">3399</span>
                    <span className="text-gray-600">per month</span>
                  </p>

                  <article className="flex flex-col border-b border-blue-300 mb-4">
                    <h3 className="text-2xl text-blue-600 font-bold">
                      Equipment
                    </h3>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiRadio2Fill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          x 1 Rebel 5.6kW Inverter
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiBatteryChargeFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          2 x Rebel L3 Lithium Battery (3.1kWh/48v Wall
                          Mountable)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiTabletFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          Protection kit, mounting & installation charges
                        </p>
                      </span>
                    </div>
                  </article>

                  <article className="flex flex-col border-b border-blue-300 mb-4">
                    <h3 className="text-2xl text-blue-600 font-bold">
                      What can you power?
                    </h3>

                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Up to 5 laptops
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Lighting for up to 5 Offices
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Internet
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          1 x Inkjet/ Lazer Jet Printer
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          1 x Photocopier
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          CCTV and Alarm System
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          POS and Retail Machinery
                        </p>
                      </span>
                    </div>
                  </article>
                  <div className="flex justify-center">
                    <Link href="/contact">
                      <button className="bg-white hover:bg-blue-600 transition duration-150 ease-in-out hover:border-blue-700 hover:text-blue-100 rounded border border-blue-600 text-blue-600 px-8 py-3 text-sm">
                        Enquire
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4">
                <div className="py-8 px-10 bg-white mx-3 shadow rounded-lg text-center">
                  <Image
                    height={500}
                    width={500}
                    src="/images/arco.png"
                    alt="image"
                    className="mx-auto mb-8"
                  />
                  <h4 className="text-2xl md:text-3xl text-blue-600 font-extrabold pb-1">
                    Rebel Pro
                  </h4>
                  <p className="text-sm text-gray-600 pb-8 font-bold">
                    Up to 6 - 8 hours of backup run time
                  </p>

                  <p className="text-base text-blue-600 font-bold mb-8 relative pl-3">
                    <span className="absolute -ml-3 mt-2">R</span>
                    <span className="text-4xl pr-2 font-normal">167 000</span>
                  </p>

                  <p className="text-sm text-gray-800 font-bold mb-8 relative pl-3">
                    <span className="absolute text-sm -ml-3 mt-2">R</span>
                    <span className="text-lg pr-2 font-normal">5499</span>
                    <span className="text-gray-600">per month</span>
                  </p>

                  <article className="flex flex-col border-b border-blue-300 mb-4">
                    <h3 className="text-2xl text-blue-600 font-bold">
                      Equipment
                    </h3>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiRadio2Fill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          x 1 Rebel 5.6kW Inverter
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiBatteryChargeFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          2 x Rebel L3 Lithium Battery (3.1kWh/48v Wall
                          Mountable)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiPlug2Fill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          12 x 400w Monocrystalline Tier 1 Solar Panels
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiTabletFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm w-[30ch] text-blue-700 font-medium">
                          Protection kit, mounting & installation charges
                        </p>
                      </span>
                    </div>
                  </article>

                  <article className="flex flex-col border-b border-blue-300 mb-4">
                    <h3 className="text-2xl text-blue-600 font-bold">
                      What can you power?
                    </h3>

                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Up to 5 laptops
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Lighting for up to 5 Offices
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Internet
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          Printer/Scanner
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          CCTV and Alarm System
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-2">
                        <RiArrowDropRightFill className="h-8 w-8 text-blue-700" />
                        <p className="text-sm text-left w-[30ch] text-blue-700 font-medium">
                          POS and Retail Machinery
                        </p>
                      </span>
                    </div>
                  </article>
                  <div className="flex justify-center">
                    <Link href="/contact">
                      <button className="bg-white hover:bg-blue-600 transition duration-150 ease-in-out hover:border-blue-700 hover:text-blue-100 rounded border border-blue-600 text-blue-600 px-8 py-3 text-sm">
                        Enquire
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default BusinessSolutions;
