import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { Fragment } from "react";


const faqs = [
  {
    question: "How do I find the right solar system for my needs?",
    answer:
      "In solar one size doesn’t fit all, which is why our team offers comprehensive consulting on your specific needs so we can recommend the right products for you.",
  },
  {
    question:
      "What installers does Solarquest partner with or recommend and how can I get in contact with them?",
    answer:
      "We recommend our Solarquest Elite installer network and will help guide you through the whole process from finding installers to completing your installation.",
  },
  {
    question: "Will my system work at night?",
    answer:
      "Yes! Solar batteries help store energy from peak sunlight hours in the day so your system can function 24/7 using back-up.",
  },
];


const Faq = () => {
  return (
    <section className="my-8 ">
      <div className="max-w-7xl mx-auto gap-4 grid grid-cols-6 px-4">
        <aside className="col-span-6 lg:col-span-2">
          <h2 className="text-2xl text-red-600 font-bold">
            Frequently asked questions about solar energy.
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Can't find the answer you are looking for? <br />
            Reach out to our{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link href="/contact">customer support</Link>
            </span>{" "}
            team.
          </p>
        </aside>
        <main className="col-span-6 lg:col-span-4">
          {faqs.map((faq, i) => (
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <Fragment key={i}>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-md lg:text-lg font-medium text-gray-700 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 ">
                    <span className="w-11/12">
                     {faq.question}
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-red-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform  h-0 opacity-0"
                    enterTo="transform  opacity-100"
                    leave="transition duration-300 ease-out"
                    leaveFrom="transform  opacity-100"
                    leaveTo="transform h-0 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-md text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </Fragment>
              )}
            </Disclosure>
          ))}


        </main>
      </div>
    </section>
  );
};
export default Faq;
