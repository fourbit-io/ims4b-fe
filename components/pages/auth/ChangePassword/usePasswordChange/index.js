import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { useRouter } from "next/router";
import cogoToast from "cogo-toast";
import { apiMessages } from "@/contents/bengali";

const changePassword = async (payload) => {
  return await axiosInstance.patch(`/v1/auth/change-password`, payload);
};

export const useChangePassword = () => {
  const router = useRouter();
  return useMutation(changePassword, {
    onSuccess: () => {
      router.push("/");
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
