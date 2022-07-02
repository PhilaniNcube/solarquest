import React from "react";

const Productgrid = () => {
  return (
    <div className="max-w-7xl mx-auto mb-8">
      <div className="px-4">
        <hr className="w-full bg-gray-200" />

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 mt-4">
          <div className=" relative ">
            <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 "></div>
            <div className=" relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className="w-full"
                src="/images/Rebel-AQUAFLEX.png"
                alt="Rebel"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-red-600 md:mt-6 mt-4">
              Rebel Aquaflex
            </p>
            <p className=" font-semibold text-xl leading-5 text-red-600 mt-4">
              R16 050
            </p>
          </div>
          <div className=" relative">
            <div className=" bg-white bg-opacity-50 absolute top-0 right-0 px-2 py-1"></div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="/images/Rebel-EO-1-plus.png"
                alt="Rebel EO 1 Plus"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-red-600 md:mt-6 mt-4">
              Rebel EO 1+
            </p>
            <p className=" font-semibold text-xl leading-5 text-red-600 mt-4">
              R22 500
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="/images/Rebel-EO-MAX.png"
                alt="Rebel-EO-MAX"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>
            <p className=" font-normal text-xl leading-5 text-red-600 md:mt-6 mt-4">
              Rebel EO MAX
            </p>
            <p className=" font-semibold text-xl leading-5 text-red-600 mt-4">
              R18 500
            </p>
          </div>
          <div>
            <div className="relative group">
              <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
              <img
                className=" w-full"
                src="/images/Rebel-EOnew.png"
                alt="Rebel EO new"
              />
              <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                  Quick View
                </button>
              </div>
            </div>

            <p className=" font-normal text-xl leading-5 text-red-600 md:mt-6 mt-4">
              Rebel EO
            </p>
            <p className=" font-semibold text-xl leading-5 text-red-600 mt-4">
              R15 500
            </p>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Productgrid;
