import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { Fragment, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { UserProvider } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import Cookie from '../components/Modals/Cookies'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}))



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
