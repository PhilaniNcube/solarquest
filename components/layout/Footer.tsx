import Link from "next/link";
import { RiCellphoneLine, RiFacebookBoxLine, RiFacebookCircleFill, RiFacebookFill, RiFacebookLine, RiLinkedinFill, RiTwitterFill, RiWhatsappLine } from "react-icons/ri";

const Footer = () => (
  <footer>
    <div className="relative pt-6 bg-red-600">
      <div className="relative z-10 justify-between px-6 pt-8 pb-6 mx-auto max-w-7xl lg:flex lg:pt-32 lg:pb-28">
        <div className="pb-12 lg:w-1/4 lg:pb-0">
          <img className="mb-8" src="/images/logo-lg.png" alt="logo" />
          <article className="flex items-start mt-4 text-lg font-medium text-white md:text-xl">
            <span>
              <RiWhatsappLine className="w-6 h-6 mr-3" />
            </span>{" "}
            +27 81 838 1088
          </article>
          {/* <p className="text-xl text-white">
            9 Kramer Road, Kramerville
          </p>
          <p className="text-xl text-white">
            Sandton, Johannesburg, 2090
          </p>
          <p className="text-xl text-white">
            South Africa
          </p> */}
        </div>
        <div className="justify-between lg:w-1/2 sm:flex lg:justify-end">
          <div className="pb-12 lg:pr-24 lg:pb-0">
            <h3 className="mb-6 text-lg font-bold text-white">Links</h3>
            <ul className="text-white">

              <li className="mb-3">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              {/* <li>
                <Link href="/support">Support</Link>
              </li> */}
            </ul>
          </div>
          <div className="pb-12 lg:pr-24 lg:pb-0">
            {/* <h3 className="mb-6 text-lg font-bold text-white">Services</h3> */}
            <ul className="text-white">
              {/* <li className="mb-3">
                <Link href="/products">Products</Link>
              </li> */}
              {/* <li className="mb-3">
                <Link href="#">Installations</Link>
              </li> */}
              {/* <li className="mb-3">
                <Link href="#">Financing</Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">About</h3>
            <ul className="text-white">
              <li className="mb-3">
                <Link href="/about">About Us</Link>
              </li>

              <li className="mb-3">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-end mt-12 lg:w-1/4 lg:justify-end lg:mt-0">
          <div className="bg-white p-1 rounded-full mr-2.5">
            <Link href="https://www.facebook.com/SolarquestSA">
              <RiFacebookFill className="w-6 h-6 text-red-600 bg-white rounded-full md:h-10 md:w-10" />
            </Link>
          </div>
          <div className="bg-white p-1 rounded-full mr-2.5">
            <Link href="https://twitter.com/solarquestsa">
              <RiTwitterFill className="w-6 h-6 text-red-600 bg-white rounded-full md:h-10 md:w-10" />
            </Link>
          </div>
          <div className="bg-white p-1 rounded-full mr-2.5">
            <Link href="https://www.linkedin.com/company/solarquestco/?originalSubdomain=za">
              <RiLinkedinFill className="w-6 h-6 text-red-600 bg-white rounded-full md:h-10 md:w-10" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
