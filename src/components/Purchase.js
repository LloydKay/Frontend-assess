import React from "react";
import { Link } from "react-router-dom";

function Purchase() {
  return (
    <>
      <div className="relative  w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1">
          <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl p-8">
            <div className="p-6 ">
              <span className="mb-8 text-xs font-semibold tracking-widest text-green-600 shadow-lg text-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter  lg:text-3xl text-blue-900">
                Purchase Completed
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-gray-500 w-4/5 ">
                Pls check your email for details concerning this transaction
              </p>

              <Link to="/">
                <p className=" underline text-orange-400 mt-5">Return Home</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Purchase;
