import React from "react";
import ContactForm from "../contact/ContactForm";

const AboutHero = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-6 py-9 px-4">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full flex flex-col justify-center items-center bg-indigo-700 bg-opacity-20 text-white sm:px-12 px-6 rounded-md">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">
              About Solarquest
            </h2>
          </div>
        </div>
        <div>
          <img
            className="rounded-md lg:block hidden w-full object-cover aspect-video"
            src="/images/about-landscape.jpeg"
            alt="Solar Power"
          />
          <img
            className="rounded-md lg:hidden sm:block hidden w-full"
            src="/images/about-square.jpeg"
            alt="Solar Power"
          />
          <img
            className="rounded-md sm:hidden block w-full"
            src="/images/about-portrait.jpeg"
            alt="Solar Power"
          />
        </div>
      </div>

      <div className="lg:mt-14 sm:mt-7 mt-14">
        <div className="flex lg:flex-row flex-col items-center">
          <div className="w-full lg:w-7/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-red-600">
              Our Story
            </h2>
            <p className="pr-6 font-normal text-sm leading-6 text-gray-600 mt-6 w-full xl:w-9/12">
              We entered the industry in 1982 while solar technology was still
              in its infancy. More than 55,000 installations and 39 years later
              we still carry that innovative spark; harnessing clean and
              affordable technology to improve access to renewable energy across
              the globe.
            </p>
            <p className="pr-6 font-normal text-sm leading-6 text-gray-600 w-full xl:w-9/12 mt-6">
              From household to national projects, we are solution based and
              future focused, looking for ways to reshape how homes, villages,
              and cities are powered.
            </p>
          </div>
          <div className="lg:pt-16 xl:pt-0 cursor-pointer w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
