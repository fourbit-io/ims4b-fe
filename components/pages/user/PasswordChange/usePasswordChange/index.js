import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/api/globalApi/axiosInstance";

const changePassword = async (payload) => {
  return await axiosInstance.patch(`/v1/auth/update-password`, payload);
};

export const useChangePassword = () => {
  const queryClient = useQueryClient();
  return useMutation(changePassword, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users-lists"]);
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};
