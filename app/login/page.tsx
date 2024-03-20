"use client";

import { useFormState } from "react-dom";
import { Loginuser } from "./action";
import Errorlogin from "../components/error/error";

export default function Login() {
    const [state ,fromAction] = useFormState(Loginuser,{message:''})
  return (
    <>
      <div className="flex flex-col items-center mt-10 w-full">
        <div className="w-full md:w-3/5 lg:w-3/5 bg-gray-700 p-5 min-h-80 rounded-lg shadow-lg">
          <div className="flex items-center mb-3">
            <h1 className="text-lg md:text-xl lg:text-2xl">
              Login into creator
            </h1>
          </div>
          <hr className="divide-solid dark:divide-white mb-7" />
          {state.message && <Errorlogin state={state.message}/>}
          <div>
            <form action={fromAction} className="flex flex-col gap-5">
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  className="p-2 rounded-md text-white"
                  placeholder="Email address"
                  required
                />
                <p className="text-white text-sm">Ex: admin@gmail.com</p>
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  name="password"
                  className="p-2 rounded-md text-white"
                  placeholder="Password"
                  required
                />
                <p className="text-white text-sm">
                  Want more than 8 charactores
                </p>
              </div>
              <button
                type="submit"
                className="p-2 bg-green-600 rounded-lg shadow hover:bg-green-800"
              >
                Login in to creator
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
