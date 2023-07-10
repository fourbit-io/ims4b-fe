import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { useDispatch } from "react-redux";
import { removeAll } from "../../../../../slices/productSlice";

const addRequisition = async (requisitions) => {
  return await axiosInstance.post("/v1/requisition", { requisitions });
};

export const useNewRequisitionData = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation(addRequisition, {
    onSuccess: (data) => {
      dispatch(removeAll());
      router.push("/requisitions");
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
