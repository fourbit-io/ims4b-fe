
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axiosInstance from "@/api/globalApi/axiosInstance";

const addProduct = async (product) => {
    return await axiosInstance.post("/v1/product", product);
  };
  
  export const useNewProductData = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
  
    return useMutation(addProduct, {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["product-lists"]);
        router.push("/products");
      },
      onError: (data) => {},
    });
  };