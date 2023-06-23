import { FiSettings } from "react-icons/fi";
import { BsHexagon } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const sidebarDatas = [
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
  // {
  //   name: "Settings",
  //   url: "/settings",
  //   subDatas: [],
  //   icon: <FiSettings className="text-[20px]" />,
  // },
  {
    name: "লগ আউট",
    url: "/logout",
    subDatas: [],
    icon: <MdLogout className="text-[20px]" />,
  },
];
