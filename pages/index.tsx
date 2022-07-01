import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/home/Hero'
import HomeSectionOne from '../components/home/HomeSectionOne'
import HomeSectionThree from '../components/home/HomeSectionThree'
import HomeSectionTwo from '../components/home/HomeSectionTwo'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solar Quest | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Hero />
       <HomeSectionOne />
       <HomeSectionTwo />
       <HomeSectionThree />
    </>
  )
}

export default Home
