import Image from "next/future/image";
import Link from "next/link";

const HomeSectionThree = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:p-16 flex flex-col max-h-[60vh] items-end  w-full h-full">
          <h2 className="text-red-600 text-3xl font-bold md:text-3xl text-right">
            Move over to renewable <br />
            energy to power your home
          </h2>
          <p className="text-base text-red-600 text-right max-w-[55ch] mt-2">
            Have you been considering changing from relying on Eskom for your
            electricty? With{" "}
            <span className="font-bold">Load shedding</span> becoming more
            prevalent. Solar power is now a lot more attractive. Besides
            providing you with a renewable source of electricity, it can also save you
            money on your electricty bill, so it is a good investment especially
            in these times.
          </p>
          <Link href="/products">
            <a className="px-4 md:px-6 border border-red-400 text-red-600 font-bold rounded-full py-2 mt-3">
              Our Products
            </a>
          </Link>
        </div>
        <div className="w-full h-full">
          <Image
            width={6000}
            height={4000}
            src="/images/green-energy.jpg"
            alt="green home"
            className="block w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeSectionThree;
