import Image from "next/future/image";

const Team = () => {
  return (
    <section id="team">
      <div className="max-w-7xl flex justify-center mx-auto py-6 px-4">
        <div>

          <h1 className="xl:text-4xl text-3xl text-center text-red-600 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind Solarquest
          </h1>
        </div>
      </div>
      <div className="w-full px-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10">
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <Image
                  width={400}
                  height={400}
                  src="/images/jangez.jpg"
                  alt="team member"
                  className="h-[330px] w-full overflow-hidden object-cover rounded shadow aspect-square"
                />
              </div>
              <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                <p className="text-xl text-center text-red-600 font-normal mb-1">
                  Jangez Gangat
                </p>
                <p className="text-center text-base text-gray-600">Founder</p>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <Image
                  width={400}
                  height={400}
                  src="/images/nyasha.jpg"
                  alt="team member"
                  className="h-[330px] w-full overflow-hidden object-cover rounded shadow aspect-square"
                />
              </div>
              <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                <p className="text-xl text-center text-red-600 font-normal mb-1">
                  Nyasha Bamhare
                </p>
                <p className="text-center text-base text-gray-600">
                  Chief Executive Officer
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <Image
                  width={400}
                  height={400}
                  src="/images/elaine.jpg"
                  alt="team member"
                  className="h-[330px] w-full overflow-hidden object-cover rounded shadow aspect-square"
                />
              </div>
              <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                <p className="text-xl text-center text-red-600 font-normal mb-1">
                  Elain Peters
                </p>
                <p className="text-center text-base text-gray-600">
                  Chief Financial Officer
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10">
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <Image
                  width={400}
                  height={400}
                  src="/images/brian.jpg"
                  alt="team member"
                  className="h-[330px] w-full overflow-hidden object-cover rounded shadow aspect-square"
                />
              </div>
              <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                <p className="text-xl text-center text-red-600 font-normal mb-1">
                  Brian Makundi
                </p>
                <p className="text-center text-base text-gray-600">
                  Chief Operating Officer
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <Image
                  width={400}
                  height={400}
                  src="/images/maria.jpg"
                  alt="team member"
                  className="h-[330px] w-full overflow-hidden object-cover rounded shadow aspect-square"
                />
              </div>
              <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                <p className="text-xl text-center text-red-600 font-normal mb-1">
                  Maria Gangat
                </p>
                <p className="text-center text-base text-gray-600">Founder</p>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <Image
                  width={400}
                  height={400}
                  src="/images/mutsa.jpg"
                  alt="team member"
                  className="h-[330px] w-full overflow-hidden object-cover rounded shadow aspect-square"
                />
              </div>
              <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                <p className="text-xl text-center text-red-600 font-normal mb-1">
                  Mutsa Madzima
                </p>
                <p className="text-center text-base text-gray-600">
                  General Manager
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-1/2 py-10 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <Image
                  width={400}
                  height={400}
                  src="/images/taylor.jpg"
                  alt="team member"
                  className="h-[330px] w-full overflow-hidden object-cover rounded shadow aspect-square"
                />
              </div>
              <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                <p className="text-xl text-center text-red-600 font-normal mb-1">
                  Taylor Bradley
                </p>
                <p className="text-center text-base text-gray-600">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
