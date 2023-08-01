import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const getRequisitions = async (currentPage) => {
  return await axiosInstance.get(
    `/v1/requisition/role-base?page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
  );
};

export const useRequisitions = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["requisition-lists", currentPage],
    () => getRequisitions(currentPage)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const deleteRequisition = async (id) => {
  return await axiosInstance.delete(`/v1/requisition/${id}`);
};

export const useDeleteRequisition = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteRequisition, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      return queryClient.invalidateQueries(["requisition-lists", 1]);
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
