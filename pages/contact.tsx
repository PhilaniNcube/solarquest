import type { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solarquest - No Longer Operating</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://solarquest.co.za" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Solarquest is no longer operating in South Africa. Existing clients are now serviced by The Energy Plug."
        />
      </Head>

      <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
        <div className="w-full max-w-2xl text-center">
          <div className="p-8 bg-white rounded-lg shadow-lg md:p-12">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="/images/logo-lg.png"
                alt="Solarquest Logo"
                className="h-16 mx-auto md:h-20"
              />
            </div>

            {/* Main Notice */}
            <h1 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
              Important Notice
            </h1>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg md:text-xl">
                <strong>
                  Solarquest is no longer operating in South Africa.
                </strong>
              </p>

              <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
                <p className="mb-4 text-gray-800">
                  <strong>Existing clients:</strong> Your servicing has been
                  taken over by The Energy Plug.
                </p>

                <div className="space-y-2">
                  {" "}
                  <p className="flex items-center justify-center gap-2">
                    <span className="font-semibold">Tel/WhatsApp:</span>
                    <a
                      href="tel:+27750236287
"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      +27750236287
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <a
                      href="mailto:theenergyplug@gmail.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      theenergyplug@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                Thank you for your understanding and continued support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
