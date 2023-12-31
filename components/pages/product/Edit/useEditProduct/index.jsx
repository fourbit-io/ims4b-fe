import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const getProduct = async (id) => {
  return await axiosInstance.get(`/v1/product/${id}`);
};

export const useProduct = (id) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["product-get", id],
    () => getProduct(id)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const editProduct = async (product) => {
  const { id, ...rest } = product;
  return await axiosInstance.patch(`/v1/product/without-quantity/${id}`, rest);
};

export const useEditProductData = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(editProduct, {
    onSuccess: async (data) => {
      await queryClient.invalidateQueries(["product-lists"]);
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
