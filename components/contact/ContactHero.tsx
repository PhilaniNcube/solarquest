import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiCellphoneLine, RiMailAddLine, RiMapPin2Line, RiPhoneCameraLine, RiPhoneLine } from "react-icons/ri";
import analytics from "../../utils/analytics";


type Props = {
  query: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  };
};

const ContactHero = () => {

  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const query = router.query

     const url = new URL(`https://solarquest.co.za${router.asPath}`);
     console.log(url);
     const source = url.searchParams.get("utm_source");
     const google = url.searchParams.get("gclid");
     const facebook = url.searchParams.get("fbclid");
     const medium = url.searchParams.get("utm_medium");

    const setSource = () => {
      console.log("referrer", document.referrer);

      if (source && medium) {
        localStorage.setItem("utm_source", source);
        localStorage.setItem("utm_medium", medium);
      } else if (google) {
        localStorage.setItem("utm_source", "google");
        localStorage.setItem("utm_medium", "ppc");
      } else if (facebook) {
        localStorage.setItem("utm_source", "facebook");
        localStorage.setItem("utm_medium", "paid social");
      } else if (source === undefined) {
        localStorage.setItem("utm_source", "direct");
        localStorage.setItem("utm_medium", "(not set)");
      }
    };

   useEffect(() => {
    // check if we are on the client
    if (typeof window !== "undefined") {
      setSource();
    }
   },[])





   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setLoading(true)

         const source = localStorage.getItem("utm_source");
         const medium = localStorage.getItem("utm_medium");

     const { last_name, first_name, email, telephone, address, electricity } =
       Object.fromEntries(new FormData(e.currentTarget));

     let request = await fetch(`/api/contact`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`,
       },
       body: JSON.stringify({
         first_name: first_name,
         last_name: last_name,
         email: email,
         telephone: telephone,
         address: address,
         electricity: electricity,
         utm_campaign: query?.utm_campaign || "",
         utm_source: source ,
          utm_medium: medium,
       }),
     });

     let response = await request.json();

     console.log({status: response.status, message: response.message});

         if (request.status === 400) {
           alert(
             "There was an error processing the request. Please check that you have not already submitted a form before, or that your email address is correct."
           );
           setLoading(false);
           return;
         }

       analytics.track("generate_lead", {

       });
     setLoading(false)
     router.push("/thankyou");
   };

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-0 my-16 py-8 md:py-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600">
            Get in touch
          </h1>
          <p className="font-medium mt-4 text-xl md:text-2xl text-gray-600">
            Projects should serve a purpose beyond meeting objectives, they must
            be long-lasting, impactful and sustainable for future generations.
          </p>
          {/* <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiMapPin2Line className="mr-3 h-6 w-6" />
            </span>{" "}
            9 Kramer Road, Kramerville, <br />
            Sandton, Johannesburg
          </article> */}

          {/* <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiPhoneLine className="mr-3 h-6 w-6" />
            </span>{" "}
            +27 10 055 3151
          </article> */}
          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiMapPin2Line className="mr-3 h-6 w-6" />
            </span>{" "}
            Unit 3 Northgate Business Park, Brooklyn, <br />
            Cape Town, 7405
          </article>

          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiPhoneLine className="mr-3 h-6 w-6" />
            </span>{" "}
            +27 21 023 2475
          </article>
          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiCellphoneLine className="mr-3 h-6 w-6" />
            </span>{" "}
            +27 81 838 1088
          </article>
          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiMailAddLine className="mr-3 h-6 w-6" />
            </span>{" "}
            info@solarquest.co.za
          </article>
        </div>
        <div className="flex flex-col justify-center">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label
                  className="text-gray-600 text-sm font-medium"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="px-4 py-2 placeholder:text-slate-700 text-sm border border-gray-200 rounded-md"
                  type="text"
                  placeholder="First Name"
                  required
                  id="first_name"
                  name="first_name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="placeholder:text-slate-700 text-sm font-medium"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="px-4 py-2 placeholder:text-slate-700 text-sm border border-gray-200 rounded-md"
                  type="text"
                  placeholder="Last Name"
                  required
                  id="last_name"
                  name="last_name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex flex-col">
                <label
                  className="placeholder:text-slate-700 text-sm font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="px-4 py-2 placeholder:text-slate-700 text-sm border border-gray-200 rounded-md"
                  type="email"
                  placeholder="Email Address"
                  required
                  id="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="placeholder:text-slate-700 text-sm font-medium"
                  htmlFor="telephone"
                >
                  Contact Number
                </label>
                <input
                  className="px-4 py-2 placeholder:text-slate-700 text-sm border border-gray-200 rounded-md"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  id="telephone"
                  name="telephone"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <label
                className="placeholder:text-slate-700 text-sm font-medium"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="px-4 py-2 placeholder:text-slate-700 text-sm border border-gray-200 rounded-md"
                type="text"
                placeholder="Address"
                required
                id="address"
                name="address"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex flex-col">
                <label
                  className="placeholder:text-slate-700 text-sm font-medium "
                  htmlFor="electricity"
                >
                  What is your current electricity bill?
                </label>
                <select
                  className="px-4 py-2 placeholder:text-slate-700 text-sm border border-gray-200 rounded-md"
                  placeholder="Phone Number"
                  required
                  id="electricity"
                  name="electricity"
                >
                  <option value="">Select a value</option>
                  <option value="Less than R1500">Less than R1500</option>
                  <option value="R1500-R2500">R1500-R2500</option>
                  <option value="R2501-R4500">R2501-R4500</option>
                  <option value="Greater than R4500">Greater than R4500</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 rounded-md text-white py-2 px-6 font-bold mt-3"
            >
              {loading ? 'Loading...': 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
