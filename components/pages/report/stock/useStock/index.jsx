import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getStocks = async () => {
  return await axiosInstance.get(
    `/v1/stock/report/details`
  );
};

export const useStocks = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["stock-report"],
    () => getStocks()
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

