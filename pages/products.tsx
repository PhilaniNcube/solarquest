import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import Productgrid from "../components/products/ProductGrid";
import Products from "../components/products/Products";
import ProductsDivider from "../components/products/ProductsDivider";
import ProductsHero from "../components/products/ProductsHero";
import Services from "../components/products/Services";
import getPackages from "../fetchers/packages";
import { Package } from "../Types";

const ProductsPage = ({packages}: {packages: Package[]}) => {

   const {data, isLoading, isSuccess, error} = useQuery('packages', getPackages, {
    initialData: packages,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
   })


  return (
    <>
      <Head>
        <title> Products | Solarquest</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <ProductsHero />
      {isSuccess && <Products packages={data} />}
      <ProductsDivider />
      <Services />
    </>
  );
};
export default ProductsPage;


export async function getStaticProps() {

  const packages = await getPackages();

  return {
    props: {
      packages
    }
  }
}
