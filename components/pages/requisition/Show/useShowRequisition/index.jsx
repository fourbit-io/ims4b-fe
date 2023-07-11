import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getRequisition = async (id) => {
  return await axiosInstance.get(`/v1/requisition/${id}`);
};

export const useRequisition = (id) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["requisition-get", id],
    () => getRequisition(id)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};
