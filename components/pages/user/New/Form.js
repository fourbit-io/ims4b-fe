import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { newUser } from "@/contents/bengali/user";
import { useNewUserData } from "./useNewUser";

const Form = () => {
  const {
    formTitle,
    userId,
    name,
    userName,
    userPassword,
    userRole,
    manager,
    shopkeeper,
    user,
    superAdmin,
    submitBtn,
    loadingSubmitBtn,
  } = newUser;
  const { register, handleSubmit, reset, setValue } = useForm();

  const { mutate, isLoading, isError, error } = useNewUserData();

  const onSubmit = (data) => {
    mutate(data);
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
            <label className="font-medium">{userId}</label>
            <input
              type="text"
              placeholder={userId}
              {...register("employeeId", { required: false })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{userName} *</label>
            <input
              type="text"
              placeholder={userName}
              {...register("userName", { required: true })}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{name} *</label>
            <input
              type="text"
              placeholder={name}
              {...register("name", { required: true })}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{userPassword} *</label>
            <input
              type="text"
              placeholder={userPassword}
              {...register("password", { required: true })}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{userRole} *</label>
            <select
              {...register("role")}
              defaultValue="MANAGER"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg">
              <option value="MANAGER">{manager}</option>
              <option value="SHOPKEEPER">{shopkeeper}</option>
              <option value="USER">{user}</option>
              <option value="SUPERADMIN">{superAdmin}</option>
            </select>
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
