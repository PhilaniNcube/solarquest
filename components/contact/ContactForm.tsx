import { useRouter } from "next/router";
import React from "react";
import analytics from "../../utils/analytics";

const ContactForm = () => {

   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();



       const {  last_name, first_name, email, telephone, address, electricity } = Object.fromEntries(
         new FormData(e.currentTarget)
       );

     let request = await fetch(
       `/api/contact`,
       {
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
       }
     );

     let response = await request.json()

     console.log(response)

     analytics.track("generate_lead", {
      id: response.data?.id
     });

     router.push("/thankyou");
   };

  return (
    <div>
      <h2 className="text-xl md:text-3xl mb-4 font-medium text-red-600">
        Get In Touch
      </h2>
      <p className="text-md text-red-600 font-medium mb-3">
        Our team will be in touch to take you through the process
      </p>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label
              className="placeholder:text-slate-700 text-sm font-medium"
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
              <option  value="">Select a value</option>
              <option value="Less than R1500">Less than R1500</option>
              <option value="R1500-R2500">R1500-R2500</option>
              <option value="R2501-R4500">R2501-R4500</option>
              <option value="Greater than R4500">Greater than R4500</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-600 rounded-lg text-white py-2 px-6 font-bold mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
