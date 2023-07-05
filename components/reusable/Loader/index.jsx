import { ReactComponent as LoaderIcon } from '../../../public/svg/loader.svg';

const Loader = ({ className, svgStyle }) => {
    return (
      <div className={`${className}`}>
        {/* <LoaderIcon className={`animate-spin ${svgStyle}`} /> */}
        Loading....
      </div>
    );
  };
  
  export default Loader;