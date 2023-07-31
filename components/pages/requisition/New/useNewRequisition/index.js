import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { useDispatch } from "react-redux";
import { removeAll } from "@/slices/productSlice";
import { apiMessages } from "@/contents/bengali";
import cogoToast from "cogo-toast";

const addRequisition = async (requisitions) => {
  return await axiosInstance.post("/v1/requisition", requisitions);
};

export const useNewRequisitionData = () => {
  const dispatch = useDispatch();

  return useMutation(addRequisition, {
    onSuccess: (data) => {
      dispatch(removeAll());
      window.location.href = "/requisitions";
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
