import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const getStock = async (id) => {
  return await axiosInstance.get(`/v1/stock/${id}`);
};

export const useStock = (id) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["stock-get", id],
    () => getStock(id)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const getProducts = async () => {
  return await axiosInstance.get(
    `/v1/product?page=1&limit=200000&sortBy=createdAt&sortOrder=desc`
  );
};

export const useProducts = () => {
  const {
    data: productData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery(["product-lists"], () => getProducts());
  return {
    productData,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const editStock = async (product) => {
  const { id, ...rest } = product;
  return await axiosInstance.patch(`/v1/stock/${id}`, rest);
};

export const useEditStockData = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(editStock, {
    onSuccess: async (data) => {
      await queryClient.invalidateQueries(["stock-lists"]);
      router.push("/stocks");
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
