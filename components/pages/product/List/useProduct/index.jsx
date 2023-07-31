import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const getProducts = async (currentPage) => {
  return await axiosInstance.get(
    `/v1/product?page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
  );
};

export const useProducts = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["product-lists", currentPage],
    () => getProducts(currentPage)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const deleteProduct = async (id) => {
  return await axiosInstance.delete(`/v1/product/${id}`);
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      return queryClient.invalidateQueries(["product-lists"]);
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
