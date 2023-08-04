import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { sidebarDatas } from "./utils/sidebarDatas";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  return (
    <>
      {router?.pathname === "/login" ? (
        children
      ) : (
        <div className="flex w-full">
          <Sidebar
            active={active}
            items={sidebarDatas()}
            setActive={setActive}
          />
          <div className="h-screen w-full flex flex-col flex-1 overflow-y-scroll">
            <Header active={active} setActive={setActive} />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
