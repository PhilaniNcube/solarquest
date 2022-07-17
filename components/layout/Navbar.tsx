
 import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";



const Navbar = () => {

  const { isLoading, user, error } = useUser();

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



  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ${
        scrollPosition > 100 ? "bg-zinc-800/75" : "bg-zinc-800"
      }`}
    >
      {/* Desktop Nav Starts */}
      <nav
        className="max-w-7xl mx-auto px-4 py-3 hidden md:flex items-center justify-between bg-transparent text-white "
        aria-roledescription="navigation"
        role="navigation"
      >
        <Link href="/">
          <img
            src="./images/logo-red.png"
            alt="Solar Quest"
            className="h-12 object-cover"
          />
        </Link>

        <div className="flex items-center">
          <span className="flex space-x-3 text-white text-base">
            <Link href="/">
              <a className="uppercase">Home</a>
            </Link>
            <Link href="/about">
              <a className="uppercase">About Us</a>
            </Link>
            <Link href="/products">
              <a className="uppercase">Products</a>
            </Link>
            <Link href="/contact">
              <a className="uppercase">Contact</a>
            </Link>
          </span>
          {!user ? (
            <Fragment>
              <Link href="/sign-in">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Get Started
                </button>
              </Link>
            </Fragment>
          ) : error ? (
            <Fragment>
              <Link href="/products">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Products
                </button>
              </Link>

              <Link href="/about">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  About Us
                </button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link href="/register">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Get Started
                </button>
              </Link>

              <Link href="/api/auth/logout">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Logout
                </button>
              </Link>
            </Fragment>
          )}
        </div>
      </nav>
      {/* Desktop Nav Ends */}
    </header>
  );
};

export default Navbar;
