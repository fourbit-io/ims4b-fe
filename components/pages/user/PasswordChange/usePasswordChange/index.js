import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const changePassword = async (payload) => {
  return await axiosInstance.patch(`/v1/auth/update-password`, payload);
};

export const useChangePassword = () => {
  const queryClient = useQueryClient();
  return useMutation(changePassword, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      return queryClient.invalidateQueries(["users-lists"]);
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
