import Link from "next/link";
import { RiCellphoneLine, RiFacebookBoxLine, RiFacebookCircleFill, RiFacebookFill, RiFacebookLine, RiLinkedinFill, RiTwitterFill, RiWhatsappLine } from "react-icons/ri";

const Footer = () => (
  <footer>
    <div className="relative pt-6 bg-red-600">
      <div className="max-w-7xl relative z-10 mx-auto lg:flex justify-between px-6 pt-8 lg:pt-32 pb-6 lg:pb-28">
        <div className="lg:w-1/4 pb-12 lg:pb-0">
          <img className="mb-8" src="/images/logo-lg.png" alt="logo" />
          <article className="font-medium flex items-start mt-4 text-lg md:text-xl text-white">
            <span>

              <RiWhatsappLine className="mr-3 h-6 w-6" />
            </span>{" "}
            +27 81 838 1088
          </article>
          {/* <p className="text-white text-xl">
            9 Kramer Road, Kramerville
          </p>
          <p className="text-white text-xl">
            Sandton, Johannesburg, 2090
          </p>
          <p className="text-white text-xl">
            South Africa
          </p> */}
        </div>
        <div className="lg:w-1/2 sm:flex justify-between lg:justify-end">
          <div className="lg:pr-24 pb-12 lg:pb-0">
            <h3 className="mb-6 text-lg text-white font-bold">Links</h3>
            <ul className="text-white">
              <li className="mb-3">
                <Link href="/faq">
                  <a>Frequently asked questions</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
          </div>
          <div className="lg:pr-24 pb-12 lg:pb-0">
            <h3 className="mb-6 text-lg text-white font-bold">Services</h3>
            <ul className="text-white">
              <li className="mb-3">
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#">
                  <a>Installations</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="#">
                  <a>Financing</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg text-white font-bold">About</h3>
            <ul className="text-white">
              <li className="mb-3">
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/about#team">
                  <a>Team</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/4 flex lg:justify-end items-end mt-12 lg:mt-0">
          <div className="bg-white p-1 rounded-full mr-2.5">
            <Link href="https://www.facebook.com/SolarquestSA">
              <RiFacebookFill className="text-red-600 h-6 w-6 bg-white md:h-10 md:w-10 rounded-full" />
            </Link>
          </div>
          <div className="bg-white p-1 rounded-full mr-2.5">
            <Link href="https://twitter.com/solarquestsa">
              <RiTwitterFill className="text-red-600 h-6 w-6 bg-white md:h-10 md:w-10 rounded-full" />
            </Link>
          </div>
          <div className="bg-white p-1 rounded-full mr-2.5">
            <Link href="https://www.linkedin.com/company/solarquestco/?originalSubdomain=za">
              <RiLinkedinFill className="text-red-600 h-6 w-6 bg-white md:h-10 md:w-10 rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
