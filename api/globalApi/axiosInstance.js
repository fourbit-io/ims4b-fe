import axios from "axios";

const urlConfig = () => {
  return {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  };
};

const axiosInstance = axios.create(urlConfig());

axiosInstance.interceptors.request.use((config) => {
  let token =
    typeof window !== undefined
      ? window.sessionStorage.getItem("access_token")
      : undefined;
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default axiosInstance;
