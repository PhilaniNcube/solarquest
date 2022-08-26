import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import Productgrid from "../components/products/ProductGrid";
import Products from "../components/products/Products";
import ProductsDivider from "../components/products/ProductsDivider";
import ProductsHero from "../components/products/ProductsHero";
import Services from "../components/products/Services";
import getPackages, { getBusiness, getResidential } from "../fetchers/packages";
import { Package } from "../Types";

const ProductsPage = ({
  businessPackages,
  residentialPackages,
}: {
  businessPackages: Package[];
  residentialPackages: Package[];
}) => {
  const businessPackageQuery = useQuery("businessPackages", getBusiness, {
    initialData: businessPackages,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const residentialPackageQuery = useQuery("residentialPackages", getResidential, {
    initialData: residentialPackages,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

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
      {residentialPackageQuery.isSuccess && businessPackageQuery.isSuccess && (
        <Products
          residentialPackages={residentialPackageQuery.data}
          businessPackages={businessPackageQuery.data}
        />
      )}

      <ProductsDivider />
      <Services />
    </>
  );
};
export default ProductsPage;


export async function getStaticProps() {

  const residentialPackages = await getResidential();
  const businessPackages = await getBusiness();

  return {
    props: {
      residentialPackages,
      businessPackages,
    },
  };
}
