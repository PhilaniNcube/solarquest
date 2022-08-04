import {motion} from "framer-motion"
import Image from "next/future/image";
import { useRouter } from "next/router";

const Products = () => {

  const router = useRouter()

  return (
    <section className="my-6">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl  font-medium text-red-600">
          Renewable Energy from the sun
        </h2>
        <p className="text-gray-600 text-lg font-medium my-3 w-full md:w-4/6">
          What is it that you need to know about transitioning to Solar power?
          We can provide you with the information that you need to make the most
          informed decision. Harnessing the power of the sun has become more and
          more affordable over the past decade. The technology of photovoltaic
          panels and battery storage has progressed in leaps and bounds. This
          development has meant that powering your home or business usig solar
          energy has improved to the point where it can be cheaper that getting
          your power from the traditional power grid.
        </p>
        <p className="text-gray-600 text-lg font-medium my-3 w-5/6 md:w-4/6">
          A solar power installation is made up of three main parts. The
          Inverter, batteries and photovoltaic panels.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            id="solarPanels"
            layoutId="solarPanels"
            className="w-full cursor-pointer"
            onClick={() => router.push("/products/solar-panels")}
          >
            <Image
              src="/images/panels_preview.jpg"
              width={1024}
              height={683}
              className="w-full object-cover aspect-video rounded-lg"
              alt="Solar Panels"
            />
            <p className="text-red-600 font-bold text-2xl mt-3">Solar Panels</p>
            <p className="text-gray-600 font-medium text-sm mt-1">
              Solar Panels, or more technically photovoltaic cells are used to
              collect energy from the sun and turn it into electricity. Solar
              panels do not need direct sunlight to generate electricity as some
              may assume.
            </p>
            <button
              className="mt-2 bg-red-600 text-white font-medium text-md px-6 py-2 rounded"
              onClick={() => router.push("/products/solar-panels")}
            >
              Read more
            </button>
          </motion.div>
          <motion.div
            id="batteries"
            layoutId="batteries"
            className="w-full cursor-pointer"
            onClick={() => router.push("/products/batteries")}
          >
            <Image
              src="/images/batteries-preview.jpg"
              width={1024}
              height={683}
              className="w-full object-cover aspect-video rounded-lg"
              alt="Batteries"
            />
            <p className="text-red-600 font-bold text-2xl mt-3">Batteries</p>
            <p className="text-gray-600 font-medium text-sm mt-1">
              The main drawback of solar energy and other renewable energy applications is that the energy is not available 24 hours a day. This is where batteries come in. During the day that solar panels produce excess energy that is then stored in these batteries.
            </p>
            <button
              className="mt-2 bg-red-600 text-white font-medium text-md px-6 py-2 rounded"
              onClick={() => router.push("/products/batteries")}
            >
              Read more
            </button>
          </motion.div>
          <motion.div
            id="inverters"
            layoutId="inverters"
            className="w-full cursor-pointer"
            onClick={() => router.push("/products/inverters")}
          >
            <Image
              src="/images/inverters-preview.jpg"
              width={1024}
              height={683}
              className="w-full object-cover aspect-video rounded-lg"
              alt="Inverters"
            />
            <p className="text-red-600 font-bold text-2xl mt-3">Inverters</p>
            <p className="text-gray-600 font-medium text-sm mt-1">
            Inverters are electronic devices used to convert Direct Current coming from the batteries in a Solar Power Installation into Alternating Current.
            </p>
            <button
              className="mt-2 bg-red-600 text-white font-medium text-md px-6 py-2 rounded"
              onClick={() => router.push("/products/inverters")}
            >
              Read more
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Products;
