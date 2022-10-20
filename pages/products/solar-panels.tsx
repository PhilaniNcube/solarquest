import {motion} from "framer-motion"
import Image from "next/future/image";
import { useRouter } from "next/router";

const SolarPanels = () => {

 const router = useRouter()

  return (
    <motion.section
      layoutId="solarPanels"
      className="max-w-7xl mx-auto min-h-screen my-8 px-4"
    >
      <Image
        src="/images/panels_preview.jpeg"
        width={1024}
        height={683}
        className="w-full h-[55vh] object-cover object-top aspect-video rounded-lg"
        alt="Solar Panels"
      />
      <h1 className="text-3xl md:text-5xl md:font-extrabold font-bold text-red-600 mt-4">
        Solar Panels
      </h1>
      <p className="text-ld md:text-xl text-gray-600 md:w-10/12">
        Solar panels or photovoltaic cells are the component in a solar energy
        system that actually produces the electricity. These cells are made from
        a combination of special materials that include semiconductor materials,
        that when exposed to light generate electricity from the movement of
        electrons.
      </p>
      <p className="text-ld md:text-xl text-gray-600 md:w-10/12">
        Over the last couple of decades the cost of producing the photovoltaic
        cells (PV's) has been dropping drastically. This now means that for
        people able to come up with the initial capital to install a solar
        solution, the whole excersise is now proving to be a cheaper alternative
        to getting electricity from your local electricity.{" "}
      </p>
      <h2 className="text-xl md:text-2xl md:font-extrabold font-bold text-red-600 mt-4">
        Reliable Power
      </h2>
      <p className="text-ld md:text-xl text-gray-600 md:w-10/12">
        With the introduction of load shedding in South Africa due to the
        challanges facing Eskom, people are looking for a more reliable source
        of electricity. Solar energy is perfectly suited to providing a family
        or business both temporary or permanent solutions to load shedding. In
        some cases the right solar installation can even produce excess amounts
        of electricity that may be sold back to Eskom allowing your solar
        installation to earn you money.
      </p>
      <button
        className="mt-2 bg-red-600 text-white font-medium text-md px-6 py-2 rounded"
        onClick={() => router.push("/products#solarPanels")}
      >
        Back to products
      </button>
    </motion.section>
  );
};
export default SolarPanels;
