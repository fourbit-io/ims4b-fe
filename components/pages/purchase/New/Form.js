import { useForm } from "react-hook-form";
import { newPurchase } from "@/contents/bengali/purchase";
import { useNewPurchaseData } from "./useNewPurchase";

const Form = () => {
  const {
    formTitle,
    date,
    purchaseTitle,
    remark,
    details,
    submitBtn,
    loadingSubmitBtn,
  } = newPurchase;
  const { register, handleSubmit, reset, setValue } = useForm();

  const { mutate, isLoading, isError, error } = useNewPurchaseData();

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
            <label className="font-medium">{purchaseTitle} *</label>
            <input
              type="text"
              placeholder={purchaseTitle}
              {...register("title", { required: true })}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
            <input
              type="hidden"
              {...register("status", { required: true })}
              value="PENDING"
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
            <label className="font-medium">{details}</label>
            <textarea
              rows={5}
              placeholder={details}
              {...register("description")}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"></textarea>
          </div>
          <div>
            <label className="font-medium">{remark}</label>
            <textarea
              rows={5}
              placeholder={remark}
              {...register("remark")}
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
