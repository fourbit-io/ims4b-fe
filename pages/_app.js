import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/reusable/Loader";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [globalLoader, setGlobalLoader] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (as, { shallow }) => {
      if (!shallow) {
        setGlobalLoader(true);
      }
    });
    Router.events.on("routeChangeComplete", () => setGlobalLoader(false));
    Router.events.on("routeChangeError", () => setGlobalLoader(false));
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {globalLoader && <Loader />}
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
