import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { useDispatch } from "react-redux";
import { removeAll } from "@/slices/productSlice";

const addRequisition = async (requisitions) => {
  return await axiosInstance.post("/v1/requisition", requisitions);
};

export const useNewRequisitionData = () => {
  const dispatch = useDispatch();

  return useMutation(addRequisition, {
    onSuccess: (data) => {
      dispatch(removeAll());
      window.location.href = '/requisitions'
    },
    onError: (data) => {},
  });
};
