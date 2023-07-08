import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getStock = async (id) => {
  return await axiosInstance.get(`/v1/stock/${id}`);
};

export const useStock = (id) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["stock-get", id],
    () => getStock(id)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
