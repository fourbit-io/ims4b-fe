import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const getStocks = async (currentPage) => {
  return await axiosInstance.get(
    `/v1/stock/role-base?page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
  );
};

export const useStocks = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["stock-lists", currentPage],
    () => getStocks(currentPage)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const deleteStock = async (id) => {
  return await axiosInstance.delete(`/v1/stock/${id}`);
};

export const useDeleteStock = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteStock, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      return queryClient.invalidateQueries(["stock-lists"]);
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

const approveStock = async (id) => {
  return await axiosInstance.patch(`/v1/stock/approved/${id}`);
};

export const useApproveStock = () => {
  const queryClient = useQueryClient();
  return useMutation(approveStock, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      return queryClient.invalidateQueries(["stock-lists"]);
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

const rejectStock = async (id) => {
  return await axiosInstance.patch(`/v1/stock/rejected/${id}`);
};

export const useRejectStock = () => {
  const queryClient = useQueryClient();
  return useMutation(rejectStock, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      return queryClient.invalidateQueries(["stock-lists"]);
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
