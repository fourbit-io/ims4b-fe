import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getDashboard = async (params) => {
  const { role, currentPage } = params;
  return await axiosInstance.get(
    `v1/dashboard/role-base?role=${role}&page=${currentPage}&limit=5&sortBy=createdAt&sortOrder=desc`
  );
};

export const useDashboard = (params) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["dashboard", params],
    () => getDashboard(params),
    {
      onError: (error) => {
        if (error?.response?.request?.timeout > 0) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("info");
          window.location.replace("/login");
        }
      },
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
