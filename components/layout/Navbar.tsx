
import { useUser } from "@supabase/auth-helpers-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";



const Navbar = () => {

  const { isLoading, user, error } = useUser();

  const [open, setOpen] = useState(false)

  console.log(user)

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
      className={`z-50 w-full transition-colors duration-[1000ms] ${
        scrollPosition > 100 ? "backdrop-blur-lg sticky top-0 left-0 right-0" : "bg-zinc-50"
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
            src="/images/logo-red.png"
            alt="Solarquest"
            className="h-20 object-cover"
          />
        </Link>

        <div className="flex items-center">
          <span className="flex space-x-3 text-gray-800 text-base">
            <Link href="/">
              <a className="text-md hover:text-red-500 font-bold">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-md hover:text-red-500 font-bold">About Us</a>
            </Link>
            <Link href="/products">
              <a className="text-md hover:text-red-500 font-bold">Products</a>
            </Link>
            <Link href="/contact">
              <a className="text-md hover:text-red-500 font-bold">Contact</a>
            </Link>
          </span>
          {!user ? (
            <Fragment>
              <Link href="/contact">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Get in touch
                </button>
              </Link>

              {/* <Link href="/register">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Register
                </button>
              </Link> */}
            </Fragment>
          ) : (
            <Fragment>
              <Link href="/contact">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Get in touch
                </button>
              </Link>
              {/* <Link href="/api/auth/logout">
                <button className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white">
                  Logout
                </button>
              </Link> */}
            </Fragment>
          )}
        </div>
      </nav>
      {/* Desktop Nav Ends */}

      {/**Mobile Navigation**/}
      <nav className="flex md:hidden justify-between py-3 px-4">
        <Link href="/">
          <img
            className="h-8 object-cover"
            alt="logo"
            src="/images/logo-red.png"
          />
        </Link>

        <RiMenu3Fill
          className="h-8 w-8 text-red-600"
          onClick={() => setOpen(!open)}
        />
        <AnimatePresence exitBeforeEnter>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-screen bg-red-600 h-screen flex z-50"
            >
              <RiCloseFill
                className="absolute top-10 left-10 h-8 w-8 text-white"
                onClick={() => setOpen(false)}
              />
              <div className="flex flex-col px-6 space-y-4 justify-between items-center py-8 w-full">
                <Link href="/">
                  <a
                    className="text-white font-medium text-xl"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/products">
                  <a
                    className="text-white font-medium text-xl"
                    onClick={() => setOpen(false)}
                  >
                    Products
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className="text-white font-medium text-xl"
                    onClick={() => setOpen(false)}
                  >
                    About
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    className="text-white font-medium text-xl"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </a>
                </Link>
                <div className="w-full items-center py-4 rounded flex flex-col space-y-4">
                  {user ? (
                    <>
                      <Link href="/contact">
                        <button
                          onClick={() => setOpen(false)}
                          className="ml-4 bg-white rounded-full px-6 font-bold py-2 text-red-600"
                        >
                          Get in touch
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link href="/contact">
                        <button
                          onClick={() => setOpen(false)}
                          className="ml-4 bg-white rounded-full px-6 font-bold py-2 text-red-600"
                        >
                          Get in touch
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
