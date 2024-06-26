import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import {motion} from 'framer-motion'
import ContactForm from "../contact/ContactForm";

const Hero : FunctionComponent = () => {
  return (
    <header className="px-4">
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2">
        <div className="h-full w-full flex flex-col items-start justify-center p-8">
          <motion.h1
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-5xl font-semibold text-red-600"
          >
            LIVE LIFE WITHOUT LOAD SHEDDING
          </motion.h1>
          <p className="text-md md:text-lg lg:text-xl text-slate-700 mt-3 font-bold">
            SOLAR AND BACK POWER SOLUTIONS THAT KEEP YOU POWERED AND SAVE YOU
            MONEY!
          </p>
           <p className="text-md md:text-lg lg:text-xl text-slate-700 mt-3 font-extrabold">
            FINANCING OPTIONS AVAILABLE
          </p>
          <Link
            href="/contact"
            className="px-8 py-2 rounded-full bg-red-600 mt-4 text-white text-xl"
          >
            Learn more
          </Link>
        </div>
        <div className="relative isolate">
          <div className=" z-50 bg-white/80">
            <ContactForm />
          </div>
        {/* <motion.div
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
        </motion.div> */}
        </div>
      </div>
    </header>
  );
};
export default Hero;
