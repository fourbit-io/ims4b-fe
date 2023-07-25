import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getStocks = async (filter) => {
  const { pid, pName, qtyOrder, startDate, endDate } = filter;
  return await axiosInstance.get(
    `/v1/stock/report/details?productId=${pid}&productName=${pName}&stockQuantity=${qtyOrder}&startDate=${startDate}&endDate=${endDate}`
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
