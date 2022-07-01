import Link from "next/link";
import { useEffect, useState } from "react";



const Navbar = () => {


  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return <header className={`fixed top-0 left-0 z-50 w-full ${scrollPosition > 100 && 'bg-zinc-800/75 transition-colors duration-500'}`}>
{/* Desktop Nav Starts */}
   <nav className="max-w-7xl mx-auto px-4 py-3 hidden md:flex items-center justify-between bg-transparent text-white " aria-roledescription="navigation" role="navigation">

    <Link href="/"><img src="./images/logo-lg.png" alt="Solar Quest" className="h-12 object-cover" /></Link>

    <span className="flex space-x-3 text-white text-base">
      <Link href="/"><a className="uppercase">Home</a></Link>
      <Link href="/about"><a className="uppercase">About Us</a></Link>
      <Link href="/products"><a className="uppercase">Products</a></Link>
      <Link href="/services"><a className="uppercase">Services</a></Link>
    </span>
   </nav>
{/* Desktop Nav Ends */}

  </header>;
};

export default Navbar;
