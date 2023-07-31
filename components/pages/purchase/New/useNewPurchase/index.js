import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const addPurchase = async (purchase) => {
  return await axiosInstance.post("/v1/purchase-order", purchase);
};

export const useNewPurchaseData = () => {
  const router = useRouter();

  return useMutation(addPurchase, {
    onSuccess: (data) => {
      router.push("/purchases");
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
    },
    onError: (data) => {
      cogoToast.error(apiMessages?.error?.body, {
        position: "top-right",
        heading: apiMessages?.error?.header,
      });
    },
  });
};
