import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";

const addPurchase = async (purchase) => {
  return await axiosInstance.post("/v1/purchase-order", purchase);
};

export const useNewPurchaseData = () => {
  const router = useRouter();

  return useMutation(addPurchase, {
    onSuccess: (data) => {
      router.push("/purchases");
    },
    onError: (data) => {},
  });
};
