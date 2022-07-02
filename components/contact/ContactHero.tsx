import Image from "next/future/image";

const ContactHero = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl lg:my-32 px-4 mt-16">
        <div className="flex items-center justify-center">
          <hr className="w-2.5 h-16 bg-red-600" />
          <h1 className="text-3xl font-bold text-red-600 pl-7">Locations</h1>
        </div>
        <div className="lg:mt-16 mt-8 lg:flex items-end">
          <div className="lg:w-1/2 lg:border-r border-black lg:pr-24 lg:pb-24">
            <img
              loading="lazy"
              src="/images/solar_portrait_2.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="lg:pb-24 lg:pl-24 lg:pt-0 pt-8">
              <div>
                <p className="text-2xl text-red-700 font-semibold">
                  Johannesburg
                </p>
                <p className="text-lg pt-5">
                  9 Kramer Road, Kramerville Sandton
                </p>
                <p className="text-lg pt-1">+27 10 055 3151</p>
                <p className="text-lg pt-1">South Africa</p>
              </div>
              <div className="lg:pt-24 pt-8">
                <p className="text-2xl text-red-700 font-semibold">Cape Town</p>
                <p className="text-lg pt-5">
                  Unit 3 Northgate Business Park, Brooklyn
                </p>
                <p className="text-lg pt-1">+27 21 023 2475</p>
                <p className="text-lg pt-1">South Africa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-center w-full">
          <div className="lg:w-2/5 lg:border-t lg:border-r border-black">
            <div className="lg:pr-24 lg:pt-24 pt-8 lg:pb-24">
              <p className="text-2xl text-red-700 font-semibold">Harare</p>
              <p className="text-lg pt-5">330 Samora Machel Avenue, Eastlea</p>
              <p className="text-lg pt-1">+263 786 236 080</p>
              <p className="text-lg pt-1">Zimbabwe</p>
            </div>
          </div>
          <div className="lg:w-2/5 lg:border-t border-black">
            <div className="lg:pl-24 lg:pt-24 pt-8 lg:pb-24">
              <div>
                <p className="text-2xl text-red-700 font-semibold">Lusaka</p>
                <p className="text-lg pt-5">
                  Plot 6110 Manchinchi Road Northmead
                </p>
                <p className="text-lg pt-1">+260 96 873 8350</p>
                <p className="text-lg pt-1">Zambia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
