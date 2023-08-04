import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { newProduct } from "@/contents/bengali/product";
import { useNewProductData } from "./useNewProduct";

const Form = () => {
  const {
    formTitle,
    date,
    productName,
    productUnit,
    productUnit1,
    productUnit2,
    productUnit3,
    productUnit4,
    productUnit5,
    productUnit6,
    productUnit7,
    productQty,
    vendorName,
    vendorAddress,
    vendorBillNumber,
    vendorInfo,
    productDetails,
    submitBtn,
    loadingSubmitBtn,
  } = newProduct;
  const { register, handleSubmit, reset, setValue } = useForm();

  const { mutate, isLoading, isError, error } = useNewProductData();

  const onSubmit = (data) => {
    const { date, ...rest } = data;
    mutate({ ...rest, date: new Date(date).toISOString() });
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
              {...register("name", { required: true })}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{productUnit}</label>
            <select
              {...register("unit")}
              defaultValue={productUnit1}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg">
              <option value={productUnit1}>{productUnit1}</option>
              <option value={productUnit2}>{productUnit2}</option>
              <option value={productUnit3}>{productUnit3}</option>
              <option value={productUnit4}>{productUnit4}</option>
              <option value={productUnit5}>{productUnit5}</option>
              <option value={productUnit6}>{productUnit6}</option>
              <option value={productUnit7}>{productUnit7}</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              placeholder={productQty}
              {...register("quantity", { required: true, valueAsNumber: true })}
              defaultValue={0}
              hidden
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{date}</label>
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              {...register("date")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{vendorName}</label>
            <input
              type="text"
              placeholder={vendorName}
              {...register("vendorName", { required: false })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{vendorAddress}</label>
            <input
              type="text"
              placeholder={vendorAddress}
              {...register("vendorAddress", { required: false })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{vendorBillNumber}</label>
            <input
              type="text"
              placeholder={vendorBillNumber}
              {...register("vendorBillNumber", { required: false })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{vendorInfo}</label>
            <textarea
              rows={5}
              placeholder={vendorInfo}
              {...register("vendorInfo")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"></textarea>
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
