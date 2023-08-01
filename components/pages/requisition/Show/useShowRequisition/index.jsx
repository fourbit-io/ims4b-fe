import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
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

const approveRequisition = async (id) => {
  return await axiosInstance.patch(`/v1/requisition/approved/${id}`);
};

export const useApproveRequisition = () => {
  return useMutation(approveRequisition, {
    onSuccess: (data) => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      window.location.reload();
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

const releaseRequisition = async (id) => {
  return await axiosInstance.patch(`/v1/requisition/released/${id}`);
};

export const useReleaseRequisition = () => {
  return useMutation(releaseRequisition, {
    onSuccess: (data) => {
      console.log({data})
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      window.location.reload();
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

const receiveRequisition = async (id) => {
  return await axiosInstance.patch(`/v1/requisition/userAcknowledgement/${id}`);
};

export const useReceiveRequisition = () => {
  return useMutation(receiveRequisition, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      window.location.reload();
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
