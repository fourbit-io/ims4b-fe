import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { useDispatch } from "react-redux";
import { removeAll } from "../../../../../slices/productSlice";

const addStock = async (stocks) => {
  return await axiosInstance.post("/v1/stock/multiple", { stocks });
};

export const useNewStockData = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation(addStock, {
    onSuccess: (data) => {
      dispatch(removeAll());
      router.push("/stocks");
    },
    onError: (data) => {},
  });
};

const getProducts = async (search, currentPage) => {
  return await axiosInstance.get(
    `/v1/product/string/search?searchString=${search}&page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
  );
};

export const useProducts = (search, currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["product-lists", search, currentPage],
    () => getProducts(search, currentPage)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
