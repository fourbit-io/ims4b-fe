import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getUsers = async (currentPage) => {
  return await axiosInstance.get(
    `/v1/auth/role-user?role=all&page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
  );
};

export const useUsers = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["users-lists", currentPage],
    () => getUsers(currentPage)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};


