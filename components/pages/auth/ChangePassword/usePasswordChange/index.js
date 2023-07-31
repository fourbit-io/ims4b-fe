import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { useRouter } from "next/router";

const changePassword = async (payload) => {
  return await axiosInstance.patch(`/v1/auth/change-password`, payload);
};

export const useChangePassword = () => {
  const router = useRouter();
  return useMutation(changePassword, {
    onSuccess: () => {
      router.push("/");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};
