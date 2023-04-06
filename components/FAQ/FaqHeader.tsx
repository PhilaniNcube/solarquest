import Image from "next/image";

const FaqHeader = () => {
  return (
    <div className="relative max-w-7xl my-8 px-4  mx-auto">
      <div className="absolute px-4 top-0 left-0 w-full overflow-hidden rounded-md h-full">
        <div className="w-full bg-gray-800/60 h-full flex flex-col justify-center items-center text-white rounded-md">
          <h1 className="font-bold lg:text-6xl text-center uppercase text-3xl lg:leading-9 leading-7">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className="overflow-hidden">
        <Image
          width={1920}
          height={1080}
          quality={80}
          priority={true}
          className="rounded-md block  w-full h-[30vh] object-cover aspect-video"
          src="/images/faq.jpg"
          alt="Solar Power"
        />
      </div>
    </div>
  );
};
export default FaqHeader;
