

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import analytics from "../../utils/analytics";



const Navbar = () => {

  const router = useRouter();


  const navLinks = [
    {
      link: 'Home',
      href: '/',
      active: router.asPath === '/'
    },
    {
      link: 'About Us',
      href: '/about',
      active: router.asPath === '/about'
    },
    {
      link: 'Products',
      href: '/products',
      active: router.asPath === '/products'
    },
    {
      link: 'Contact',
      href: '/contact',
      active: router.asPath === '/contact'
    },
  ]

  const [open, setOpen] = useState(false)
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
      className={`z-50 w-full bg-transparent transition-colors sticky top-0 left-0 right-0 duration-[1000ms] ${
        scrollPosition > 100 ? "backdrop-blur-lg  top-0 left-0 right-0" : ""
      }`}
    >
      {/* Desktop Nav Starts */}
      <nav className="max-w-7xl mx-auto px-4 py-3 hidden md:flex items-center justify-between bg-transparent text-white">
        <Link href="/">
          <AnimatePresence>
            <motion.img
              src="/images/logo-red.png"
              alt="Solarquest"
              className={`object-cover transition-all duration-500 ${
                scrollPosition > 100 ? "h-20 md:h-32" : "h-24"
              }`}
            />
          </AnimatePresence>
        </Link>

        <div className="flex items-center">
          <span className="flex space-x-3 text-gray-800 text-base">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <motion.div animate={{ opacity: link.active ? 1 : 0.8 }}>
                  <a
                    className={`text-md hover:text-red-500 font-bold ${
                      link.active
                        ? "text-red-600 underline-offset-8"
                        : "text-gray-900"
                    }`}
                  >
                    {link.link}
                  </a>
                  {link.active && (
                    <motion.div
                      className="underline h-1 bg-red-500"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </span>
          <Link href="/contact">
            <button
              onClick={() => analytics.track("Goal - 1")}
              className="ml-4 bg-red-500 rounded-full px-6 font-bold py-2 text-white"
            >
          Get Quote
            </button>
          </Link>
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
        <AnimatePresence >
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
                {navLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <a
                      className="text-white font-medium text-xl"
                      onClick={() => setOpen(false)}
                    >
                      {link.link}
                    </a>
                  </Link>
                ))}

                <div className="w-full items-center py-4 rounded flex flex-col space-y-4">
                  <Link href="/contact">
                    <button
                      onClick={() => setOpen(false)}
                      className="ml-4 bg-white rounded-full px-6 font-bold py-2 text-red-600"
                    >
                      Get Quote
                    </button>
                  </Link>
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
