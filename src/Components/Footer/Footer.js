import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="text-gray-600 bg-blue-100 dark:bg-slate-700">
        <div className="container mx-auto px-3 py-9 flex flex-col md:flex-row justify-center items-center space-y-3">
          <div className=" md:flex   md:flex-row md:justify-start  md:items-end space-x-3 w-80 sm:w-1/2 space-y-3">
            <div className="flex justify-start items-end space-x-3 ">
              <div className="w-50 sm:w-64">
                <label
                  htmlFor="subscribe"
                  className="leading-7 text-gray-600 dark:text-gray-200"
                >
                  placeholder
                </label>
                <input
                  type="text"
                  id="subscribe"
                  className="w-full  bg-slate-100 dark:bg-slate-700 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 dark:text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6  focus:outline-none hover:bg-indigo-600 rounded md:px-3">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-200 text-sm md:ml-6 md:mt-0 text-center md:text-left ">
              Bitters chicharrones fanny pack waistcoat green juice
            </p>
          </div>
          <div className="flex space-x-3 justify-center md:justify-end dark:text-white items-end w-1/2 text-lg ">
            <FaFacebook className="cursor-pointer"></FaFacebook>
            <FaTwitter className="cursor-pointer"></FaTwitter>
            <FaInstagram className="cursor-pointer"></FaInstagram>
            <FaLinkedin className="cursor-pointer"></FaLinkedin>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 dark:bg-slate-700">
        <div className="container mx-auto md:flex justify-between px-3 py-3 text-center text-gray-700 dark:text-gray-200 ">
          <p>© 2023 Emon Howlader</p>
          <p>Enamel pin tousled raclette tacos irony</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
