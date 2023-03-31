import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ContactHero from "../components/contact/ContactHero";

const contact: NextPage = () => {


  return (
    <>
      <Head>
        <title> Contact | Solarquest</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Contact us so we can start you on the process of energy independence. "
        />
        <meta
          name="keywords"
          content="solar pwer solutions, solar services, solar panels, solar system design, lithium batteries, solar inverters, lithium ion battery, solar power, solar panel installation, solar inverter price, off grid, solar panel inverter, solar power panels, solar energy solutions, hybrid inverter, voltage switcher, ac combiner box, dc combiner box, solar installer, pv cable, solar cable, solar support, solar repairs, solar training, balance of systems "
        />
      </Head>
      <ContactHero  />
    </>
  );
};
export default contact;
