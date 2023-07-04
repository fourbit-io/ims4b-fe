import { useState } from "react";
import { useRouter } from "next/router";

const Item = ({ item }) => {
  const router = useRouter();
  const query = router;
  const [dropdown, setDropdown] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("info");
    window.location.replace("/login");
  };

  return (
    <div
      className={` ${
        query?.pathname === item?.url
          ? "border-r-4 border-primary-500  text-primary-500"
          : ""
      } cursor-pointer ${
        query?.pathname === item?.url ? "pl-3 lg:pl-7" : "pl-4 lg:pl-8"
      } py-3  text-sm lg:text-base`}>
      <div
        onClick={() => {
          setDropdown(!dropdown);
          if (item?.url == "/logout") {
            logout();
          } else {
            router.push(item?.url);
          }
        }}
        className="flex items-center justify-between ">
        <div className="flex items-center space-x-4 lg:space-x-5">
          {item?.icon} <span className="flex-1">{item?.name}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Item;
