import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

const getPurchase = async (id) => {
  return await axiosInstance.get(`/v1/purchase-order/${id}`);
};

export const usePurchase = (id) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["purchase-get", id],
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

const changePurchaseStatus = async (purchase) => {
  const {id, ...rest} = purchase;
  return await axiosInstance.patch(`/v1/purchase-order/${id}`, rest);
};

export const useChangePurchaseData = () => {

  return useMutation(changePurchaseStatus, {
     onSuccess: async (data) => {
      window.location.reload();
    },
    onError: (data) => {},
  });
};