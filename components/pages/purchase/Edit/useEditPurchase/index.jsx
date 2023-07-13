import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getPurchase = async (id) => {
  return await axiosInstance.get(
    `/v1/purchase-order/${id}`
  );
};

export const usePurchase = (id) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["purchase-order-get", id],
    () => getPurchase(id)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const editPurchase = async (purchase) => {
    const {id, ...rest} = purchase;
    return await axiosInstance.patch(`/v1/purchase-order/${id}`, rest);
  };
  
  export const useEditPurchaseData = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
  
    return useMutation(editPurchase, {
       onSuccess: async (data) => {
        await queryClient.invalidateQueries(["purchase-order-lists"]);
        router.push("/purchases");
      },
      onError: (data) => {},
    });
  };