import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const addProduct = async (product) => {
  return await axiosInstance.post("/v1/product", product);
};

export const useNewProductData = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(addProduct, {
    onSuccess: (data) => {
      router.push("/products");
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
