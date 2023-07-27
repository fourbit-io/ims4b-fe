import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getStocks = async (filter) => {
  const { pid, pName, qtyOrder, startDate, endDate } = filter;
  return await axiosInstance.get(
    `/v2/stock/report/details?productId=${pid}&productName=${pName}&stockQuantity=${qtyOrder}&startDate=${startDate}&endDate=${endDate}`
  );
};

export const useStocks = (filter) => {
  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery(
    ["stock-report", filter],
    () => getStocks(filter)
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
