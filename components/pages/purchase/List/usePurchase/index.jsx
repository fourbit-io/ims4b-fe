import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

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
  const queryClient = useQueryClient();
  return useMutation(deletePurchase, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      return queryClient.invalidateQueries(["purchase-order-lists"]);
    },
    onError: (data) => {
      console.log({ data });
      cogoToast.error(apiMessages?.error?.body, {
        position: "top-right",
        heading: apiMessages?.error?.header,
      });
    },
  });
};
