import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative overflow-hidden w-full md:h-[80vh]">
      <Image
        height={1226}
        width={2000}
        alt="Solar Panels"
        src="/images/home_panels.jpg"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50">
        {/* <div className="w-full p-8 flex items-center bg-red-500/80 z-20">
          <div className="flex-1">
            <h2 className="text-white font-bold text-[1.5rem] md:text-3xl lg:text-4xl leading-10">
              Say Goodbye to Load Shedding & Save Money While You Do It
            </h2>
            <h2 className="text-white font-extrabold text-[1.5rem] md:text-3xl lg:text-4xl leading-10">
              FINANCING OPTIONS AVAILABLE
            </h2>
          </div>
          <Image
            src="/images/logo-lg.png"
            alt="logo"
            width={810}
            height={183}
            className="w-1/4 object-cover"
          />
        </div> */}
        <div className=" px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              src="/images/phocos-any-grid.png"
              width={1122}
              height={1467}
              alt="Phocos Any Grid"
              className="w-full hidden md:inline-block  object-cover"
            />
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-start md:pr-12">
              <h2 className="text-white text-center font-bold text-[1.5rem] md:text-3xl leading-10">
                Winter Promotion <br />
                <span className="text-2xl font-extrabold md:text-3xl lg:text-5xl">
                  {" "}
                  Up to 30% off Phocos Any Grid Systems
                </span>{" "}
                <br />
                The Most Advanced True Hybrid Inverter Ever Built!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
