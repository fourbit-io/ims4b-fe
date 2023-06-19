import Head from "next/head";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>4ims</title>
      </Head>
      <div className="flex w-full">
        <Sidebar />
        <div className="h-screen w-full flex-1 overflow-y-scroll">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
