import React from "react";
import { login as benLogin } from "@/contents/bengali";

const Login = () => {
  const { title, emailPlaceholder, passPlaceholder, forgotPass, button } =
    benLogin;

    const login = () => {
      localStorage.setItem("access-token", "authenticated");
      window.location.replace("/");
    }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 md:bg-[rgba(0,0,0,0.5)]">
      <div className="max-w-full md:max-w-md w-full text-gray-600 px-4 md:p-8 rounded-md md:shadow-lg bg-white md:border-2">
        <div className="text-center">
          <img
            src="./images/fourbit-logo.png"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-600 text-2xl font-semibold">
              {title}
            </h3>
          </div>
        </div>
        <form onSubmit={(e) => {e.preventDefault(); login();}} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">{emailPlaceholder}</label>
            <input
              type="email"
              placeholder={emailPlaceholder}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">{passPlaceholder}</label>
            <input
              type="password"
              placeholder={passPlaceholder}
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-primary-600 hover:bg-primary-500 active:bg-primary-600 rounded-lg duration-150">
            {button}
          </button>
          <div className="text-center">
            <a href="javascript:void(0)" className="hover:text-primary-600">
              {forgotPass}
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
