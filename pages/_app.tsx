import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { Fragment, useEffect, useState } from "react";
import analytics from "../utils/analytics";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
