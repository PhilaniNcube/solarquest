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
