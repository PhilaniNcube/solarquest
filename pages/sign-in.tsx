import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";


const Index = () => {
  let form = useRef(null);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    console.log({ email, password });

    if (
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      throw new Error("Please enter a valid data to register");
    }

    const data = await supabaseClient.auth.signIn(
      { email, password }
    );

    if (data.error) {
      alert(
        `There was an error signing up. Please try again later, ${JSON.stringify(
          data.error.message
        )}`
      );

      console.log(data.error.message);
    } else if (typeof data.user !== null) {
      alert(
        "Logged In."
      );
      router.push('/profile');
    }
  };
  return (
    <>
      <Head>
        <title> Sign In | Solarquest</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <main className="bg-white">
        <section className="mx-auto flex justify-center h-full flex-col lg:flex-row">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 flex justify-center bg-white "
          >
            <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800  mb-12 sm:mb-0 flex flex-col justify-center px-2 sm:px-0">
              <div className="px-2 flex flex-col items-center justify-center pt-12 lg:pt-0">
                <Image
                  src="/images/logo-red.png"
                  className="h-20 object-cover"
                  alt="logo"
                />
              </div>
              <div className="mt-8 w-full px-2 sm:px-6">
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
                  Sign In
                </button>
                <p className="mt-6 text-xs">
                  Don't Have An Account?{" "}
                  <Link href="/register">
                    <a className="underline text-red-600">Sign Up</a>
                  </Link>
                </p>
              </div>
            </div>
          </form>
          <div className="w-full lg:w-1/2 bg-red-600 bg-red-600  bg-px-2 py-40 sm:py-48 sm:px-12 flex flex-col justify-center relative bg-no-repeat bg-center bg-cover h-full">
            <div className="absolute top-0 right-0 pt-3 pr-3 text-white">

            </div>
            <div className="flex relative z-30 flex-col justify-center pl-4 md:pr-12 xl:pr-12 md:pl-24">
              <h3 className="text-xl md:text-4xl font-extrabold leading-tight text-white">
                Solarquest <br />
                Renewable Energy Solutions
              </h3>
              <p className="text-md md:text-xl text-white leading-normal pt-3 xl:w-10/12">
                We take the guess work out of transitionning to renewable solar
                energy solutions. Create your account and we can give you the
                best information and set you up with the right solution.
              </p>
            </div>
            <div className="z-20 absolute bottom-0 left-0 pb-3 pl-3 text-white">

            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Index;
