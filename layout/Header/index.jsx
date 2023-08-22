import { userInfo } from "../../api/authentication/userInfo";
import MenuBar from "./MenuBar";

const Header = ({ active, setActive }) => {
  const { userName, name } = userInfo();
  return (
    <div className="sticky top-0 z-50 w-full bg-white py-3 shadow ">
      <div className="relative mx-auto flex w-full items-center justify-between">
        <div className="lg:px-10">
          <MenuBar active={active} setActive={setActive} />
        </div>
        <div className="flex items-center gap-2 px-2 lg:px-10">
          <div className="flex items-center gap-x-3">
            <div className="relative w-12 h-12">
              <span className="absolute -bottom-0.5 right-1 w-3 h-3 rounded-full border border-white bg-green-500"></span>

              <p className="w-full h-full flex justify-center items-center font-bold text-gray-400 text-4xl uppercase border-2 border-gray-400 rounded-full bg-secondary-main">
                {name ? name[0] : "N"}
              </p>
            </div>
            <div>
              <span className="block text-gray-700 text-sm font-medium">
                {name ?? "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
