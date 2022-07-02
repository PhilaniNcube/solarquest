import Link from "next/link";

const HomeSectionThree = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-red-600 p-4 md:p-16 flex flex-col max-h-[60vh] items-end  w-full h-full">
          <h2 className="text-white text-3xl font-bold md:text-3xl text-right">
            Move over to renewable <br />
            energy to power your home
          </h2>
          <p className="text-base text-white text-right max-w-[55ch] mt-2">
            Have you been considering changing from relying on Eskom for your
            electricty. With <span className="font-bold">Loadsheeding</span>{" "}
            becoming more prevalent. Solar power isnow a lot more attractive.
            Besides providing you with a renewable source of power, it can also
            save you money on your electricty bill, so it is a good investment
            especially in these times.
          </p>
          <Link href="/products">
            <a className="px-4 md:px-6 border broder-white text-white font-bold rounded-full py-2 mt-3">
              Our Products
            </a>
          </Link>
        </div>
        <div className="w-full h-full">
          <img
            src="/images/solar_panels.jpg"
            alt="panels"
            className="block w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeSectionThree;
