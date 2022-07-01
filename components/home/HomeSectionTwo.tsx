import { FunctionComponent } from "react";

const HomeSectionTwo: FunctionComponent = () => {



  return (
          <section>
              <div className="">
                <div className="h-full pb-24">
                    <div className="bg-yellow-600 flex flex-col items-center justify-center py-16 md:py-20 lg:py-40 px-4 md:px-0">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-10 text-center text-white">Our premade plans for solar installations</h1>
                        <p className="text-lg font-medium leading-normal text-center text-white mt-4">These packages are preconfigured for some typical instalations</p>

                    </div>
                    <div role="list" aria-label="Packages" className="bg-transparent max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6  -mt-10 md:-mt-16 lg:-mt-20 md:px-28 lg:px-0">
                        <div role="listitem" className="px-10 pt-10 pb-6 bg-white rounded shadow-lg">
                            <h1 className="text-2xl font-medium leading-normal text-gray-600">Lite</h1>
                            <p className="font-semibold text-gray-800 mt-7 md:mt-8">
                                {" "}
                                <span className="text-5xl ">R19 000</span>
                            </p>
                            <p className="text-base leading-normal text-gray-600 mt-6">For small households with few appliances</p>
                            <div role="list" aria-label="Facilities" className="mt-6 md:mt-8">
                                <div role="listitem" className="flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="#a16207" />
                                        <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-600">Solar Panels</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="#a16207" />
                                        <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-600">Inverter</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="#a16207" />
                                        <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-600">Installation</p>
                                </div>
                            </div>
                            <div className="mt-10 md:mt-28 md:pt-2">
                                <button className="flex w-full items-center justify-center border rounded border-yellow-700 text-base font-medium text-yellow-700 py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 hover:bg-yellow-700 hover:text-white ">Enquire</button>
                            </div>
                        </div>
                        <div role="listitem" className="px-10 pt-10 pb-6 bg-yellow-700 rounded shadow-md">
                            <h1 className="text-2xl font-medium leading-normal text-white">Standard</h1>
                            <p className="font-semibold text-white mt-7 md:mt-8">
                                {" "}
                                <span className="text-5xl ">R22 000</span>
                            </p>
                            <p className="text-base leading-normal text-white mt-6">For a medium sized household</p>
                            <div role="list" aria-label="Facilities" className="mt-6 md:mt-8">
                                <div role="listitem" className="flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="white" />
                                        <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#a16207" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-white">Solar Panels</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="white" />
                                        <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#a16207" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-white">Inverters x2</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="white" />
                                        <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#a16207" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-white">Installation</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="white" />
                                        <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#a16207" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-white">Connection to Grid</p>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-20">
                                <button className="flex w-full items-center justify-center rounded bg-white text-base font-medium text-yellow-700 py-4 mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-700 focus:ring-white hover:bg-yellow-600 hover:text-white ">Enquire</button>
                            </div>
                        </div>
                        <div role="listitem" className="px-10 pt-10 pb-6 bg-white rounded shadow-md">
                            <h1 className="text-2xl font-medium leading-normal text-gray-600">Premium</h1>
                            <p className="font-semibold text-gray-800 mt-7 md:mt-8">
                                {" "}
                                <span className="text-5xl ">R34 000</span>
                            </p>
                            <p className="text-base leading-normal text-gray-600 mt-6">For large households</p>
                            <div role="list" aria-label="Facilities" className="mt-6 md:mt-8">
                                <div role="listitem" className="flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="#a16207" />
                                        <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-600">Solar panels</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="#a16207" />
                                        <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-600">Inverters x2</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="#a16207" />
                                        <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-600">Installation</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="#a16207" />
                                        <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-600">Grid Connection</p>
                                </div>
                                <div role="listitem" className="mt-6 flex items-center space-x-4">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={8} cy={8} r={8} fill="#a16207" />
                                        <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-600">Can run heavy users like a stove</p>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-10">
                                <button className="flex w-full items-center justify-center border rounded border-yellow-700 text-base font-medium text-yellow-700 py-4 mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 hover:bg-yellow-700 hover:text-white ">Enquire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
};
export default HomeSectionTwo;
