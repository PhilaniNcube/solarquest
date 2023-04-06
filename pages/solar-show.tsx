import Head from "next/head";
import { Fragment } from "react";
import Image from 'next/image'
import { motion } from "framer-motion";

const container = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.35,

      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const solarShow = () => {
  return (
    <Fragment>
      <Head>
        <title>The Solar Show | Solarquest</title>
      </Head>
      <main className="">
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
               duration: 2,

          }}
          className="max-w-7xl px-4 mt-16 mx-auto h-screen py-10"
        >
          <div className="w-full h-full grid grid-cols-8 gap-4 grid-rows-6 ">
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="col-span-2 grid row-span-2 row-start-1 "
              id="img-1"
            >
              <Image
                src="/images/nyasha.jpg"
                width={300}
                height={300}
                alt="Nyasha Bamhare"
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="col-span-2 col-start-7 row-span-2 row-start-1"
              id="img-2"
            >
              <Image
                src="/images/jangez.jpg"
                width={300}
                height={300}
                alt="Jangez"
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={itemMain}
              initial="hidden"
              animate="show"
              className="col-start-3 col-span-4 row-start-2 row-span-4 flex flex-col text-center p-4 justify-center items-center"
              id="main-block"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-red-600 ">
                We will be attending the Solar Show
              </h1>
              <p className="text-md md:text-lg text-gray-600 mt-2 font-medium">
                Come meet us at Booth 39, we would love to chat with you.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="row-start-4 row-span-3 col-start-1 col-span-2"
              id="img-3"
            >
              <Image
                src="/images/Rebel-EOnew.png"
                width={426}
                height={700}
                alt="Rebel"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="row-start-4 row-span-3 col-start-7 col-span-2"
              id="img-4"
            >
              {" "}
              <Image
                src="/images/Rebel-EO-MAX.png"
                width={800}
                height={1314}
                alt="Blackout"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </Fragment>
  );
};
export default solarShow;
