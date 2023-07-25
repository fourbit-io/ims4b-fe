import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getUsers = async (currentPage) => {
  return await axiosInstance.get(
    `/v1/auth/role-user?role=all&page=${currentPage}&limit=20&sortBy=createdAt&sortOrder=desc`
  );
};

export const useUsers = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["users-lists", currentPage],
    () => getUsers(currentPage)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

const deleteUser = async (id) => {
  return await axiosInstance.delete(`/v1/users/${id}`);
};

export const useDeleteUser = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users-lists"]);
      router.push("/userss");
    },
    onError: (data) => {
      console.log({ data });
    },
  });
};
