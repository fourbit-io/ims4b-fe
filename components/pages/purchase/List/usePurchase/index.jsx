import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getPurchases = async (currentPage) => {
  return await axiosInstance.get(
    `/v1/purchase-order?page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
  );
};

export const usePurchases = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["purchase-order-lists", currentPage],
    () => getPurchases(currentPage)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const deletePurchase = async (id) => {
  return await axiosInstance.delete(`/v1/purchase-order/${id}`);
};

export const useDeletePurchase = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(deletePurchase, {
    onSuccess: () => {
      queryClient.invalidateQueries(["purchase-order-lists"]);
      router.push("/purchases");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};
