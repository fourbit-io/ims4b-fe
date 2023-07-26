import axiosInstance from "@/api/globalApi/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const getRequisitions = async (filter) => {
  const { eId, eName, reqStatus, startDate, endDate } = filter;
  return await axiosInstance.get(
    `/v1/requisition/report/details?employeeId=${eId}&employeeName=${eName}&status=${reqStatus}&startDate=${startDate}&endDate=${endDate}`
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
