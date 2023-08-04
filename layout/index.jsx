import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { sidebarDatas } from "./utils/sidebarDatas";

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      {children?.type?.name === "LoginPage" ? (
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

export default Layout;
