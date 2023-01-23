import React from "react";
import useTitle from "../../Hooks/useTitle";

const Contact = () => {
  useTitle("Contact");
  return (
    <div className="py-7 bg-slate-100 dark:bg-slate-700">
      <div className="flex justify-center mb-28">
        <h1 className="text-3xl font-bold py-4 px-7 text-slate-900 border-b-2 border-slate-900 mb-5">
          Get in Touch
        </h1>
      </div>
      <div className="flex items-center justify-between container mx-auto ">
        <div className="w-[65%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.080417625266!2d90.32993322204626!3d22.540919631726126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aacbccd57eaa51%3A0xe9b4deb6214ce1d9!2sBakergonj!5e0!3m2!1sen!2sbd!4v1674313775675!5m2!1sen!2sbd"
            className="w-full rounded-md grayscale dark:grayscale-0 "
            height="480"
          ></iframe>
        </div>
        <div className="w-[30%]">
          <div>
            <h2 className="mb-4 font-bold md:text-xl text-gray-500 dark:text-gray-200 border-b border-gray-300">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 dark:text-slate-200">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <form className="flex flex-col space-y-3">
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
                  htmlFor="message"
                  className="mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 text-xs  border text-slate-400 border-gray-300 rounded md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 mt-2 h-32 resize-none"
                  id="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full px6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-700 rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
