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

  return <main>
    <div className="max-w-7xl mx-auto py-10 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image src={product.image} width={500} height={500} alt={product.name} className="w-full aspect-1 bg-slate-200" />
        <div className="w-full p-4">
          <p className="uppercase text-red-500 tracking-widest font-bold">{product.type}</p>
          <h1 className="font-bold text-2xl md:text-3xl text-slate-800 uppercase">{product.name}</h1>

          <p className="text-slate-500 text-sm md:text-base tracking-wide leading-7 mt-3">{product.description}</p>

          <p className="text-slate-500 text-sm md:text-base tracking-wide leading-7 mt-3">{product.design}</p>
          <p className="text-slate-700 text-2xl mt-2 font-bold mb-4">{formatter(product.price)} <span className="text-xs text-slate-600">incl VAT*</span> </p>
          <ProductForm />
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-slate-800 uppercase">Features</h2>
          <p className="text-md text-slate-600">Batteries: {product.battery}</p>
          <p className="text-md text-slate-600">Inverter: {product.inverter}</p>
          <p className="text-md text-slate-600">Solar Panels: {product.panels}</p>
        </div>
      </div>
    </div>
  </main>;
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
