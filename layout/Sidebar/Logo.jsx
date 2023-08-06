import React from "react";

const Logo = ({ active }) => {
  return (
    <div className="w-full px-2">
      <div className={`${active ? "block" : "lg:block hidden"}`}>
        <div className="flex flex-col text-center gap-2 w-full overflow-hidden pl-0">
          <div className="w-full flex justify-center">
            <img
              key={"dashboardImage"}
              className="w-[80px]"
              src="/images/ims-logo.png"
            />
          </div>
          <div className="text-gray-600">
            <p className="text-sm md:text-md font-bold">ইনভেন্টরি ও রিকুইজিশন সিস্টেম</p>
            <p className="text-[10px] md:text-xs">কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
