import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getProduct = async (id) => {
  return await axiosInstance.get(
    `/v1/product/${id}`
  );
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
    const {id, ...rest} = product;
    return await axiosInstance.patch(`/v1/product/${id}`, rest);
  };
  
  export const useEditProductData = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
  
    return useMutation(editProduct, {
       onSuccess: async (data) => {
        await queryClient.invalidateQueries(["product-lists"]);
        router.push("/products");
      },
      onError: (data) => {},
    });
  };