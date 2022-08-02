import Image from "next/future/image";
import React from "react";
import { RiMailAddLine, RiMapPin2Line, RiPhoneCameraLine, RiPhoneLine } from "react-icons/ri";

const ContactHero = () => {

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
 }

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-0 my-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600">
            Get in touch
          </h1>
          <p className="font-medium mt-4 text-xl md:text-2xl text-gray-600">
            Projects should serve a purpose beyond meeting objectives, they must
            be long-lasting, impactful and sustainable for future generations.
          </p>
          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiMapPin2Line className="mr-3 h-6 w-6" />
            </span>{" "}
            9 Kramer Road, Kramerville, <br />
            Sandton, Johannesburg
          </article>
          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiPhoneLine className="mr-3 h-6 w-6" />
            </span>{" "}
            +27 10 055 3151
          </article>
          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiPhoneLine className="mr-3 h-6 w-6" />
            </span>{" "}
            +27 81 838 1088
          </article>
          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-gray-600">
            <span>
              <RiMailAddLine className="mr-3 h-6 w-6" />
            </span>{" "}
            marketing@solarquest.co.za
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex flex-col">
                <label
                  className="placeholder:text-slate-700 text-sm font-medium "
                  htmlFor="electricty"
                >
                  What is your current electricty bill?
                </label>
                <select
                  className="px-4 py-2 placeholder:text-slate-700 text-sm border border-gray-200 rounded-md"
                  placeholder="Phone Number"
                  required
                  id="electricty"
                  name="electricty"
                >
                  <option value="Less than R1500">Less than R1500</option>
                  <option value="R1500-R2500">R1500-R2500</option>
                  <option value="R2501-R4500">R2501-R4500</option>
                  <option value="Greater than R4500">Greater than R4500</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  className="placeholder:text-slate-700 text-sm font-medium "
                  htmlFor="province"
                >
                 Province
                </label>
                <select
                  className="px-4 py-2 placeholder:text-slate-700 text-sm border border-gray-200 rounded-md"
                  placeholder="Phone Number"
                  required
                  id="province"
                  name="province"
                >
                  <option value="Gauteng">Gauteng</option>
                  <option value="Western Cape">Western Cape</option>
                  <option value="KZN">KZN</option>
                  <option value="Eastern Cape">Eastern Cape</option>
                  <option value="Mpumalanga">Mpumalanga</option>
                  <option value="Limpopo">Limpopo</option>
                  <option value="Free State">Free State</option>
                  <option value="Northern Cape">Northern Cape</option>
                  <option value="North West">North West</option>
                </select>
              </div>
            </div>

            <button type="submit" className="bg-red-600 py-2 px-6 mt-4 rounded-full text-white font-medium text-lg">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
