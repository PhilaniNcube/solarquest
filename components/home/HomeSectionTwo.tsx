import Image from "next/future/image";
import { FunctionComponent } from "react";
import { RiArrowDropRightFill, RiBatteryChargeFill, RiLayoutGridFill, RiRadio2Fill, RiTabletFill } from "react-icons/ri";

const HomeSectionTwo: FunctionComponent = () => {



  return (
    <section>
      <div className="pt-16">
        <div className="w-full bg-red-50 py-12">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="xl:w-4/5 w-11/12 mx-auto mb-12">
              <h1 className="lg:text-4xl text-3xl text-center text-red-600 mb-4 font-extrabold">
                Total Home Power Solutions
              </h1>
              <p className="text-xl text-center text-gray-600 font-normal">
                Our systems are designed to alleviate and remove the burdens
                placed by continuous power cuts, rising energy costs and lost
                revenue from inefficient power suppliers.
              </p>
            </div>
            <div className="flex flex-wrap mb-12 justify-between sm:justify-center">
              <div className="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4">
                <div className="py-8 px-10 bg-white mx-3 shadow rounded-lg text-center">
                  <Image
                  height={500}
                  width={500}
                    src="/images/arco.png"
                    alt="image"
                    className="mx-auto mb-8"
                  />
                  <h4 className="text-2xl md:text-3xl text-red-600 font-extrabold pb-1">
                    Ultimate Duo
                  </h4>
                  <p className="text-sm text-gray-600 pb-8 font-bold">
                    Up to 6 - 8 hours of backup run time
                  </p>

                  <p className="text-base text-red-600 font-bold mb-8 relative pl-3">
                    <span className="absolute -ml-3 mt-2">R</span>
                    <span className="text-4xl pr-2 font-normal">67 000</span>
                  </p>

                  <p className="text-sm text-gray-800 font-bold mb-8 relative pl-3">
                    <span className="absolute text-xs -ml-3 mt-2">R</span>
                    <span className="text-lg pr-2 font-normal">1894</span>
                    <span className="text-gray-600">per month</span>
                  </p>

                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      Equipment
                    </h3>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiRadio2Fill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 1 Hybrid Inverter (Phocos Any-Grid 5kw)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiBatteryChargeFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 1 Lithium Battery (Arco Invincible III 3.1kWh/ 48v
                          Wall Mountable)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiTabletFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 1 Voltage Switcher (Sollatek AVS30)
                        </p>
                      </span>
                    </div>
                  </article>
                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      Installation
                    </h3>
                    <p className="text-sm text-center text-gray-600 font-bold">
                      Labour, Electrical Integration and Balance of System
                    </p>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Battery Disconnector
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          AC Combiner Box
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Cables And Cable Management
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Labour and Electrical Integration
                        </p>
                      </span>
                    </div>
                  </article>
                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      What can you power?
                    </h3>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Power 2 x LED TVs
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Wi-Fi and Entertainment
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          20-30 x 5W LED lights
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          350W Energy Efficient Upright Fridge
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          CCTV and Charging Home Security System
                        </p>
                      </span>
                    </div>
                  </article>
                  <div className="flex justify-center">
                    <button className="bg-white hover:bg-red-600 transition duration-150 ease-in-out hover:border-red-700 hover:text-red-100 rounded border border-red-600 text-red-600 px-8 py-3 text-sm">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4">
                <div className="py-8 px-10 bg-white mx-3 shadow rounded-lg text-center">
                  <Image
                  height={500}
                  width={500}
                    src="/images/arco.png"
                    alt="image"
                    className="mx-auto mb-8"
                  />
                  <h4 className="text-2xl md:text-3xl text-red-600 font-extrabold pb-1">
                    Ultimate Duo Plus
                  </h4>
                  <p className="text-sm text-gray-600 pb-8 font-bold">
                    Up to 10 - 12 hours of backup run time
                  </p>

                  <p className="text-base text-red-600 font-bold mb-8 relative pl-3">
                    <span className="absolute -ml-3 mt-2">R</span>
                    <span className="text-4xl pr-2 font-normal">95 700</span>
                  </p>

                  <p className="text-sm text-gray-800 font-bold mb-8 relative pl-3">
                    <span className="absolute text-xs -ml-3 mt-2">R</span>
                    <span className="text-lg pr-2 font-normal">2694</span>
                    <span className="text-gray-600">per month</span>
                  </p>

                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      Equipment
                    </h3>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiRadio2Fill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 1 Hybrid Inverter (Phocos Any-Grid 5kw)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiBatteryChargeFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 2 Lithium Battery (Arco Invincible III 3.1kWh/ 48v
                          Wall Mountable)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiTabletFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 1 Voltage Switcher (Sollatek AVS30)
                        </p>
                      </span>
                    </div>
                  </article>
                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      Installation
                    </h3>
                    <p className="text-sm text-center text-gray-600 font-bold">
                      Labour, Electrical Integration and Balance of System
                    </p>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Battery Disconnector
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          AC Combiner Box
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Cables And Cable Management
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Certificate Of Compliance
                        </p>
                      </span>
                    </div>
                  </article>
                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      What can you power?
                    </h3>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Power 2 x LED TVs
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Wi-Fi and Entertainment
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          30-40 x 5W LED lights
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Energy Efficient Deep Freezer
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          350W Energy Efficient Upright Fridge
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          CCTV and Charging Home Security System
                        </p>
                      </span>
                    </div>
                  </article>
                  <div className="flex justify-center">
                    <button className="bg-white hover:bg-red-600 transition duration-150 ease-in-out hover:border-red-700 hover:text-red-100 rounded border border-red-600 text-red-600 px-8 py-3 text-sm">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4">
                <div className="py-8 px-10 bg-white mx-3 shadow rounded-lg text-center">
                  <Image
                  height={500}
                  width={500}
                    src="/images/arco.png"
                    alt="image"
                    className="mx-auto mb-8"
                  />
                  <h4 className="text-2xl md:text-3xl text-red-600 font-extrabold pb-1">
                    Solar Pro
                  </h4>
                  <p className="text-sm text-gray-600 pb-8 font-bold">
                    Up to 12 - 20 hours of backup run time
                  </p>

                  <p className="text-base text-red-600 font-bold mb-8 relative pl-3">
                    <span className="absolute -ml-3 mt-2">R</span>
                    <span className="text-4xl pr-2 font-normal">167 000</span>
                  </p>

                  <p className="text-sm text-gray-800 font-bold mb-8 relative pl-3">
                    <span className="absolute text-xs -ml-3 mt-2">R</span>
                    <span className="text-lg pr-2 font-normal">4528</span>
                    <span className="text-gray-600">per month</span>
                  </p>

                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      Equipment
                    </h3>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiRadio2Fill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 1 Hybrid Inverter (Phocos Any-Grid 5kw)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiBatteryChargeFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 2 Lithium Battery (Arco Invincible III 3.1kWh/ 48v
                          Wall Mountable)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiTabletFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 1 Voltage Switcher (Sollatek AVS30)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiLayoutGridFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          12 x 400w Monocrystalline Tier 1 Solar Panels
                        </p>
                      </span>
                    </div>
                  </article>
                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      Installation
                    </h3>
                    <p className="text-sm text-center text-gray-600 font-bold">
                      Labour, Electrical Integration and Balance of System
                    </p>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Battery Disconnector
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          AC Combiner Box
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          DC Combiner Box
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Solar Panels Roof Mounting Kit For 12 x Panels
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Cables And Cable Management
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Certificate Of Compliance
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Labour and Electrical Integration
                        </p>
                      </span>
                    </div>
                  </article>
                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      What can you power?
                    </h3>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Power 2 x LED TVs
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Wi-Fi and Entertainment
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          40-50 x 5W LED lights
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          1 x Washing Machine (run during the day 12-3pm)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          1 x Dish Washing Machine (run during the day 12-3pm)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          1 x Iron (run during the day 12-3pm)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          350W Energy Efficient Upright Fridge
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Energy Efficient Deep Freezer
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          CCTV and Charging Home Security System
                        </p>
                      </span>
                    </div>
                  </article>
                  <div className="flex justify-center">
                    <button className="bg-white hover:bg-red-600 transition duration-150 ease-in-out hover:border-red-700 hover:text-red-100 rounded border border-red-600 text-red-600 px-8 py-3 text-sm">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4">
                <div className="py-8 px-10 bg-white mx-3 shadow rounded-lg text-center">
                  <Image
                  height={500}
                  width={500}
                    src="/images/arco.png"
                    alt="image"
                    className="mx-auto mb-8"
                  />
                  <h4 className="text-2xl md:text-3xl text-red-600 font-extrabold pb-1">
                    Solar Pro Max
                  </h4>
                  <p className="text-sm text-gray-600 pb-8 font-bold">
                    Up to 18 - 24 hours of backup run time
                  </p>

                  <p className="text-base text-red-600 font-bold mb-8 relative pl-3">
                    <span className="absolute -ml-3 mt-2">R</span>
                    <span className="text-4xl pr-2 font-normal">289 000</span>
                  </p>

                  <p className="text-sm text-gray-800 font-bold mb-8 relative pl-3">
                    <span className="absolute text-xs -ml-3 mt-2">R</span>
                    <span className="text-lg pr-2 font-normal">8046</span>
                    <span className="text-gray-600">per month</span>
                  </p>

                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      Equipment
                    </h3>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiRadio2Fill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 2 Hybrid Inverter (Phocos Any-Grid 5kw)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiBatteryChargeFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 4 Lithium Battery (Arco Invincible III 3.1kWh/ 48v
                          Wall Mountable)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiTabletFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          x 2 Voltage Switcher (Sollatek AVS30)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiLayoutGridFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs w-[30ch] text-red-500 font-medium">
                          24 x 400w Monocrystalline Tier 1 Solar Panels
                        </p>
                      </span>
                    </div>
                  </article>
                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      Installation
                    </h3>
                    <p className="text-sm text-center text-gray-600 font-bold">
                      Labour, Electrical Integration and Balance of System
                    </p>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Battery Disconnector
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          AC Combiner Box
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          DC Combiner Box
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Solar Panels Roof Mounting Kit For 24 x Panels
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Cables And Cable Management
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Certificate Of Compliance
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Labour and Electrical Integration
                        </p>
                      </span>
                    </div>
                  </article>
                  <article className="flex flex-col border-b border-red-300 mb-4">
                    <h3 className="text-2xl text-red-600 font-bold">
                      What can you power?
                    </h3>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Power 2 x LED TVs
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Wi-Fi and Entertainment
                        </p>
                      </span>
                    </div>

                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          40-50 x 5W LED lights
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          1 x Washing Machine (run during the day 12-3pm)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          1 x Dish Washing Machine (run during the day 12-3pm)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          1 x Iron (run during the day 12-3pm)
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          350W Energy Efficient Upright Fridge
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          Energy Efficient Deep Freezer
                        </p>
                      </span>
                    </div>
                    <div>
                      <span className="flex items-center space-x-3 py-4">
                        <RiArrowDropRightFill className="h-8 w-8 text-red-500" />
                        <p className="text-xs text-left w-[30ch] text-red-500 font-medium">
                          CCTV and Charging Home Security System
                        </p>
                      </span>
                    </div>
                  </article>
                  <div className="flex justify-center">
                    <button className="bg-white hover:bg-red-600 transition duration-150 ease-in-out hover:border-red-700 hover:text-red-100 rounded border border-red-600 text-red-600 px-8 py-3 text-sm">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSectionTwo;
