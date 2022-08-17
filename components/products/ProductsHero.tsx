import Image from "next/future/image";
import React from "react";

const ProductsHero = () => {
  return (
    <section className="my-12 py-12 px-4">
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full h-[20vh] max-w-7xl relative overflow-hidden">
          {/* <Image
            width={1920}
            height={1080}
            src="/images/roof.jpg"
            className="w-full block object-cover h-[40vh] max-w-7xl object-center rounded-lg"
            alt="hero-pic"
          /> */}
          <div className="absolute inset-0 flex justify-start px-4 items-center rounded-lg ">
            <p className="xl:text-6xl  lg:text-5xl text-4xl font-bold text-red-600 leading-10 pt-8">
              Whe have the products you need
              <br /> to beat Load Shedding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
