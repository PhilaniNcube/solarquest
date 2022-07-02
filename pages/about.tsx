import type { NextPage } from "next";
import AboutSectionOne from "../components/about/AboutSectionOne";
import AboutSectionTwo from "../components/about/AboutSectionTwo";
import Hero from "../components/about/Hero";

const about: NextPage = () => {
  return (
          <>
            <Hero />
            <AboutSectionOne />
            <AboutSectionTwo />
          </>
          )

};
export default about;
