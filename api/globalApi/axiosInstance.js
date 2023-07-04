import axios from "axios";

const urlConfig = () => {
    return {
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    };
  };

const axiosInstance = axios.create( urlConfig() );

export default axiosInstance;
