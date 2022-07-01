import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { Fragment } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({}))

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Fragment>
  )
}

export default MyApp
