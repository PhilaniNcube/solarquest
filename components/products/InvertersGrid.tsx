import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import getInverters from "../../fetchers/inverters";

const InvertersGrid = () => {

  const {isLoading, isSuccess, data} = useQuery({
    queryKey: ["inverters"],
    queryFn: getInverters,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          {isLoading ? (
            <p>Loading...</p>
          ) : isSuccess ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6">
              {data.map((inverter) => (
                <div key={inverter.id} className="w-full flex">
                  <Image
                    src={inverter.image}
                    alt={inverter.name}
                    height={1500}
                    width={800}
                    className="w-44 object-cover"
                  />
                  <article className="h-full px-4 pt-12 text-gray-700 flex flex-col space-y-2 items-start">
                    <p className="text-xl font-bold ">{inverter.name}</p>


                    <span className="flex space-x-3 items-center">
                      <img
                        className="h-8 w-8 -rotate-90 object-cover"
                        src="/images/icons/battery_full.png"
                        alt="battery"
                      />
                      <p className="text-sm font-bold">6 - 8 hours run time</p>
                    </span>
                    <span className="flex space-x-3 items-center">
                      <img
                        className="h-8 w-8 object-cover"
                        src="/images/icons/solar_panel.png"
                        alt="battery"
                      />
                      <p className="text-sm font-bold">Connect to solar panels</p>
                    </span>
                  </article>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default InvertersGrid;
