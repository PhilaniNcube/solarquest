import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import supabase from "../utils/supabase";
const Index = () => {
  let form = useRef(null);
  const router = useRouter()
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const { email, password, last_name, first_name } = Object.fromEntries(
    new FormData(e.currentTarget)
  );
  console.log({ email, password, last_name, first_name });

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof first_name !== "string" ||
    typeof last_name !== "string"
  ) {
    throw new Error("Please enter a valid data to register");
  }

  const data = await supabaseClient.auth.signUp(
    { email, password },
    {
      data: {
        first_name,
        last_name,
      },
    }
  );

  if(data.error) {
    alert(
      `There was an error signing up. Please try again later, ${JSON.stringify(
        data.error.message
      )}`
    );

    console.log(data.error.message);
  }  else if (typeof data.user !== null) {
      alert('New Account Successfully created, please check your email address to confirm your account.')
      router.push('/')
  }

};
  return (
    <>
      <Head>
        <title> Register | Solarquest</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Solarquest protects our customers privacy. View our privacy policy to see how we handle our customers personal details."
        />
        <meta
          name="keywords"
          content="solar pwer solutions, solar services, solar panels, solar system design, lithium batteries, solar inverters, lithium ion battery, solar power, solar panel installation, solar inverter price, off grid, solar panel inverter, solar power panels, solar energy solutions, hybrid inverter, voltage switcher, ac combiner box, dc combiner box, solar installer, pv cable, solar cable, solar support, solar repairs, solar training, balance of systems "
        />
      </Head>
      <section className="bg-white min-h-screen py-24">
        <div className="mx-auto flex justify-center h-full flex-col lg:flex-row">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 flex justify-center bg-white "
          >
            <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800  mb-12 sm:mb-0 flex flex-col justify-center px-2 sm:px-0">
              <div className="px-2 flex flex-col items-center justify-center pt-12 lg:pt-0">
                <Image
                  src="/images/logo-red.png"
                  className="h-16 object-cover"
                  alt="logo"
                />
              </div>
              <div className="mt-8 w-full px-2 sm:px-6">
                <div className="flex flex-col mt-8">
                  <label
                    htmlFor="first_name"
                    className="text-lg font-semibold leading-tight"
                  >
                    First Name
                  </label>
                  <input
                    required
                    id="first_name"
                    name="first_name"
                    autoComplete="First Name"
                    className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-700   border-gray-300 border shadow"
                    type="text"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    htmlFor="last_name"
                    className="text-lg font-semibold leading-tight"
                  >
                    Last Name
                  </label>
                  <input
                    required
                    id="last_name"
                    name="last_name"
                    className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-700   border-gray-300 border shadow"
                    autoComplete="First Name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    htmlFor="email"
                    className="text-lg font-semibold leading-tight"
                  >
                    Email
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-700   border-gray-300 border shadow"
                    type="email"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    htmlFor="password"
                    className="text-lg font-semibold fleading-tight"
                  >
                    Password
                  </label>
                  <input
                    required
                    id="password"
                    name="password"
                    className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-red-700 border-gray-300 border shadow"
                    type="password"
                  />
                </div>
              </div>
              <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
                <div className="flex items-center">
                  <input
                    id="rememberme"
                    name="rememberme"
                    className="w-3 h-3 mr-2"
                    type="checkbox"
                  />
                  <label htmlFor="rememberme" className="text-xs">
                    Remember Me
                  </label>
                </div>
                <a className="text-xs text-red-600">Forgot Password?</a>
              </div>
              <div className="px-2 sm:mb-16 sm:px-6">
                <button
                  type="submit"
                  className="focus:outline-none w-full sm:w-auto bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-8 py-3 text-sm mt-6"
                >
                  Create Your Account
                </button>
                <p className="mt-6 text-xs">
                  Already Have An Account?{" "}
                  <Link href="/sign-in">
                    <a className="underline text-red-600">Sign In</a>
                  </Link>
                </p>
              </div>
            </div>
          </form>
          <div className="w-full lg:w-1/2 py-40 sm:py-48 sm:px-12 flex flex-col justify-center relative bg-no-repeat bg-center bg-cover h-full">
            <div className="absolute top-0 right-0 pt-3 pr-3"></div>
            <div className="flex relative z-30 flex-col justify-center pl-4 md:pr-12 xl:pr-12 md:pl-24">
              <h3 className="text-4xl font-extrabold leading-tight text-red-600">
                Solarquest <br />
                Renewable Energy Solutions
              </h3>
              <p className="text-xl text-red-600 leading-normal pt-3 xl:w-10/12">
                We take the guess work out of transitionning to renewable solar
                energy solutions. Create your account and we can give you the
                best information and set you up with the right solution.
              </p>
            </div>
            <div className="pb-3 pl-3 text-white"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;
