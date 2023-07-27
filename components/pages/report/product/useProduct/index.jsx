import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getProducts = async (filter) => {
  const { pId, pName, startDate, endDate } = filter;
  return await axiosInstance.get(
    `v1/product/report/details?productId=${pId}&productName=${pName}&startDate=${startDate}&endDate=${endDate}&sortOrder=desc`
  );
};

export const useProducts = (filter) => {
  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery(
    ["requisition-report", filter],
    () => getProducts(filter)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isSuccess,
  };
};
