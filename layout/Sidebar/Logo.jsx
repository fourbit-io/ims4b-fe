import React from "react";

const Logo = ({ active }) => {
  return (
    <div className="w-full px-2">
      <div className={`${active ? "block" : "lg:block hidden"}`}>
        <div className="flex flex-col gap-2 w-full overflow-hidden pl-0">
          <img
            key={"dashboardImage"}
            className="w-[50px] h-[50px]"
            src="/images/ims-logo.png"
          />
          <h1 className="text-sm text-gray-600">ইনভেন্টরি ও রিকুইজিশন সিস্টেম কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (ডাইফ)</h1>
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
