import Link from "next/link";
import { RiFacebookBoxLine, RiFacebookCircleFill, RiFacebookFill, RiFacebookLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const Footer = () => (
  <footer>
    <div className="relative pt-6 bg-red-600">
      <div className="max-w-7xl relative z-10 mx-auto lg:flex justify-between px-6 pt-8 lg:pt-32 pb-6 lg:pb-28">
        <div className="lg:w-1/4 pb-12 lg:pb-0">
          <img className="mb-8" src="/images/logo-lg.png" alt="logo" />
          <p className="text-white text-xl">
            9 Kramer Road, Kramerville, Sandton
          </p>
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
            <RiFacebookFill className="text-red-600 bg-white h-10 w-10 rounded-full" />
          </div>
          <div className="bg-white p-1 rounded-full mr-2.5">
            <RiTwitterFill className="text-red-600 bg-white h-10 w-10 rounded-full" />
          </div>
          <div className="bg-white p-1 rounded-full mr-2.5">
            <RiLinkedinFill className="text-red-600 bg-white h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
