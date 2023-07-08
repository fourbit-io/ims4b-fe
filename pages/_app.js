import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/reusable/Loader";
import "../styles/globals.css";
import Layout from "../layout";
import LoginPage from "./login";
import {store} from "../store"
import { Provider } from "react-redux";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [globalLoader, setGlobalLoader] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    Router.events.on("routeChangeStart", (as, { shallow }) => {
      if (!shallow) {
        setGlobalLoader(true);
      }
    });
    Router.events.on("routeChangeComplete", () => setGlobalLoader(false));
    Router.events.on("routeChangeError", () => setGlobalLoader(false));
    setAccessToken(sessionStorage.getItem("access_token"));
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {globalLoader && <Loader />}
        {accessToken !== null ? (
          <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </Provider>
        ) : (
          <LoginPage />
        )}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
