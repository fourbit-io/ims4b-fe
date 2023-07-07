import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getProduct = async (id) => {
  return await axiosInstance.get(`/v1/product/${id}`);
};

export const useProduct = (id) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["product-get", id],
    () => getProduct(id)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
