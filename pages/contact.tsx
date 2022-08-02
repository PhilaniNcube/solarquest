import { NextPage } from "next";
import Head from "next/head";
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
      </Head>
      <ContactHero />
    </>
  );
};
export default contact;
