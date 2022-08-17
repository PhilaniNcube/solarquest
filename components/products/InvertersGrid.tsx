import Image from "next/future/image";
import { useQuery } from "react-query";
import getInverters from "../../fetchers/inverters";

const InvertersGrid = () => {

  const {isLoading, isSuccess, data} = useQuery('inverters', getInverters, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return <section>
    <div className="max-w-7xl mx-auto px-4">
       <div className="">
        {isLoading ? (<p>Loading...</p>) : isSuccess ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6">
          {data.map((inverter) => (
            <div key={inverter.id} className="w-full flex">
              <Image src={inverter.image} alt={inverter.name} height={1500} width={800} className="w-44 object-cover" />
              <article className="h-full px-4 pt-12 flex flex-col items-start">
                <p className="text-xl font-bold text-gray-700">{inverter.name}</p>
                <small className="text-sm text-gray-600 font-medium">Power: {inverter.power}</small>
                <small className="text-sm text-gray-600 font-medium">Voltage: {inverter.voltage}V</small>
                <small className="text-sm border-b text-gray-600 font-medium mt-3">Dimensions: {`H ${inverter.height}mm - W ${inverter.width}mm - D ${inverter.depth}mm`}</small>
                <small className="text-sm text-gray-600 font-medium">Weight: {inverter.net_weight}kg</small>
              </article>
            </div>
          ))}
        </div>
        ) : null}
       </div>
    </div>
  </section>;
};
export default InvertersGrid;
