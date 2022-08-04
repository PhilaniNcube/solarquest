import Head from "next/head";
import Faq from "../components/FAQ/Faq";
import FaqHeader from "../components/FAQ/FaqHeader";

const faq = () => {
  return <>
   <Head>
    <title>Frequently Asked Questions | Solarquest</title>
   </Head>
   <FaqHeader />
   <Faq />
  </>;
};
export default faq;
