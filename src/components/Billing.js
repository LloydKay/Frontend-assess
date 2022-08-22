import React from "react";
import { useNavigate } from "react-router-dom";

function Billing() {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate("/bill2");
  };

  return (
    <>
      <div className="  w-3/5 mx-auto h-screen">
        <div className="mt-10 sm:mt-0">
          <div className="mt-5 bg-gray-50 ">
            <p className="text-2xl"> Complete your Purchase</p>

            <div className="flex flex-col mx-auto md:flex-row flex-wrap bg-white border-b  w-full rounded mt-4 justify-between">
              <span className="inline-block px-4 py-3 underline-offset-4 hover:bg-gray-100 cursor-pointer  ">
                Personal Info
              </span>
              <span className="inline-block px-4 py-3 hover:bg-gray-100 cursor-pointer border-b-4 border-orange-400 text-orange-500">
                Billing Info
              </span>
              <span className="inline-block px-4 py-3 hover:bg-gray-100 cursor-pointer">
                Confirm Payment
              </span>
            </div>
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5  sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 ">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name on Card <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Card Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="card"
                        name="card"
                        autoComplete="card-type"
                        className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      >
                        <option>Visa</option>
                        <option>Mastercard</option>
                        <option>Verve</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Card Details <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Expiry Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50  sm:px-6">
                  <button
                    onClick={onClick}
                    className="inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                  <button
                    type="submit"
                    className=" ml-4 inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-900  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel Payment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;
