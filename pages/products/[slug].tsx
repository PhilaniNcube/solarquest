import Image from "next/image";
import { Package } from "../../Types";
import  { getPackage } from "../../fetchers/packages";
import formatter from "../../utils/formatter";

import ProductForm from "../../components/contact/ProductForm";


type PropTypes = {
  product: Package
}

const index = ({product}:PropTypes) => {

  console.log(product)

  return (
    <main>
      <div className="px-8 py-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Image
            src={product.image}
            width={500}
            height={500}
            alt={product.name}
            className="w-full aspect-1 bg-slate-200"
          />
          <div className="w-full p-4">
            <p className="font-bold tracking-widest text-red-500 uppercase">
              {product.type}
            </p>
            <h1 className="text-2xl font-bold uppercase md:text-3xl text-slate-800">
              {product.name}
            </h1>

            <p className="mt-3 text-sm leading-7 tracking-wide text-slate-500 md:text-base">
              {product.description}
            </p>

            <p className="mt-3 text-sm leading-7 tracking-wide text-slate-500 md:text-base">
              {product.design}
            </p>
            <p className="mt-3 text-sm leading-7 tracking-wide text-slate-500 md:text-base">
              {product.level}
            </p>
            <h2 className="mt-3 text-2xl font-bold uppercase text-slate-800">
              Features
            </h2>
            <p className="text-md text-slate-600">
              Batteries: {product.battery}
            </p>
            <p className="text-md text-slate-600">
              Inverter: {product.inverter}
            </p>
            <p className="text-md text-slate-600">
              Solar Panels: {product.panels}
            </p>
            <p className="text-md text-slate-600">
              Runtime: {product.runtime}
            </p>

            <p className="mt-2 mb-4 text-2xl font-bold text-slate-700">
              {formatter(product.price)}{" "}
              <span className="text-xs text-slate-600">incl VAT*</span>{" "}
            </p>
            <ProductForm />
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </main>
  );
};
export default index;



export async function getServerSideProps({ params }: { params: { slug: string }}) {

 const product = await getPackage(params.slug)

 return {
    props: {
      product,
    }
 }

}
