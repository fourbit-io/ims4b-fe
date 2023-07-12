import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { useDispatch } from "react-redux";
import { removeAll } from "@/slices/productSlice";

const addRequisition = async (requisitions) => {
  return await axiosInstance.post("/v1/requisition", requisitions);
};

export const useNewRequisitionData = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation(addRequisition, {
    onSuccess: (data) => {
      dispatch(removeAll());
      router.push("/requisitions");
    },
    onError: (data) => {},
  });
};
