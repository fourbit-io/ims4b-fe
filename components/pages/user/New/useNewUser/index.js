import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";

const addUser = async (user) => {
  return await axiosInstance.post("/v1/auth/signup/manual", user);
};

export const useNewUserData = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(addUser, {
    onSuccess: (data) => {
      router.push("/users");
    },
    onError: (data) => {},
  });
};
