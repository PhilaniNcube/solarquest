import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { UserProvider } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import analytics from '../utils/analytics'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}))

  const router = useRouter();
  const query = router.query;
 const url = new URL(`https://solarquest.co.za${router.asPath}`);
 console.log(url);
 const source = url.searchParams.get("utm_source");
 const google = url.searchParams.get("gclid");
 const facebook = url.searchParams.get("fbclid");
 const medium = url.searchParams.get("utm_medium");

    const setSource = () => {
      console.log("referrer", document.referrer);

      if (
        source && medium
      ) {
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
      } else {
        localStorage.setItem("utm_source", "direct");
        localStorage.setItem("utm_medium", "(not set)");
      }
    };

    useEffect(() => {
      // check if we are on the client
      if (typeof window !== "undefined" ) {
          console.log(window.location.href.includes("/products"))
        // check if there is already a value for in local storage
         if (window.location.href.includes("/products")) {
              setSource();
          } else if (
             localStorage.getItem("utm_source") === null &&
             !window.location.href.includes("/products")
           ) {
             setSource();
           }


      }
    }, []);


  const data = Object.entries(query);
  console.log(data);



   useEffect(() => {
     analytics.page();
   }, []);


  return (
    <Fragment>

        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools />
        </QueryClientProvider>

    </Fragment>
  );
}

export default MyApp
