import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const Item = ({ item }) => {
  const router = useRouter();
  const pathname = "/" + router?.pathname.split("/")[1];
  const [dropdown, setDropdown] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("info");
    window.location.replace("/login");
  };

  const handleRedirect = (url) => {
    if (url === "/logout") {
      logout();
    } else {
      router.push(url);
    }
  };

  useEffect(() => {
    const findRoute =
      item?.subDatas &&
      item?.subDatas?.length > 0 &&
      item?.subDatas?.find((subItem) => subItem?.url === router?.pathname);

    if (findRoute) {
      setDropdown(true);
    }
  }, [item, pathname]);

  return (
    <div
      className={` ${
        pathname === item?.url
          ? "border-r-4 border-primary-500  text-primary-500"
          : ""
      } cursor-pointer ${
        pathname === item?.url ? "pl-3 lg:pl-7" : "pl-4 lg:pl-8"
      } py-3  text-sm lg:text-base`}>
      <div
        onClick={() => {
          setDropdown(!dropdown);
          if (item?.url !== "/report") {
            handleRedirect(item?.url);
          }
        }}
        className="flex items-center justify-between ">
        <div className="flex items-center space-x-4 lg:space-x-5">
          {item?.icon} <span className="flex-1">{item?.name}</span>{" "}
        </div>
        {item?.subDatas && item?.subDatas?.length > 0 && (
          <div className="pr-4">
            {dropdown ? <FiChevronDown /> : <FiChevronRight />}
          </div>
        )}
      </div>
      {item?.subDatas && item?.subDatas?.length > 0 && dropdown && (
        <div className="pt-3">
          {item?.subDatas?.map((subItem, index) => (
            <div
              key={index}
              onClick={() => {
                handleRedirect(subItem?.url);
              }}
              className={` ${
                router?.pathname === subItem?.url
                  ? "border-l-4 border-primary-600 bg-white"
                  : ""
              } cursor-pointer ${
                router?.pathname === subItem?.url ? "pl-7" : "pl-8"
              } py-3 `}>
              {subItem?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Item;
