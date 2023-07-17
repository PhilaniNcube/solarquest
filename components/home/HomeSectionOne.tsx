import Link from "next/link";
import Image from 'next/image'
import { FunctionComponent } from "react";
import ContactForm from "../contact/ContactForm";
import { motion } from "framer-motion";

const HomeSectionOne: FunctionComponent = () => {
  return (
    <section className="px-4 xl:px-0">
      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 gap-6 md:gap-16 md:grid-cols-2">
         <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="w-full isolated py-24 h-full relative before:content-[''] before:absolute before:bottom-20 before:right-10 before:h-56 before:w-56 before:-z-10 before:rotate-45 before:bg-slate-300/30 before:rounded-lg before:shadow-2xl after:content-[''] after:absolute after:top-10 after:left-10 after:h-56 after:w-56 after:-z-10 after:rotate-45 after:bg-red-300/30 after:rounded-full after:shadow-xl"
        >
          <Image
            src="https://sjvyommxrwhabvkjpwpn.supabase.co/storage/v1/object/public/products/ultimate_duo_plus.png"
            alt="rebel duo plus"
            width={1101}
            height={895}
            priority
            quality={100}
            className="rounded-lg h-[95%] my-auto w-10/12 mx-auto object-cover "
          />
        </motion.div>
        <div className="flex flex-col justify-center">
          <p className="text-md mt-4 md:mt-6 font-medium  md:max-w-[70ch] lg:text-lg text-slate-600">
            Expert advice and great customer service - we will walk you through
            the journey, start to finish, of building the best Solar Solution
            for you!
          </p>
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
