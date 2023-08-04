import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/reusable/Loader";
import "../styles/globals.css";
import Layout from "../layout";
import { store } from "../store";
import { Provider } from "react-redux";
import Head from "next/head";
import {authAccessToken} from "../api/authentication/authAccessToken"

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [globalLoader, setGlobalLoader] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token"));
    Router.events.on("routeChangeStart", () => {
      setGlobalLoader(true);
    });
    Router.events.on("routeChangeComplete", () => setGlobalLoader(false));
    Router.events.on("routeChangeError", () => setGlobalLoader(false));
    if( authAccessToken() && router?.pathname === "/login"){
      router.push("/");
    }
    if(!authAccessToken()){
      router.push("/login");
    }
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link rel="icon" href="/images/ims-logo.png" sizes="any" />
        </Head>
        {globalLoader && <Loader />}
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
