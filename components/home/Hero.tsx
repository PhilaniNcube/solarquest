import { FunctionComponent } from "react";

const Hero : FunctionComponent = () => {
  return <section className="bg-cover bg-center bg-no-repeat h-screen bg-gray-600 bg-blend-multiply" style={{backgroundImage: 'url(./images/panel-installation.jpg)'}}>
    <div className="max-w-7xl mx-auto px-6 md:px-4 h-full">
       <div className="h-full w-full flex flex-col py-8 md:py-16 justify-center">
        <p className="text-white uppercase text-sm md:text-md">Human Innovation</p>
        <h1 className="text-2xl md:text-3xl lg:text-6xl text-white tracking-wide">Limitless power <br/> from the sun</h1>

        <button className="max-w-[200px] mt-3 border rounded-full border-yellow-700 hover:bg-yellow-600 text-white font-medium uppercase text-lg py-3 transition-all duration-300">Get Started</button>

       </div>
    </div>
  </section>;
};
export default Hero;
