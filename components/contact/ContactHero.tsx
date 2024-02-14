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







   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setLoading(true)

         const source = localStorage.getItem("utm_source");
         const medium = localStorage.getItem("utm_medium");

     const { last_name, first_name, email, telephone, address, electricity } =
       Object.fromEntries(new FormData(e.currentTarget));

     const request = await fetch("/api/contact", {
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

       }),
     });

     const response = await request.json();

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
				<div className="grid grid-cols-1 gap-6 px-4 py-8 mx-auto my-16 max-w-7xl lg:px-0 md:py-16 md:grid-cols-2">
					<div className="flex flex-col justify-center">
						<h1 className="text-3xl font-bold text-red-600 md:text-5xl">
							Get in touch
						</h1>
						<p className="mt-4 text-xl font-medium text-gray-600 md:text-2xl">
							Projects should serve a purpose beyond meeting objectives, they
							must be long-lasting, impactful and sustainable for future
							generations.
						</p>
						{/* <article className="flex items-start mt-4 text-lg font-medium text-gray-600 md:text-xl">
            <span>
              <RiMapPin2Line className="w-6 h-6 mr-3" />
            </span>{" "}
            9 Kramer Road, Kramerville, <br />
            Sandton, Johannesburg
          </article> */}

						{/* <article className="flex items-start mt-4 text-lg font-medium text-gray-600 md:text-xl">
            <span>
              <RiPhoneLine className="w-6 h-6 mr-3" />
            </span>{" "}
            +27 10 055 3151
          </article> */}
						<article className="flex items-start mt-4 text-lg font-medium text-gray-600 md:text-xl">
							<span>
								<RiMapPin2Line className="w-6 h-6 mr-3" />
							</span>{" "}
							Unit 3 Northgate Business Park, Brooklyn, <br />
							Cape Town, 7405
						</article>

						<article className="flex items-start mt-4 text-lg font-medium text-gray-600 md:text-xl">
							<span>
								<RiPhoneLine className="w-6 h-6 mr-3" />
							</span>{" "}
							+27 21 023 2475
						</article>
						<article className="flex items-start mt-4 text-lg font-medium text-gray-600 md:text-xl">
							<span>
								<RiCellphoneLine className="w-6 h-6 mr-3" />
							</span>{" "}
							+27 81 838 1088
						</article>
						<article className="flex items-start mt-4 text-lg font-medium text-gray-600 md:text-xl">
							<span>
								<RiMailAddLine className="w-6 h-6 mr-3" />
							</span>{" "}
							info@solarquest.co.za
						</article>
					</div>
					<div className="flex flex-col justify-center">
						<form
							className="w-full"
							// onSubmit={handleSubmit}
							action="https://api.web3forms.com/submit"
							method="POST"
						>
							<input
								type="hidden"
								name="access_key"
								value={`${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}`}
							/>
							<input
								type="hidden"
								name="subject"
								value="New submission from Solarquest"
							/>
							<input
								type="hidden"
								name="redirect"
								value="https://solarquest.co.za/thankyou"
							/>
							<input
								type="checkbox"
								className="hidden"
								name="botcheck"
								style={{ display: "none" }}
							/>
							<input type="hidden" name="from_name" value="Solarquest" />
							{/* <input type="hidden" name="ccemail" value="ncbphi001@gmail.com" /> */}
							<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
								<div className="flex flex-col">
									<label
										className="text-sm font-medium text-gray-600"
										htmlFor="first_name"
									>
										First Name
									</label>
									<input
										className="px-4 py-2 text-sm border border-gray-200 rounded-md placeholder:text-slate-700"
										type="text"
										placeholder="First Name"
										required
										id="first_name"
										name="first_name"
									/>
								</div>
								<div className="flex flex-col">
									<label
										className="text-sm font-medium placeholder:text-slate-700"
										htmlFor="last_name"
									>
										Last Name
									</label>
									<input
										className="px-4 py-2 text-sm border border-gray-200 rounded-md placeholder:text-slate-700"
										type="text"
										placeholder="Last Name"
										required
										id="last_name"
										name="last_name"
									/>
								</div>
							</div>
							<div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2">
								<div className="flex flex-col">
									<label
										className="text-sm font-medium placeholder:text-slate-700"
										htmlFor="email"
									>
										Email
									</label>
									<input
										className="px-4 py-2 text-sm border border-gray-200 rounded-md placeholder:text-slate-700"
										type="email"
										placeholder="Email Address"
										required
										id="email"
										name="email"
									/>
								</div>
								<div className="flex flex-col">
									<label
										className="text-sm font-medium placeholder:text-slate-700"
										htmlFor="telephone"
									>
										Contact Number
									</label>
									<input
										className="px-4 py-2 text-sm border border-gray-200 rounded-md placeholder:text-slate-700"
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
									className="text-sm font-medium placeholder:text-slate-700"
									htmlFor="address"
								>
									Address
								</label>
								<input
									className="px-4 py-2 text-sm border border-gray-200 rounded-md placeholder:text-slate-700"
									type="text"
									placeholder="Address"
									required
									id="address"
									name="address"
								/>
							</div>
							<div className="grid grid-cols-1 gap-3 mt-4 md:grid-cols-2">
								<div className="flex flex-col">
									<label
										className="text-sm font-medium placeholder:text-slate-700 "
										htmlFor="electricity"
									>
										What is your current electricity bill?
									</label>
									<select
										className="px-4 py-2 text-sm border border-gray-200 rounded-md placeholder:text-slate-700"
										placeholder="Phone Number"
										required
										id="electricity"
										name="electricity"
									>
										<option value="">Select a value</option>
										<option value="Less than R1500">Less than R1500</option>
										<option value="R1500-R2500">R1500-R2500</option>
										<option value="R2501-R4500">R2501-R4500</option>
										<option value="Greater than R4500">
											Greater than R4500
										</option>
									</select>
								</div>
							</div>

							<button
								type="submit"
								disabled={loading}
								className="px-6 py-2 mt-3 font-bold text-white bg-red-600 rounded-md"
							>
								{loading ? "Loading..." : "Submit"}
							</button>
						</form>
					</div>
				</div>
			</section>
		);
};
export default ContactHero;
