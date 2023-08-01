import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";
import cogoToast from "cogo-toast";
import { apiMessages } from "@/contents/bengali";

const signInUser = (user) => {
  return axiosInstance.post("/v1/auth/login", user);
};

export const useSignInUserData = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(signInUser, {
    onSuccess: (data) => {
      const res = data?.data?.data;
      localStorage.setItem("access_token", res?.access_token);
      localStorage.setItem("info", JSON.stringify(res?.info));

      // queryClient.invalidateQueries(["layout-authentication"]);

      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      window.location.replace("/");
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
