import { buttonText, changePasswordContent } from "@/contents/bengali";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useChangePassword } from "./usePasswordChange";

const PasswordChange = ({
  userItem,
  state,
  setState,
  pswIsLoading,
}) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const {
    formTitle,
    userName,
    userPassword,
    userRole,
    submitBtn,
    loadingSubmitBtn,
  } = changePasswordContent;
  const { cancel } = buttonText;

  const { mutate, isLoading } = useChangePassword();

  useEffect(() => {
    setValue("userName", userItem?.userName);
    setValue("role", userItem?.role);
  }, [userItem]);

  const onSubmit = (data) => {
    mutate(data);
    reset();
    setState(false);
  };
  return state ? (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0  w-full h-full bg-black opacity-40"
        onClick={() => setState(false)}></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-600 text-2xl font-semibold">
                {formTitle}
              </h3>
            </div>
          </div>
          <div className="mt-2 px-2">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div>
                <label className="font-medium">{userName}</label>
                <fieldset disabled>
                  <input
                    type="text"
                    placeholder={userName}
                    {...register("userName")}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
                  />
                </fieldset>
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
                <label className="font-medium">{userRole}</label>
                <fieldset disabled>
                  <input
                    type="text"
                    placeholder={userRole}
                    {...register("role")}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
                  />
                </fieldset>
              </div>
              <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    disabled={pswIsLoading}
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-primary-600 rounded-md outline-none ring-offset-2 ring-primary-600 focus:ring-2 hover:bg-primary-500">
                    {pswIsLoading ? loadingSubmitBtn : submitBtn}
                  </button>
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border hover:bg-red-600 hover:text-white"
                  onClick={() => setState(false)}>
                  {cancel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PasswordChange;
