import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/api/globalApi/axiosInstance";

const editUser = async (payload) => {
  return await axiosInstance.patch(`/v1/auth/signup/manual/update`, payload);
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation(editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users-lists"]);
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};
