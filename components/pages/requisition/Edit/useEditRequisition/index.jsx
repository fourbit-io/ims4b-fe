import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

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

const getRequisition = async (id) => {
  return await axiosInstance.get(
    `/v1/requisition/${id}`
  );
};

export const useRequisition = (id) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["requisition-get", id],
    () => getRequisition(id)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const updateRequisition = async (requisitions) => {
  const {id, ...rest} = requisitions;
  return await axiosInstance.patch(`/v1/requisition/${id}`, rest );
};

export const useUpdateRequisitionData = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation(updateRequisition, {
    onSuccess: async (data) => {
      dispatch(removeAll());
      await queryClient.invalidateQueries(["requisition-lists"]);
      router.push("/requisitions");
    },
    onError: (data) => {},
  });
};