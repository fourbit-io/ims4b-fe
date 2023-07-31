import { changePasswordContent } from "@/contents/bengali";
import Head from "next/head";
import BreadCrumb from "@/components/reusable/Breadcrumb";
import { useForm } from "react-hook-form";
import { useChangePassword } from "./usePasswordChange";

const ChangePassword = () => {
  const { register, handleSubmit, reset } = useForm();
  const {
    pageTitle,
    formTitle,
    oldPassword,
    newPassword,
    submitBtn,
    loadingSubmitBtn,
  } = changePasswordContent;

  const { mutate, isLoading } = useChangePassword();

  const onSubmit = (data) => {
    mutate(data);
    reset();
  };
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <BreadCrumb currentPage={pageTitle} />
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
              <label className="font-medium">{oldPassword} *</label>
              <input
                type="text"
                placeholder={oldPassword}
                {...register("oldPassword", { required: true })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">{newPassword} *</label>
              <input
                type="text"
                placeholder={newPassword}
                {...register("newPassword", { required: true })}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
              />
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
    </>
  );
};

export default ChangePassword;
