import { NextPage } from "next";
import Productgrid from "../components/products/ProductGrid";
import ProductsHero from "../components/products/ProductsHero";

const products: NextPage = () => {
  return (
            <>
              <ProductsHero />
              <Productgrid />
            </>
          )
};
export default products;
