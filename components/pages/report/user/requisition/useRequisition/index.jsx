import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { userInfo } from "@/api/authentication/userInfo";

const getRequisitions = async (filter) => {
  const { id, userName } = userInfo();
  const { reqStatus, startDate, endDate } = filter;
  return await axiosInstance.get(
    `/v1/requisition/report/details?employeeId=${id}&employeeName=${userName}&status=${reqStatus}&startDate=${startDate}&endDate=${endDate}`
  );
};

export const useRequisitions = (filter) => {
  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery(
    ["requisition-report", filter],
    () => getRequisitions(filter)
  );
  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isSuccess,
  };
};
