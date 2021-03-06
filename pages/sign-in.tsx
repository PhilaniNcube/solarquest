import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import supabase from "../utils/supabase";
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

    const data = await supabase.auth.signIn(
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
    <section className="bg-white {-- h-screen --}">
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
                className="h-32 object-cover"
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
              <a className="text-xs text-red-600" >
                Forgot Password?
              </a>
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
                <a
                  className="underline text-red-600"

                  >
                  Sign Up
                </a>
                </Link>
              </p>
            </div>
          </div>
        </form>
        <div className="w-full lg:w-1/2 bg-red-600 bg-red-600  bg-px-2 py-40 sm:py-48 sm:px-12 flex flex-col justify-center relative bg-no-repeat bg-center bg-cover h-full">
          <div className="absolute top-0 right-0 pt-3 pr-3 text-white">
            <svg width={199} height={131} xmlns="http://www.w3.org/2000/svg">
              <g
                transform="rotate(-90 65.5 65)"
                fill="#F7FAFC"
                fillRule="evenodd"
              >
                <rect width="6.002" height="6.005" rx="3.001" />
                <rect x="31.002" width="6.002" height="6.005" rx="3.001" />
                <rect x="62.003" width="6.002" height="6.005" rx="3.001" />
                <rect x="93.005" width="6.002" height="6.005" rx="3.001" />
                <rect x="124.007" width="6.002" height="6.005" rx="3.001" />
                <rect y="24.015" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="24.015"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="24.015"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="24.015"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="24.015"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="48.029" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="48.029"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="48.029"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="48.029"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="48.029"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="72.044" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="72.044"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="72.044"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="72.044"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="72.044"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="96.059" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="96.059"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="96.059"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="96.059"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="96.059"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="120.073" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="120.073"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="120.073"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="120.073"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="120.073"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="144.088" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="144.088"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="144.088"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="144.088"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="144.088"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="168.103" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="168.103"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="168.103"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="168.103"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="168.103"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="192.117" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="192.117"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="192.117"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="192.117"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="192.117"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
              </g>
            </svg>
          </div>
          <div className="flex relative z-30 flex-col justify-center pl-4 md:pr-12 xl:pr-12 md:pl-24">
            <h3 className="text-4xl font-extrabold leading-tight text-white">
              Solar Quest <br />
              Renewable Energy Solutions
            </h3>
            <p className="text-xl text-white leading-normal pt-3 xl:w-10/12">
              We take the guess work out of transitionning to renewable solar
              energy solutions. Create your account and we can give you the best
              information and set you up with the right solution.
            </p>
          </div>
          <div className="z-20 absolute bottom-0 left-0 pb-3 pl-3 text-white">
            <svg width={199} height={131} xmlns="http://www.w3.org/2000/svg">
              <g
                transform="rotate(-90 65.5 65)"
                fill="#F7FAFC"
                fillRule="evenodd"
              >
                <rect width="6.002" height="6.005" rx="3.001" />
                <rect x="31.002" width="6.002" height="6.005" rx="3.001" />
                <rect x="62.003" width="6.002" height="6.005" rx="3.001" />
                <rect x="93.005" width="6.002" height="6.005" rx="3.001" />
                <rect x="124.007" width="6.002" height="6.005" rx="3.001" />
                <rect y="24.015" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="24.015"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="24.015"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="24.015"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="24.015"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="48.029" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="48.029"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="48.029"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="48.029"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="48.029"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="72.044" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="72.044"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="72.044"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="72.044"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="72.044"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="96.059" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="96.059"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="96.059"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="96.059"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="96.059"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="120.073" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="120.073"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="120.073"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="120.073"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="120.073"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="144.088" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="144.088"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="144.088"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="144.088"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="144.088"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="168.103" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="168.103"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="168.103"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="168.103"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="168.103"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect y="192.117" width="6.002" height="6.005" rx="3.001" />
                <rect
                  x="31.002"
                  y="192.117"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="62.003"
                  y="192.117"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="93.005"
                  y="192.117"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
                <rect
                  x="124.007"
                  y="192.117"
                  width="6.002"
                  height="6.005"
                  rx="3.001"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index;
