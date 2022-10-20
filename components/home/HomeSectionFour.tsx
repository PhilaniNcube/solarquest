

export default function HomeSectionFour() {
  return (
    <section>
      <div className="relative h-full px-4 py-4">
        <div className="max-w-7xl mx-auto container py-16 ">
          <div>
            <div className="flex items-left flex-col px-4">
              <span className="focus:text-gray-800 focus:underline hover:text-gray-800 focus:outline-none text-gray-800">
                <h3 className="text-4xl lg:text-5xl font-extrabold text-left leading-tight lg:w-7/12 md:w-9/12 pt-4">
                  Considering an off grid solar system?
                </h3>
              </span>
              <p className="text-md text-left mt-14 text-gray-800 leading-normal lg:w-7/12 md:w-9/12">
                A lot of things need to be taken into consideration when you are
                lookin at installing a completely Off Grid Solar System. With
                our experience in installing thousands of systems we have the
                knowledge to give you the best possible advice.
              </p>
            </div>
            <div className="mt-20 flex flex-wrap justify-between px-4">
              <div className="flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <span className="focus:text-gray-800 focus:underline hover:text-gray-800 focus:outline-none text-gray-800">
                    <h4 className="text-2xl font-bold leading-tight">
                      Household Size
                    </h4>
                  </span>
                  <p className="text-base text-gray-800 leading-normal pt-2">
                    You will need to measure the amount of electricity that your
                    home is likely to consume during a peak 24 hour period so
                    that we can design a solution that meets those needs.
                  </p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <span className="focus:text-gray-800 focus:underline hover:text-gray-800 focus:outline-none text-gray-800">
                    <h4 className="text-2xl font-bold leading-tight">
                      Solar Panel Location
                    </h4>
                  </span>
                  <p className="text-base text-gray-800 leading-normal pt-2">
                    For your panels to work in the most efficient manner, they
                    need to be positioned in such a way that they are able to
                    collect UV radiation for as many hours as possible during
                    the day.
                  </p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <span className="focus:text-gray-800 focus:underline hover:text-gray-800 focus:outline-none text-gray-800">
                    <h4 className="text-2xl font-bold leading-tight">
                      Battery Storage
                    </h4>
                  </span>
                  <p className="text-base text-gray-800 leading-normal pt-2">
                    In order to be completely Off The Grid, you need to ensure
                    that your battery storage is enough to store all the energy
                    you will need to use while the sun is not producing
                    electricity.
                  </p>
                </div>
              </div>
              <div className="flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <span className="focus:text-gray-800 focus:underline hover:text-gray-800 focus:outline-none text-gray-800">
                    <h4 className="text-2xl font-bold leading-tight">
                      Local Legislation
                    </h4>
                  </span>
                  <p className="text-base text-gray-800 leading-normal pt-2">
                    There may be different laws governing the amount of
                    electricity you may generate your your off grid solar
                    installation. You will have to take into consideration if
                    you want to still be connected to the Electricity Grid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-20">
          <img
            className="invisible md:visible lg:w-auto lg:h-auto w-48 h-48"
            src="https://i.ibb.co/0V7KqPk/Group-1.png"
            alt="Group-1"
          />
        </div>
      </div>
    </section>
  );
}
