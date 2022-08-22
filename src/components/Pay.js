import React from "react";
import { useNavigate } from "react-router-dom";

function Pay() {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate("/bill");
  };
  return (
    <>
      <div className="  w-3/5 mx-auto h-screen">
        <p className="text-2xl"> Complete your Purchase</p>
        <div className=" grid-cols-3 gap-3">
          <div>
            <p>Personal Info</p>
          </div>
          <div>
            <p>Billing Info</p>
          </div>
          <div>
            <p>Confirm Payment</p>
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="">
            <p className="text-2xl"> Complete your Purchase</p>

            <div className="mt-5 bg-gray-50 ">
              <form>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5  sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 ">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>

                      <div className="col-span-6 ">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address 1
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address 2
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Local Government
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full px-5 py-3 text-base transition bg-transparent duration-500 ease-in-out transform  border border-blue-800 rounded-lg text-neutral-600  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        >
                          <option>Lagos</option>
                          <option>Oyo</option>
                          <option>Kano</option>
                        </select>
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
      </div>
    </>
  );
}

export default Pay;
