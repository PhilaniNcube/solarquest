import type { NextPage } from "next";
import Head from "next/head";
import AboutHero from "../components/about/AboutHero";
import AboutSectionOne from "../components/about/AboutSectionOne";
import AboutSectionTwo from "../components/about/AboutSectionTwo";
import Hero from "../components/about/Hero";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title> About | Solarquest</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <AboutHero />


    </>
  );

};
export default about;
