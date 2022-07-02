const Footer = () => (
  <footer>
    <div className="relative pt-6 bg-red-600">
      <div className="max-w-7xl relative z-10 mx-auto lg:flex justify-between px-6 pt-8 lg:pt-32 pb-6 lg:pb-28">
        <div className="lg:w-1/4 pb-12 lg:pb-0">
          <img className="mb-8" src="/images/logo-lg.png" alt="logo" />
          <p className="text-white text-xl">9 Kramer Road, Kramerville, Sandton</p>
        </div>
        <div className="lg:w-1/2 sm:flex justify-between lg:justify-end">
          <div className="lg:pr-24 pb-12 lg:pb-0">
            <h3 className="mb-6 text-lg text-white font-bold">Links</h3>
            <ul className="text-white">
              <li className="mb-3">
                <a>Products</a>
              </li>
              <li className="mb-3">
                <a>Claims</a>
              </li>
              <li className="mb-3">
                <a>Renewals</a>
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
                <a>Products</a>
              </li>
              <li className="mb-3">
                <a>Claims</a>
              </li>
              <li className="mb-3">
                <a>Renewals</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg text-white font-bold">About</h3>
            <ul className="text-white">
              <li className="mb-3">
                <a>Products</a>
              </li>
              <li className="mb-3">
                <a>Claims</a>
              </li>
              <li className="mb-3">
                <a>Renewals</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/4 flex lg:justify-end items-end mt-12 lg:mt-0">
          <div className="bg-white p-2 rounded-full mr-2.5">
            <img src="https://cdn.tuk.dev/assets/templates/weCare/fb.png" />
          </div>
          <div className="bg-white p-2 rounded-full mr-2.5">
            <img src="https://cdn.tuk.dev/assets/templates/weCare/twitter.png" />
          </div>
          <div className="bg-white p-2 rounded-full mr-2.5">
            <img src="https://cdn.tuk.dev/assets/templates/weCare/yt.png" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
