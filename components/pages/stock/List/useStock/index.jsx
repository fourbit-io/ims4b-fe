import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getStocks = async (currentPage) => {
  return await axiosInstance.get(
    `/v1/stock?page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
  );
};

export const useStocks = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["stock-lists", currentPage],
    () => getStocks(currentPage)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const deleteStock = async (id) => {
  return await axiosInstance.delete(`/v1/stock/${id}`);
};

export const useDeleteStock = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(deleteStock, {
    onSuccess: () => {
      queryClient.invalidateQueries(["stock-lists"]);
      router.push("/stocks");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};

const approveStock = async (id) => {
  return await axiosInstance.patch(`/v1/stock/approved/${id}`);
};

export const useApproveStock = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(approveStock, {
    onSuccess: () => {
      queryClient.invalidateQueries(["stock-lists"]);
      router.push("/stocks");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};
