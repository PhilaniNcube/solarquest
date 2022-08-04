import { Switch } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiAccountBoxFill } from "react-icons/ri";
import BusinessSolutions from "./BusinessSolutions";
import HomeSectionTwo from "./HomeSolutions";

const Solutions = () => {

  const [enabled, setEnabled] = useState(true);

  return (
    <>
    <div className="flex w-[230px] mx-auto px-6 justify-between">
      <h2 className="text-red-600 font-bold text-2xl">Home</h2>

      <h2 className="text-blue-700 font-bold text-2xl">Business</h2>
    </div>
      <div className="flex justify-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-red-600" : "bg-blue-700"}
          relative inline-flex h-[38px] w-[150px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-0" : "translate-x-28"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
      <AnimatePresence exitBeforeEnter>

      {enabled ? <HomeSectionTwo /> : <BusinessSolutions /> }
      </AnimatePresence>


    </>
  );
};
export default Solutions;
