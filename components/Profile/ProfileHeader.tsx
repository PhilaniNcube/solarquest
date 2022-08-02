import React from "react";
import { ProfileType } from "../../Types";
import ProfileBody from "./ProfileBody";
const ProfileHeader = ({profile}:{profile: ProfileType}) => {



  return (
    <>
      {/* Code block starts */}
      <header className="mt-32 mb-4 max-w-7xl px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
            {profile.first_name} {profile.last_name}
          </h4>
          <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">


            <li className="flex items-center mt-4 md:mt-0">
              <div className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plane-departure"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                    transform="rotate(-15 12 12) translate(0 -1)"
                  />
                  <line x1={3} y1={21} x2={21} y2={21} />
                </svg>
              </div>
              <span>Profile Created on {new Date(profile.created_at).toLocaleDateString()}</span>
            </li>
          </ul>
          <p className="text-sm text-gray-400">{profile.email}</p>
        </div>
        <div className="mt-6 md:mt-0">
          <button className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-red-700 dark:hover:bg-gray-600 dark:text-red-600 px-5 py-2 text-sm">
            Back
          </button>
          <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-8 py-2 text-sm">
            Edit Profile
          </button>
        </div>
        {/* Code block ends */}
      </header>
      <ProfileBody />
    </>
  );
};
export default ProfileHeader;
