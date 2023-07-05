import Loader from "../Loader";

const StatusHandler = ({ isLoading, error, children }) => {
    if (isLoading) {
      return (
        <Loader
          className="w-full h-full flex justify-center items-center"
          svgStyle="w-14 h-14 fill-primary-main"
        />
      );
    }
  
    if (error) {
      return <span className='h-80 flex justify-center items-center text-lg text-secondary-main'>{error}</span>;
    }
  
    return children;
  };
  
  export default StatusHandler;