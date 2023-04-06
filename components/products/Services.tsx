import Image from "next/image";
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
            Going solar will give you and your family the long term stability of
            consistent electricity at a fixed price. All long as the sun is
            shining your power has no additional running costs beyond your
            initial investment.
          </p>
          <p className="text-gray-600 font-medium text-lg mt-3">
            With load shedding becoming a constant in the daily lives in South
            Africa, unreliable power, exorbitant costs and constant electricity
            price increases will be a thing of the past with a Solarquest Solar
            Solution!
          </p>
          <Link href="/contact">
            <button className="mt-2 bg-red-600 max-w-[180px] text-white font-bold text-md px-8 py-2 rounded">
              I am interested
            </button>
          </Link>
        </div>
        <div className="w-full bg-gray-400 rounded-lg relative">
          <Image
            src="/images/roof.jpg"
            alt="roof"
            width={1920}
            height={1080}
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default Services;
