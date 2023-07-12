import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getProducts = async (search, currentPage) => {
    return await axiosInstance.get(
      `/v1/product/string/search?searchString=${search}&page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
    );
  };
  
  export const useProducts = (search, currentPage) => {
    const { data, isLoading, isError, error, isSuccess } = useQuery(
      ["product-lists", search, currentPage],
      () => getProducts(search, currentPage)
    );
    return {
      data,
      isLoading,
      isError,
      error,
      isSuccess,
    };
  };