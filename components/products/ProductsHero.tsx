import { useRouter } from "next/router";
import analytics from "../../utils/analytics";


function index() {
  const router = useRouter()
  const query = router.query

   const url = new URL(`https://solarquest.co.za${router.asPath}`);
   console.log(url);
   const source = url.searchParams.get("utm_source");
   const google = url.searchParams.get("gclid");
   const facebook = url.searchParams.get("fbclid");
   const medium = url.searchParams.get("utm_medium");

    const setSource = () => {
      console.log("referrer", document.referrer);

      if (source && medium) {
        localStorage.setItem("utm_source", source);
        localStorage.setItem("utm_medium", medium);
      } else if (google) {
        localStorage.setItem("utm_source", "google");
        localStorage.setItem("utm_medium", "ppc");
      } else if (facebook) {
        localStorage.setItem("utm_source", "facebook");
        localStorage.setItem("utm_medium", "paid social");
      } else if (source === undefined) {
        localStorage.setItem("utm_source", "direct");
        localStorage.setItem("utm_medium", "(not set)");
      }
    };









  return (
    <>
      <div className="py-12 mt-10 px-4">
        <div className="lg:max-w-7xl md:max-w-[744px] max-w-[375px] mx-auto bg-white py-7">
          <div className="relative">
            <img
              src="/images/inverters-preview.jpeg"
              alt="products"
              className="lg:block md:hidden hidden"
            />
            <img
              src="/images/inverters-preview.jpg"
              alt="products"
              className="lg:hidden md:block hidden"
            />
            <img
              src="/images/solar_portrait.jpg"
              alt="products"
              className="lg:hidden md:hidden block h-[700px]"
            />
            <div className="absolute inset-0 bg-slate-200/90 lg:px-24 md:px-12 px-2 xl:py-28 lg:py-14 md:py-10 py-10 lg:h-full lg:max-w-[715px] w-full">
              <p className="lg:text-6xl md:text-5xl text-4xl font-bold text-red-600 lg:max-w-[515px] w-full">
                Save Money by Going Solar Today!
              </p>
              <p className="text-base md:text-lg font-medium text-gray-600 leading-6 lg:w-[515px] w-full pt-8">
                Our Grid Connected Solar Solutions can help you reduce your
                monthly Eskom bill{" "}
                <span className="font-bold md:text-xl ">70%-90%</span> and are
                optimised to give you the freedom to become totally Energy
                Independent!
              </p>
              <div
                onClick={() => {
                  setSource()
                  router.push(`/contact`)
                }
                }
                className="flex items-center rounded-lg justify-between bg-red-600 px-4 py-3 w-fit mt-8 hover:bg-gray-600 cursor-pointer duration-200"
              >
                <button
                  onClick={() => {

                    analytics.track("Goal - 1")
                  }}
                  className="text-white text-sm md:text-md pr-4 font-medium"
                >
                  Arrange a Free Site Assessment Today!*
                </button>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.375 3.5L12.875 8L8.375 12.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.25 8H3.125"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex gap-3 pt-8">
                <svg
                  className=""
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9669 11.5667C14.8037 11.3929 14.2278 10.8792 13.169 10.1995C12.1025 9.51386 11.3159 9.08636 11.0903 8.98667C11.0704 8.97785 11.0485 8.97462 11.0269 8.97732C11.0053 8.98001 10.9849 8.98854 10.9678 9.00199C10.6044 9.28542 9.99248 9.80605 9.95966 9.83417C9.74779 10.0157 9.74779 10.0157 9.57435 9.95917C9.26935 9.85917 8.32185 9.35605 7.49623 8.52855C6.6706 7.70105 6.14154 6.73011 6.04154 6.42542C5.98435 6.25167 5.98435 6.25167 6.16654 6.0398C6.19466 6.00699 6.7156 5.39511 6.99904 5.03199C7.01248 5.01489 7.02101 4.99445 7.02371 4.97286C7.02641 4.95128 7.02317 4.92937 7.01435 4.90949C6.91466 4.68355 6.48716 3.8973 5.80154 2.83074C5.12091 1.7723 4.60779 1.19636 4.43404 1.03324C4.41809 1.01819 4.39839 1.00772 4.37699 1.00294C4.3556 0.998153 4.33331 0.999228 4.31248 1.00605C3.70512 1.21476 3.11912 1.48108 2.56248 1.80136C2.02511 2.11374 1.51636 2.47295 1.04216 2.8748C1.02561 2.88887 1.0132 2.90718 1.00626 2.92777C0.999327 2.94836 0.998126 2.97045 1.00279 2.99167C1.0681 3.29605 1.38029 4.56667 2.34904 6.32667C3.33748 8.12292 4.02248 9.04323 5.47404 10.4898C6.9256 11.9364 7.87498 12.6626 9.6731 13.651C11.4331 14.6198 12.7044 14.9323 13.0081 14.997C13.0294 15.0016 13.0515 15.0004 13.0721 14.9935C13.0928 14.9865 13.1111 14.9741 13.1253 14.9576C13.5271 14.4834 13.8862 13.9747 14.1984 13.4373C14.5186 12.8806 14.7849 12.2946 14.9937 11.6873C15.0004 11.6666 15.0014 11.6445 14.9967 11.6233C14.992 11.6021 14.9817 11.5826 14.9669 11.5667Z"
                    fill="#6B7280"
                  />
                </svg>
                <p className="text-base leading-none text-gray-600">
                  Give us a call
                  <b>
                    <span className="border-b ml-3 border-[#4B5563] cursor-pointer">
                      +27 81 838 1088
                    </span>
                  </b>
                </p>
              </div>
              <div className="flex gap-3 pt-6">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 2.5H1.5C1.36739 2.5 1.24021 2.55268 1.14645 2.64645C1.05268 2.74021 1 2.86739 1 3V13C1 13.1326 1.05268 13.2598 1.14645 13.3536C1.24021 13.4473 1.36739 13.5 1.5 13.5H14.5C14.6326 13.5 14.7598 13.4473 14.8536 13.3536C14.9473 13.2598 15 13.1326 15 13V3C15 2.86739 14.9473 2.74021 14.8536 2.64645C14.7598 2.55268 14.6326 2.5 14.5 2.5ZM8.30688 8.89469C8.21912 8.9629 8.11115 8.99994 8 8.99994C7.88885 8.99994 7.78088 8.9629 7.69312 8.89469L2.79844 5.08781L3.41219 4.29844L8 7.86656L12.5878 4.29844L13.2016 5.08781L8.30688 8.89469Z"
                    fill="#475569"
                  />
                </svg>
                <p className="text-base text-gray-600">
                  Join our family
                  <b>
                    <span className="border-b ml-3 border-[#4B5563] cursor-pointer">
                      marketing@solarquest.co.za
                    </span>
                  </b>
                </p>
              </div>
              <div className="flex gap-3 pt-6 cursor-pointer">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8127 10.1227C11.2422 10.1225 10.6944 10.3459 10.2867 10.7449L6.31266 8.51048C6.39432 8.17348 6.39432 7.82185 6.31266 7.48486L10.2855 5.25048C10.6566 5.6115 11.1441 5.82863 11.6608 5.863C12.1774 5.89738 12.6894 5.74674 13.1051 5.43807C13.5208 5.1294 13.8131 4.68284 13.9296 4.17835C14.0461 3.67386 13.9792 3.14437 13.741 2.68467C13.5027 2.22497 13.1086 1.86508 12.6292 1.66944C12.1499 1.47379 11.6165 1.45515 11.1246 1.61687C10.6327 1.77859 10.2145 2.11009 9.94473 2.55204C9.67498 2.99399 9.57133 3.51752 9.65234 4.02892L5.58578 6.31642C5.26637 6.05029 4.87772 5.8807 4.46539 5.82752C4.05305 5.77433 3.6341 5.83975 3.25761 6.01611C2.88112 6.19248 2.56268 6.47248 2.3396 6.82331C2.11653 7.17415 1.99805 7.58129 1.99805 7.99704C1.99805 8.41279 2.11653 8.81994 2.3396 9.17077C2.56268 9.52161 2.88112 9.80161 3.25761 9.97797C3.6341 10.1543 4.05305 10.2198 4.46539 10.1666C4.87772 10.1134 5.26637 9.94379 5.58578 9.67767L9.65234 11.9664C9.58204 12.4082 9.64889 12.8609 9.84387 13.2636C10.0388 13.6662 10.3526 13.9994 10.7428 14.2182C11.133 14.437 11.5809 14.5309 12.0261 14.4872C12.4713 14.4436 12.8925 14.2645 13.2327 13.9741C13.573 13.6836 13.8161 13.2959 13.9291 12.8631C14.0422 12.4302 14.0199 11.9731 13.8651 11.5534C13.7103 11.1337 13.4306 10.7715 13.0636 10.5156C12.6966 10.2598 12.26 10.1227 11.8127 10.1227Z"
                    fill="#6B7280"
                  />
                </svg>
                <p className="text-base leading-none text-gray-600">
                  Join social squad
                </p>
                <div className="flex gap-3">
                  <svg
                    className="text-gray-900 hover:text-gray-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 8.03906C15 4.17344 11.8656 1.03906 8 1.03906C4.13438 1.03906 1 4.17344 1 8.03906C1 11.5328 3.55938 14.4287 6.90625 14.9544V10.0631H5.12844V8.03906H6.90625V6.49687C6.90625 4.74281 7.95156 3.77312 9.55031 3.77312C10.3162 3.77312 11.1175 3.91 11.1175 3.91V5.63281H10.2344C9.36531 5.63281 9.09344 6.17219 9.09344 6.72656V8.03906H11.0347L10.7247 10.0631H9.09375V14.955C12.4406 14.4297 15 11.5337 15 8.03906Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="text-gray-900 hover:text-gray-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 3.42188C14.9373 3.66637 14.342 3.82744 13.7328 3.90001C14.373 3.52512 14.8545 2.92956 15.0869 2.22501C14.4816 2.57894 13.8205 2.82728 13.1319 2.95938C12.8419 2.65548 12.4932 2.41373 12.1069 2.2488C11.7205 2.08388 11.3047 1.99923 10.8847 2.00001C9.18406 2.00001 7.80781 3.35626 7.80781 5.02813C7.80661 5.26068 7.83325 5.49254 7.88719 5.71876C6.66771 5.66159 5.4736 5.3505 4.38124 4.8054C3.28889 4.2603 2.32234 3.49318 1.54344 2.55313C1.27018 3.01379 1.12567 3.53939 1.125 4.07501C1.125 5.12501 1.67281 6.05313 2.5 6.59688C2.00991 6.58525 1.52987 6.45554 1.10063 6.21876V6.25626C1.10063 7.72501 2.16313 8.94688 3.56938 9.22501C3.30493 9.2955 3.03243 9.33122 2.75875 9.33126C2.56456 9.33159 2.3708 9.31275 2.18031 9.275C2.57125 10.4781 3.70906 11.3531 5.05688 11.3781C3.96168 12.2222 2.61707 12.6784 1.23438 12.675C0.988943 12.6746 0.743739 12.66 0.5 12.6313C1.90662 13.5294 3.5417 14.0045 5.21063 14C10.8781 14 13.9744 9.38438 13.9744 5.38126C13.9744 5.25001 13.9709 5.11876 13.9647 4.99063C14.5657 4.56315 15.0856 4.03192 15.5 3.42188V3.42188Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="text-gray-900 hover:text-gray-600"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9166 2.16656C11.6895 2.16887 12.43 2.47692 12.9766 3.02345C13.5231 3.56997 13.8311 4.31054 13.8334 5.08344V10.9166C13.8311 11.6895 13.5231 12.43 12.9766 12.9766C12.43 13.5231 11.6895 13.8311 10.9166 13.8334H5.08344C4.31054 13.8311 3.56997 13.5231 3.02345 12.9766C2.47692 12.43 2.16887 11.6895 2.16656 10.9166V5.08344C2.16887 4.31054 2.47692 3.56997 3.02345 3.02345C3.56997 2.47692 4.31054 2.16887 5.08344 2.16656H10.9166ZM10.9166 1H5.08344C2.8375 1 1 2.8375 1 5.08344V10.9166C1 13.1625 2.8375 15 5.08344 15H10.9166C13.1625 15 15 13.1625 15 10.9166V5.08344C15 2.8375 13.1625 1 10.9166 1Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.7915 5.08594C11.6184 5.08594 11.4493 5.03462 11.3054 4.93847C11.1615 4.84233 11.0493 4.70567 10.9831 4.54578C10.9169 4.3859 10.8996 4.20997 10.9333 4.04023C10.9671 3.8705 11.0504 3.71459 11.1728 3.59222C11.2952 3.46985 11.4511 3.38651 11.6208 3.35275C11.7905 3.31899 11.9665 3.33632 12.1264 3.40254C12.2862 3.46877 12.4229 3.58092 12.519 3.72481C12.6152 3.86871 12.6665 4.03788 12.6665 4.21094C12.6668 4.32591 12.6443 4.43981 12.6004 4.54608C12.5565 4.65235 12.4921 4.74891 12.4108 4.83021C12.3295 4.91151 12.2329 4.97595 12.1266 5.01983C12.0204 5.06372 11.9065 5.08618 11.7915 5.08594Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 5.66656C8.46151 5.66656 8.91265 5.80342 9.29638 6.05982C9.68011 6.31622 9.9792 6.68065 10.1558 7.10703C10.3324 7.53341 10.3786 8.00259 10.2886 8.45523C10.1986 8.90787 9.97632 9.32365 9.64998 9.64999C9.32365 9.97633 8.90787 10.1986 8.45523 10.2886C8.00258 10.3786 7.53341 10.3324 7.10703 10.1558C6.68065 9.9792 6.31622 9.68012 6.05982 9.29639C5.80342 8.91266 5.66656 8.46151 5.66656 8C5.66722 7.38134 5.91328 6.7882 6.35074 6.35074C6.7882 5.91328 7.38133 5.66722 8 5.66656ZM8 4.5C7.30776 4.5 6.63107 4.70527 6.0555 5.08986C5.47993 5.47444 5.03133 6.02107 4.76642 6.66061C4.50152 7.30015 4.4322 8.00388 4.56725 8.68282C4.7023 9.36175 5.03564 9.98539 5.52513 10.4749C6.01461 10.9644 6.63825 11.2977 7.31718 11.4327C7.99611 11.5678 8.69985 11.4985 9.33939 11.2336C9.97893 10.9687 10.5256 10.5201 10.9101 9.9445C11.2947 9.36892 11.5 8.69223 11.5 8C11.5 7.07174 11.1312 6.1815 10.4749 5.52513C9.81849 4.86875 8.92825 4.5 8 4.5Z"
                      fill="#475569"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex mt-2 gap-3">
                <small className="text-sm text-red-900">
                  *Free site assessments available within a 50KM radius of CDB
                  in Cape Town & Johannesburg
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`

   .backdrop_hero_XXXI {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(12px);
  }
`}
      </style>
    </>
  );
}

export default index;


