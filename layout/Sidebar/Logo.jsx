import React from "react";

const Logo = ({ active }) => {
  return (
    <div className="w-full px-2">
      <div className={`${active ? "block" : "lg:block hidden"}`}>
        <div className="flex items-center gap-2 w-full overflow-hidden pl-4">
          <img
            key={"dashboardImage"}
            className="w-[50px]"
            src="/images/ims-logo.png"
          />
          <h1 className="text-2xl text-gray-600">DIFE</h1>
        </div>
      </div>

      {/* <h1
        className={`${
          active ? 'hidden' : 'lg:hidden block'
        } text-2xl cursor-pointer font-bold `}
      >
        I
      </h1> */}
    </div>
  );
};

export default Logo;
