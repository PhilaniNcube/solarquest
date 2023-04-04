import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { UserProvider } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import analytics from '../utils/analytics'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}))

  const router = useRouter();
  const query = router.query;

  const data = Object.entries(query);
  console.log(data);

   useEffect(() => {
     analytics.page();
   }, []);


  return (
    <Fragment>
      <UserProvider supabaseClient={supabaseClient}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Component {...pageProps} />

          <Footer />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </UserProvider>
    </Fragment>
  );
}

export default MyApp
