

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
    // {
    //   link: 'Products',
    //   href: '/products',
    //   active: router.asPath === '/products'
    // },
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
      <nav className="items-center justify-between hidden px-4 py-3 mx-auto text-white bg-transparent max-w-7xl md:flex">
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
          <span className="flex space-x-3 text-base text-gray-800">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <motion.div animate={{ opacity: link.active ? 1 : 0.8 }}>
                  <button
                  type="button"
                    className={`text-md hover:text-red-500 font-bold ${
                      link.active
                        ? "text-red-600 underline-offset-8"
                        : "text-gray-900"
                    }`}
                  >
                    {link.link}
                  </button>
                  {link.active && (
                    <motion.div
                      className="h-1 underline bg-red-500"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </span>

        </div>
      </nav>
      {/* Desktop Nav Ends */}

      {/**Mobile Navigation**/}
      <nav className="flex justify-between px-4 py-3 md:hidden">
        <Link href="/">
          <img
            className="object-cover h-8"
            alt="logo"
            src="/images/logo-red.png"
          />
        </Link>

        <RiMenu3Fill
          className="w-8 h-8 text-red-600"
          onClick={() => setOpen(!open)}
        />
        <AnimatePresence >
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 z-50 flex w-screen h-screen bg-red-600"
            >
              <RiCloseFill
                className="absolute w-8 h-8 text-white top-10 left-10"
                onClick={() => setOpen(false)}
              />
              <div className="flex flex-col items-center justify-between w-full px-6 py-8 space-y-4">
                {navLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <button
                      type="button"
                      className="text-xl font-medium text-white"
                      onClick={() => setOpen(false)}
                    >
                      {link.link}
                    </button>
                  </Link>
                ))}


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
