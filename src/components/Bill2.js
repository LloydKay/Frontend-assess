import React from "react";
import { Link } from "react-router-dom";

function Bill2() {
  return (
    <>
      <div className="  w-3/5 mx-auto h-screen">
        <div className="mt-10 sm:mt-0">
          <div className="flex flex-col mx-auto md:flex-row flex-wrap bg-white border-b  w-full rounded mt-4 justify-between">
            <span className="inline-block px-4 py-3 underline-offset-4 hover:bg-gray-100 cursor-pointer  ">
              Personal Info
            </span>
            <span className="inline-block px-4 py-3 hover:bg-gray-100 cursor-pointer ">
              Billing Info
            </span>
            <span className="inline-block px-4 py-3 hover:bg-gray-100 cursor-pointer border-b-4  border-orange-400 text-orange-500">
              Confirm Payment
            </span>
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6  ">
              <div className="flex justify-between  w-full bg-blue-600 p-7">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Item Name
                </h3>
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  ₦ Price
                </h3>
              </div>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b p-7">
                <div className="flex justify-between  w-full mb-8">
                  <p className="text-base leading-4 text-gray-800">
                    Data Science and Usability
                  </p>
                  <p className="text-base leading-4 text-gray-600">50,000.00</p>
                </div>

                <div className="flex justify-between items-center w-full ">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">0.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full border-2 p-7 rounded-lg">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  50,000.00
                </p>
              </div>
              <div className="px-4 py-3 bg-gray-50  sm:px-6">
                <Link to="/purchase">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Pay
                  </button>
                </Link>
                <button
                  type="button"
                  className=" ml-4 inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-900  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bill2;
