import type { NextPage } from "next";
import Head from "next/head";
import AboutHero from "../components/about/AboutHero";
import Team from "../components/about/Team";
import AboutSectionTwo from "../components/about/AboutSectionTwo";
import Hero from "../components/about/Hero";
import Partners from "../components/about/Partners";

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
      <Team />
      <Partners />
    </>
  );

};
export default about;
