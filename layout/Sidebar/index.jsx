import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

const Sidebar = ({ active, setActive }) => {
  return (
    <div
      className={`${
        active ? "fixed !z-[9999] w-[200px]" : "w-[0px]"
      }  h-[100vh] flex flex-col  items-center py-8 transition-all duration-150 lg:w-[250px] lg:py-5 bg-gray-100`}>
      {active && (
        <div
          onClick={() => setActive(false)}
          className="absolute top-2 right-3 block lg:hidden">
          <AiOutlineClose className="cursor-pointer text-[20px] font-bold text-gray-600" />
        </div>
      )}
      <Logo active={active} />
    </div>
  );
};

export default Sidebar;
