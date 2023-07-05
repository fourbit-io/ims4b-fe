import Loader from "../Loader";

const StatusHandler = ({ isLoading, error, children }) => {
    if (isLoading) {
      return (
        <Loader
          className="w-full h-[400px] flex justify-center items-center"
        />
      );
    }
  
    if (error) {
      return <span className='h-80 flex justify-center items-center text-lg text-secondary-main'>{error}</span>;
    }
  
    return children;
  };
  
  export default StatusHandler;