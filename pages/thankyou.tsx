import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

const ThankYou = () => {
  return (
    <Fragment>
      <Head>
        <title>Thank You | Solarquest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="max-w-7xl mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full px-6 flex flex-col justify-center items-start">
            <h1 className="text-3xl md:text-5xl font-bold text-red-600">
              Thank You!
            </h1>
            <p className="text-lg font-medium text-gray-600">
              We have received your information. A representative of Solarquest
              will be contacting you in due course.
            </p>
            <Link
              href="/products"
              className="bg-red-600 rounded-md text-white py-2 px-6 font-bold mt-3"
            >
              View our products
            </Link>
          </div>
          <div className="px-6">
            <Image
              width={1920}
              height={1080}
              className="w-full object-cover"
              src="/images/batteries-preview.jpeg"
              alt="batteries"
            />
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default ThankYou;
