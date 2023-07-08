import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { editProduct } from "@/contents/bengali/product";
import { useEditProductData } from "./useEditProduct";

const Form = ({ productData, id }) => {
  const {
    formTitle,
    date,
    productName,
    productUnit,
    productUnit1,
    productUnit2,
    productQty,
    productDetails,
    submitBtn,
    loadingSubmitBtn,
  } = editProduct;

  useEffect(() => {
    setValue("name", productData?.name);
    setValue("quantity", productData?.quantity);
    setValue("unit", productData?.unit);
    setValue("details", productData?.details);
    setValue("date", productData?.date ?? new Date().toISOString().split("T")[0])
  }, [productData]);

  const { register, handleSubmit, reset, setValue } = useForm();

  const { mutate, isLoading, isError, error } = useEditProductData();

  const onSubmit = (data) => {
    mutate({...data, id});
    reset();
  };

  return (
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
            <label className="font-medium">{productName} *</label>
            <input
              type="text"
              placeholder={productName}
              {...register("name", { required: false })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{productUnit}</label>
            <select
              {...register("unit")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg">
              <option value="unit" selected>{productUnit1}</option>
              <option value="piece">{productUnit2}</option>
            </select>
          </div>
          {/* <div>
            <label className="font-medium">{productQty}</label>
            <input
              type="number"
              placeholder={productQty}
              {...register("quantity", {
                required: false,
                valueAsNumber: true,
              })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div> */}
          <div>
            <label className="font-medium">{date}</label>
            <input
              type="date"
              {...register("date")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{productDetails}</label>
            <textarea
              rows={5}
              placeholder={productDetails}
              {...register("details")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"></textarea>
          </div>
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
  );
};

export default Form;
