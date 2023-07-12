import Head from "next/head";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { sidebarDatas } from "./utils/sidebarDatas";

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Head>
        <title>4ims</title>
      </Head>
      <div className="flex w-full">
        <Sidebar active={active} items={sidebarDatas()} setActive={setActive} />
        <div className="h-screen w-full flex-1 overflow-y-scroll">
          <Header active={active} setActive={setActive} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
