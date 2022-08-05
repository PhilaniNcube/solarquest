import React, { useEffect, useState } from "react";
export default function Cookie() {

  const [open, setOpen] = useState(false)

  return (
    <div className="absolute bottom-10 right-10">
      <div className="relative rounded bg-gray-200 shadow-lg py-8 px-3 bg-white">
        <div className="flex flex-col items-center sm:flex-row sm:items-end">
          <img src="https://i.ibb.co/SNxGHrs/2020-06-11-15-39-1.png" />
          <div className="mt-4 sm:mt-0 sm:ml-5">
            <p className="text-lg font-bold leading-none text-gray-800">
              We serve cookies
            </p>
            <p className="w-72 text-sm leading-tight text-gray-500 mt-3">
              This website uses cookies to improve user experience. By using our
              website you consent to all cookies in accordance with our Cookie
              Policy.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-6 py-3 bg-red-700 focus:outline-none hover:bg-opacity-80 rounded text-xs font-semibold leading-3 text-gray-100"
            >
              Accept &amp; continue
            </button>
          </div>
        </div>
        <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-400 text-gray-600 transition duration-150 ease-in-out">
          <svg
            onClick={() => setOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Close"
            className="icon icon-tabler icon-tabler-x"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </div>
      </div>
    </div>
  );
}
