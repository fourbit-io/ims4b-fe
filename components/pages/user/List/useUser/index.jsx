import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

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
  return await axiosInstance.patch(`/v1/auth/signup/manual/delete`, {
    deleteUserId: id,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      cogoToast.success(apiMessages?.success?.body, {
        position: "top-right",
        heading: apiMessages?.success?.header,
      });
      return queryClient.invalidateQueries(["users-lists"]);
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
