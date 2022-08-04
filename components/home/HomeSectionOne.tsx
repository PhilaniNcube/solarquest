import Link from "next/link";
import Image from 'next/image'
import { FunctionComponent } from "react";
import ContactForm from "../contact/ContactForm";

const HomeSectionOne: FunctionComponent = () => {
  return (
    <section className="px-4 xl:px-0">
      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 gap-6 md:gap-16 md:grid-cols-2">
        <ContactForm />
        <div>
          <h2 className="text-gray-700 max-w-[50ch] font-medium text-xl md:text-2xl md:tracking-wider">
            For expert advice and great customer service. We will take you
            throughout the journey of building the best Solar Solution{" "}
            <span className="font-bold text-red-600 underline">for you!</span>
          </h2>
          <p className="text-md mt-4 md:mt-6 font-medium  md:max-w-[70ch] lg:text-lg text-slate-600">
            We make sure our customers get the best quality service, from
            choosing the specifications of their installation. All the way
            through to the final installation of their equipment.
          </p>
        </div>
      </div>
    </section>
  );

};
export default HomeSectionOne;
