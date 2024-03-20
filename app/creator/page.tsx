"use client"

import { Createlog } from "./action";

export default function Creator() {
  return (
    <>
      <div className="flex flex-col items-center my-5 w-full">
        <div className="w-full md:w-3/5 lg:w-3/5 bg-gray-700 p-5 min-h-80 rounded-lg shadow-lg">
          <div className="flex items-center mb-3">
            <h1 className="text-lg md:text-xl lg:text-2xl">
              Welcome to creator
            </h1>
          </div>
          <hr className="divide-solid dark:divide-white mb-7" />
          <div>
            <form action={Createlog} className="flex flex-col gap-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="title"
                  className="p-2 rounded-md text-white"
                  placeholder="Topic of today log"
                  required
                />
                <p className="text-white text-sm">Ex: Today was fun :3 :3</p>
              </div>
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="summary"
                  rows={2}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write a short description......"
                ></textarea>

                <p className="text-white text-sm">
                  A short summary for today work
                </p>
              </div>
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="discription"
                  rows={5}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="So what happen today"
                ></textarea>

                <p className="text-white text-sm">Write about your day</p>
              </div>
              <button
                type="submit"
                className="p-2 bg-green-600 rounded-lg shadow hover:bg-green-800"
              >
                Create the log for today
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
