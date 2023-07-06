import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getProducts = (currentPage) => {
  return axiosInstance.get(
    `/v1/product?page=${currentPage}&limit=2&sortBy=createdAt&sortOrder=desc`
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

const deleteProduct = (id) => {
  return axiosInstance.delete(`/v1/product/${id}`);
};

export const useDeleteProduct = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["product-lists"]);
      router.push("/products");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};
