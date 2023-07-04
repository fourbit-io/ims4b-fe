
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";

const signInUser = (user) => {
    return axiosInstance.post("/v1/auth/login", user);
  };
  
  export const useSignInUserData = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
  
    return useMutation(signInUser, {
      onSuccess: (data) => {
        const res = data?.data?.data;
        sessionStorage.setItem("access_token", res?.access_token);
        sessionStorage.setItem("info", JSON.stringify(res?.info));
  
        // queryClient.invalidateQueries(["layout-authentication"]);
  
  
        window.location.replace("/");
      },
      onError: (data) => {},
    });
  };