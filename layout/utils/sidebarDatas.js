import { FiSettings } from "react-icons/fi";
import { BsHexagon } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const sidebarDatas = [
  {
    name: "Dashboard",
    url: "/",
    subDatas: [],
    icon: <RxDashboard className="text-[20px]" />,
  },
  {
    name: "Requisition",
    url: "/requisition",
    subDatas: [],
    icon: <BsHexagon className="text-[20px]" />,
  },
  {
    name: "Settings",
    url: "/settings",
    subDatas: [],
    icon: <FiSettings className="text-[20px]" />,
  },
  {
    name: "Logout",
    url: "/logout",
    subDatas: [],
    icon: <MdLogout className="text-[20px]" />,
  },
];
