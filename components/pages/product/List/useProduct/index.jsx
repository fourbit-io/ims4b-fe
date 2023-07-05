import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getProducts = () => {
  return axiosInstance.get("/v1/product");
};

export const useProducts = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["product-lists"],
    getProducts
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
