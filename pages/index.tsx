
import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import HomeSectionOne from '../components/home/HomeSectionOne'
import HomeSectionThree from '../components/home/HomeSectionThree'
import HomeSectionTwo from '../components/home/HomeSectionTwo'

const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>Solarquest | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
       <Hero />
       <HomeSectionOne />
       <HomeSectionTwo />
       <HomeSectionThree />
    </>
  )
}

export default Home


