import React from "react";
import useTitle from "../../Hooks/useTitle";

const Faq = () => {
  useTitle("Faq");
  return (
    <div>
      <section className="bg-slate-100 dark:bg-gray-800 dark:text-gray-100 py-9">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-2 text-2xl font-bold leading-none text-center sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="p-2 text-sm font-medium tracking-wider text-center ">
            The most common questions about how our business works and what can
            do for you.
          </p>
          <div className="md:flex justify-center mt-12">
            <div className="flex flex-col space-y-3  sm:px-8 lg:px-8   md:w-[48%]">
              <details className=" dark:text-white text-black">
                <summary className="py-2 outline-none font-semibold cursor-pointer bg-gray-200 dark:bg-slate-500 p-2 rounded-md">
                  Can I change the domain you give me?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details className=" dark:text-white text-black">
                <summary className="py-2 outline-none font-semibold cursor-pointer bg-gray-200 dark:bg-slate-500 p-2 rounded-md">
                  How many sites I can create at once?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details className=" dark:text-white text-black">
                <summary className="py-2 outline-none font-semibold cursor-pointer bg-gray-200 dark:bg-slate-500 p-2 rounded-md">
                  How can I communicate with you?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
            </div>
            <div className="flex flex-col space-y-3  sm:px-8 lg:px-8   md:w-[48%]">
              <details className=" dark:text-white text-black">
                <summary className="py-2 outline-none font-semibold cursor-pointer bg-gray-200 dark:bg-slate-500 p-2 rounded-md">
                  How Long is this site live?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details className=" dark:text-white text-black">
                <summary className="py-2 outline-none font-semibold cursor-pointer bg-gray-200 dark:bg-slate-500 p-2 rounded-md">
                  Can I install/upload anything I want on there?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
              <details className=" dark:text-white text-black">
                <summary className="py-2 outline-none font-semibold cursor-pointer bg-gray-200 dark:bg-slate-500 p-2 rounded-md">
                  How can I migrate to another site?{" "}
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
