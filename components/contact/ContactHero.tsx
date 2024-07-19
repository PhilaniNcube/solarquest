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
