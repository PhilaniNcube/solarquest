import { motion } from "framer-motion";
import { Package } from "../../Types";
import { getResidential } from "../../fetchers/packages";
import Image from "next/image";
import { useRouter } from "next/router";

const phocos = ({
  residentialPackages,
}: {
  residentialPackages: Package[];
}) => {

const router = useRouter();

  return (
    <section className="my-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl md:text-4xl text-red-600 font-bold">
          PHOCOS
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {residentialPackages.map((product) => (
            <motion.div
              key={product.id}
              id={product.id}
              layoutId={product.id}
              className="w-full py-2 rounded-lg cursor-pointer"
              onClick={() => router.push(`/campaign/phocos/${product.slug}`)}
            >
              <Image
                src={product.image}
                width={1101}
                height={895}
                className="h-64 object-cover aspect-video rounded-lg"
                alt={product.name}
              />
              <div className="mt-3 flex flex-col justify-between px-4">
                <div>
                  <p className="text-red-600 font-bold text-2xl mt-3">
                    {product.name}
                  </p>
                  <p className="text-gray-600 font-medium text-sm mt-1">
                    {product.solution}
                  </p>

                  <p className="text-gray-600 font-medium text-sm  mt-1">
                    {product.design}
                  </p>

                  <p className="text-gray-600 font-medium text-sm  mt-1">
                    {product.level}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default phocos;


export async function getStaticProps() {


  const residentialPackages = await getResidential();


  return {
    props: {
      residentialPackages,
    },
  };
}
