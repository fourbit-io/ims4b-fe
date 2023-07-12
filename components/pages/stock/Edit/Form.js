import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { editStock } from "@/contents/bengali";
import { useEditStockData } from "./useEditStock";
import StatusHandler from "@/components/reusable/StatusHandler";

const Form = ({ productData, productLoading, stockData, id }) => {
  const { formTitle, productName, productQty, submitBtn, loadingSubmitBtn } =
    editStock;

  const [productLists, setProductLists] = useState([]);

  useEffect(() => {
    setProductLists(productData?.data?.data);
    setValue("productId", stockData?.productId);
    setValue("quantity", stockData?.quantity);
    setValue("incrementQuantity", stockData?.incrementQuantity);
  }, [stockData, productData]);

  const { register, handleSubmit, reset, setValue } = useForm();

  const { mutate, isLoading, isError, error } = useEditStockData();

  const onSubmit = (data) => {
    mutate({ ...data, id });
    reset();
  };

  return (
    <StatusHandler isLoading={productLoading}>
      <main className="w-full h-auto px-4 flex justify-center">
        <div className="max-w-full md:max-w-lg w-full text-gray-600 px-4 md:p-8 rounded-md md:shadow-lg bg-white md:border-2">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-600 text-2xl font-semibold">
                {formTitle}
              </h3>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div>
              <label className="font-medium">{productName}</label>
              <select
                {...register("productId")}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg">
                {productLists?.map((product, pId) => (
                  <option
                    key={pId}
                    value={product?.id}
                    defaultValue={product?.id === stockData?.productId}>
                    {product?.name} ({product?.slug})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-medium">{productQty}</label>
              <input
                onWheel={(e) => e.target.blur()}
                type="number"
                placeholder={productQty}
                {...register("quantity", {
                  required: false,
                  valueAsNumber: true,
                })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
              />
            </div>
            <input {...register("incrementQuantity")} type="hidden" />
            <button
              disabled={isLoading}
              className={`w-full px-4 py-2 text-white font-medium bg-primary-600 hover:bg-primary-500 active:bg-primary-600 rounded-lg duration-150 ${
                isLoading && "!bg-gray-400 cursor-not-allowed"
              }`}>
              {isLoading ? loadingSubmitBtn : submitBtn}
            </button>
          </form>
        </div>
      </main>
    </StatusHandler>
  );
};

export default Form;
