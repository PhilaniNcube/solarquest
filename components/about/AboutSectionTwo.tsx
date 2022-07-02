import Image from "next/future/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg md:text-xl font-medium text-red-600 mt-4 ">
            Solarquest provides customized solar solutions to meet your home
            requirements.
          </p>
        </div>
        <Image
          src="/images/installation.jpg"
          className="w-full object-cover rounded-lg"
          alt="installations"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg md:text-xl font-medium text-red-600 mt-4 ">
            Our systems are designed to alleviate and remove the burdens placed
            by continuous power cuts, rising energy costs and lost revenue from
            inefficient power suppliers.
          </p>
        </div>
        <Image
          src="/images/inverter.jpg"
          className="w-full object-cover rounded-lg"
          alt="installations"
        />
      </div>
    </section>
  );
};
export default AboutSectionTwo;
