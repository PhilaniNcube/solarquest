import Head from "next/head";
import Faq from "../components/FAQ/Faq";
import FaqHeader from "../components/FAQ/FaqHeader";

const faq = () => {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Solarquest</title>{" "}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Solarquest provides customized solar solutions to meet your home and business requirements."
        />
        <meta
          name="keywords"
          content="solar pwer solutions, solar services, solar panels, solar system design, lithium batteries, solar inverters, lithium ion battery, solar power, solar panel installation, solar inverter price, off grid, solar panel inverter, solar power panels, solar energy solutions, hybrid inverter, voltage switcher, ac combiner box, dc combiner box, solar installer, pv cable, solar cable, solar support, solar repairs, solar training, balance of systems "
        />
      </Head>
      <FaqHeader />
      <Faq />
    </>
  );
};
export default faq;
