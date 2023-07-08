import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";
import { useDispatch } from "react-redux";
import { removeAll } from "../../../../../slices/productSlice";

const addStock = async (stocks) => {
  return await axiosInstance.post("/v1/stock/multiple", { stocks });
};

export const useNewStockData = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation(addStock, {
    onSuccess: (data) => {
      dispatch(removeAll());
      router.push("/stocks");
    },
    onError: (data) => {},
  });
};
