import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getRequisitions = async (currentPage) => {
  return await axiosInstance.get(
    `/v1/requisition?page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
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
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(deleteRequisition, {
    onSuccess: () => {
      queryClient.invalidateQueries(["requisition-lists"]);
      router.push("/requisitions");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};


