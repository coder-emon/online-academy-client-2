import React from "react";
import { FaArrowRight, FaRegComment, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, description, img } = blog;
  return (
    <div className="p-4 w-full md:w-1/4 ">
      <div className="border-2 rounded-lg h-full border-opacity-60 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-[223px] object-cover object-center"
        />
        <div className="p-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="leading-relaxed text-gray-400 dark:text-gray-200">
            {description.slice(0, 55)}...
          </p>

          <div className="flex justify-between items-center text-gray-400 dark:text-gray-200">
            <Link
              to={`/blog/${id}`}
              className="flex text-indigo-500 items-center gap-1"
            >
              Details <FaArrowRight></FaArrowRight>
            </Link>
            <div className="flex justify-between space-x-3">
              <span className="flex items-center ">
                <FaRegEye></FaRegEye>&nbsp;1.2K
              </span>
              <span className="flex items-center">
                <FaRegComment></FaRegComment>&nbsp;6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
