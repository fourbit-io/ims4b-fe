import axiosInstance from "@/api/globalApi/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const updateRequisition = async (requisitions) => {
  const {id, ...rest} = requisitions;
  return await axiosInstance.patch(`/v1/requisition/${id}`, { rest });
};

export const useUpdateRequisitionData = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation(updateRequisition, {
    onSuccess: async (data) => {
      dispatch(removeAll());
      await queryClient.invalidateQueries(["requisition-lists"]);
      router.push("/requisitions");
    },
    onError: (data) => {},
  });
};