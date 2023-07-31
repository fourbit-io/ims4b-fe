import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const editUser = async (payload) => {
  return await axiosInstance.patch(`/v1/auth/signup/manual/update`, payload);
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation(editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users-lists"]);
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
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
