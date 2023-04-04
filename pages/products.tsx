
import Head from "next/head";

import { useQuery } from "react-query";

import Products from "../components/products/Products";
import ProductsDivider from "../components/products/ProductsDivider";
import ProductsHero from "../components/products/ProductsHero";
import Services from "../components/products/Services";
import  { getBusiness, getResidential } from "../fetchers/packages";
import { Package } from "../Types";
import { NextRequest, NextResponse } from "next/server";
import { useEffect } from "react";


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


   useEffect(() => {
    //check if we are in the client
    if (typeof window !== "undefined") {
      // get the referrer from the document


    }
   },[])



  return (
    <>
      <Head>
        <title> Products | Solarquest</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Solarquest protects our customers privacy. View our privacy policy to see how we handle our customers personal details."
        />
        <meta
          name="keywords"
          content="solar pwer solutions, solar services, solar panels, solar system design, lithium batteries, solar inverters, lithium ion battery, solar power, solar panel installation, solar inverter price, off grid, solar panel inverter, solar power panels, solar energy solutions, hybrid inverter, voltage switcher, ac combiner box, dc combiner box, solar installer, pv cable, solar cable, solar support, solar repairs, solar training, balance of systems "
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


export async function getStaticProps(req:NextRequest, res:NextResponse) {


  const data = await req.referrer

  console.log(data)

  const residentialPackages = await getResidential();
  const businessPackages = await getBusiness();

  return {
    props: {
      residentialPackages,
      businessPackages,

    },
  };
}
