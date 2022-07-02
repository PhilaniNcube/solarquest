import Link from "next/link";
import Image from 'next/image'
import { FunctionComponent } from "react";

const HomeSectionOne: FunctionComponent = () => {
  return (
          <section className="max-h-screen">
              <div className="max-w-7xl mx-auto py-6 md:py-12 lg:py-16 px-4">
                  <h2 className="text-gray-700 max-w-[50ch] font-medium text-xl md:text-2xl lg:text-4xl md:tracking-wider">For expert advice and great customer service. We will take you throught the journey of buildig the best Solar Solution <span className="font-bold text-red-600 underline">for you!</span></h2>
                  <p className="text-md mt-4 md:mt-6 font-medium  md:max-w-[70ch] lg:text-lg text-slate-600">We make sure our customers get the best quality service, from choosing the specifications of their installation. All the way through to the final installation of their equipment.</p>
                   <Link href="/about">
                        <button className="px-4 md:px-6 py-2 mt-3 border-2 rounded-full border-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 text-red-600 font-medium uppercase text-lg  transition-all duration-300">More About Us</button>
                   </Link>
              </div>



          </section>
        )

};
export default HomeSectionOne;
