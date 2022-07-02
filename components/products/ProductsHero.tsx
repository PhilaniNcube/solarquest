import React from "react";

const ProductsHero = () => {
  return (
    <section className="w--screen">
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-8">
          <img
            src="/images/roof.jpg"
            className="w-full block h-[40vh] object-cover object-center mt-6"
            alt="hero-pic"
          />
          <p className="xl:text-6xl lg:text-5xl text-4xl text-center font-bold text-red-600 leading-10 pt-12">
            SolarQuest Solutions
          </p>

        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
