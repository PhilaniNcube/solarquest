import { NextPage } from "next";
import Head from "next/head";
import Productgrid from "../components/products/ProductGrid";
import Products from "../components/products/Products";
import ProductsHero from "../components/products/ProductsHero";

const products: NextPage = () => {
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
      <Products />
    </>
  );
};
export default products;
