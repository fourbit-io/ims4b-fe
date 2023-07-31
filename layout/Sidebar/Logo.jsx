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
          <h1 className="text-sm text-gray-600">
            ইনভেন্টরি ও রিকুইজিশন সিস্টেম কলকারখানা ও প্রতিষ্ঠান পরিদর্শন
            অধিদপ্তর (ডাইফ)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
