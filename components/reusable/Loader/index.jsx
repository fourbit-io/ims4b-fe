import { HashLoader } from "react-spinners";

const Loader = ({ className }) => {
  return (
    <div className={`${className ?? 'bg-gray-200 h-screen w-full z-9999 flex items-center justify-center' }`}>
      <HashLoader color="#11b981" />
    </div>
  );
};

export default Loader;
