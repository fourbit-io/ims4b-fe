import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const getRequisition = async (id) => {
  return await axiosInstance.get(`/v1/requisition/${id}`);
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

const getStoreKeepers = async () => {
  return await axiosInstance.get(
    `/v1/auth/role-user?role=SHOPKEEPER&page=1&limit=10000000&sortBy=createdAt&sortOrder=desc`
  );
};

export const useStoreKeepers = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["storeKeeper-get"],
    () => getStoreKeepers()
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const assignRequisition = async (requisitions) => {
  const { id, ...rest } = requisitions;
  return await axiosInstance.patch(`/v1/requisition/assigned/${id}`, rest);
};

export const useAssignRequisitionData = () => {
  const router = useRouter();

  return useMutation(assignRequisition, {
    onSuccess: (data) => {
      const { id } = data?.data?.data;
      router.push(`/requisitions/show/${id}`);
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
