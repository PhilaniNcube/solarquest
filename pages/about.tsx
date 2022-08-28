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
        <meta
          name="description"
          content="Solarquest has been in business since 1982. We have also completed more than 55 000 installation across Africa in that time."
        />
        <meta
          name="keywords"
          content="solar pwer solutions, solar services, solar panels, solar system design, lithium batteries, solar inverters, lithium ion battery, solar power, solar panel installation, solar inverter price, off grid, solar panel inverter, solar power panels, solar energy solutions, hybrid inverter, voltage switcher, ac combiner box, dc combiner box, solar installer, pv cable, solar cable, solar support, solar repairs, solar training, balance of systems "
        />
      </Head>
      <AboutHero />
      <Team />
      <Partners />
    </>
  );

};
export default about;
