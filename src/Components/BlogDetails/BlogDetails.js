import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const BlogDetails = () => {
  useTitle("Blog Details");
  const { img, title, description } = useLoaderData();
  return (
    <div>
      <div className="p-4 w-full md:w-[60%] mx-auto ">
        <div className="border-2 rounded-lg h-full border-opacity-60 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              {title}
            </h2>
            <p className="leading-relaxed text-gray-400 dark:text-gray-200">
              {description}
            </p>

            <div className="flex justify-between items-center ">
              <Link
                to={`/blog/`}
                className=" text-white bg-indigo-600 hover:bg-indigo-700 transition-colors md:w-auto w-full inline-flex items-center rounded px-3 py-2 "
              >
                Back to Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
