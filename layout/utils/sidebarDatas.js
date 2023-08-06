import { AiOutlineFileAdd } from "react-icons/ai";
import { BsHexagon, BsPaperclip } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { userInfo } from "@/api/authentication/userInfo";

export const sidebarDatas = () => {
  const { role } = userInfo();
  const userSidebar = [
    {
      name: "ড্যাসবোর্ড",
      url: "/",
      subDatas: [],
      icon: <RxDashboard className="text-[20px]" />,
    },
    {
      name: "রিকুইজিশন",
      url: "/requisitions",
      subDatas: [],
      icon: <BsHexagon className="text-[20px]" />,
    },
    {
      name: "রিপোর্ট",
      url: "/report",
      subDatas: [
        {
          name: "রিকুইজিশন",
          url: "/report/user/requisition",
        },
      ],
      icon: <BiPurchaseTagAlt className="text-[20px]" />,
    },
    {
      name: "পাসওয়ার্ড পরিবর্তন",
      url: "/changepassword",
      subDatas: [],
      icon: <BsShieldLock className="text-[20px]" />,
    },
    {
      name: "লগ আউট",
      url: "/logout",
      subDatas: [],
      icon: <MdLogout className="text-[20px]" />,
    },
  ];

  const storeKeeperSidebar = [
    {
      name: "ড্যাসবোর্ড",
      url: "/",
      subDatas: [],
      icon: <RxDashboard className="text-[20px]" />,
    },
    {
      name: "পণ্য",
      url: "/products",
      subDatas: [],
      icon: <BsPaperclip className="text-[20px]" />,
    },
    {
      name: "পণ্য অনুরোধ",
      url: "/stocks",
      subDatas: [],
      icon: <AiOutlineFileAdd className="text-[20px]" />,
    },
    {
      name: "রিকুইজিশন",
      url: "/requisitions",
      subDatas: [],
      icon: <BsHexagon className="text-[20px]" />,
    },
    {
      name: "ক্রয় আদেশ ",
      url: "/purchases",
      subDatas: [],
      icon: <BiPurchaseTagAlt className="text-[20px]" />,
    },
    {
      name: "পাসওয়ার্ড পরিবর্তন",
      url: "/changepassword",
      subDatas: [],
      icon: <BsShieldLock className="text-[20px]" />,
    },
    {
      name: "লগ আউট",
      url: "/logout",
      subDatas: [],
      icon: <MdLogout className="text-[20px]" />,
    },
  ];

  const adminSidebar = [
    {
      name: "ড্যাসবোর্ড",
      url: "/",
      subDatas: [],
      icon: <RxDashboard className="text-[20px]" />,
    },
    {
      name: "কর্মকর্তাদের  তালিকা",
      url: "/users",
      subDatas: [],
      icon: <AiOutlineUser className="text-[20px]" />,
    },
    {
      name: "পণ্য",
      url: "/products",
      subDatas: [],
      icon: <BsPaperclip className="text-[20px]" />,
    },
    {
      name: "পণ্য অনুরোধ",
      url: "/stocks",
      subDatas: [],
      icon: <AiOutlineFileAdd className="text-[20px]" />,
    },
    {
      name: "রিকুইজিশন",
      url: "/requisitions",
      subDatas: [],
      icon: <BsHexagon className="text-[20px]" />,
    },
    {
      name: "ক্রয় আদেশ ",
      url: "/purchases",
      subDatas: [],
      icon: <BiPurchaseTagAlt className="text-[20px]" />,
    },
    {
      name: "রিপোর্ট",
      url: "/report",
      subDatas: [
        {
          name: "স্টক রিপোর্ট",
          url: "/report/product",
        },
        {
          name: "পণ্য",
          url: "/report/stock",
        },
        {
          name: "রিকুইজিশন",
          url: "/report/requisition",
        },
      ],
      icon: <BiPurchaseTagAlt className="text-[20px]" />,
    },
    {
      name: "পাসওয়ার্ড পরিবর্তন",
      url: "/changepassword",
      subDatas: [],
      icon: <BsShieldLock className="text-[20px]" />,
    },
    {
      name: "লগ আউট",
      url: "/logout",
      subDatas: [],
      icon: <MdLogout className="text-[20px]" />,
    },
  ];

  if (role === "USER") {
    return userSidebar;
  } else if (role === "SHOPKEEPER") {
    return storeKeeperSidebar;
  } else {
    return adminSidebar;
  }
};
