import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Items from "./Items";
import Logo from "./Logo";

const Sidebar = ({ active, setActive, items }) => {
  return (
    <div
      className={`${
        active ? "fixed !z-[9999] w-[200px]" : "w-[0px]"
      }  h-[100vh] flex flex-col  items-center py-2 transition-all duration-150 lg:w-[250px] bg-gray-100`}>
      {active && (
        <div
          onClick={() => setActive(false)}
          className="absolute top-2 right-3 block lg:hidden">
          <AiOutlineClose className="cursor-pointer text-[20px] font-bold text-gray-600" />
        </div>
      )}
      <Logo active={active} />
      <Items items={items} active={active} />
      {/* <div>
        <a href="https://www.fourbit.io/" target="_blank">
          <img
            src="/images/fourbit-logo.png"
            className="w-14 opacity-60 hover:opacity-100 cursor-pointer"
          />
        </a>
      </div> */}
    </div>
  );
};

export default Sidebar;
