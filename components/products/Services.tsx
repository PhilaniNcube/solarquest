import Image from "next/future/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="my-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl text-red-600 font-bold">
            Why should you chose Solar?
          </h2>
          <p className="text-gray-600 font-medium text-lg mt-3">
            Going solar has the potential of saving you money over time. You may
            have to come up with a large amount up front, but with our financing
            options you could be paying as little as{" "}
            <span className="text-red-600 font-bold">R2499/month</span>
          </p>
          <p className="text-gray-600 font-medium text-lg mt-3">
            Also with load shedding becoming a daily occurance, Solar Power has
            also become more reliable than electricity from Eskom.
          </p>
          <p className="text-gray-600 font-medium text-lg mt-3">
            Get in touch with us and we will be able to get you the best
            solution.
          </p>
          <Link href="/contact">
          <button
            className="mt-2 bg-red-600 max-w-[180px] text-white font-bold text-md px-8 py-2 rounded"

            >
            I am interested
          </button>
          </Link>
        </div>
        <div className="w-full bg-gray-400 rounded-lg relative">
          <Image src="/images/roof.jpg" alt="roof" width={1920} height={1080} className="w-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};
export default Services;
