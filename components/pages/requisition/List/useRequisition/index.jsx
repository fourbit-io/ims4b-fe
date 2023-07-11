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

const approveRequisition = async (id) => {
  return await axiosInstance.patch(`/v1/requisition/approved/${id}`);
};

export const useApproveRequisition = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(approveRequisition, {
    onSuccess: () => {
      queryClient.invalidateQueries(["requisition-lists"]);
      router.push("/requisitions");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};

const releaseRequisition = async (id) => {
  return await axiosInstance.patch(`/v1/requisition/released/${id}`);
};

export const useReleaseRequisition = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(releaseRequisition, {
    onSuccess: () => {
      queryClient.invalidateQueries(["requisition-lists"]);
      router.push("/requisitions");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};
