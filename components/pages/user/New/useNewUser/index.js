import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const addUser = async (user) => {
  return await axiosInstance.post("/v1/auth/signup/manual", user);
};

export const useNewUserData = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(addUser, {
    onSuccess: (data) => {
      router.push("/users");
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
