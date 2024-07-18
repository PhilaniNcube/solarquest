
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Hero from '../components/home/Hero'
import HomeSectionFour from '../components/home/HomeSectionFour'
import HomeSectionOne from '../components/home/HomeSectionOne'
import HomeSectionThree from '../components/home/HomeSectionThree'
import type {NextRequest} from 'next/server'
import Banner from '../components/home/Banner'
import RebelDuo from '../components/home/RebelDuo'
import BusinessToBusinessHero from '../components/home/business-to-business-hero'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Home | Solarquest</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://solarquest.co.za" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        /><meta name="facebook-domain-verification" content="b3vvytymdydkjj0u7gcyvjtxaherw6" />
        <meta
          name="description"
          content="Solarquest provides customized solar solutions to meet your home and business requirements."
        />
        <meta
          name="keywords"
          content="solar pwer solutions; solar services; solar panels; solar system design; lithium batteries; solar inverters; lithium ion battery; solar power; solar panel installation; solar inverter price; off grid; solar panel inverter; solar power panels; solar energy solutions; hybrid inverter; voltage switcher; ac combiner box; dc combiner box; solar installer; pv cable; solar cable; solar support; solar repairs; solar training; balance of systems "
        />
      </Head>
        <BusinessToBusinessHero />

    </>
  );
}

export default Home


export async function getServerSideProps(req: NextRequest) {

const referrer = req.referrer


return {
    props: {
      data: ""
    }
  }
}
