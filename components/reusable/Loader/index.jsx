import { HashLoader } from "react-spinners";

const Loader = ({ className }) => {
  return (
    <div className={`${className}`}>
      <HashLoader color="#11b981" />
    </div>
  );
};

export default Loader;
