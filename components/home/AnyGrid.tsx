import Image from "next/future/image";

const AnyGrid = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl max-w-7xl mx-auto my-12 md:my-16">
      <Image
        height={1226}
        width={2000}
        alt="Solar Panels"
        src="/images/home_panels.jpg"
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="w-full p-8 flex items-center bg-red-500/80 z-20">
          <div className="flex-1">
            <h2 className="text-white font-bold text-[1.5rem] md:text-3xl lg:text-4xl leading-10">
              Say Goodbye to Load Shedding & Save Money While You Do It
            </h2>
          </div>
          <Image
            src="/images/logo-lg.png"
            alt="logo"
            width={810}
            height={183}
            className="w-1/4 object-cover"
          />
        </div>
        <div className=" px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              src="/images/phocos-any-grid.png"
              width={1122}
              height={1467}
              alt="Phocos Any Grid"
              className="w-full  object-cover"
            />
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-start md:pr-12">
              <h2 className="text-white text-center font-bold text-[1.5rem] md:text-3xl leading-10">
               Introducing the <br/>
               <span className="text-2xl font-extrabold md:text-3xl lg:text-5xl">{" "}Phocos Any Grid</span> <br />
               The Most Advanced True Hybrid Inverter Ever Built!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AnyGrid;
