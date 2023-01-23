import React from "react";
import { useLoaderData } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";
const Checkout = () => {
  useTitle("Checkout");
  const { courseTitle, imageURL, category, regularPrice } = useLoaderData();
  const fakeOrder = (e) => {
    e.preventDefault();
    toast.success("Fake Order Placed");
  };
  return (
    <div className="bg-slate-100 dark:text-white dark:bg-slate-700">
      <div className="container mx-auto">
        <h1 className="flex justify-start items-center font-bold text-blue-600 dark:text-blue-400 text-md md:text-3xl py-3 pl-6">
          Checkout for {courseTitle}
        </h1>
      </div>
      <div className="container mx-auto p-12">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="w-[70%]">
            <h2 className="mb-4 font-bold md:text-xl text-gray-400 border-b border-gray-300">
              Shipping Address
            </h2>
            <form onSubmit={fakeOrder}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-sm  border text-slate-400 border-gray-300 rounded md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 mt-2"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 text-sm  border text-slate-400 border-gray-300 rounded md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 mt-2"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                >
                  Address
                </label>
                <textarea
                  className="w-full px-4 py-3 text-xs  border text-slate-400 border-gray-300 rounded md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 mt-2"
                  id="address"
                  placeholder="Address"
                  cols="20"
                  rows="4"
                  required
                ></textarea>
                <div className="flex justify-between items-center space-x-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="city"
                      className="mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm  border text-slate-400 border-gray-300 rounded md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 mt-2"
                      id="city"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="postcode"
                      className="mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm  border text-slate-400 border-gray-300 rounded md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 mt-2"
                      id="postcode"
                      placeholder="Post Code"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <label className="flex items-center text-sm group">
                  <input
                    type="checkbox"
                    className="w-5 h-5  border text-slate-400 border-gray-300 rounded md:text-sm outline-none focus:outline-none focus:ring-1  "
                    required
                  />
                  <span class="ml-2 text-sm text-slate-400 ">
                    Save this information for next time
                  </span>
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full px6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-700 rounded"
                >
                  Process
                </button>
              </div>
            </form>
          </div>
          <div className="w-[30%] pl-10 flex justify-center text-gray-400 dark:text-gray-200">
            <div>
              <h2 className="mb-8 font-bold md:text-xl border-b border-gray-300 ">
                Order Summary
              </h2>
              <div className="flex justify-between space-x-5 ">
                <img src={imageURL} alt={courseTitle} className="h-16" />
                <div className="w-3/5">
                  <h2 className="text-xl font-bold">{category}</h2>
                  <p className="text-sm">{courseTitle}</p>
                  <div className="flex">
                    <span className="text-green-600">Price:</span>
                    <span>${regularPrice}</span>
                  </div>
                </div>
                <div className="text-2xl">
                  <RxCross2></RxCross2>
                </div>
              </div>
              <h2 className="my-10 font-bold md:text-xl  ">Total items: 1</h2>
              <div className="flex items-center justify-around w-full py-4 text-sm font-semibold border-b border-gray-300 ">
                <span>Subtotal:</span>
                <span>{regularPrice}</span>
              </div>
              <div className="flex items-center justify-around w-full py-4 text-sm font-semibold border-b border-gray-300 ">
                <span>Shipping:</span>
                <span>{10}</span>
              </div>
              <div className="flex items-center justify-around w-full py-4 text-xl font-semibold ">
                <span>Total:</span>
                <span>{parseFloat(regularPrice) + 10}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
