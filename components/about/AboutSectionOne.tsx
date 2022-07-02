import Image from "next/future/image";

const AboutSectionOne = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-12 lg:py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-x-2 border-b border-red-400 my-3">
        <div>
          <small className="text-sm text-gray-700">About Us</small>
          <h1 className="text-2xl md:text-4xl text-red-600 font-bold">
            You can depend on us
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-[70ch] py-2">
            We entered the industry in 1982 while solar technology was still in
            its infancy
          </p>
          <p className="text-sm md:text-base text-gray-600 max-w-[70ch] py-2">
            More than 55,000 installations and 40 years later we still carry
            that innovative spark; harnessing clean and affordable technology to
            improve access to renewable energy across the globe.
          </p>
          <p className="text-sm md:text-base text-gray-600 max-w-[70ch]">
            From household to national projects, we are solution based and
            future focused, looking for ways to reshape how homes, villages, and
            cities are powered.
          </p>
        </div>

        <Image src="/images/solar_landscape_2.jpg" alt="Solar" className="w-full md:ml-4 shadow-lg object-cover rounded-md"/>
      </div>
    </section>
  );
};
export default AboutSectionOne;
